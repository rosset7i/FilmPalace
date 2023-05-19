package com.rossetti.filmpalace.controller;

import com.rossetti.filmpalace.domain.Cinema;
import com.rossetti.filmpalace.dto.CinemaOutput;
import com.rossetti.filmpalace.repository.CinemaRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/api/cinemas")
public class CinemaController {

    private final CinemaRepository cinemaRepository;

    @GetMapping
    public ResponseEntity<List<CinemaOutput>> getAllCinemas(){
        return ResponseEntity.ok(Cinema.convertToOutputList(cinemaRepository.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<CinemaOutput> getCinemaById(@PathVariable @Valid UUID id){
        Optional<Cinema> cinema = cinemaRepository.findById(id);

        if(cinema.isPresent()){
            return ResponseEntity.ok(Cinema.convertToOutput(cinema.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity createCinemas(@RequestBody @Valid Cinema createCinemaInput){
        cinemaRepository.save(createCinemaInput);

        return ResponseEntity.created(URI.create("/api/cinemas")).build();
    }

    @PutMapping
    public ResponseEntity updateCinemas(@RequestBody @Valid Cinema updateCinemaInput){
        cinemaRepository.save(updateCinemaInput);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCinema(@PathVariable @Valid UUID id){
        cinemaRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
