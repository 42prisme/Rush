import { Component } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Task } from 'src/Entity/Taks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks : Array<Task>

  constructor(private storage: Storage) 
  {
    this.tasks = this.loadTasks(storage)
  }

  loadTasks(storage: Storage) : Array<Task>
  {
    storage.get("tasks").then((val)=>{
      this.tasks = val
      return this.tasks
    })
    return null
  }

}
