import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Instagram';

  ngOnInit(): void {
    
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAiWvc4EBI9V6sfeg3kqzfbFDIsIqgull0",
      authDomain: "jta-instagram-clone-e6723.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-e6723.firebaseio.com",
      projectId: "jta-instagram-clone-e6723",
      storageBucket: "jta-instagram-clone-e6723.appspot.com",
      messagingSenderId: "383795521692"
    };

    firebase.initializeApp(config)
  }
}
