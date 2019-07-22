import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
  apiKey: "AIzaSyCIPdOasQDeob-9XnP02L2bKmMPW3vv30I",
  authDomain: "angularbookapp.firebaseapp.com",
  databaseURL: "https://angularbookapp.firebaseio.com",
  projectId: "angularbookapp",
  storageBucket: "angularbookapp.appspot.com",
  messagingSenderId: "290424722251",
  appId: "1:290424722251:web:945c6231a1d949c2"
    };
    firebase.initializeApp(config);
  }
}
