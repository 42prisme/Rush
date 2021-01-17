import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { Topic } from '../topic/topic.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//*ngFor="let task of tasks"
  tasks:[] //key tasks

//task model
  Task = {
    id: Number,
    name: String,
    summary: String,
    axes: String[0],
    links: String[0],
    notes: String
  }

  constructor(private storage: Storage) 
  {
    storage.get("tasks").then((val)=>{
      this.tasks = val
    })
    this.Task.name = 'Seat'
    this.Task.priority = 3
    this.Task.summary = "clim, couroie, voyant airbag, amortisseur"
  }

  gotoTask(route:Router, taskId: String)
  {
    route.navigate(['/topic/'+taskId])
  }

  new_task()
  {
  }


}
