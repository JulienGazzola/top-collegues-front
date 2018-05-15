import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListerColleguesComponentComponent } from './lister-collegues-component/lister-collegues-component.component';
import { HistoriqueVotesComponentComponent } from './historique-votes-component/historique-votes-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { ScorePipe } from './pipes/score.pipe';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  { path : 'accueil', component : AccueilComponent},
  { path : 'demo', component : DemoComponent},
  { path : 'collegues/:pseudo', component : DetailCollegueComponent},
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**',  component: PageNonTrouveeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListerColleguesComponentComponent,
    HistoriqueVotesComponentComponent,
    AccueilComponent,
    MenuComponent,
    DetailCollegueComponent,
    PageNonTrouveeComponent,
    ScorePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
