import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth=false;

appareils= [
  {
  name:'machine à laver',
  status:'éteint'
  },
  {
  name:'machine à cuire',
  status:'allumé'
  },
  {
  name:'machine à rien',
  status:'éteint'
  }
];


  constructor(){
    setTimeout(
          ()=> {this.isAuth=true; },4000);
  }
  onAllumer(){
  console.log('on allume');}

}
