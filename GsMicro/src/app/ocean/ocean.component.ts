import { Component } from '@angular/core';
import { OceanApiService } from './ocean-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ocean',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ocean.component.html',
  styleUrl: './ocean.component.css'
})
export class OceanComponent {
  constructor(private service: OceanApiService){}

  public regiao:string="";
  public specieNome:string="";
  public specieStatus:string="";
  public aguaTemp:string="";
  public ph:string="";
  public lvPoluicao:string="";

  public jsonFile: any;

  submitForm(formValue: any) {
    console.log(formValue);
    this.service.getOceanData(
      this.regiao,
      this.specieNome,
      this.specieStatus,
      this.aguaTemp,
      this.ph,
      this.lvPoluicao
    ).subscribe((data) => {
      this.jsonFile = data;
      console.log(this.jsonFile);
    })
  }
}
