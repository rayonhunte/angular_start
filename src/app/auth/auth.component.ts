import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  regPage = this.fb.group({
    email: ['', [Validators.required]],
    first: ['', [Validators.required]],
    last: ['', [Validators.required]],
  })

}
