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
  public aguaTemp:number=0;
  public ph:number=0;
  public lvPoluicao:string="";

  public jsonFile: any;

  submitForm(formValue: any) {
    const regiaoEncoded = encodeURIComponent(this.regiao);
    const specieNomeEncoded = encodeURIComponent(this.specieNome);
    const specieStatusEncoded = encodeURIComponent(this.specieStatus);
    const lvPoluicaoEncoded = encodeURIComponent(this.lvPoluicao);

    console.log(formValue);
    this.service.getOceanData(
      regiaoEncoded,
      specieNomeEncoded,
      specieStatusEncoded,
      this.aguaTemp,
      this.ph,
      lvPoluicaoEncoded
    ).subscribe((data) => {
      this.jsonFile = data;
      console.log(this.jsonFile);
    })
  }
}
