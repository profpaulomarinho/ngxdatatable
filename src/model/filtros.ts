/* model/filtros.ts */
export class Filtros{
  busca: string;
  campoOrdenacao = 'id';
  tipoOrdenacao = 'desc';
  dadosPorPagina = 0;
  offset = 1; // pagina
  totalPaginas= 1;
  total = 50;
}
