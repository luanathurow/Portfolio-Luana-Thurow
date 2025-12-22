import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

//interface
import { IProjetcts } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjetcts[]>([
    {
      src: 'assets/img/projects/lalala.png',
      alt: 'projeto',
      title: 'projeto',
      with: '100px',
      height: '51px',
      descripition: '',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://lalalal',
        }
      ]
    },
  ]);
}
