import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    CharactersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
