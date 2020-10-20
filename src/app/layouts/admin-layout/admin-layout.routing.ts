import { Routes } from "@angular/router";
import { CharactersComponent } from 'src/app/pages/characters/characters.component';
import { FilmsComponent } from 'src/app/pages/films/films.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { PlanetsComponent } from 'src/app/pages/planets/planets.component';
import { SpeciesComponent } from 'src/app/pages/species/species.component';
import { StarshipsComponent } from 'src/app/pages/starships/starships.component';
import { VehiclesComponent } from 'src/app/pages/vehicles/vehicles.component';



export const AdminLayoutRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "films", component: FilmsComponent },
  { path: "characters", component: CharactersComponent },
  { path: "planets", component: PlanetsComponent },
  { path: "species", component: SpeciesComponent },
  { path: "starships", component: StarshipsComponent },
  { path: "vehicles", component: VehiclesComponent },
];
