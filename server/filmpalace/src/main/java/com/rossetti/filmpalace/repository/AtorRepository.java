package com.rossetti.filmpalace.repository;

import com.rossetti.filmpalace.domain.Ator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface AtorRepository extends JpaRepository<Ator, UUID> {
}
