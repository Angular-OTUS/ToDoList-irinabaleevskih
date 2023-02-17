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

  protected todoDescription = '';

  protected selectedItemId: number | null = null;

  ngOnInit() {
    setTimeout(() => this.isLoading = false, 500);
  }

  protected onAddClick(todoText: string,  todoDescription: string) {
    this.todoList = [
      ...this.todoList,
      {
        id: this.getMaxValue(this.todoList),
        text: todoText,
        description: todoDescription,
      },
    ];
    this.todoText = '';
    this.todoDescription = '';
  }

  protected removeItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    if (this.selectedItemId === id) {
      this.selectedItemId = null;
    }
  }

  protected selectItem(id: number): void {
    this.selectedItemId = id;
  }

  protected getDescription(): string {
    return this.todoList.find(item => item.id === this.selectedItemId)?.description ?? '';
  }

  private getMaxValue(todoList: readonly Todo[]): number {
    const idList = todoList.map(item => item.id);
    const maxValue = idList.length > 0 ? Math.max(...idList) : 0;
    return maxValue + 1;
  } 
}
