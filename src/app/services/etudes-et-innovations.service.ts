import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Dossier} from "../Models/dossier.model";

@Injectable({
  providedIn: 'root'
})
export class EtudesEtInnovationsService {
  private API_URL = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) { }

  // tslint:disable-next-line:typedef
  addDossier(data: FormData) {
    console.log(data);
    return this.http.post( `${ this.API_URL }/etudesEtInnovations/dossiers`, data)
      .pipe ( map (reponse => {
        console.log(reponse);
        return reponse;
      })) ;
  }
  // tslint:disable-next-line:typedef
  getAll(libelle: String) {
    return this.http.get<Dossier[]>(`${this.API_URL}/etudesEtInnovations/dossiers/${libelle}`);
  }
}
