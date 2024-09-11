<template>
  <div id="app">
    <h1>My Vue App</h1>

    <div class="card">
      <h2>Todo List</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span :class="{ completed: task.completed }">{{ task.name }}</span>
          <button @click="toggleTask(index)">
            {{ task.completed ? 'Undo' : 'Complete' }}
          </button>
        </li>
      </ul>
    </div>

    <div v-if="remainingTasks > 0">
      <p>You have {{ remainingTasks }} task(s) left to complete!</p>
    </div>
    <div v-else>
      <p>All tasks are completed! Great job!</p>
    </div>

    <div>
      <h3>Add a New Task</h3>
      <input v-model="newTask" placeholder="Enter new task" />
      <button @click="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { name: 'Learn Vue.js', completed: false },
        { name: 'Build a Vue app', completed: false },
        { name: 'Explore Vue features', completed: false }
      ],
      newTask: ''
    }
  },
  computed: {
    remainingTasks() {
      return this.tasks.filter((task) => !task.completed).length
    }
  },
  methods: {
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed
    },
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ name: this.newTask, completed: false })
        this.newTask = ''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}

.card {
  background-color: #f8cbcb;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  width: 300px;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
  cursor: pointer;
}
</style>
