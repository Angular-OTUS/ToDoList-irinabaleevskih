import { Injectable } from "@angular/core";
import { Toast } from "../models/toast";

@Injectable({ providedIn: 'root' })
export class ToastListService {
  public toasts: Toast[] = [];
 
  public show(toast: Toast, duration = 5000): void {
    this.toasts.push(toast);
    setTimeout(() => {
      this.remove(toast)
    }, duration);
  }

  public remove(toast: Toast): void {
    this.toasts = this.toasts.filter(item => item.id !== toast.id);
  }

  public getToasts(): Toast[] {
    return this.toasts;
  }
}
