import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

const validator = Validators.compose([Validators.required, Validators.pattern(/[\w]+/), Validators.maxLength(100)]);
@Component({
  selector: 'app-x-path',
  templateUrl: './x-path.component.html',
  styleUrls: ['./x-path.component.css']
})
export class XPathComponent implements OnInit {
  page: string;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.loginForm = fb.group({
      id: ['', validator],
      pwd: ['', validator]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.auth.login(this.loginForm.value);
  }
}
