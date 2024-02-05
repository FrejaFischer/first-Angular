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

  showMessage(message: any) {
    this.logger.log(message);
  }
  showError(message: string) {
    this.logger.error(message);
  }
  showWarning(message: string) {
    this.logger.warn(message);
  }
}
