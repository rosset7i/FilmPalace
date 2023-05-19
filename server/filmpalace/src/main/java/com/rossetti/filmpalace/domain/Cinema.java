package com.rossetti.filmpalace.domain;

import com.rossetti.filmpalace.dto.CinemaOutput;
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
public class Cinema {

    @Id
    @GeneratedValue
    private UUID id;

    @NotEmpty
    private String nome;

    @ManyToMany(mappedBy = "cinemas")
    private Set<Filme> filmes;

    public static CinemaOutput convertToOutput(Cinema cinema){
        return CinemaOutput.builder()
                .id(cinema.getId())
                .nome(cinema.getNome())
                .build();
    }

    public static List<CinemaOutput> convertToOutputList(List<Cinema> cinemas){
        return cinemas.stream()
                .map(Cinema::convertToOutput)
                .collect(Collectors.toList());
    }
}
