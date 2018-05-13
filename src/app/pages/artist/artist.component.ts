import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { QueryService } from '../../services/query.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  tracks: any[] | undefined;
  artist: string | undefined;
  tracks_loaded_when_no_artist_is_selected: any[];
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private query: QueryService, private route: ActivatedRoute,
    private meta: MetaService) {
  }

  ngOnInit() {
    this.meta.Title = '@rtist';
    this.getTracks();
  }
  sanitize(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  getTracks() {
    this.route.params.subscribe(v => {
      const artist_is_in_url = decodeURI(v.artist || '').trim().length;
      if (artist_is_in_url) {
        this.query.where(`artist eq ${decodeURI(v.artist.trim())}`)
          .subscribe(v1 => {
            if (v1) {
              this.artist = v1[0].artist;
              this.tracks = v1;
            } else {
              this.chooseArtist();
            }
          });
      } else {
        this.chooseArtist();
      }
    });
  }
  chooseArtist() {
    this.query.where('artist ne _')
      .subscribe(v1 => this.tracks_loaded_when_no_artist_is_selected = v1);
  }
  getCaption() {
    return 'url';
  }
  goTo(artist) {
    this.router.navigate(['', 'artist', artist]);
  }
}
