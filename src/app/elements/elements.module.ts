import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }
