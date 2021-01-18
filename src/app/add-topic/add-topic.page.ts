import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Storage } from '@ionic/storage';
import { Task } from 'src/Entity/Taks';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.page.html',
  styleUrls: ['./add-topic.page.scss'],
})
export class AddTopicPage implements OnInit {

  storage: Storage

  m_name: string
  m_summary: string

  tmp_task: Task

  taskArray: Array<Task>

  constructor() { }

  ngOnInit() {
  }

  submit_form()
  {
    //make a task
    this.tmp_task.name = this.m_name
    this.tmp_task.summary = this.m_summary
    
    this.taskArray.push(this.tmp_task)
    // :any is not == to Object so i will need to find a more proper way to store this

    this.storage.set("tasks", this.taskArray).then(val =>{
      console.log(val)
    })
  }

}
