import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SecretaireService} from "../../../services/secretaire.service";

@Component({
  selector: 'app-ordre',
  templateUrl: './ordre.component.html',
  styleUrls: ['./ordre.component.scss']
})
export class OrdreComponent implements OnInit {
  ordreForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private secretaireService: SecretaireService ,
    public dialogRef: MatDialogRef<OrdreComponent>
  ) { }

  ngOnInit(): void {

    this.ordreForm = new FormGroup(
      {
        nomComplet: new FormControl(null, Validators.required),
        fonction: new FormControl(null , Validators.required),
        date: new FormControl(null , Validators.required),
        lieu: new FormControl(null , Validators.required),
        intitule: new FormControl(null , Validators.required),
        description: new FormControl(null),
      });
  }

  // tslint:disable-next-line:typedef
  get f() { return this.ordreForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    //   this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    this.secretaireService.addOrdre( this.ordreForm.value)
      .subscribe(
        user => {
          this.ordreForm.reset() ;
         // window.location.reload() ;
          this.onClose() ;
        });
  }

  onClose() {
    this.dialogRef.close() ;
  }
}
