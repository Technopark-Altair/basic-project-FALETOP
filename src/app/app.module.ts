import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { GrammarComponent } from './grammar/grammar.component';
import { ImproveComponent } from './improve/improve.component';
import { AudiComponent } from './audi/audi.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'vocabulary', component: VocabularyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'grammar', component: GrammarComponent},
  {path: 'improve', component: ImproveComponent},
  {path: 'audi', component: AudiComponent},
  {path: '**', component: NotFoundComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    GrammarComponent,
    ImproveComponent,
    AudiComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
