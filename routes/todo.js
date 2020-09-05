const express = require('express')
const router = express.Router();
const todoController =  require ("../controllers/todo")


    router.get('/todo', todoController.getToDos)

    router.get('/todo/:id', todoController.getToDosById)

  router.post('/todo', todoController.postToDos)

  router.put('/todo/:id', todoController.putToDos)

router.delete('/todo/:id', todoController.deleteToDos)


  module.exports = router;