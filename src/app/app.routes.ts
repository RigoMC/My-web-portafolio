import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProjectsComponent } from './projects/projects.component';
import { KanbanComponent } from './kanban/kanban.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/kanban', component: KanbanComponent },
];
