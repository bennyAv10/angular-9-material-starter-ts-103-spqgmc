import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed.component';
import { DogCardModule } from '../components/dog-card/dog-card.module';
import { DogService } from '../dog.service';

@NgModule({
  imports: [CommonModule, DogCardModule],
  declarations: [NewsFeedComponent],
  providers: [DogService],
  exports: [NewsFeedComponent],
})
export class NewsFeedModule {}
