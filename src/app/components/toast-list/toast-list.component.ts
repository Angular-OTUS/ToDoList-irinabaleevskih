import { Component } from "@angular/core";
import { Toast } from "src/core/models/toast";
import { ToastListService } from "src/core/services/toast-list.service";

@Component({
  selector: 'app-toast-list',
  templateUrl: './toast-list.component.html',
  styleUrls: ['./toast-list.component.scss'],
})
export class ToastListComponent {
  protected get toasts() {
    return this.toastListService.getToasts();
  }

  public constructor(
    private readonly toastListService: ToastListService,
  ) { }

  protected trackById(_index: number, item: Toast): string {
    return item.id;
  }
}
