package quizappdemo.example.quizapp_backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import quizappdemo.example.quizapp_backend.list.quizlist;
import quizappdemo.example.quizapp_backend.repo.quizrepo;

import java.util.ArrayList;
import java.util.List;

@Service
public class quizservice {

    @Autowired
    quizrepo repo;

    public ResponseEntity<List<quizlist>> getallqustions() {
        try {
            return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
        }catch (Exception e)
        {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<List<quizlist>> getallqustionsbycatogery(String category) {
        try {
            return new ResponseEntity<>(repo.findByCategory(category), HttpStatus.OK);
        }catch (Exception e)
        {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<String> getanswer(int id) {
         String answer = repo.findanswerById(id);

         if(answer == null)
         {
             return  ResponseEntity
                     .status(HttpStatus.NOT_FOUND)
                     .body("Answer not found");

         }
        return ResponseEntity.ok(answer);
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

