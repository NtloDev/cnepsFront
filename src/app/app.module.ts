import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeDirectorComponent } from './Component/Directeur/home-director/home-director.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import {CommonModule} from "@angular/common"
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import { HomeSecretaireComponent } from './Component/Secretaire/home-secretaire/home-secretaire.component';
import { NavbarSecretaireComponent } from './Component/Secretaire/navbar-secretaire/navbar-secretaire.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CourrierArriveeComponent } from './Component/Secretaire/courrier-arrivee/courrier-arrivee.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CourrierDepartComponent } from './Component/Secretaire/courrier-depart/courrier-depart.component';
import { AudiencesComponent } from './Component/Secretaire/audiences/audiences.component';
import { HomeAdministrateurComponent } from './Component/Administrateur/home-administrateur/home-administrateur.component';
import { ImputerComponent } from './Component/Directeur/imputer/imputer.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeEtudesEtInnovationsComponent } from './Component/EtudesEtInnovations/home-etudes-et-innovations/home-etudes-et-innovations.component';
import { DossierAddComponent } from './Component/EtudesEtInnovations/dossier-add/dossier-add.component';
import { PdfViewComponent } from './Component/EtudesEtInnovations/pdf-view/pdf-view.component';
import { OrdreComponent } from './Component/Secretaire/ordre/ordre.component';
import { HomeSurveillantGeneralComponent } from './Component/SurveillantGeneral/home-surveillant-general/home-surveillant-general.component';
import { PdfViewSecretaireComponent } from './Component/Secretaire/pdf-view-secretaire/pdf-view-secretaire.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeDirectorComponent,
    NavbarComponent,
    HomeSecretaireComponent,
    NavbarSecretaireComponent,
    CourrierArriveeComponent,
    CourrierDepartComponent,
    AudiencesComponent,
    HomeAdministrateurComponent,
    ImputerComponent,
    HomeEtudesEtInnovationsComponent,
    DossierAddComponent,
    PdfViewComponent,
    OrdreComponent,
    HomeSurveillantGeneralComponent,
    PdfViewSecretaireComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule ,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    FlexLayoutModule,
    MatOptionModule,
    ScrollingModule,
    MatSelectModule,
    MatChipsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatTabsModule,
    MatChipsModule,
    DragDropModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor , multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourrierArriveeComponent , CourrierDepartComponent , AudiencesComponent , ImputerComponent]
})
export class AppModule { }
