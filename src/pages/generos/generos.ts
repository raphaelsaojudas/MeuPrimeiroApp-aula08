import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';


@IonicPage()
@Component({
  selector: 'page-generos',
  templateUrl: 'generos.html',
})
export class GenerosPage {

  public lista_genero = new Array<any>(); 

  constructor(public navCtrl: NavController, 
    public provider: MoviesProvider) {

  }

ionViewDidLoad(){
  this.provider.getGeneroMovies().subscribe(
    data =>{
      const retorno = (data as any);
      this.lista_genero =retorno.genres;
      console.log(this.lista_genero);
    }, error =>{
      console.error(error);
    }
  )
}
}
