import { Pais } from '../models/pais';

const paisData = [
    new Pais(
        {
            common: "Brazil",
            official: "Federative Republic of Brazil",
            nativeName: {
                por: {
                    official: "República Federativa do Brasil",
                    common: "Brasil",
                }
            }
        },
        true,
        true,
        "Brasília",
        "Americas",
        "South America",
        ["Portuguese"],
        "-14.235004, -51.92528",
        ["ARG", "BOL", "COL"],
        8515767,
        213993437,
        ["UTC-02:00", "UTC-03:00", "UTC-04:00", "UTC-05:00"],
        {
            svg: "https://restcountries.com/data/bra.svg",
            png: "https://restcountries.com/data/bra.png"
        }
    ),
    new Pais(
        {
            common: "Fictionland",
            official: "United Fictional Republic",
            nativeName: {
                eng: {
                    official: "United Fictional Republic",
                    common: "Fictionland",
                }
            }
        },
        true,
        true,
        "Imaginaria",
        "Fictional World",
        "Dreamland",
        ["Fictionese"],
        "42.123456, -78.987654",
        [],
        987654321,
        12345678,
        ["UTC+00:00"],
        {
            svg: "https://example.com/flags/fiction.svg",
            png: "https://example.com/flags/fiction.png"
        }
    ),
];

export { paisData };
