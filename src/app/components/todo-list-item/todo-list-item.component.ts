import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input()
  public itemValue?: Todo;

  @Output()
  public readonly removeItem = new EventEmitter<number>();

  protected onRemoveItemClick(todoId: number): void {
    this.removeItem.emit(todoId);
  }
}
