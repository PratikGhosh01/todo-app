// importing modules
const express = require('express')
const router = express.Router();
const appController = require('./../controllers/todoController')


const appConfig = require('./../config/appConfig')

let setRouter = (app) => {

	let baseUrl = appConfig.apiVersion + '/todo';

	app.get(baseUrl + "/tasks", appController.getAllTasks)


    /**
	 * @api {get} /api/v1/todo/tasks  View all tasks in database
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            
    "error": false,
    "message": "All tasks Found",
    "status": 200,
	"data": [
				{
					"itemId": "Z_2D0NwpJ",
					"name": "get cheese"
				}
            ]
        }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       
	 */



	app.get(baseUrl + "/task/:itemId", appController.getSingleTask)


    /**
	 * @api {get} /api/v1/todo/task/:itemId Get task by itemId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * 
	 * @apiParam {String} itemId item id of the task passed as the URL parameter(Required)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Products Found Successfully.",
	    "status": 200,
	    "data": [
						{
							"error": false,
							"message": "task Found Successfully.",
							"status": 200,
							"data": {
								"_id": "5b6dcf0d48f9d623744a2061",
								"itemId": "aeu-_L530",
								"status": false,
								"__v": 0,
								"name": "get bread"
									}
						}
	    		]
	    }
		
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


	app.post(baseUrl + "/task", appController.addTask)


    /**
	 * @api {post} /api/v1/todo/task Add task to tasklist
	 * @apiVersion 0.0.1
	 * @apiGroup add
	 *
	 * 
	 * @apiParam {String} name task name passed as a body parameter(Required)
     * 
	 * 
     * 
	 *  @apiSuccessExample {json} Success-Response:
	*  {
				"error": false,
				"message": "task added successfully",
				"status": 200,
				"data": {
					"__v": 0,
					"itemId": "07wgAgd11",
					"_id": "5b6e52d52deab037b42f844c",
					"name": "get tomatoes"
						}
		}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
       }
       
	 */

	app.post(baseUrl + "/:itemId/delete", appController.deleteTask)

	/**
   * @api {post} /api/v1/todo/:itemId/delete delete task 
   * @apiVersion 0.0.1
   * @apiGroup delete
   *
   * 
   * @apiParam {String} itemId item Id  passed as a URL parameter(Required)
   * 
   *
   *  @apiSuccessExample {json} Success-Response:
   *  {
			"error": false,
			"message": "task Deleted Successfully",
			"status": 200,
			"data": {
				"n": 1,
				"ok": 1
					}
		}
	@apiErrorExample {json} Error-Response:
   *
   * {
	  "error": true,
	  "message": "Error Occured.",
	  "status": 500,
	  "data": null
	 }
	 
   */

	app.put(baseUrl + "/:itemId/edit", appController.editTask)


    /**
	 * @api {put} /api/v1/todo/:itemId/edit Edit tasks by itemId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} itemId itemId of the item passed as the URL parameter(Required)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  	{
				"error": false,
				"message": "task Edited Successfully.",
				"status": 200,
				"data": {
					"n": 1,
					"nModified": 1,
					"ok": 1
				}
			}
		
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */
}

/** Run this command : apidoc -i routes/ -o apidoc/ */
module.exports = {
	setRouter: setRouter
}