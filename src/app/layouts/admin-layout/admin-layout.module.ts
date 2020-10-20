import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { HomeComponent } from '../../pages/home/home.component';
import { FilmsComponent } from '../../pages/films/films.component';
import { CharactersComponent } from '../../pages/characters/characters.component';
import { PlanetsComponent } from '../../pages/planets/planets.component';
import { SpeciesComponent } from '../../pages/species/species.component';
import { StarshipsComponent } from '../../pages/starships/starships.component';
import { VehiclesComponent } from '../../pages/vehicles/vehicles.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    HomeComponent,
    FilmsComponent,
    CharactersComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ]
})
export class AdminLayoutModule { }
