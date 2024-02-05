import { Component } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  constructor(private logger: LoggerService) {}

  showMessage(message: string | number) {
    this.logger.log(message);
  } //Can be called with a string or a number
  showError(message: string) {
    this.logger.error(message);
  } //Can only be called with a string
  showWarning(message: string) {
    this.logger.warn(message);
  }
}
