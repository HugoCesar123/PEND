import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Bye } from './components/bye/bye';

@Component({
  imports: [RouterOutlet, Home, Bye],
  selector: 'app-root',
  styleUrl: './app.sass',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('exemplo-app');
}
