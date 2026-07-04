package com.templeweb.Godwebsite.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "contributions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contribution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category; // 'God', 'Temple', or 'Festival'
    private String name;
    private String contributor;
    private String email;

    @Column(columnDefinition = "TEXT")
    private String legends;

    private String source;
    private String date;
    private String status; // 'Pending', 'Approved', 'Rejected'
}
