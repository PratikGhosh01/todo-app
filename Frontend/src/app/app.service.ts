import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do'

@Injectable()
export class AppService {

  public baseUrl = "http://localhost:3000/api/v1/todo";

  constructor(public _http: HttpClient) {

  }
  //get all tasks
  getAllTasks(): any {

    let myResponse = this._http.get(this.baseUrl + '/tasks')
    return myResponse;

  }// end get all tasks

  //add new task
  addTask(newTask): any {

    let myResponse = this._http.post(this.baseUrl + '/task', newTask)
    return myResponse;

  }// end get new task

  //delete a task
  deleteTask(itemId): any {

    let myResponse = this._http.post(this.baseUrl + "/" + itemId + '/delete', itemId)
    return myResponse;

  }// end delet task


}



