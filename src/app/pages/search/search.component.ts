import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QueryService } from '../../services/query.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQueryForm: FormGroup;
  searched: boolean;
  searchResults: any[];
  constructor(private query: QueryService, private fb: FormBuilder, private route: ActivatedRoute, private meta: MetaService) {
    this.searchQueryForm = fb.group({
      search: ['', [Validators.pattern(/\s*[\d\w\$]{2,20}/), Validators.required]]
    });
  }

  ngOnInit() {
    this.meta.Title = 'Search';
    this.searched = false;
    this.loadQueryFromUrl();
  }
  onSearch() {
    this.searched = true;
    this.query.search(this.searchQueryForm.controls.search.value)
      .subscribe(v => { this.searchResults = v; });
  }
  loadQueryFromUrl() {
    this.route.params.subscribe(v => {
      if (v.q && v.q.length) {
        this.searchQueryForm.controls.search.setValue(decodeURI(v.q));
        if (this.searchQueryForm.valid) {
          this.onSearch();
        }
      }
    });
  }

}
