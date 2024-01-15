export class Task {
  name: string;
  pomodoroCount: number;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  recurring: 'daily' | 'weekly' | 'monthly' | 'none';

  constructor(
    name: string,
    pomodoroCount: number,
    priority: 'low' | 'medium' | 'high',
    dueDate?: Date,
    recurring: 'daily' | 'weekly' | 'monthly' | 'none' = 'none'
  ) {
    this.name = name;
    this.pomodoroCount = pomodoroCount;
    this.priority = priority;
    this.dueDate = dueDate;
    this.recurring = recurring;
  }
}