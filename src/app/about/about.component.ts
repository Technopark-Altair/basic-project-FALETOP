import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<h3>Возникли проблемы?
  Напишите нам на почту:faleev.sasha@list.ru</h3>`
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
