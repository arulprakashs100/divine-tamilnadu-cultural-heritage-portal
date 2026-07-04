package com.templeweb.Godwebsite.controller;

import com.templeweb.Godwebsite.model.Temple;
import com.templeweb.Godwebsite.repository.TempleRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/temples")
public class TempleController {

    private final TempleRepository templeRepository;

    public TempleController(TempleRepository templeRepository) {
        this.templeRepository = templeRepository;
    }

    @GetMapping
    public List<Temple> getAllTemples() {
        return templeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Temple> getTempleById(@PathVariable String id) {
        return templeRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
