package com.rossetti.filmpalace.domain;

import com.rossetti.filmpalace.dto.FilmeOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Entity
@Table
public class Filme {

    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private String nome;

    @NotNull
    private Boolean noCinema;

    @NotNull
    private LocalDate dataDeLancamento;

    @NotNull
    private String foto;

    @ManyToMany
    private Set<Genero> generos;

    @ManyToMany
    private Set<Ator> atores;

    @ManyToMany
    private Set<Cinema> cinemas;

    public static FilmeOutput convertToOutput(Filme filme){
        return FilmeOutput.builder()
                .id(filme.getId())
                .nome(filme.getNome())
                .noCinema(filme.getNoCinema())
                .dataDeLancamento(filme.getDataDeLancamento())
                .foto(filme.getFoto())
                .generos(filme.getGeneros().stream()
                        .map(Genero::convertToOutput)
                        .collect(Collectors.toList()))
                .atores(filme.getAtores().stream()
                        .map(Ator::convertToOutput)
                        .collect(Collectors.toList()))
                .cinemas(filme.getCinemas().stream()
                        .map(Cinema::convertToOutput)
                        .collect(Collectors.toList()))
                .build();
    }

    public static List<FilmeOutput> convertToOutputList(List<Filme> filmes){
        return filmes.stream()
                .map(Filme::convertToOutput)
                .collect(Collectors.toList());
    }

}
