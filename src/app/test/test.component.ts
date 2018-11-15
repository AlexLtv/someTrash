import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  title: string = 'SOME TITLE';
  num: number = 5;
  bool: boolean = true;
  arr: string[] = ['1', '3'];
  arr2: number[] = [1, 3];
  user1: User = {
    name: 'Bob',
    age: 40
  };

  users: User[] = [
    {
      name: 'Bob',
      age: 40
    },
    {
      name: 'Ivan',
      age: 50
    }
  ];

  constructor() { }

}
