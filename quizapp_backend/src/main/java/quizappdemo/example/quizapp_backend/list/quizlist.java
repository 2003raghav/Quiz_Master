package quizappdemo.example.quizapp_backend.list;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "quizlist")
public class quizlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String question;
    private String option1;
    private String option2;
    private String option3;
    private String option4;
    private String catogery;
    private String answer;

}
