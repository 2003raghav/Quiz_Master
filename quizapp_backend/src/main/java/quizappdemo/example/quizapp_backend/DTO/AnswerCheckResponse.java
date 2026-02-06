package quizappdemo.example.quizapp_backend.DTO;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AnswerCheckResponse {
    @JsonProperty("isCorrect")  // ✅ Force the JSON field name
    private boolean correct;

    private String correctAnswer;
    private String explanation;
    private String question;

    public AnswerCheckResponse() {
    }

    public AnswerCheckResponse(boolean correct, String correctAnswer,
                               String explanation, String question) {
        this.correct = correct;
        this.correctAnswer = correctAnswer;
        this.explanation = explanation;
        this.question = question;
    }

    @JsonProperty("isCorrect")  // ✅ Force the JSON field name
    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}