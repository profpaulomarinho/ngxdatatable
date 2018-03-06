/* app.component.ts */
import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {ApiexemploService} from "./apiexemplo.service";
import {Usuario} from "../model/Usuario";
import {Observable} from 'rxjs/Observable';
import {Filtros} from "../model/filtros";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiexemploService]
})
export class AppComponent {
  dadosTabela: Usuario[] = [];
  filtros: Filtros;
  busca: string;
  totalRegistros = 0; // pequena gambiarra para o jsonserver
  carregamento = false;// pequena gambiarra para o jsonserver
  colunas = [
    { name: 'id' },
    { name: 'nome'}
    ];

 constructor(
   public apiClient: ApiexemploService
 ) {
   this.filtros = new Filtros();

   this.setarPagina({offset: 1});
 }
  setarPagina(x) {
   console.log(x);
    this.filtros.offset = x.offset ; // muda pagina
    // this.filtros.dadosPorPagina = 2; // deixa 2 pra ficar legal
    // if (!this.carregamento) this.filtros = new Filtros();
    console.log('passando',this.filtros);
    this.apiClient.pegaDados(this.filtros).subscribe( retorno => {
      this.dadosTabela = <Usuario[]> retorno;
      if (!this.carregamento){
        this.filtros.dadosPorPagina = 5;
        this.totalRegistros = this.dadosTabela.length;
        this.filtros.total = this.totalRegistros;
        this.carregamento = true;
      }
      this.filtros.totalPaginas = Math.floor(this.dadosTabela.length / this.filtros.dadosPorPagina);
      console.log(this.dadosTabela);
      console.log('total', this.totalRegistros);
      console.log('totalPaginas', this.filtros.totalPaginas);
      console.log('dadosPorPagina', this.filtros.dadosPorPagina);
      console.log('PAgina', this.filtros.offset);
      console.log('total', this.filtros.total);
    });
  }
  onSort(y) {
   console.log(y.sorts);
   this.filtros.campoOrdenacao = y.sorts[0].prop; // campo de ordenacao
   this.filtros.tipoOrdenacao = y.sorts[0].dir; // sentido
   this.filtros.offset = 0;
    this.apiClient.pegaDados(this.filtros).subscribe( retorno => {
      this.dadosTabela = <Usuario[]> retorno;
      console.log(this.dadosTabela);
    });
  }
  filtrePor(z) {
   console.log(z);
    const val = z.target.value.toLowerCase();
    console.log(z);
    this.filtros.busca = val; // filtrando por conteudo


    this.apiClient.pegaDados(this.filtros).subscribe( retorno => {
      this.dadosTabela = <Usuario[]> retorno;
      console.log(this.dadosTabela);
    });
  }
}
