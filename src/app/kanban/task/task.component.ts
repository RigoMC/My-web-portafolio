import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Interfaces/task';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'kanban-task',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
}
