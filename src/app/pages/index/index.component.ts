import { Component, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  items: any[];
  updates: any[];
  searchForm: FormGroup;
  constructor(private query: QueryService, private fb: FormBuilder, private router: Router, private meta: MetaService) {
    this.searchForm = this.fb.group({
      search: ['', [Validators.required, Validators.pattern(/^\s*[\w\d\$]{2,20}/)]]
    });
  }

  ngOnInit() {
    this.meta.Title = 'Home';
    this.loadItems();
  }
  search() {
    this.router.navigate(['', 'search', { q: encodeURI(this.searchForm.controls.search.value) }]);
  }
  private loadItems() {
    this.query.where('artist ne __', '-uploaded_on')
      .subscribe(subs => this.items = subs);
  }
}
