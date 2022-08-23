import { Injectable } from '@angular/core';
import { Dog } from './types';

const DOGS_MOCK: Dog[] = [
  {
    breed: 'Shiba Inu',
    profilePic: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    description:
      'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
  },
  {
    breed: 'Labrador',
    profilePic:
      'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    description: 'Test Lorem Ipsum Dolor',
  },
];

@Injectable()
export class DogService {
  constructor() {}

  getDogs() {
    return DOGS_MOCK; // this is comming from the backend
  }
}
