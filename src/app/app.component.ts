import { Component } from "@angular/core";
import { ApiService } from "./api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  inpCantidad = 0;
  resultadoTokenizar = {};
  constructor(private readonly apiSvc: ApiService) {}

  public btnTokenizar(): void {
    console.log(this.inpCantidad);
    this.apiSvc.getTokenAmount(this.inpCantidad).subscribe(
      (data) => {
        console.log(data);
        this.resultadoTokenizar = data;
      },
      (error) => {
        alert("error");
        console.log(error);
      }
    );
  }
}
