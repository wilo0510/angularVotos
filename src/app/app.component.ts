import { Component } from '@angular/core';
import {Enlace} from './enlace/enlace.modelo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enlaces:Enlace[];
  constructor(){
    this.enlaces=[
      new Enlace('Angular','http://angular.io',100),
      new Enlace('Google','http://google.com',30),
      new Enlace('Youtube','http://youtube.com',20)
    ];
  }
  agregarEnlace(titulo:HTMLInputElement, enlace:HTMLInputElement){
    
    this.enlaces.push(new Enlace(titulo.value,enlace.value));
    titulo.value="";
    enlace.value="";
    return false;
  }
}
