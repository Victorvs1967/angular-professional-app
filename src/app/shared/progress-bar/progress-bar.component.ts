import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vs-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})
export class ProgressBarComponent {

  color: string = '';
  @Input() progress: number = 0;
  @Input() firstName?: string;
  @Output() progressClick: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    if (this.progress < 0 || this.progress > 100) {
      this.progress = 0;
    }

    if (this.progress < 35) {
      this.color = 'red';
    } else if (this.progress < 75) {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }

  onClick() {
    this.progressClick.emit(` ${this.firstName}'s Progress is ${this.progress} %`)
  }
}
