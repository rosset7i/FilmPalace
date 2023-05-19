package com.rossetti.filmpalace.controller;

import com.rossetti.filmpalace.domain.Genero;
import com.rossetti.filmpalace.dto.GeneroOutput;
import com.rossetti.filmpalace.repository.GeneroRepository;
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
@RequestMapping("/api/generos")
public class GeneroController {

    private final GeneroRepository generoRepository;

    @GetMapping
    public ResponseEntity<List<GeneroOutput>> getAllGeneros(){
        return ResponseEntity.ok(Genero.convertToOutputList(generoRepository.findAll()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<GeneroOutput> getGeneroById(@PathVariable @Valid UUID id){
        Optional<Genero> genero = generoRepository.findById(id);

        if(genero.isPresent()){
            return ResponseEntity.ok(Genero.convertToOutput(genero.get()));
        }

        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity createGenero(@RequestBody @Valid Genero generoAtorInput){
        generoRepository.save(generoAtorInput);

        return ResponseEntity.created(URI.create("/api/generos")).build();
    }

    @PutMapping
    public ResponseEntity updateGenero(@RequestBody @Valid Genero updateGeneroInput){
        generoRepository.save(updateGeneroInput);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteGenero(@PathVariable @Valid UUID id){
        generoRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }
}
