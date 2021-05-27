import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DirecteurService {
  private API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  // tslint:disable-next-line:typedef
  imputeCourrierArrivee(id: any, data: any) {
    console.log(data);
    return this.http.put<any>( `${ this.API_URL }/secretaire/CourrierArrivee/${id}`, data)
      .pipe ( map (reponse => {
        console.log(reponse);
        //alert('yes') ;
        return reponse;
      })) ;
  }

}
