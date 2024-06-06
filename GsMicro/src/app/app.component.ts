import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OceanComponent } from './ocean/ocean.component';
import { AppModule } from './app.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OceanComponent,HttpClientModule, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GsMicro';
}
