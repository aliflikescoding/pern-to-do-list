import { insertToDoDescription, getAllToDo, getIdToDo, updateToDo, deleteToDo } from "../db/queries.js";

// @desc Post a todo
// @route POST /todos
export const postATodo = async (req, res, next) => {
  try {
    const { description } = req.body;
    const newTodo = await insertToDoDescription(description);
    res.json(newTodo.rows[0]);
  } catch(err) {
    console.error(err.message);
  }
}

// @desc Get all todo's
// @route GET /todos
export const getTodo = async (req, res, next) => {
  try {
    const allTodos = await getAllToDo();
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
}

// @desc Get a todo
// @route GET /todos/:id
export const getATodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await getIdToDo(id);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
}

// @description Update a todo
// @routes UPDATE /todos/:id
export const updateATodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await updateToDo(description, id);
    res.json("To do was updated!");
  } catch (err) {
    console.log(err.message);
  }
}

// @description Delete a todo
// @routes DELETE /todos/:id
export const deleteATodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const delTodo = await deleteToDo(id);
    res.json("To do was deleted!")
  } catch (err) {
    console.log(err);
  }
}