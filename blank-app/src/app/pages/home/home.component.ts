import { Component, OnInit } from '@angular/core';
import 'jarallax';
declare var jarallax: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    jarallax(document.querySelectorAll('.jarallax'), {
      //disableParallax: /iPad|iPhone|iPod|Android/, //need to decide with him
      speed: -0.2
    })

  }

}
