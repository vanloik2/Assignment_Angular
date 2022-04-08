import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-status',
  templateUrl: './btn-status.component.html',
  styleUrls: ['./btn-status.component.css']
})
export class BtnStatusComponent implements OnInit {
@Input() status: number
@Output() changeStatus = new EventEmitter<number>()
  constructor() {
    this.status = 0
   }

  ngOnInit(): void {
    
  }

  onChangeStatus(status: number){
    this.changeStatus.emit(status)
  }

}
