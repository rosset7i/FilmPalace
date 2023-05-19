package com.rossetti.filmpalace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class FilmeOutput {
    @NotNull
    private UUID id;
    @NotNull
    private String nome;
    @NotNull
    private Boolean noCinema;
    @NotNull
    private LocalDate dataDeLancamento;
    @NotNull
    private String foto;
    @NotNull
    private List<GeneroOutput> generos;
    @NotNull
    private List<AtorOutput> atores;
    @NotNull
    private List<CinemaOutput> cinemas;
}
