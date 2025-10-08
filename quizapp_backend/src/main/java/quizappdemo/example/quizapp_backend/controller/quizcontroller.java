package quizappdemo.example.quizapp_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import quizappdemo.example.quizapp_backend.list.quizlist;
import quizappdemo.example.quizapp_backend.service.quizservice;

import java.util.List;

@RestController
@RequestMapping("/quiz")
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

    @GetMapping("/catogery/{catogery}")
    public ResponseEntity<List<quizlist>> getquestionsbycatogery(@PathVariable String catogery)
    {
        return service.getallqustionsbycatogery(catogery);
    }

}

