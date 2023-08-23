import { Column, JoinTable, ManyToOne, PrimaryColumn } from 'typeorm';

export class Game {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  describe: string;

  @Column()
  releaseDate: Date;

  @Column()
  website: string;

  @JoinTable()
  company: Company;

  @JoinTable()
  console: ConsoleEntity;
}
