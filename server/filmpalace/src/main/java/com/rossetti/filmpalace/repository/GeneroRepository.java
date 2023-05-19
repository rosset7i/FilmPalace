package com.rossetti.filmpalace.repository;

import com.rossetti.filmpalace.domain.Genero;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface GeneroRepository extends JpaRepository<Genero, UUID> {
}
