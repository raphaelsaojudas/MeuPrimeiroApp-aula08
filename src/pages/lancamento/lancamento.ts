import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

@IonicPage()
@Component({
  selector: 'page-lancamento',
  templateUrl: 'lancamento.html',
})
export class LancamentoPage {
  public lista_lancamentos = new Array<any>();
  public prefixUrl: string = 'http://image.tmdb.org/t/p/w300'


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public provider: MoviesProvider) {
  }

  ionViewDidLoad() {
    this.provider.getLancamentoMovies().subscribe(
      data => {
        const retorno = (data as any);
        this.lista_lancamentos = retorno.results;
        console.log(this.lista_lancamentos);
      }, error =>{
        console.log(error);
      }
    )
  }

}
