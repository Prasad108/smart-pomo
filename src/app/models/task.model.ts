export class Task {
  name: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  status: 'not started' | 'in progress' | 'completed';
  tags: string[];
  duration?: number; // in minutes
  checklist: string[];
  attachments: string[]; // file paths or links
  reminders: Date[];
  collaborators: string[];
  recurring: {
    frequency: 'daily' | 'weekly' | 'monthly';
    interval: number;
  };

  constructor(
    name: string,
    description: string,
    priority: 'low' | 'medium' | 'high',
    dueDate?: Date,
    status: 'not started' | 'in progress' | 'completed' = 'not started',
    tags: string[] = [],
    duration?: number,
    checklist: string[] = [],
    attachments: string[] = [],
    reminders: Date[] = [],
    collaborators: string[] = [],
    recurring: {
      frequency: 'daily' | 'weekly' | 'monthly';
      interval: number;
    } = {
        frequency: "daily",
        interval: 0
    } 
  ) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
    this.tags = tags;
    this.duration = duration;
    this.checklist = checklist;
    this.attachments = attachments;
    this.reminders = reminders;
    this.collaborators = collaborators;
    this.recurring = recurring;
  }
}
