import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the PopularesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-populares',
  templateUrl: 'populares.html',
})
export class PopularesPage {

 
  public lista_filmes = new Array<any>();

  constructor(public navCtrl: NavController, 
    public provider: MoviesProvider) {

  }

ionViewDidLoad(){
  this.provider.getPopularMovies().subscribe(
    data => {
      const retorno = (data as any);
      this.lista_filmes = retorno.results;
      console.log(this.lista_filmes);
    }, error =>{
      console.log(error);
    }
  )
}
}
