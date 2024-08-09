import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Project } from '../Interfaces/project';
@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [CardComponent],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 0,
      img: 'https://via.placeholder.com/600x400',
      title: 'Project Title',
      description: 'Project description',
      technologies: [
        {
          id: 0,
          name: 'Angular',
          color: 'red',
        },
        {
          id: 1,
          name: 'CSS',
          color: 'green',
        },
        {
            id: 2,
            name: 'Typescript',
            color: 'blue',
          },
      ],
    },
  ];
}
