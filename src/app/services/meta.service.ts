import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

const prefix = 'Guided Music >> ';

@Injectable()
export class MetaService {

  constructor(private title: Title) { }

  set Title(v) {
    this.title.setTitle(prefix + v);
  }
}
