import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service"
import { Router } from "@angular/router";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  allTasks: any;
  title: string

  constructor(public taskService: AppService, public router: Router) {

  }
//get all tasks on app initialization
  ngOnInit() {
    this.taskService.getAllTasks().subscribe(

      data => {
        console.log(data);
        this.allTasks = data["data"];
        return this.allTasks;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }


    );


  }


//add task to tasklist
  addTask(event) {
    event.preventDefault();
    var newTask = {
      name: this.title,
    }
    this.taskService.addTask(newTask).subscribe(
      data => {

        console.log("task added")
        console.log(data);
        this.title = "";
        setTimeout(() => {
          this.router.navigateByUrl('sample', { skipLocationChange: true }).then(() =>
            this.router.navigate(["home"]));
        }, 10)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      }
    )

  }


//delete a task on button click
  deleteTask(itemId) {

    this.taskService.deleteTask(itemId).subscribe(

      data => {
        console.log(data);
        setTimeout(() => {
          this.router.navigateByUrl('sample', { skipLocationChange: true }).then(() =>
            this.router.navigate(["home"]));
        }, 10)
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);

      }
    )

  }


}
