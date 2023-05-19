package com.rossetti.filmpalace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class AtorOutput {
    @NotNull
    private UUID id;
    @NotNull
    private String nome;
    @NotNull
    private LocalDate dataDeNascimento;
}
