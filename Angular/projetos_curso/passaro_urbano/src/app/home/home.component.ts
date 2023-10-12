import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { ofertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertaService]
})
export class HomeComponent implements OnInit {

  public oferta!: ofertaModel[];

  constructor(private ofertaService: OfertaService) {}

  ngOnInit(): void {
    // this.oferta = this.ofertaService.getOfertas();
    // console.log(this.oferta);

    this.ofertaService.getOfertas2()
      .then(
        (oferta: ofertaModel[]) => {this.oferta = oferta},
        (param: any) => {console.log(param)}
      );
  }

}
