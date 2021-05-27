import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SecretaireService} from "../../../services/secretaire.service";
import {MatDialogRef} from "@angular/material/dialog";
import {DirecteurService} from "../../../services/directeur.service";

@Component({
  selector: 'app-imputer',
  templateUrl: './imputer.component.html',
  styleUrls: ['./imputer.component.scss']
})
export class ImputerComponent implements OnInit {
  imputerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private directeurService: DirecteurService ,
    public dialogRef: MatDialogRef<ImputerComponent>
  ) { }

  ngOnInit(): void {
    this.imputerForm = new FormGroup(
      {
        etudesInnovationsPedagogiques: new FormControl(null),
        accueilStages: new FormControl(null),
        intendance: new FormControl(null),
        surveillantGeneral: new FormControl(null),
        equipePedagogique: new FormControl(null),
        programmeUtilisationTerrainsGazonnes: new FormControl(null),
        emploiSalles: new FormControl(null),
        entretientMaintenance: new FormControl(null),
        comptabiliteMatieres: new FormControl(null),
        personnelSolde: new FormControl(null),
        assistantDirection: new FormControl(null),
        diffusion: new FormControl(null),
        menParler: new FormControl(null),
        etudeAvis: new FormControl(null),
        representationCompteRendu: new FormControl(null),
        attribution: new FormControl(null),
        information: new FormControl(null),
        suiteDonner: new FormControl(null),
        classement: new FormControl(null),
        autres: new FormControl(null),
      });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.imputerForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
   // alert(this.dialogRef.id) ;
    const formData = new FormData();
    console.log(formData);
    //   this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    this.directeurService.imputeCourrierArrivee( this.dialogRef.id ,this.imputerForm.value)
      .subscribe(
        user => {
          this.imputerForm.reset() ;
         // window.location.reload() ;
          this.onClose() ;
        });
  }
  onClose() {
    this.dialogRef.close() ;
  }

}
