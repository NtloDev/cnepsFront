import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SecretaireService} from "../../../services/secretaire.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-courrier-depart',
  templateUrl: './courrier-depart.component.html',
  styleUrls: ['./courrier-depart.component.scss']
})
export class CourrierDepartComponent implements OnInit {
  departForm: FormGroup;
  pieceJointe: any;
  constructor(
    private formBuilder: FormBuilder,
    private secretaireService: SecretaireService ,
    public dialogRef: MatDialogRef<CourrierDepartComponent>
  ) { }

  ngOnInit(): void {
    this.departForm = new FormGroup(
      {
        dateDeDepart: new FormControl(null, Validators.required),
        destinataire: new FormControl(null , Validators.required),
        numeroArchive: new FormControl(null , Validators.required),
        observations: new FormControl(null , Validators.required),
        objet: new FormControl(null , Validators.required),
        numeroCorrespondance: new FormControl(null , Validators.required),
        pieceJointe: new FormControl(null),
      });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.departForm.controls; }
  // tslint:disable-next-line:typedef
  OnAddpieceJointe(pieceJointe: any) {
    this.pieceJointe = pieceJointe.target.files[0] ;
  }
  // tslint:disable-next-line:typedef
  onSubmit2() {
   // console.log(this.f.dateArrivee.value) ;
    const formData = new FormData();
    formData.append('dateDeDepart',  this.f.dateDeDepart.value);
    formData.append('destinataire', this.f.destinataire.value );
    formData.append('numeroArchive', this.f.numeroArchive.value);
    formData.append('observations', this.f.observations.value);
    formData.append('objet', this.f.objet.value);
    formData.append('numeroCorrespondance', this.f.numeroCorrespondance.value);
    formData.append('pieceJointe', this.pieceJointe);
    console.log(formData);
    //   this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    this.secretaireService.addDepart(formData)
      .subscribe(
        user => {
          this.departForm.reset() ;
        //  window.location.reload() ;
          this.onClose() ;
        });
  }
  onClose() {
    this.dialogRef.close() ;
  }
}
