import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Stand, Task } from './logic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'organaizer';

  public stands: Stand[] = []
  public select_stand: Stand = new Stand()
  public select_task: Task = new Task()
  public is_open_form: boolean = false

  public type: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.get_data()
  }

  public get_data() {
    this.http.get<Stand[]>('assets/tasks.json')
      .subscribe(response => this.stands = response)
  }

  public open_form_new_task(stand: Stand){
    this.type = 'stand'
    this.select_stand = stand
    this.is_open_form = !this.is_open_form
  }

  public open_form_new_stand(){ 
    this.stands.unshift(new Stand('', []))
  }

  public remove_stand(i: number){
    this.stands.splice(i, 1)
  }

  public remove_task(stand: Stand, i: number){
    stand.tasks.splice(i, 1)
  }

  public focus_input(stand: Stand){
    stand.is_edit = true
  }

  public edit_task(stand: Stand, task: Task){
    this.type = 'task'
    this.select_stand = stand
    this.select_task = task
    this.is_open_form = !this.is_open_form
  }

  public handler_close(){
    this.select_stand = new Stand()
    this.select_task = new Task()
  }
}