import axios from "axios";
export async function getAllTodo() {
  try {
    let response = await axios.get("  http://localhost:3001/api/v1/todo");
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(id) {
  try {
    let response = await axios.delete(
      ` http://localhost:3001/api/v1/todo/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function createTodo(todo, state) {
  try {
    let response = await axios.post("  http://localhost:3001/api/v1/todo", {
      todo,
      state,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updateTodo(id, data) {
  try {
    let response = await axios.put(` http://localhost:3001/api/v1/todo/${id}`, {
      state: data.state,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
