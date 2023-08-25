import { Consoles } from 'src/consoles/models/consoles.modules';
import { Developers } from 'src/developer/models/developers.modules';

export class GameEntity {
  name: string;
  describe: string;
  dataRelease: Date;
  website: string;
  developer: Developers;
  gender: string;
  urlCover: string;
  consoles: Consoles;
}
