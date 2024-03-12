import { createReducer, on } from '@ngrx/store';

import { loadTasksSuccess, saveTaskSuccess } from './task.actions';

import { Task } from './models/interfaces/task.interface';

export interface AppState {
  tasks: Task[];
}

export const initialState: ReadonlyArray<Task> = [];

export const taskReducer = createReducer(
  initialState,
  on(loadTasksSuccess, (state, { tasks }) => tasks),
  on(saveTaskSuccess, (state, { task }) => [...state, task]),
);
