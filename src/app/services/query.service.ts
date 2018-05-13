import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService {
  constructor(private q: Http) {
  }

  where(condition: string, sorting?: string) {
    if (sorting) {
      sorting = sorting.trim().toLowerCase();
      return this.q.get(`api/search/v2/track/where/${encodeURI(condition.trim())}/sort/${sorting}`)
        .map(res => res.json());
    } else {
      return this.q.get(`api/search/v2/track/where/${encodeURI(condition.trim())}`)
        .map(res => res.json());
    }
  }
  get genreList() {
    return this.q.get('api/genre').map(res => res.json());
  }

  uploadTrack(track) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.q.post('api/track', track, { headers: headers })
      .map(res => res.json());
  }
  search(query) {
    query = query.trim().toLowerCase();
    return this.q.get('/api/search/' + query)
      .map(v => v.json());
  }

}
