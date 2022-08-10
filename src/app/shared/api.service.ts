import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, pipe } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public url: string = "http://localhost:8000/api"
  constructor(public _http: HttpClient) {}

  loginEmployee(data: any) {
    return this._http.post<any>(`${this.url}/user/login`,data)
  }
}
