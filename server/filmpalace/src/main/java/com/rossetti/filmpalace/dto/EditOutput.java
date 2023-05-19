package com.rossetti.filmpalace.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EditOutput {
    @NotNull
    private List<GeneroOutput> generos;
    @NotNull
    private List<AtorOutput> atores;
    @NotNull
    private List<CinemaOutput> cinemas;
}
