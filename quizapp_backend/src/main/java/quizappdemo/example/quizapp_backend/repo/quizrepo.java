package quizappdemo.example.quizapp_backend.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import quizappdemo.example.quizapp_backend.list.quizlist;

import java.util.List;

@Repository
public interface quizrepo extends JpaRepository<quizlist, Integer> {

    List<quizlist> findByCategory(String category);

    @Query("SELECT q.answer FROM quizlist q WHERE q.id = :id")
    String findAnswerById(@Param("id") int id);

    @Query("SELECT q.question FROM quizlist q WHERE q.id = :id")
    String findQuestionById(@Param("id") int id);

    List<quizlist> findByQuestionContainingIgnoreCaseOrCategoryContainingIgnoreCase(
            String question, String category
    );
}
