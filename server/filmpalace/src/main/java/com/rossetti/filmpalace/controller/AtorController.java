package com.rossetti.filmpalace.controller;

import com.rossetti.filmpalace.domain.Ator;
import com.rossetti.filmpalace.dto.AtorOutput;
import com.rossetti.filmpalace.repository.AtorRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/api/atores")
public class AtorController {

    private final AtorRepository atorRepository;

    @GetMapping
    public ResponseEntity<List<AtorOutput>> getAllAtores(){
        return ResponseEntity.ok(Ator.convertToOutputList(atorRepository.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AtorOutput> getAtorById(@PathVariable @Valid UUID id){
        Optional<Ator> ator = atorRepository.findById(id);

        if(ator.isPresent()){
            return ResponseEntity.ok(Ator.convertToOutput(ator.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity createAtor(@RequestBody @Valid Ator createAtorInput){
        atorRepository.save(createAtorInput);

        return ResponseEntity.created(URI.create("/api/ator")).build();
    }

    @PutMapping
    public ResponseEntity updateAtor(@RequestBody @Valid Ator updateAtorInput){
        atorRepository.save(updateAtorInput);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCinema(@PathVariable @Valid UUID id){
        atorRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
