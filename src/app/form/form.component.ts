import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stand, Task } from '../logic';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() stand: Stand = new Stand()
  @Output() standChange: EventEmitter<Stand> = new EventEmitter<Stand>()

  @Input() close: boolean = false
  @Output() closeChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input() task: Task = new Task()
  @Output() taskChange: EventEmitter<Task> = new EventEmitter<Task>()

  @Input() type_form: string = ''
  @Output() event_close: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {console.log(this.stand)}, 5000)
  }
  
  public add(){
    this.stand.tasks.unshift(this.task)
    this.standChange.emit(this.stand)
    this._close()
  }

  public _close(){
    this.close = false
    this.closeChange.emit(this.close)
    this.event_close.emit()
  }
}
