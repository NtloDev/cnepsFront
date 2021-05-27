import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Agenda} from "../Models/agenda.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SecretaireService {
  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  // tslint:disable-next-line:typedef
  addArrivee(data: FormData) {
    console.log(data);
    return this.http.post( `${ this.API_URL }/secretaire/CourrierArrivee`, data)
      .pipe ( map (reponse => {
        console.log(reponse);
        return reponse;
      })) ;
  }$
  // tslint:disable-next-line:typedef
  addDepart(data: FormData) {
    console.log(data);
    return this.http.post( `${ this.API_URL }/secretaire/CourrierDepart`, data)
      .pipe ( map (reponse => {
        console.log(reponse);
        return reponse;
      })) ;
  }
  // tslint:disable-next-line:typedef
  addAudience(id: any, data: any) {
    console.log(data);
    return this.http.put<any>( `${ this.API_URL }/secretaire/agenda/${id}`, data)
      .pipe ( map (reponse => {
        console.log(reponse);
        alert('yes') ;
        return reponse;
      })) ;
  }
  // tslint:disable-next-line:typedef
  addOrdre(data: any) {
    console.log(data);
    return this.http.post<any>( `${ this.API_URL }/secretaire/ordres`, data)
      .pipe ( map (reponse => {
        console.log(reponse);
        return reponse;
      })) ;
  }
  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<any>(`${this.API_URL}/secretaire/CourrierArrivee`);
  }
  // tslint:disable-next-line:typedef
  getAllOrdres() {
    return this.http.get<any>(`${this.API_URL}/secretaire/ordres`);
  }
  // tslint:disable-next-line:typedef
  getAllDeparts() {
    return this.http.get<any>(`${this.API_URL}/secretaire/CourrierDepart`);
  }
getAllAgenda() {
  return this.http.get<Agenda[]>(`${this.API_URL}/secretaire/audiences`);
}
// tslint:disable-next-line:typedef
  getJanvier(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getFevrier(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getMars(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getAvril(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getMai(id: number) {
    return this.http.get<Agenda>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getJuin(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getJuillet(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getAout(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getSeptembre(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getOctobre(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getNovembre(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
  // tslint:disable-next-line:typedef
  getDecembre(id: number) {
    return this.http.get<any>(`${this.API_URL}/secretaire/agenda/${id}`);
  }
}
