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
import { ComponentsModule } from 'src/app/components/components.module';
import { ImgFallBackDirective } from 'src/app/directives/img-fall-back.directive';
import { CharactersDetailsComponent } from 'src/app/pages/characters/characters-details/characters-details.component';
import { FilmsDetailsComponent } from 'src/app/pages/films/films-details/films-details.component';
import { PlanetsDetailsComponent } from 'src/app/pages/planets/planets-details/planets-details.component';
import { SpeciesDetailsComponent } from 'src/app/pages/species/species-details/species-details.component';
import { StarshipsDetailsComponent } from 'src/app/pages/starships/starships-details/starships-details.component';
import { VehiclesDetailsComponent } from 'src/app/pages/vehicles/vehicles-details/vehicles-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule
  ],
  declarations: [
    HomeComponent,
    FilmsComponent,
    CharactersComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    ImgFallBackDirective,
    CharactersDetailsComponent,
    FilmsDetailsComponent,
    PlanetsDetailsComponent,
    SpeciesDetailsComponent,
    StarshipsDetailsComponent,
    VehiclesDetailsComponent
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
