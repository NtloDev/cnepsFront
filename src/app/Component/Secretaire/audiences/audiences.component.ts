import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SecretaireService} from "../../../services/secretaire.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-audiences',
  templateUrl: './audiences.component.html',
  styleUrls: ['./audiences.component.scss']
})
export class AudiencesComponent implements OnInit {
  audienceForm: FormGroup;
  // @ts-ignore
  audience1: FormGroup;
  selectedValue: string;
  selectedValue2: string;
  mois : any [] ;
  jours: any [] ;
  id: any ;

  constructor(
    private formBuilder: FormBuilder,
    private secretaireService: SecretaireService ,
    public dialogRef: MatDialogRef<AudiencesComponent>
  ) {
    this.mois=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout' , 'Septembre','Octobre','Novembre','Decembre'] ;
    this.jours=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
  }

  ngOnInit(): void {
    this.audienceForm = new FormGroup(
      {
        mois: new FormControl(null, Validators.required),
        audiences: new FormArray([]),
      });
    this.AddAudience() ;
  }
  AddAudience(){
    this.audience1 = new FormGroup({
      jour: new FormControl(null , Validators.required),
      debutAudience: new FormControl(null , Validators.required),
      finAudience: new FormControl(null , Validators.required),
      demandeur: new FormControl(null , Validators.required),
      observations: new FormControl(null , Validators.required),
    });
    ( this.audienceForm.get('audiences') as FormArray).push(this.audience1);
  }
  // tslint:disable-next-line:typedef
  get f() { return this.audienceForm.controls; }
  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  onSubmit3() {
    if (this.f.mois.value == 'Janvier') {
      this.id = 1 ;
    }
    else if (this.f.mois.value == 'Fevrier'){
      this.id = 2 ;
    }
    else if (this.f.mois.value == 'Mars'){
      this.id = 3 ;
    }
    else if (this.f.mois.value == 'Avril'){
      this.id = 4 ;
    }
    else if (this.f.mois.value == 'Mai'){
      this.id = 5 ;
    }
    else if (this.f.mois.value == 'Juin'){
      this.id = 6 ;
    }
    else if (this.f.mois.value == 'Juillet'){
      this.id = 7 ;
    }
    else if (this.f.mois.value == 'Aout'){
      this.id = 8 ;
    }
    else if (this.f.mois.value == 'Septembre'){
      this.id = 9 ;
    }
    else if (this.f.mois.value == 'Octobre'){
      this.id = 10 ;
    }
    else if (this.f.mois.value == 'Novembre'){
      this.id = 11 ;
    }
    else if (this.f.mois.value == 'Decembre'){
      this.id = 12 ;
    }
    console.log(this.id) ;
    //   this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    this.secretaireService.addAudience( this.id ,this.audienceForm.value)
      .subscribe(
        user => {
          this.audienceForm.reset() ;
          // window.location.reload() ;
          this.onClose() ;
        });
  }
  onClose() {
    this.dialogRef.close() ;
  }

}
