package com.templeweb.Godwebsite.repository;

import com.templeweb.Godwebsite.model.Temple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TempleRepository extends JpaRepository<Temple, String> {
}
