import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  static readonly DEFAULT_COLOR = 'white';
  lastClickedSquareName = '';

  // noinspection TypescriptExplicitMemberType
  onSquareClick(clickedSquareName: string) {
    this.lastClickedSquareName = clickedSquareName;
  }

  getCurrentColor() {
    if (this.lastClickedSquareName.length > 0) {
      const split = this.lastClickedSquareName.split('-');
      return split[0];
    }

    return AppComponent.DEFAULT_COLOR;
  }
}
