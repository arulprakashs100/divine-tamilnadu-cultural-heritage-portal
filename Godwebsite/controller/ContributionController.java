package com.templeweb.Godwebsite.controller;

import com.templeweb.Godwebsite.model.Contribution;
import com.templeweb.Godwebsite.repository.ContributionRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contributions")
public class ContributionController {

    private final ContributionRepository contributionRepository;

    public ContributionController(ContributionRepository contributionRepository) {
        this.contributionRepository = contributionRepository;
    }

    @GetMapping
    public List<Contribution> getAllContributions() {
        return contributionRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Contribution> createContribution(@RequestBody Contribution contrib) {
        contrib.setStatus("Pending");
        if (contrib.getDate() == null || contrib.getDate().isEmpty()) {
            contrib.setDate(new java.text.SimpleDateFormat("dd/MM/yyyy").format(new java.util.Date()));
        }
        Contribution saved = contributionRepository.save(contrib);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}/approve")
    public ResponseEntity<?> approveContribution(@PathVariable Long id) {
        Optional<Contribution> opt = contributionRepository.findById(id);
        if (opt.isPresent()) {
            Contribution c = opt.get();
            c.setStatus("Approved");
            contributionRepository.save(c);
            return ResponseEntity.ok("{\"message\":\"Approved\"}");
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/reject")
    public ResponseEntity<?> rejectContribution(@PathVariable Long id) {
        Optional<Contribution> opt = contributionRepository.findById(id);
        if (opt.isPresent()) {
            Contribution c = opt.get();
            c.setStatus("Rejected");
            contributionRepository.save(c);
            return ResponseEntity.ok("{\"message\":\"Rejected\"}");
        }
        return ResponseEntity.notFound().build();
    }
}
