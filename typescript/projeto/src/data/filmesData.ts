import { Filmes } from '../models/filmes';

export const filmesData = [
    new Filmes(
        true,
        "/path/to/backdrop.jpg",
        "123456",
        "en",
        "Original Title",
        "Overview of the movie",
        7.5,
        "/path/to/poster.jpg",
        new Date("2023-08-03"),
        "Title of the movie",
        false,
        8.2,
        1200
    ),
    new Filmes(
        false,
        "/path/to/backdrop2.jpg",
        "789012",
        "fr",
        "French Title",
        "Another overview here",
        6.8,
        "/path/to/poster2.jpg",
        new Date("2023-07-20"),
        "French Movie",
        true,
        7.0,
        850
    ),
    // Adicione mais filmes aqui...
    new Filmes(
        true,
        "/path/to/backdrop3.jpg",
        "345678",
        "es",
        "Título en Español",
        "Resumen de la película en español",
        8.0,
        "/path/to/poster3.jpg",
        new Date("2023-09-10"),
        "Película en Español",
        false,
        9.1,
        1500
    ),
    new Filmes(
        false,
        "/path/to/backdrop4.jpg",
        "567890",
        "de",
        "Deutscher Titel",
        "Übersicht des Films auf Deutsch",
        7.2,
        "/path/to/poster4.jpg",
        new Date("2023-06-15"),
        "Deutscher Film",
        true,
        6.5,
        950
    ),
    new Filmes(
        true,
        "/path/to/backdrop5.jpg",
        "901234",
        "it",
        "Titolo in Italiano",
        "Panoramica del film in italiano",
        6.4,
        "/path/to/poster5.jpg",
        new Date("2023-10-25"),
        "Film in Italiano",
        false,
        7.8,
        1100
    )
];
