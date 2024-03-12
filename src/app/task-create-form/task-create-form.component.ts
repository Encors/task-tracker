import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskStorageService } from '../services/task-storage.service';
import { Status } from '../models/enums/status.enum';
import { Priority } from '../models/enums/priority.enum';
import { Task } from '../models/interfaces/task.interface';
import { KeyValuePipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-task-create-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipe,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  templateUrl: './task-create-form.component.html',
  styleUrl: './task-create-form.component.scss',
})
export class TaskCreateFormComponent {
  form: FormGroup;
  priorities = Object.values(Priority);
  statuses = Object.values(Status);
  constructor(
    private fb: FormBuilder,
    private taskService: TaskStorageService,
  ) {
    this.createFormGroup();
  }
  protected createFormGroup(): void {
    this.form = this.fb.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      deadline: [null, Validators.required],
      priority: [null, Validators.required],
      status: [null, Validators.required],
      executor: [null, Validators.required],
    });
  }
  protected saveTask(): void {
    if (this.form.valid) {
      const task: Task = this.form.value;
      this.taskService.saveTasks(task);
    }
  }
}
