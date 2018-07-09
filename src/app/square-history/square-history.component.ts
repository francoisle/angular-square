import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-square-history',
  templateUrl: './square-history.component.html',
  styleUrls: ['./square-history.component.css']
})
export class SquareHistoryComponent implements OnInit, OnChanges {
  static readonly HISTORY_LENGTH = 5; // Maximum size of the history.
  history: string[]; // The history to display
  @Input() lastClicked;

  constructor() {
    this.history = SquareHistoryComponent.getInitHistory();
  }

  /**
   * Get the initial history: an array of SquareHistoryComponent.HISTORY_LENGTH empty strings.
   * @returns {string[]} The initial value for this.history
   */
  static getInitHistory(): string[] {
    const initialHistory = [];

    // Initial all SquareHistoryComponent.HISTORY_LENGTH with empty string as it is the chosen default value here.
    for (let i = 0; i < SquareHistoryComponent.HISTORY_LENGTH; i++) {
      initialHistory.push('');
    }
    return initialHistory;
  }

  /**
   * Push the given entry in the history.
   * @param {string} entry The entry to push in the history.
   */
  public pushEntry(entry: string) {
    this.history = [entry, ...this.history.slice(0, SquareHistoryComponent.HISTORY_LENGTH - 1)];
  }

  ngOnInit() {
  }

  ngOnChanges(simpleChange) {
    const currentValue = simpleChange.lastClicked.currentValue;
    this.pushEntry(currentValue);
  }
}
