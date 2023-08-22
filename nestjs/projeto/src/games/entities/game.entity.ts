import { Company } from 'src/companies/entities/company.entity';
import { Console } from 'src/consoles/entities/console.entity';

export class Game {
  id: string;
  name: string;
  describe: string;
  releaseDate: Date;
  website: string;
  company: Company;
  console: Console;
}
