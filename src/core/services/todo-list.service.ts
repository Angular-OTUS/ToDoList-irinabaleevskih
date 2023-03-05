import { Injectable } from "@angular/core";
import { Todo } from "../models/todo";
import { ToastListService } from "./toast-list.service";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "../models/toast";

@Injectable({ providedIn: 'root' })
export class TodoListService {
  public todoList: readonly Todo[] = [];

  public constructor(
    private readonly toastListService: ToastListService,
  ) { }

  public addItem(todoText: string,  todoDescription: string) {
    this.todoList = [
      ...this.todoList,
      {
        id: this.getMaxValue(this.todoList),
        text: todoText,
        description: todoDescription,
      },
    ];
    const toast: Toast = {
      id: uuidv4(),
      message: `Todo "${todoText}" has been added`,
    }
    this.toastListService.show(toast);
  }

  public removeItem(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    const toast: Toast = {
      id: uuidv4(),
      message: `Todo has been deleted`,
    }
    this.toastListService.show(toast);
  }

  public editItem(id: number, newValue: string): void {
    const editedItem = this.todoList.find(item => item.id === id);
    if (editedItem) {
      editedItem.text = newValue;
    }
    const toast: Toast = {
      id: uuidv4(),
      message: `Todo title has been changed to "${newValue}"`,
    }
    this.toastListService.show(toast);
  }

  private getMaxValue(todoList: readonly Todo[]): number {
    const idList = todoList.map(item => item.id);
    const maxValue = idList.length > 0 ? Math.max(...idList) : 0;
    return maxValue + 1;
  }
}
