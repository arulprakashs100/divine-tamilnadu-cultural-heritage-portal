package com.templeweb.Godwebsite.controller;

import com.templeweb.Godwebsite.model.User;
import com.templeweb.Godwebsite.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("{\"message\":\"Email ID is already registered!\"}");
        }
        
        // Save user to database
        User saved = userRepository.save(user);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        // Administrative hardcoded bypass
        if ("admin@divinetamilnadu.org".equals(req.email) && "admin123".equals(req.password)) {
            User adminUser = new User();
            adminUser.setName(req.name != null && !req.name.isEmpty() ? req.name : "System Administrator");
            adminUser.setEmail(req.email);
            adminUser.setRole("admin");
            return ResponseEntity.ok(adminUser);
        }

        // Try finding in database
        Optional<User> opt = userRepository.findByEmail(req.email);
        if (opt.isPresent()) {
            User user = opt.get();
            if (user.getPassword().equals(req.password)) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(401).body("{\"message\":\"Invalid password!\"}");
            }
        }

        // Auto-register fallback for convenience as per frontend mockup behavior
        User newUser = new User();
        newUser.setName(req.name != null && !req.name.isEmpty() ? req.name : "Devotee User");
        newUser.setEmail(req.email);
        newUser.setPassword(req.password);
        newUser.setRole("user");
        User saved = userRepository.save(newUser);
        return ResponseEntity.ok(saved);
    }

    public static class LoginRequest {
        public String name;
        public String email;
        public String password;
    }
}
