import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
      <h1></h1>
       <nav>
        <a routerLink="">Главная</a>
        <a routerLink="/vocabulary">Лексика</a>
        <a routerLink="/grammar">Грамматика</a>
        <a routerLink="/improve">Улучши произношение</a>
        <a routerLink="/audi">Аудирование</a>
        <a routerLink="/about">Тех.поддержка</a>
        </nav>
      <router-outlet></router-outlet>        
  </div>`
})
export class AppComponent {
  title = 'LiteEnglish';
}
