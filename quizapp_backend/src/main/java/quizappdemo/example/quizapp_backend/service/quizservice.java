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

    public ResponseEntity<List<quizlist>> getallqustionsbycatogery(String catogery) {
        try {
            return new ResponseEntity<>(repo.findByCatogery(catogery), HttpStatus.OK);
        }catch (Exception e)
        {
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
    }
}

