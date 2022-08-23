import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  dogs: Dog[] = this.dogService.getDogs();

  constructor(public dogService: DogService) {}

  ngOnInit() {}
}
