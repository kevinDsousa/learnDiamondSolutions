export class Filmes {
    constructor(
        private _adult: boolean,
        private _backdrop_path: string,
        private _id: string,
        private _original_language: string,
        private _original_title: string,
        private _overview: string,
        private _popularity: number,
        private _poster_path: string,
        private _release_date: Date,
        private _title: string,
        private _video: boolean,
        private _vote_average: number,
        private _vote_count: number
    ) {}

    /**
     * Obtém se o filme é adequado para adultos.
     * @returns `true` se o filme for para adultos, caso contrário, `false`.
     */
    public get adult(): boolean {
        return this._adult;
    }

    /**
     * Obtém o caminho do plano de fundo do filme.
     * @returns O caminho do plano de fundo do filme.
     */
    public get backdrop_path(): string {
        return this._backdrop_path;
    }

    /**
     * Obtém o ID do filme.
     * @returns O ID do filme.
     */
    public get id(): string {
        return this._id;
    }

    /**
     * Obtém o idioma original do filme.
     * @returns O idioma original do filme.
     */
    public get original_language(): string {
        return this._original_language;
    }

    /**
     * Obtém o título original do filme.
     * @returns O título original do filme.
     */
    public get original_title(): string {
        return this._original_title;
    }

    /**
     * Obtém a visão geral do filme.
     * @returns A visão geral do filme.
     */
    public get overview(): string {
        return this._overview;
    }

    /**
     * Obtém a popularidade do filme.
     * @returns A popularidade do filme.
     */
    public get popularity(): number {
        return this._popularity;
    }

    /**
     * Obtém o caminho do pôster do filme.
     * @returns O caminho do pôster do filme.
     */
    public get poster_path(): string {
        return this._poster_path;
    }

    /**
     * Obtém a data de lançamento do filme.
     * @returns A data de lançamento do filme.
     */
    public get release_date(): Date {
        return this._release_date;
    }

    /**
     * Obtém o título do filme.
     * @returns O título do filme.
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Obtém se o filme possui vídeo.
     * @returns `true` se o filme possuir vídeo, caso contrário, `false`.
     */
    public get video(): boolean {
        return this._video;
    }

    /**
     * Obtém a média de votos para o filme.
     * @returns A média de votos para o filme.
     */
    public get vote_average(): number {
        return this._vote_average;
    }

    /**
     * Obtém o número de votos para o filme.
     * @returns O número de votos para o filme.
     */
    public get vote_count(): number {
        return this._vote_count;
    }
}
