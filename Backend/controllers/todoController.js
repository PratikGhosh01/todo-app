// importing modules
const express = require('express')
const mongoose = require('mongoose')
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')
/* Models */
const todoModel = mongoose.model('todoList')

//get all tasks
let getAllTasks = (req, res) => {
    todoModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'todo Controller: getAllTasks', 10)
                let apiResponse = response.generate(true, 'Failed To Find task Details', 500, null)
                res.send(apiResponse)
            } else if (result == undefined || result == null || result == '') {
                logger.info('No tasks Found', 'todo Controller: getAllTasks')
                let apiResponse = response.generate(true, 'No tasks Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All tasks Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end getAllTasks

//get single task
let getSingleTask = (req, res) => {

    if (check.isEmpty(req.params.itemId)) {

        console.log('itemId should be passed')
        let apiResponse = response.generate(true, 'itemId is missing', 403, null)
        res.send(apiResponse)
    } else {

        todoModel.findOne({ 'itemId': req.params.itemId }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('task Not Found.')
                let apiResponse = response.generate(true, 'task Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("task found successfully", "todo Controller:getSingleTask", 5)
                let apiResponse = response.generate(false, 'task Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}// end getSingleTask


//edit a task
let editTask = (req, res) => {

    if (check.isEmpty(req.params.itemId)) {

        console.log('itemId should be passed')
        let apiResponse = response.generate(true, 'itemId is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        console.log(options);
        todoModel.update({ 'itemId': req.params.itemId }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {

                console.log('task Not Found.')
                let apiResponse = response.generate(true, 'task Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('task Edited Successfully')
                let apiResponse = response.generate(false, 'task Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//end editTask

//delete a task
let deleteTask = (req, res) => {

    if (check.isEmpty(req.params.itemId)) {

        console.log('itemId should be passed')
        let apiResponse = response.generate(true, 'itemId is missing', 403, null)
        res.send(apiResponse)
    } else {

        todoModel.remove({ 'itemId': req.params.itemId }, (err, result) => {
            if (err) {
                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('task Not Found.')
                let apiResponse = response.generate(true, 'task Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                console.log('task Deletion Success')
                let apiResponse = response.generate(false, 'task Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}//deleteTask

//add task 
let addTask = (req, res) => {
    let addTaskFunction = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body)
            if (check.isEmpty(req.body.name)) {

                console.log("403, forbidden request");
                let apiResponse = response.generate(true, 'required parameters are missing', 403, null)
                reject(apiResponse)
            } else {


                let itemId = shortid.generate()

                let newTask = new todoModel({

                    itemId: itemId,
                    name: req.body.name,



                })



                newTask.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in task creation')
                        resolve(result)
                    }
                })
            }
        })
    } //end addTask


    addTaskFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'task added successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}


//exporting modules
module.exports = {

    getAllTasks: getAllTasks,
    getSingleTask: getSingleTask,
    addTask: addTask,
    editTask: editTask,
    deleteTask: deleteTask


}// end exports