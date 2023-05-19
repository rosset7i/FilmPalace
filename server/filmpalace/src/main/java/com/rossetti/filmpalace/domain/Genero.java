package com.rossetti.filmpalace.domain;

import com.rossetti.filmpalace.dto.GeneroOutput;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
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
public class Genero {

    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private String nome;

    @ManyToMany(mappedBy = "generos")
    private Set<Filme> filmes;

    public static GeneroOutput convertToOutput(Genero genero){
        return GeneroOutput.builder()
                .id(genero.getId())
                .nome(genero.getNome())
                .build();
    }

    public static List<GeneroOutput> convertToOutputList(List<Genero> generos){
        return generos.stream()
                .map(Genero::convertToOutput)
                .collect(Collectors.toList());
    }
}
