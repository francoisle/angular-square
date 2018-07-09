import {Component, OnInit} from '@angular/core';
import Square from '../../models/Square';

@Component({
  selector: 'app-square-container',
  templateUrl: './square-container.component.html',
  styleUrls: ['./square-container.component.css']
})
export class SquareContainerComponent implements OnInit {
  squares: Square[];

  constructor() {
    this.squares = ['red', 'lightblue', 'green', 'yellow'].map(color => {
      return new Square(color + '-square', color);
    });
  }


  ngOnInit() {
  }

}
