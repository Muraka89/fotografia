import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaisajesComponent } from './paisajes/paisajes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaisajesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fotografia';
}
