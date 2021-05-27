import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SecretaireService} from "../../../services/secretaire.service";
import {first, map, pluck} from "rxjs/operators";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CourrierArriveeComponent} from "../../Secretaire/courrier-arrivee/courrier-arrivee.component";
import {CourrierDepartComponent} from "../../Secretaire/courrier-depart/courrier-depart.component";
import {AudiencesComponent} from "../../Secretaire/audiences/audiences.component";
import {ImputerComponent} from "../imputer/imputer.component";

@Component({
  selector: 'app-home-director',
  templateUrl: './home-director.component.html',
  styleUrls: ['./home-director.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('detailExpandPrime', [
      state('collapsedPrime', style({height: '0px', minHeight: '0'})),
      state('expandedPrime', style({height: '*'})),
      transition('expandedPrime <=> collapsedPrime', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeDirectorComponent implements OnInit {
  OneCompet: any ;
  Janvier: any  ;
  Fevrier: any ;
  Mars: any  ;
  Avril: any ;
  Mai: any = [] ;
  Juin: any ;
  Juillet: any ;
  Aout: any ;
  Septembre: any ;
  Octobre: any ;
  Novembre: any ;
  Decembre: any ;
  arriveesData: any ;
  selected: any = []  ;
  departsData: any ;
  agendasData: any ;
  agenda: any ;
  dataSource : any;
  dataSource2 : any;
  columnsToDisplay = ['dateArrivee','dateCorrespondance', 'numeroCorrespondance', 'expediteur' , 'objet' , 'imputation'];
  columnsToDisplayPrime = ['dateDeDepart','destinataire', 'numeroCorrespondance', 'numeroArchive' , 'objet'];
  displayedColumnsSecond = ['Jour', 'Debut', 'Fin', 'Organisme', 'Observation'];
  dataSource3 : any;
  expandedElement: any | null;
  expandedElementPrime: any | null;
  mois : any [] ;
  id: any ;

  constructor(
    private secretaireService: SecretaireService ,
    private dialog: MatDialog
  ) {
    this.mois=['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout' , 'Septembre','Octobre','Novembre','Decembre']
  }

  ngOnInit(): void {
    this.loadJanvier(1) ;
    this.loadFevrier(2) ;
    this.loadMars(3) ;
    this.loadAvril(4) ;
    this.loadMai(5) ;
    this.loadJuin(6) ;
    this.loadJuillet(7) ;
    this.loadAout(8) ;
    this.loadSeptembre(9) ;
    this.loadOctobre(10) ;
    this.loadNovembre(11) ;
    this.loadDecembre(12) ;
    this.loadAllArrivees() ;
    this.loadAllDeparts() ;
    console.log(this.selected) ;
    this.agenda = this.agendasData ;
  }

  // tslint:disable-next-line:typedef
  loadAllArrivees() {
    // @ts-ignore
    this.secretaireService.getAll()
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(
        data => {this.arriveesData = data , this.dataSource = data , console.log(this.arriveesData);  }  );
  }
  // tslint:disable-next-line:typedef
  loadAllDeparts() {
    // @ts-ignore
    this.secretaireService.getAllDeparts()
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(
        data => {this.departsData = data , this.dataSource2 = data , console.log(this.dataSource2);  }  );
  }
  /* // tslint:disable-next-line:typedef
   loadAllAgendas() {
     // @ts-ignore
     this.secretaireService.getAllAgenda()
       .pipe(map(x => JSON.stringify(x)),
         map(x => JSON.parse(x)),
         pluck('hydra:member'))
       .subscribe(
         data => {this.agendasData = data  ,
           console.log(this.agendasData) ;
           this.dataSource3 = this.agendasData
            }  );
     return this.agendasData ;
   }*/
  // tslint:disable-next-line:typedef
  loadJanvier(id: any) {
    this.secretaireService.getJanvier(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Janvier = agenda.audiences ;
        console.log(this.Janvier) ;
        this.selected.push(this.Janvier) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadFevrier(id: any) {
    this.secretaireService.getFevrier(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Fevrier = agenda.audiences ;
        console.log(this.Fevrier) ;
        this.selected.push(this.Fevrier) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadMars(id: any) {
    this.secretaireService.getMars(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Mars = agenda.audiences ;
        console.log(this.Mars) ;
        this.selected.push(this.Mars) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadAvril(id: any) {
    this.secretaireService.getAvril(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Avril = agenda.audiences ;
        console.log(this.Avril) ;
        this.selected.push(this.Avril) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadMai(id: any) {
    this.secretaireService.getMai(id)
      .pipe(first())
      .subscribe(agenda => {
        console.log(agenda.audiences) ;
        this.Mai = agenda.audiences ;
        console.log(this.Mai) ;
        this.selected.push(this.Mai) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadJuin(id: any) {
    this.secretaireService.getJuin(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Juin = agenda.audiences ;
        console.log(this.Juin) ;
        this.selected.push(this.Juin) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadJuillet(id: any) {
    this.secretaireService.getJuillet(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Juillet = agenda.audiences ;
        console.log(this.Juillet) ;
        this.selected.push(this.Juillet) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadAout(id: any) {
    this.secretaireService.getAout(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Aout = agenda.audiences ;
        console.log(this.Aout) ;
        this.selected.push(this.Aout) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadSeptembre(id: any) {
    this.secretaireService.getSeptembre(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Septembre = agenda.audiences ;
        console.log(this.Septembre) ;
        this.selected.push(this.Septembre) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadOctobre(id: any) {
    this.secretaireService.getOctobre(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Octobre = agenda.audiences ;
        console.log(this.Octobre) ;
        this.selected.push(this.Octobre) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadNovembre(id: any) {
    this.secretaireService.getNovembre(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Novembre = agenda.audiences ;
        console.log(this.Novembre) ;
        this.selected.push(this.Novembre) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  // tslint:disable-next-line:typedef
  loadDecembre(id: any) {
    this.secretaireService.getDecembre(id)
      .pipe(first())
      .subscribe(agenda => {
        this.Decembre = agenda.audiences ;
        console.log(this.Decembre) ;
        this.selected.push(this.Decembre) ;
      } ) ;
    //  return [this.grpCompet , this.compets , this.selected] ;
  }
  imputer(idd: any) {
    const dialogConfig = new MatDialogConfig() ;
    dialogConfig.disableClose = false ;
    dialogConfig.autoFocus = true ;
    dialogConfig.width = "60%";
    dialogConfig.data = idd ;
    dialogConfig.id = idd ;
    this.dialog.open(ImputerComponent , dialogConfig) ;
  }
}
