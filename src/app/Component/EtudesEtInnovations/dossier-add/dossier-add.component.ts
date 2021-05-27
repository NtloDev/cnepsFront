import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {EtudesEtInnovationsService} from "../../../services/etudes-et-innovations.service";

@Component({
  selector: 'app-dossier-add',
  templateUrl: './dossier-add.component.html',
  styleUrls: ['./dossier-add.component.scss']
})
export class DossierAddComponent implements OnInit {
  dossierForm: FormGroup;
  pieceJointe: any;
  selectedValue: string;
  dossier : any [] ;

  constructor(
    private formBuilder: FormBuilder,
    private etudestInnovationsService: EtudesEtInnovationsService ,
    public dialogRef: MatDialogRef<DossierAddComponent>
  ) {
    this.dossier=['Ministre','Adjoint','Prefet','Comptable','Directeur'] ;
  }

  ngOnInit(): void {
    this.dossierForm = new FormGroup(
      {
        libelle: new FormControl(null, Validators.required),
        date: new FormControl(null , Validators.required),
        intitule: new FormControl(null , Validators.required),
        pieceJointe: new FormControl(null),
      });
  }

  // tslint:disable-next-line:typedef
  get f() { return this.dossierForm.controls; }
  // tslint:disable-next-line:typedef
  OnAddpieceJointe(pieceJointe: any) {
    this.pieceJointe = pieceJointe.target.files[0] ;
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
   // console.log(this.f.dateArrivee.value) ;
    const formData = new FormData();
    formData.append('libelle',  this.f.libelle.value);
    formData.append('date', this.f.date.value );
    formData.append('intitule', this.f.intitule.value);
    formData.append('pieceJointe', this.pieceJointe);
    console.log(formData);
    //   this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    this.etudestInnovationsService.addDossier(formData)
      .subscribe(
        user => {
          this.dossierForm.reset() ;
         // window.location.reload() ;
          this.onClose() ;
        });
  }
  onClose() {
    this.dialogRef.close() ;
  }
}
