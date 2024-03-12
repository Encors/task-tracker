import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCreateFormComponent } from './task-create-form/task-create-form.component';
import { TasksListPageComponent } from './tasks-list-page/tasks-list-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskCreateFormComponent, TasksListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
