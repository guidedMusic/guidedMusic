import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload-state',
  templateUrl: './upload-state.component.html',
  styleUrls: ['./upload-state.component.css']
})
export class UploadStateComponent implements OnInit {
  page: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(v => this.page = v.page);
  }

  ngOnInit() {
  }

}
