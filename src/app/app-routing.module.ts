import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./Component/login/login.component";
import {HomeDirectorComponent} from "./Component/Directeur/home-director/home-director.component";
import {HomeSecretaireComponent} from "./Component/Secretaire/home-secretaire/home-secretaire.component";
import {AuthGuard} from "./helpers/auth.gard";
import {HomeAdministrateurComponent} from "./Component/Administrateur/home-administrateur/home-administrateur.component";
import {HomeEtudesEtInnovationsComponent} from "./Component/EtudesEtInnovations/home-etudes-et-innovations/home-etudes-et-innovations.component";
import {OrdreComponent} from "./Component/Secretaire/ordre/ordre.component";
import {HomeSurveillantGeneralComponent} from "./Component/SurveillantGeneral/home-surveillant-general/home-surveillant-general.component";

const routes: Routes = [
 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'app-home-director', component: HomeDirectorComponent, canActivate: [AuthGuard] },
  { path: 'app-home-secretaire', component: HomeSecretaireComponent, canActivate: [AuthGuard] },
  { path: 'app-home-administrateur', component: HomeAdministrateurComponent, canActivate: [AuthGuard] },
  { path: 'app-home-etudes-et-innovations', component: HomeEtudesEtInnovationsComponent, canActivate: [AuthGuard] },
  { path: 'app-ordre', component: OrdreComponent, canActivate: [AuthGuard] },
  { path: 'app-home-surveillant-general', component: HomeSurveillantGeneralComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
