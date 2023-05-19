package com.rossetti.filmpalace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class CinemaOutput {
    @NotNull
    private UUID id;
    @NotNull
    private String nome;
}
