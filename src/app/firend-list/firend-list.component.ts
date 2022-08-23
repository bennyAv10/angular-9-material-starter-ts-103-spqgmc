import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';

@Component({
  selector: 'app-firend-list',
  templateUrl: './firend-list.component.html',
  styleUrls: ['./firend-list.component.css'],
})
export class FirendListComponent implements OnInit {
  dogs: Dog[] = this.dogService.getDogs();

  constructor(private dogService: DogService) {}

  ngOnInit() {}
}
