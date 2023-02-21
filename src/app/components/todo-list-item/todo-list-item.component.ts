import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input()
  public item!: Todo;

  @Input()
  public isSelected!: boolean;

  @Output()
  public readonly removeItem = new EventEmitter<number>();

  @Output()
  public readonly selectItem = new EventEmitter<number>();

  protected onRemoveButtonClick(todoId: number): void {
    this.removeItem.emit(todoId);
  }

  protected onItemClick(todoId: number): void {
    this.selectItem.emit(todoId);
  }
}
