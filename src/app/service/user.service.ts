import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../interface/user.interface";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = "https://hwx9kfpv80.execute-api.us-east-1.amazonaws.com/dev"
  constructor(private http: HttpClient) { }

  /**
   * @description obtiene la data del usuario
   *
   * @param userNit {string} userNit con el que obtenemos la informacion
   *
   * @return retorna la data del usuario
   */
  public getUser(userNit: string): Observable<User> {
    return this.http.get<User>(this.url + "?nit=" + userNit)
  }

}
