import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  inpCantidad = 0;
  resultadoTokenizar = {};
  constructor() {}

  public btnTokenizar(): void {
    console.log(this.inpCantidad);
  }
}
