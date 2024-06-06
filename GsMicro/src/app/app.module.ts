import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanComponent } from './ocean/ocean.component';
import { HttpClientModule } from '@angular/common/http';
import { OceanApiService } from './ocean/ocean-api.service';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    OceanComponent,
    CommonModule,
    HttpClientModule
  ],
  providers: [OceanApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
