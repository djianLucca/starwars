import { Routes } from "@angular/router";
import { CharactersDetailsComponent } from 'src/app/pages/characters/characters-details/characters-details.component';
import { CharactersComponent } from 'src/app/pages/characters/characters.component';
import { FilmsDetailsComponent } from 'src/app/pages/films/films-details/films-details.component';
import { FilmsComponent } from 'src/app/pages/films/films.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PlanetsDetailsComponent } from 'src/app/pages/planets/planets-details/planets-details.component';
import { PlanetsComponent } from 'src/app/pages/planets/planets.component';
import { SpeciesDetailsComponent } from 'src/app/pages/species/species-details/species-details.component';
import { SpeciesComponent } from 'src/app/pages/species/species.component';
import { StarshipsDetailsComponent } from 'src/app/pages/starships/starships-details/starships-details.component';
import { StarshipsComponent } from 'src/app/pages/starships/starships.component';
import { VehiclesDetailsComponent } from 'src/app/pages/vehicles/vehicles-details/vehicles-details.component';
import { VehiclesComponent } from 'src/app/pages/vehicles/vehicles.component';



export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "films", component: FilmsComponent },
  { path: "films/details/:id", component: FilmsDetailsComponent },
  { path: "characters", component: CharactersComponent },
  { path: "characters/details/:id", component: CharactersDetailsComponent },
  { path: "planets", component: PlanetsComponent },
  { path: "planets/details/:id", component: PlanetsDetailsComponent },
  { path: "species", component: SpeciesComponent },
  { path: "species/details/:id", component: SpeciesDetailsComponent },
  { path: "starships", component: StarshipsComponent },
  { path: "starships/details/:id", component: StarshipsDetailsComponent },
  { path: "vehicles", component: VehiclesComponent },
  { path: "vehicles/details/:id", component: VehiclesDetailsComponent },
];
