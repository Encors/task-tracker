import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { loadTasks, loadTasksSuccess } from '../task.actions';
import { Actions, ofType } from '@ngrx/effects';
import { Task } from '../models/interfaces/task.interface';
import { AppState } from '../task.reducer';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-tasks-list-page',
  standalone: true,
  imports: [
    MatListModule,
    CdkTableModule,
    MatTableModule,
    DatePipe,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './tasks-list-page.component.html',
  styleUrl: './tasks-list-page.component.scss',
})
export class TasksListPageComponent implements OnInit {
  tasks: Task[]; // Изменили тип на Task[]
  displayedColumns: string[] = ['task', 'status', 'executor', 'deadline'];
  dataSource: MatTableDataSource<Task>;
  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
  ) {}

  ngOnInit() {
    this.actions$.pipe(ofType(loadTasksSuccess), first()).subscribe(() => {
      this.store
        .select((state) => state.tasks)
        .subscribe((tasks) => {
          this.tasks = tasks;
          this.dataSource = new MatTableDataSource(this.tasks);
        });
    });
    this.store.dispatch(loadTasks());
  }
}
