package com.templeweb.Godwebsite.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "temples")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Temple {

    @Id
    private String id; // 'meenakshi', 'brihadisvara', etc.

    private String name;
    private String god;
    private String district;
    private String state;
    private String location;
    
    @Column(length = 1000)
    private String intro;
    
    private String openingTime;
    private String closingTime;
    private String dressCode;
    private String image;
    private String rating;
    private String reviewsCount;

    @Column(columnDefinition = "TEXT")
    private String history;

    @Column(columnDefinition = "TEXT")
    private String architecture;

    @Column(columnDefinition = "TEXT")
    private String timelineJson; // JSON representation of historical events timeline

    @Column(columnDefinition = "TEXT")
    private String timingsDetails;

    @Column(columnDefinition = "TEXT")
    private String contactInfo;

    @Column(columnDefinition = "TEXT")
    private String accommodationsJson; // JSON list of accommodations & dining
}
