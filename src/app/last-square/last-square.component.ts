import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-last-square',
  templateUrl: './last-square.component.html',
  styleUrls: ['./last-square.component.css']
})
export class LastSquareComponent implements OnInit {
  @Input() selectedColor: string;

  constructor() { }

  ngOnInit() {
  }

}
