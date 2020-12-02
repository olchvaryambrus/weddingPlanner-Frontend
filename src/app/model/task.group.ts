import { Task } from './task';

export interface TaskGroup {
    id: string;
    name: string;
    isDone: boolean;
    taskList: Task[];
}