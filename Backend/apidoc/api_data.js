define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/todo/task",
    "title": "Add task to tasklist",
    "version": "0.0.1",
    "group": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>task name passed as a body parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\t\"error\": false,\n\t\t\t\t\"message\": \"task added successfully\",\n\t\t\t\t\"status\": 200,\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"__v\": 0,\n\t\t\t\t\t\"itemId\": \"07wgAgd11\",\n\t\t\t\t\t\"_id\": \"5b6e52d52deab037b42f844c\",\n\t\t\t\t\t\"name\": \"get tomatoes\"\n\t\t\t\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tasks.js",
    "groupTitle": "add",
    "name": "PostApiV1TodoTask"
  },
  {
    "type": "post",
    "url": "/api/v1/todo/:itemId/delete",
    "title": "delete task",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>item Id  passed as a URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t\t\t\"error\": false,\n\t\t\t\"message\": \"task Deleted Successfully\",\n\t\t\t\"status\": 200,\n\t\t\t\"data\": {\n\t\t\t\t\"n\": 1,\n\t\t\t\t\"ok\": 1\n\t\t\t\t\t}\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t  \"error\": true,\n\t  \"message\": \"Error Occured.\",\n\t  \"status\": 500,\n\t  \"data\": null\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tasks.js",
    "groupTitle": "delete",
    "name": "PostApiV1TodoItemidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/todo/:itemId/edit",
    "title": "Edit tasks by itemId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item passed as the URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " \t{\n\t\t\t\t\"error\": false,\n\t\t\t\t\"message\": \"task Edited Successfully.\",\n\t\t\t\t\"status\": 200,\n\t\t\t\t\"data\": {\n\t\t\t\t\t\"n\": 1,\n\t\t\t\t\t\"nModified\": 1,\n\t\t\t\t\t\"ok\": 1\n\t\t\t\t}\n\t\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tasks.js",
    "groupTitle": "edit",
    "name": "PutApiV1TodoItemidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/todo/task/:itemId",
    "title": "Get task by itemId",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>item id of the task passed as the URL parameter(Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Products Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"error\": false,\n\t\t\t\t\t\t\t\"message\": \"task Found Successfully.\",\n\t\t\t\t\t\t\t\"status\": 200,\n\t\t\t\t\t\t\t\"data\": {\n\t\t\t\t\t\t\t\t\"_id\": \"5b6dcf0d48f9d623744a2061\",\n\t\t\t\t\t\t\t\t\"itemId\": \"aeu-_L530\",\n\t\t\t\t\t\t\t\t\"status\": false,\n\t\t\t\t\t\t\t\t\"__v\": 0,\n\t\t\t\t\t\t\t\t\"name\": \"get bread\"\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t    \t\t]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tasks.js",
    "groupTitle": "read",
    "name": "GetApiV1TodoTaskItemid"
  },
  {
    "type": "get",
    "url": "/api/v1/todo/tasks",
    "title": "View all tasks in database",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \n    \"error\": false,\n    \"message\": \"All tasks Found\",\n    \"status\": 200,\n\t\"data\": [\n\t\t\t\t{\n\t\t\t\t\t\"itemId\": \"Z_2D0NwpJ\",\n\t\t\t\t\t\"name\": \"get cheese\"\n\t\t\t\t}\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/tasks.js",
    "groupTitle": "read",
    "name": "GetApiV1TodoTasks"
  }
] });
