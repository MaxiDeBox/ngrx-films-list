import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Film } from '../../models/films';

@Component({
  selector: 'app-film-item',
  template: `
    <div>{{film.name}}</div>
  `,
  styles: [`
  div {
    width: 100%;
    height: 100%;
  }`]
})
export class FilmItemComponent {
  @Input() film: Film;

  constructor() { }

}
