import { Component } from '@angular/core';
import { FetchDogsService } from '../services/fetch-dogs.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.css',
})
export class DogCardComponent {
  dogPic$ = new BehaviorSubject<any>('');
  showPictures$ = new BehaviorSubject<boolean>(false);
  showPictures: boolean = this.showPictures$.value;

  constructor(private fetchDogs: FetchDogsService) {
    this.showPictures$.subscribe((value) => {
      this.showPictures = value;
    });
  }

  async ngOnInit() {
    const pic = await this.fetchDogs.fetchData();
    console.log('dog-card', pic);
    this.dogPic$.next(pic);
  }

  setShow() {
    this.showPictures$.next(!this.showPictures$.value);
  }
}
