import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavBarComponent } from './nav-bar.component';
import { DogCardModule } from '../dog-card/dog-card.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    DogCardModule,
  ],
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
})
export class NavBarModule {}
