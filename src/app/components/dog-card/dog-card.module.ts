import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogCardComponent } from './dog-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule],
  declarations: [DogCardComponent],
  exports: [DogCardComponent],
})
export class DogCardModule {}
