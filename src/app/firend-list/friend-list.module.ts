import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirendListComponent } from './firend-list.component';
import { DogService } from '../dog.service';

@NgModule({
  imports: [CommonModule],
  declarations: [FirendListComponent],
  providers: [DogService],
  exports: [FirendListComponent],
})
export class FriendListModule {}
