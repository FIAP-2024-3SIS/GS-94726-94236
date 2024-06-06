import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OceanApiService {

  constructor(private http : HttpClient) {  }

  getOceanData(
    regiao:string,
    specieNome:string,
    specieStatus:string,
    aguaTemp:string,
    ph:string,
    lvPoluicao:string,
    ):Observable<any>{
      console.log(`https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?regiao=${regiao}&especie=${specieNome}&statusConservacao=${specieStatus}&temperaturaMin=${aguaTemp}&temperaturaMax=${aguaTemp}&phMin=${ph}&phMax=${ph}&nivelPoluicao=${lvPoluicao}&pagina=1&qtde=1`);

    return this.http.get<any>(`https://fiap-3sis-gs-20241.azurewebsites.net/OceanData?regiao=${regiao}&especie=${specieNome}&statusConservacao=${specieStatus}&temperaturaMin=${aguaTemp}&temperaturaMax=${aguaTemp}&phMin=${ph}&phMax=${ph}&nivelPoluicao=${lvPoluicao}&pagina=1&qtde=1`);
  }
}
