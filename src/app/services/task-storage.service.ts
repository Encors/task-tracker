import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';

import { Store } from '@ngrx/store';
import { saveTaskSuccess } from '../task.actions';
import { Task } from '../models/interfaces/task.interface';
import { AppState } from '../task.reducer';

@Injectable({
  providedIn: 'root',
})
export class TaskStorageService {
  constructor(private store: Store<AppState>) {}

  getTasks(): Observable<Task[]> {
    const storageTasks = localStorage.getItem('tasks');
    const tasks = storageTasks ? JSON.parse(storageTasks) : [];
    return of(tasks);
  }

  saveTasks(task: Task): void {
    this.getTasks()
      .pipe(take(1))
      .subscribe((existingTasks) => {
        existingTasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(existingTasks));
        this.store.dispatch(saveTaskSuccess({ task }));
      });
  }
}
