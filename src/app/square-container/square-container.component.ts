import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Square from '../../models/Square';

@Component({
  selector: 'app-square-container',
  templateUrl: './square-container.component.html',
  styleUrls: ['./square-container.component.css']
})
export class SquareContainerComponent implements OnInit {
  squares: Square[];
  @Output() clicked = new EventEmitter<string>();

  constructor() {
    this.squares = ['red', 'lightBlue', 'green', 'yellow'].map(color => {
      return new Square(color + '-square', color, color + '-square');
    });
  }

  // noinspection JSMethodCanBeStatic
  handleSquareClick(squareName) {
    this.clicked.emit(squareName);
  }

  ngOnInit() {
  }

}
