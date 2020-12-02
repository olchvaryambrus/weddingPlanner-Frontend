import { SolutionOption } from './solution-option';
import { TaskNote } from './task-note';
import { TaskGroup } from './task.group';

export class Task {
    id: string;
    name: string;
    isDone: boolean;
    group: TaskGroup;
    noteList: TaskNote[];
    solutionOptions: SolutionOption[];
}