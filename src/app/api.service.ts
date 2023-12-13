import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getTokenAmount(amount: number): Observable<any> {
    const apiUrl =
      "https://gateway-154.netpaydev.com/gateway-ecommerce/v3/token/amount";
    const options = {
      headers: new HttpHeaders({
        accept: "application/json",
        Authorization:
          "sk_netpay_cdsZwtMsIFgxgomPXFmMBmjZeuznRogQVewMzbbqrlJkW",
        "Content-Type": "application/json",
      }),
    };
    const requestBody = { amount: amount.toString() };

    return this.http.post(apiUrl, requestBody, options);
  }
}
