import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  todos: { task: string, completed: boolean }[] = [];
  newTask: string = '';

  // Add a new task
  addTask() {
    if (this.newTask.trim()) {
      this.todos.push({ task: this.newTask, completed: false });
      this.newTask = ''; // Clear the input field
    }
  }

  // Delete a task
  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  // Mark a task as completed or not completed
  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
