import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  protected isLoading = true;

  protected todoList: readonly Todo[] = [];

  protected todoText = '';

  ngOnInit() {
    setTimeout(() => this.isLoading = false, 500);
  }

  protected onAddButtonClick(todoText: string) {
    this.todoList = [
      ...this.todoList,
      {
        id: this.getMaxValue(this.todoList),
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
