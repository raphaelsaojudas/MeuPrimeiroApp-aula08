import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MoviesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }

  getPopularMovies(){
   var url = 'https://api.themoviedb.org/3/movie/popular?page=1&language=pt-BR&api_key=60b8c8663c5b8544a67b2192f513891f';
   return this.http.get(url);
  }

  getGeneroMovies(){
    var url = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR&api_key=60b8c8663c5b8544a67b2192f513891f';
    return this.http.get(url);
   }

   getLancamentoMovies(){
    var url = 'https://api.themoviedb.org/3/movie/upcoming?page=1&language=pt-BR&api_key=60b8c8663c5b8544a67b2192f513891f';
    return this.http.get(url);
   }


  

}
