<template>
  <div class="hello">
    <form @submit.prevent="createTodo">
      <input type="text" v-model="newTodo">
      <button type="submit">buat todo</button>
    </form>

    <nav>
      <ul>
        <li v-for="(todo, index) in todos">
          <div v-if="todo != editIndex">
            <span v-text="todo.name"></span> &nbsp; 
            <input @click="doneTodo(index)" :checked="todo.done" type="checkbox"> &nbsp; 
            <button @click="deleteTodo(index)">x</button> &nbsp; 
            <button @click="editTodo(todo)">edit</button>
          </div>

          <div v-if="todo == editIndex">
            <input type="text" v-model="editName">
            <button @click="updateTodo(index)">Update</button>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    created() {
      this.getTodo()
    },

    methods: {
      getTodo() {
        axios.get('http://localhost:8888').then(res => this.todos = res.data)
      },

      createTodo() {
        this.todos.push({
          name: this.newTodo,
          done: false
        })

        axios.post('http://localhost:8888', {name: this.newTodo})

        this.newTodo = ''
      },

      deleteTodo(index) {
        axios.delete('http://localhost:8888/' + this.todos[index].id)

        this.todos.splice(index, 1)
      },

      doneTodo(index) {
        this.todos[index].done = !this.todos[index].done

        let done = (this.todos[index].done == true) ? 1 : 0

        axios.put('http://localhost:8888/' + this.todos[index].id, {table: 'todos', done: done})
      },

      editTodo(todo) {
        this.editIndex = todo
        this.editName  = todo.name
      },

      updateTodo(index) {
        this.todos[index].name = this.editName
        axios.put('http://localhost:8888/' + this.todos[index].id, {table: 'todos', name: this.editName})

        this.editIndex         = ''
        this.editName          = ''
      }
    },

    data: () => ({
      newTodo: '',

      editIndex: '',

      editName: '',

      todos: []
    }),
  }
</script>
