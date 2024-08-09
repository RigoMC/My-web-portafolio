import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { WorkareaComponent } from "./workarea/workarea.component";

@Component({
    selector: 'app-kanban',
    standalone: true,
    templateUrl: './kanban.component.html',
    styleUrl: './kanban.component.css',
    imports: [BannerComponent, WorkareaComponent]
})
export class KanbanComponent {

}
