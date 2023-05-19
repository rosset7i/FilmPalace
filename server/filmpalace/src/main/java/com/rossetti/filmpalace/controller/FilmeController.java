package com.rossetti.filmpalace.controller;

import com.rossetti.filmpalace.domain.Filme;
import com.rossetti.filmpalace.dto.EditOutput;
import com.rossetti.filmpalace.dto.FilmeOutput;
import com.rossetti.filmpalace.services.FilmeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/api/filmes")
public class FilmeController {

    private final FilmeService filmeService;

    @GetMapping
    public ResponseEntity<List<FilmeOutput>> getAllFilmes(){
        return ResponseEntity.ok(filmeService.getAllFilmes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FilmeOutput> getByFilmeId(@PathVariable UUID id){
        FilmeOutput filme = filmeService.getByFilmeId(id);

        if(filme == null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(filme);
    }

    @GetMapping("/edit")
    public ResponseEntity<EditOutput> getEditForm(){
        EditOutput editForm = filmeService.getEditForm();

        return ResponseEntity.ok().body(editForm);
    }

    @PostMapping
    public ResponseEntity createFilme(@RequestBody @Valid Filme createFilmeInput){
        return ResponseEntity.created(URI.create("/api/filmes"))
                .body(filmeService.createFilme(createFilmeInput));
    }

    @PutMapping
    public ResponseEntity updateFilme(@RequestBody @Valid Filme updateFilmeInput){
        return ResponseEntity.ok()
                .body(filmeService.updateFilme(updateFilmeInput));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteFilme(@PathVariable @Valid UUID id){
        return ResponseEntity.ok()
                .body(filmeService.deleteFilme(id));
    }

}
