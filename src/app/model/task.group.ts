import { Task } from './task';

export class TaskGroup {
    id: string;
    name: string;
    isDone: boolean;
    taskList: Task[];
}