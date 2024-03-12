import { createAction, props } from '@ngrx/store';
import { Task } from './models/interfaces/task.interface';

export const loadTasks = createAction('[Task List] Load Tasks');
export const loadTasksSuccess = createAction(
  '[Task List] Load Tasks Success',
  props<{ tasks: Task[] }>(),
);
export const saveTaskSuccess = createAction(
  '[Task List] Save Task Success',
  props<{ task: Task }>(),
);
