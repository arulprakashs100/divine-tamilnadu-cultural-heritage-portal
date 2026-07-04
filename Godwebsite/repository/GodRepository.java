package com.templeweb.Godwebsite.repository;

import com.templeweb.Godwebsite.model.God;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GodRepository extends JpaRepository<God, String> {
}
