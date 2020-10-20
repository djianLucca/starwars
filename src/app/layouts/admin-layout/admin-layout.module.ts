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
import { BaseService } from 'src/app/services/base.service';
import { FilmsService } from 'src/app/services/films.service';
import { PeopleService } from 'src/app/services/people.service';
import { PlanetsService } from 'src/app/services/planets.service';
import { SpeciesService } from 'src/app/services/species.service';
import { StarshipsService } from 'src/app/services/starships.service';
import { VehiclesService } from 'src/app/services/vehicles.service';

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
  ],
  providers: [
    BaseService,
    FilmsService,
    PeopleService,
    PlanetsService,
    SpeciesService,
    StarshipsService,
    VehiclesService
  ]
})
export class AdminLayoutModule { }
