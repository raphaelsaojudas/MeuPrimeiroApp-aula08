import { Component } from '@angular/core';

import { GenerosPage } from '../generos/generos';
import { PopularesPage } from '../populares/populares';
import { HomePage } from '../home/home';
import { LancamentoPage } from '../lancamento/lancamento';



@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GenerosPage;
  tab3Root = PopularesPage;
  tab4Root = LancamentoPage;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
