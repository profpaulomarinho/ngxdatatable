/* apiexemplo.service.ts */
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { environment } from '../environments/environment';
import {Filtros} from "../model/filtros";
@Injectable()
export class ApiexemploService {
  constructor(
    public api: HttpClient
  ) {  }
  pegaDados(parametrosFiltro: Filtros) {
    let filtros = '?';
    // Tem ordenacao? Sempre tera a padrao
    if (parametrosFiltro.campoOrdenacao){
      filtros += '_sort=' + parametrosFiltro.campoOrdenacao +
        '&_order=' + parametrosFiltro.tipoOrdenacao + '&';
      console.log(filtros);

    }
    // Buscou por algo?
    if (parametrosFiltro.busca){
      filtros += 'q=' + parametrosFiltro.busca + '&';
      console.log(filtros);

    }
    // Tem limite porpagina? Sempre tera a padrao
    if (parametrosFiltro.dadosPorPagina && parametrosFiltro.dadosPorPagina > 0 ) {
      filtros += '_limit=' + parametrosFiltro.dadosPorPagina +
        '&_page=' + parametrosFiltro.offset + '&';
      console.log(filtros);
    }
    return this.api.get( environment.apiURL + 'usuarios' + filtros);
  }

}
