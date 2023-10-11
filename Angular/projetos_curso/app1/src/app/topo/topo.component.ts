import { Component } from "@angular/core";

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  // template: `
  // <p>
  //   Esse é o componente topo
  // </p>
  // `
  styleUrls: ['./topo.component.css']
  // styles: ['.exemplo { color: red }']
})
export class TopoComponent {
  public titulo: string = 'Aprendendo inglês'
}
