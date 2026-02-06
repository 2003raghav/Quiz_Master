package quizappdemo.example.quizapp_backend.service;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final WebClient webClient;
    private final Gson gson;

    // ✅ Using the correct model: gemini-2.5-flash
    private static final String GEMINI_API_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    public GeminiService() {
        this.webClient = WebClient.builder().build();
        this.gson = new Gson();
    }

    public String generateExplanation(String question, String selectedAnswer,
                                      String correctAnswer, boolean isCorrect) {

        System.out.println("✅ Generating AI explanation using Gemini 2.5 Flash...");

        try {
            String prompt = buildPrompt(question, selectedAnswer, correctAnswer, isCorrect);
            JsonObject requestBody = buildRequestBody(prompt);

            String fullUrl = GEMINI_API_URL + "?key=" + apiKey;

            String response = webClient.post()
                    .uri(fullUrl)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody.toString())
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            String explanation = extractTextFromResponse(response);
            System.out.println("✅ AI explanation generated successfully!");
            return explanation;

        } catch (WebClientResponseException e) {
            System.err.println("❌ Gemini API Error!");
            System.err.println("Status: " + e.getStatusCode());
            System.err.println("Response: " + e.getResponseBodyAsString());
            return getFallbackExplanation(isCorrect, correctAnswer);

        } catch (Exception e) {
            System.err.println("❌ Unexpected error:");
            e.printStackTrace();
            return getFallbackExplanation(isCorrect, correctAnswer);
        }
    }

    private String buildPrompt(String question, String selectedAnswer,
                               String correctAnswer, boolean isCorrect) {
        if (isCorrect) {
            return String.format(
                    "Question: %s\n" +
                            "User's answer: %s (CORRECT)\n\n" +
                            "Provide a brief, encouraging explanation (2-3 sentences) explaining why this answer is correct. " +
                            "Be educational and supportive.",
                    question, selectedAnswer
            );
        } else {
            return String.format(
                    "Question: %s\n" +
                            "User's answer: %s (INCORRECT)\n" +
                            "Correct answer: %s\n\n" +
                            "Provide a brief, helpful explanation (2-3 sentences) explaining why the correct answer is right " +
                            "and what the user might have misunderstood. Be educational and encouraging.",
                    question, selectedAnswer, correctAnswer
            );
        }
    }

    private JsonObject buildRequestBody(String prompt) {
        JsonObject requestBody = new JsonObject();

        JsonArray contents = new JsonArray();
        JsonObject content = new JsonObject();

        JsonArray parts = new JsonArray();
        JsonObject part = new JsonObject();
        part.addProperty("text", prompt);
        parts.add(part);

        content.add("parts", parts);
        contents.add(content);

        requestBody.add("contents", contents);

        return requestBody;
    }

    private String extractTextFromResponse(String response) {
        try {
            JsonObject jsonResponse = gson.fromJson(response, JsonObject.class);

            return jsonResponse
                    .getAsJsonArray("candidates")
                    .get(0).getAsJsonObject()
                    .getAsJsonObject("content")
                    .getAsJsonArray("parts")
                    .get(0).getAsJsonObject()
                    .get("text").getAsString();

        } catch (Exception e) {
            System.err.println("❌ Error parsing Gemini response");
            e.printStackTrace();
            return "Unable to generate explanation at this time.";
        }
    }

    private String getFallbackExplanation(boolean isCorrect, String correctAnswer) {
        if (isCorrect) {
            return "Great job! You got it right. ✅";
        } else {
            return "That's incorrect. The correct answer is: " + correctAnswer + ". Keep practicing! 💪";
        }
    }
}