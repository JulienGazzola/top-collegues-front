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

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListerColleguesComponentComponent,
    HistoriqueVotesComponentComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
