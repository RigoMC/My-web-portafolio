import { Component, Input } from '@angular/core';
import { Project } from '../../Interfaces/project';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() project?: Project;
}
