import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h3>Не выучил английский в школе?
  Не беда наш сайт поможет вам.</h3>`
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
