import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { DogCardComponent } from './dog-card/dog-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ThemeToggleComponent,
    TopBarComponent,
    DogCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-Angular';
}
