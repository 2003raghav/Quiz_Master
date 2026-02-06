package quizappdemo.example.quizapp_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import quizappdemo.example.quizapp_backend.DTO.AnswerCheckRequest;
import quizappdemo.example.quizapp_backend.DTO.AnswerCheckResponse;
import quizappdemo.example.quizapp_backend.list.quizlist;
import quizappdemo.example.quizapp_backend.repo.quizrepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class quizservice {

    @Autowired
    quizrepo repo;

    @Autowired
    GeminiService geminiService;

    public ResponseEntity<List<quizlist>> getallqustions() {
        try {
            return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<List<quizlist>> getallqustionsbycatogery(String category) {
        try {
            return new ResponseEntity<>(repo.findByCategory(category), HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> getanswer(int id) {
        String answer = repo.findAnswerById(id);

        if(answer == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Answer not found");
        }
        return ResponseEntity.ok(answer);
    }

    // NEW METHOD: Check answer with AI explanation
    public ResponseEntity<AnswerCheckResponse> checkAnswerWithExplanation(AnswerCheckRequest request) {
        try {
            String correctAnswer = repo.findAnswerById(request.getQuestionId());
            String question = repo.findQuestionById(request.getQuestionId());

            if (correctAnswer == null || question == null) {
                return ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .body(null);
            }

            // ✅ DEBUG: Print values to see what's happening
            System.out.println("=== ANSWER CHECK DEBUG ===");
            System.out.println("Question: " + question);
            System.out.println("Selected Answer: '" + request.getSelectedAnswer() + "'");
            System.out.println("Correct Answer: '" + correctAnswer + "'");

            // ✅ FIX: Proper comparison with trimming
            boolean isCorrect = correctAnswer.trim().equalsIgnoreCase(request.getSelectedAnswer().trim());

            System.out.println("Is Correct: " + isCorrect);
            System.out.println("========================");

            // Generate AI explanation
            String explanation = geminiService.generateExplanation(
                    question,
                    request.getSelectedAnswer(),
                    correctAnswer,
                    isCorrect
            );

            AnswerCheckResponse response = new AnswerCheckResponse();
            response.setCorrect(isCorrect);  // ✅ Make sure this matches the boolean name
            response.setCorrectAnswer(correctAnswer);
            response.setExplanation(explanation);
            response.setQuestion(question);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
    public ResponseEntity<?> searchQuiz(String keyword) {
        if (keyword == null || keyword.trim().isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Search keyword must not be empty");
        }

        List<quizlist> result =
                repo.findByQuestionContainingIgnoreCaseOrCategoryContainingIgnoreCase(
                        keyword, keyword
                );

        if (result.isEmpty()) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("No quiz found for: " + keyword);
        }

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(result);
    }
}