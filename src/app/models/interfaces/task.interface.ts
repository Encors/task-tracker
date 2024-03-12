import { Status } from '../enums/status.enum';
import { Priority } from '../enums/priority.enum';

export interface Task {
  id: number;
  title: string;
  content: string;
  deadline: Date;
  priority: Priority;
  status: Status;
  executor: string;
}
