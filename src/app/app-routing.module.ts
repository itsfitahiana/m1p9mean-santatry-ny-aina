import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ConnexionComponent } from "./components/auth/connexion/connexion.component";
import { ConfirmationComponent } from "./components/auth/inscription/confirmation/confirmation.component";
import { InscriptionComponent } from "./components/auth/inscription/inscription.component";
import { CommandeListeComponent } from "./components/commande/commande-liste/commande-liste.component";
import { CommandeComponent } from "./components/commande/commande.component";
import { LivreurListeComponent } from "./components/livreur/livreur-liste/livreur-liste.component";
import { LivreurUpdateComponent } from './components/livreur/livreur-udpate/livreur-update.component';
import { LivreurComponent } from "./components/livreur/livreur.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { PanierComponent } from "./components/panier/panier.component";
import { PlatDetailComponent } from "./components/plat/plat-detail/plat-detail.component";
import { PlatListeComponent } from "./components/plat/plat-liste/plat-liste.component";
import { RestaurantListeComponent } from "./components/restaurant/restaurant-liste/restaurant-liste.component";

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "accueil", component: AccueilComponent },
  { path: "restaurant", component: RestaurantListeComponent },
  { path: "listePlat/:restoId", component: PlatListeComponent },
  { path: "detailPlat/:platId", component: PlatDetailComponent },
  // { path: "commander/:commandeId", component: CommandeListeComponent },
  { path: "panier", component: PanierComponent },
  { path: "commande", component: CommandeListeComponent },
  { path: "confirmation/:confirmation", component: ConfirmationComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "livreur", component: LivreurListeComponent },
  { path: "update-livreur/:id/:nom/:email", component: LivreurUpdateComponent },
  // { path: "loading", component: LoadingComponent },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',
  component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
