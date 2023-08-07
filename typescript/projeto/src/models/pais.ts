export class Pais {
    constructor(
        private _name: object,
        private _independent: boolean,
        private _unMember: boolean,
        private _capital: string,
        private _region: string,
        private _subregion: string,
        private _languages: Array<string>,
        private _latlng: string,
        private _borders: Array<string>,
        private _area: number,
        private _population: number,
        private _timezones: Array<string>,
        private _flags: Object
    ) {}

    /**
     * Obtém o nome do país.
     * @returns O nome do país.
     */
    public get name(): object {
        return this._name;
    }

    /**
     * Verifica se o país é independente.
     * @returns `true` se o país for independente, caso contrário, `false`.
     */
    public get independent(): boolean {
        return this._independent;
    }

    /**
     * Verifica se o país é membro das Nações Unidas.
     * @returns `true` se o país for membro das Nações Unidas, caso contrário, `false`.
     */
    public get unMember(): boolean {
        return this._unMember;
    }

    /**
     * Obtém a capital do país.
     * @returns A capital do país.
     */
    public get capital(): string {
        return this._capital;
    }

    /**
     * Obtém a região do país.
     * @returns A região do país.
     */
    public get region(): string {
        return this._region;
    }

    /**
     * Obtém a sub-região do país.
     * @returns A sub-região do país.
     */
    public get subregion(): string {
        return this._subregion;
    }

    /**
     * Obtém as línguas faladas no país.
     * @returns As línguas faladas no país.
     */
    public get languages(): Array<string> {
        return this._languages;
    }

    /**
     * Obtém as coordenadas de latitude e longitude do país.
     * @returns As coordenadas de latitude e longitude do país.
     */
    public get latlng(): string {
        return this._latlng;
    }

    /**
     * Obtém os países vizinhos do país.
     * @returns Os países vizinhos do país.
     */
    public get borders(): Array<string> {
        return this._borders;
    }

    /**
     * Obtém a área do país.
     * @returns A área do país.
     */
    public get area(): number {
        return this._area;
    }

    /**
     * Obtém a população do país.
     * @returns A população do país.
     */
    public get population(): number {
        return this._population;
    }

    /**
     * Obtém os fusos horários do país.
     * @returns Os fusos horários do país.
     */
    public get timezones(): Array<string> {
        return this._timezones;
    }

    /**
     * Obtém as bandeiras do país.
     * @returns As bandeiras do país.
     */
    public get flags(): Object {
        return this._flags;
    }
}
