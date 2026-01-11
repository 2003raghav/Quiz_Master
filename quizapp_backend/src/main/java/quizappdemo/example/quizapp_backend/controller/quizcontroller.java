package quizappdemo.example.quizapp_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import quizappdemo.example.quizapp_backend.list.quizlist;
import quizappdemo.example.quizapp_backend.service.quizservice;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin
public class quizcontroller {

    @Autowired
    quizservice service;

    @GetMapping("/hi")
    public String greet()
    {
        return "Hi,Welcome to quiz app";
    }
    @GetMapping("/allquestions")
    public ResponseEntity<List<quizlist>> getallquestions()
    {
        return service.getallqustions();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<quizlist>> getquestionsbycatogery(@PathVariable String category)
    {
        return service.getallqustionsbycatogery(category);
    }

    @GetMapping("/answer/{id}")
    public ResponseEntity<String> getanswer(@PathVariable int id){
        return service.getanswer(id);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchQuiz(@RequestParam String keyword) {
        return service.searchQuiz(keyword);
    }
}

