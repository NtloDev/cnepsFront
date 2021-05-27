import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {SecretaireService} from "../../../services/secretaire.service";
import {map, pluck} from "rxjs/operators";
import {HomeSecretaireComponent} from "../home-secretaire/home-secretaire.component";

@Component({
  selector: 'app-courrier-arrivee',
  templateUrl: './courrier-arrivee.component.html',
  styleUrls: ['./courrier-arrivee.component.scss']
})
export class CourrierArriveeComponent implements OnInit {
  arriveeForm: FormGroup;
  pieceJointe: any;
  constructor(
    private formBuilder: FormBuilder,
    private secretaireService: SecretaireService ,
    public dialogRef: MatDialogRef<CourrierArriveeComponent>
  ) { }

  ngOnInit(): void {
    this.arriveeForm = new FormGroup(
      {
        dateArrivee: new FormControl(null, Validators.required),
        dateCorrespondance: new FormControl(null , Validators.required),
        numeroCorrespondance: new FormControl(null , Validators.required),
        expediteur: new FormControl(null , Validators.required),
        objet: new FormControl(null , Validators.required),
        pieceJointe: new FormControl(null),
      });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.arriveeForm.controls; }
  // tslint:disable-next-line:typedef
  OnAddpieceJointe(pieceJointe: any) {
   this.pieceJointe = pieceJointe.target.files[0] ;
  }
  // tslint:disable-next-line:typedef
  loadAllArrivees() {
    // @ts-ignore

  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.f.dateArrivee.value) ;
    const formData = new FormData();
    formData.append('dateArrivee',  this.f.dateArrivee.value);
    formData.append('dateCorrespondance', this.f.dateCorrespondance.value );
    formData.append('numeroCorrespondance', this.f.numeroCorrespondance.value);
    formData.append('expediteur', this.f.expediteur.value);
    formData.append('objet', this.f.objet.value);
    formData.append('pieceJointe', this.pieceJointe);
    console.log(formData);
 //   this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    this.secretaireService.addArrivee(formData)
      .subscribe(
        user => {
          this.arriveeForm.reset() ;
         // window.location.reload() ;
          this.onClose() ;
        });
  }
  onClose() {
    this.dialogRef.close() ;
  }
}
