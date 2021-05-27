import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AudiencesComponent} from "../../Secretaire/audiences/audiences.component";
import {DossierAddComponent} from "../dossier-add/dossier-add.component";
import {first} from "rxjs/operators";
import {EtudesEtInnovationsService} from "../../../services/etudes-et-innovations.service";
import {PdfViewComponent} from "../pdf-view/pdf-view.component";

@Component({
  selector: 'app-home-etudes-et-innovations',
  templateUrl: './home-etudes-et-innovations.component.html',
  styleUrls: ['./home-etudes-et-innovations.component.scss']
})
export class HomeEtudesEtInnovationsComponent implements OnInit {
  libelle : any [] ;
  Adjoint: any  ;
  Directeur: any ;
  Prefet: any  ;
  Comptable: any ;
  Ministre: any ;
  displayedColumns = ['Date', 'Intitule' , 'PieceJointe' ];
  constructor(
    private dialog: MatDialog ,
    private etudesEtInnovations: EtudesEtInnovationsService
    ) {
    this.libelle=['Ministre','Adjoint','Directeur','Prefet','Comptable']
  }

  ngOnInit(): void {
      this.loadDossier('Ministre') ,
      this.loadDossier('Adjoint') ,
      this.loadDossier('Prefet') ,
      this.loadDossier('Comptable') ,
      this.loadDossier('Directeur')
  }
  ViewPdf(src: any) {
    const dialogConfig = new MatDialogConfig() ;
    dialogConfig.disableClose = false ;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = "90%";
    dialogConfig.height = "800px" ;
    dialogConfig.data = src ;
    dialogConfig.id = src ;
    this.dialog.open(PdfViewComponent , dialogConfig) ;
    this.dialog.afterAllClosed.subscribe(() => {

    } );
  }

  AjoutDossier() {
    const dialogConfig = new MatDialogConfig() ;
    dialogConfig.disableClose = false ;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = "60%";
    this.dialog.open(DossierAddComponent , dialogConfig) ;
    this.dialog.afterAllClosed.subscribe(() => {
    } );
  }

  // tslint:disable-next-line:typedef
  loadDossier(libelle: String) {
    this.etudesEtInnovations.getAll(libelle)
      .pipe(first())
      .subscribe(dossier => {
        console.log(dossier) ;
        console.log(dossier[0].libelle) ;
        if (dossier[0].libelle == 'Ministre'){
          this.Ministre = dossier ;
          console.log(this.Ministre) ;
          return this.Ministre;
        }
        else if (dossier[0].libelle == 'Prefet'){
          this.Prefet = dossier ;
          console.log(this.Prefet) ;
          return this.Prefet ;
        }
        else if (dossier[0].libelle == 'Adjoint'){
          this.Adjoint = dossier ;
          console.log(this.Adjoint) ;
          return this.Adjoint ;
        }
        else if (dossier[0].libelle == 'Comptable'){
          this.Comptable = dossier ;
          console.log(this.Comptable) ;
          return this.Comptable ;
        }
        else if (dossier[0].libelle == 'Directeur'){
          this.Directeur = dossier ;
          console.log(this.Directeur) ;
          return this.Directeur ;
        }
      } )
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
}
