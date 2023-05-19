package com.rossetti.filmpalace.services;

import com.rossetti.filmpalace.domain.Ator;
import com.rossetti.filmpalace.domain.Cinema;
import com.rossetti.filmpalace.domain.Filme;
import com.rossetti.filmpalace.domain.Genero;
import com.rossetti.filmpalace.dto.*;
import com.rossetti.filmpalace.enums.FilmeResult;
import com.rossetti.filmpalace.repository.AtorRepository;
import com.rossetti.filmpalace.repository.CinemaRepository;
import com.rossetti.filmpalace.repository.FilmeRepository;
import com.rossetti.filmpalace.repository.GeneroRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@AllArgsConstructor
@Service
public class FilmeService {

    private final FilmeRepository filmeRepository;
    private final GeneroRepository generoRepository;
    private final CinemaRepository cinemaRepository;
    private final AtorRepository atorRepository;

    public List<FilmeOutput> getAllFilmes(){
        List<Filme> filmes = filmeRepository.findAll();

        return Filme.convertToOutputList(filmes);
    }

    public FilmeOutput getByFilmeId(UUID id){
        Optional<Filme> filme = filmeRepository.findById(id);

        return filme.map(Filme::convertToOutput).orElse(null);
    }

    public EditOutput getEditForm(){
        List<GeneroOutput> generos = Genero.convertToOutputList(generoRepository.findAll());
        List<CinemaOutput> cinemas = Cinema.convertToOutputList(cinemaRepository.findAll());
        List<AtorOutput> atores = Ator.convertToOutputList(atorRepository.findAll());

        return EditOutput.builder()
                .atores(atores)
                .cinemas(cinemas)
                .generos(generos)
                .build();
    }


    public FilmeResult createFilme(Filme createFilme){
        filmeRepository.save(createFilme);

        return FilmeResult.OK;
    }

    public FilmeResult updateFilme(Filme updateFilme){
        filmeRepository.save(updateFilme);

        return FilmeResult.OK;
    }

    public FilmeResult deleteFilme(UUID filmeId){
        filmeRepository.deleteById(filmeId);

        return FilmeResult.OK;
    }


}
