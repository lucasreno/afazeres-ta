import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  novaTarefa: string = '';
  tarefas: string[] = [];
  constructor() { }
  
  apagarTarefa(indice){
    this.tarefas.splice(indice,1);
  }

  adicionarTarefa(){
    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = '';
  }
}
