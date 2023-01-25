import { Component } from '@angular/core';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  protected todoList: readonly Todo[] = [];

  protected todoText: string = '';

  protected onAddClick(todoList: readonly Todo[], todoText: string) {
    this.todoList = [
      ...todoList,
      {
        id: this.getMaxValue(todoList),
        text: todoText,
      },
    ];
    this.todoText = '';
  }

  protected removeItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  private getMaxValue(todoList: readonly Todo[]): number {
    const idList = todoList.map(item => item.id);
    const maxValue = idList.length > 0 ? Math.max(...idList) : 0;
    return maxValue + 1;
  } 
}
