package com.templeweb.Godwebsite.controller;

import com.templeweb.Godwebsite.model.God;
import com.templeweb.Godwebsite.repository.GodRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gods")
public class GodController {

    private final GodRepository godRepository;

    public GodController(GodRepository godRepository) {
        this.godRepository = godRepository;
    }

    @GetMapping
    public List<God> getAllGods() {
        return godRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<God> getGodById(@PathVariable String id) {
        return godRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
