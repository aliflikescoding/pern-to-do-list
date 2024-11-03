import pool from "./pool.js";

export async function insertToDoDescription(description) {
  const result = await pool.query(
    "INSERT INTO todo (todo_desc) VALUES ($1) RETURNING *",
    [description]
  );
  return result;
}

export async function getAllToDo() {
  const result = await pool.query("SELECT * FROM todo");
  return result;
}

export async function getIdToDo(id) {
  const result = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
    id,
  ]);
  return result;
}

export async function updateToDo(description, id) {
  const result = await pool.query(
    "UPDATE todo SET todo_desc = $1 WHERE todo_id = $2", [description, id]
  );
  return result;
}

export async function deleteToDo(id) {
  const result = await pool.query(
    "DELETE FROM todo WHERE todo_id = $1", [id]
  )
  return result;
}