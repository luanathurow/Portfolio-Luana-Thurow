import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})

export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', alt: 'C#' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', alt: 'Angular' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', alt: 'Sql' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', alt: 'GitLab' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'Aws' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker' },
  ]);
}
