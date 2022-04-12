import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {

    @Input() formField : any;
    @Input() key : string

  constructor() { 
    this.formField = ''
    this.key = ''
  }

  ngOnInit(): void {
    
  }

}
