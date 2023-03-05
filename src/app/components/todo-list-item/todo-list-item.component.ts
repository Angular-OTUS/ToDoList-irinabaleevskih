import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "src/core/models/todo";

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
  public readonly selectItemByClick = new EventEmitter<number>();

  @Output()
  public readonly selectItemByDblClick = new EventEmitter<number>();

  protected onRemoveButtonClick(todoId: number): void {
    this.removeItem.emit(todoId);
  }

  protected onItemClick(todoId: number): void {
    this.selectItemByClick.emit(todoId);
  }

  protected onItemDblClick(todoId: number): void {
    this.selectItemByDblClick.emit(todoId);
  }
}
