import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryService } from '../../../../services/query.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;
  genres: Observable<string[]>;
  mediaCategories = [
    'video',
    'audio'
  ];
  constructor(private router: Router, private active: ActivatedRoute, private fb: FormBuilder, private query: QueryService) {
    this.uploadForm = fb.group({
      category: ['', Validators.compose([Validators.required])],
      track: ['', Validators.compose([Validators.required, Validators.pattern(/[\w]+/), Validators.maxLength(100)])],
      artist: ['', Validators.compose([Validators.required, Validators.pattern(/[\w]+/), Validators.maxLength(100)])],
      album: ['', Validators.compose([Validators.pattern(/[\w]+/), Validators.maxLength(100)])],
      contributors: ['', Validators.compose([Validators.maxLength(100)])],
      genre: '',
      is_remix: ''
    });
  }

  ngOnInit() {
    this.genres = this.query.genreList;
  }
  onSubmit() {
    const contributors = this.uploadForm.controls.contributors;
    contributors.setValue(contributors.value.split(','));
    this.query.uploadTrack(this.uploadForm.value)
      .subscribe(v => this.router.navigate(['', 'panel', 'upload-state', (v.msg === 'good' ? 'uploaded' : 'uploadfailed')]));
  }

}
