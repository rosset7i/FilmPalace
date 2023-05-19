package com.rossetti.filmpalace.domain;

import com.rossetti.filmpalace.dto.AtorOutput;
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
public class Ator {

    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private String nome;

    @NotNull
    private LocalDate dataDeNascimento;

    @ManyToMany(mappedBy = "atores")
    private Set<Filme> filmes;

    public static AtorOutput convertToOutput(Ator ator){
        return AtorOutput.builder()
                .id(ator.getId())
                .nome(ator.getNome())
                .dataDeNascimento(ator.getDataDeNascimento())
                .build();
    }

    public static List<AtorOutput> convertToOutputList(List<Ator> atores){
        return atores.stream()
                .map(Ator::convertToOutput)
                .collect(Collectors.toList());
    }
}
