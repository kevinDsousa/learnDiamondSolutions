import { StatObject } from '../interfaces/StatObject'

export class Pokemon {
    constructor(
        private readonly _id: string,
        private readonly _name: string,
        private readonly _baseExperience: number,
        private readonly _abilities: Array<string>,
        private readonly _stats: Array<StatObject>
    ) { }

    /**
     * Get que devolve o nome do pokemon
     * @returns Retorna o nome do pokemon criado na instância
     */
    public getNamePokemon(): string {
        return this._name
    }

    /**
     * Função que retorna todas as habilidades listadas no Enum abilities que foi criado dentro da propriedade da classe Pokemon _abilities
     * @returns Retorna as habilidades dos pokemons sem os numeros posicionados
     */
    public getAbilities(): Array<string> {
        return this._abilities;
    }

    /**
     * Função que devolve os status do pokemon selecionado
     * @returns Retorna pre-formatado uma lista de valores com status do pokemon instânciado
     */
    public getStats(): Array<StatObject> {
        return this._stats;
    }
}