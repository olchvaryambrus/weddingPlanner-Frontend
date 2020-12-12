import { SolutionOption } from './solution-option';
import { TaskNote } from './task-note';
import { TaskGroup } from './task.group';

export class Task {
    id: string;
    name: string;
    isDone: boolean;
    type: number;
    group: TaskGroup;
    noteList: TaskNote[];
    solutionOptions: SolutionOption[];  
    date: string;
    street: string;
    houseNum: string;
    city: string;
    postalCode: string;
}