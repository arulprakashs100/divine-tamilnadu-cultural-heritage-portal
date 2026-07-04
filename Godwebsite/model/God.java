package com.templeweb.Godwebsite.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "gods")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class God {

    @Id
    private String id; // 'shiva', 'murugan', etc.

    private String name;
    private String category;
    
    @Column(length = 1000)
    private String intro;
    
    private String weapons;
    private String vehicle; // Maps to vahana
    private String consort;
    private String children;
    private String image;
    private String rating;

    @Column(columnDefinition = "TEXT")
    private String mythology;

    @Column(columnDefinition = "TEXT")
    private String symbolism;

    @Column(columnDefinition = "TEXT")
    private String mantrasJson; // Stores JSON representation of mantras list
}
