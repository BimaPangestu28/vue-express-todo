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
            <input @click="doneTodo(index)" type="checkbox"> &nbsp; 
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
  export default {
    methods: {
      createTodo() {
        this.todos.push({
          name: this.newTodo,
          done: false
        })

        this.newTodo = ''
      },

      deleteTodo(index) {
        this.todos.splice(index, 1)
      },

      doneTodo(index) {
        this.todos[index].done = !this.todos[index].done
      },

      editTodo(todo) {
        this.editIndex = todo
        this.editName  = todo.name
      },

      updateTodo(index) {
        this.todos[index].name = this.editName
        this.editIndex         = ''
        this.editName          = ''
      }
    },

    data: () => ({
      newTodo: '',

      editIndex: '',

      editName: '',

      todos: [
        {
          id: 1,
          name: 'Makan pagi',
          done: false
        },
        {
          id: 2,
          name: 'Minum pagi',
          done: true
        },
        {
          id: 3,
          name: 'Lari pagi',
          done: false
        },
      ]
    }),
  }
</script>
