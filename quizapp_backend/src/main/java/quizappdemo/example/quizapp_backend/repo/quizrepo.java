package quizappdemo.example.quizapp_backend.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import quizappdemo.example.quizapp_backend.list.quizlist;

import java.util.List;

@Repository
public interface quizrepo extends JpaRepository<quizlist, Integer> {
    List<quizlist> findByCatogery(String catogery);
}
