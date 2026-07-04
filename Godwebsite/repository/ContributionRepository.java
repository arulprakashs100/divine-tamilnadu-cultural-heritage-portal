package com.templeweb.Godwebsite.repository;

import com.templeweb.Godwebsite.model.Contribution;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContributionRepository extends JpaRepository<Contribution, Long> {
}
