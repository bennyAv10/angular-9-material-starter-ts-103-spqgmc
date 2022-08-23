import { Component, Input, OnInit } from '@angular/core';
import { Dog } from '../types';

@Component({
  selector: 'dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css'],
})
export class DogCardComponent implements OnInit {
  @Input() dogs: Dog[];

  constructor() {}

  ngOnInit() {
    console.log(this.dogs[0].description);
  }

  shareOnSocialMedia() {
    console.log('Sharing on social media');
  }
}
