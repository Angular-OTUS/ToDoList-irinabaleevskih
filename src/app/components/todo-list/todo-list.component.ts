import { Component, OnInit, ViewChild } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatInput } from '@angular/material/input';

import { Todo } from 'src/core/models/todo';
import { TodoListService } from 'src/core/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('titleInput', { read: MatInput })
  public readonly titleInput?: MatInput;
  
  protected isLoading = true;

  protected todoText = '';

  protected todoDescription = '';

  protected selectedItemId: number | null = null;

  protected editedItemId: number | null = null;

  protected readonly titleControl = this.fb.control<string>('');

  protected get todoList(): readonly Todo[] {
    return this.todoListService.todoList;
  }

  public constructor(
    private readonly todoListService: TodoListService,
    private readonly fb: NonNullableFormBuilder,
  ) { }

  ngOnInit() {
    setTimeout(() => this.isLoading = false, 500);
  }

  protected onAddClick(todoText: string,  todoDescription: string) {
    this.todoListService.addItem(todoText, todoDescription);
    this.todoText = '';
    this.todoDescription = '';
  }

  protected removeItem(id: number): void {
    this.todoListService.removeItem(id);
    if (this.selectedItemId === id) {
      this.selectedItemId = null;
    }
  }

  protected setSelectedItem(id: number): void {
    this.selectedItemId = id;
  }
  
  protected setEditedItem(id: number, title: string): void {
    this.editedItemId = id;
    this.titleControl.patchValue(title);
    setTimeout(() => {
      this.titleInput?.focus();
    }, 0);
  }

  protected getDescription(): string {
    return this.todoList.find(item => item.id === this.selectedItemId)?.description ?? '';
  }

  protected onSave(id: number, title: string): void {
    this.todoListService.editItem(id, title);
    this.editedItemId = null;
  }

  protected trackById(_index: number, item: Todo): number {
    return item.id;
  }
}
