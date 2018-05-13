import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { QueryService } from '../../services/query.service';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  tracks: any[];
  constructor(private sanitizer: DomSanitizer, private query: QueryService, private meta: MetaService) {
    this.getTracks();
  }

  ngOnInit() {
    this.meta.Title = 'Music';
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  getTracks() {
    this.query.where('name ne ___')
      .subscribe(v => this.tracks = v);
  }

}
