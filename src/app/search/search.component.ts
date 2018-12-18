import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchWord: string;
  searchType: string;

  searchFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(30)
  ]);

  constructor() {
    this.searchWord = 'b';
    this.searchType = 'post';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.searchWord = this.searchFormControl.value;
    this.searchType = 'post';
  }

}
