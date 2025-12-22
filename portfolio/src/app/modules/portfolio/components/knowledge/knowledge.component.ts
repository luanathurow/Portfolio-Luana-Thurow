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
    {
      src: 'assets/knowledge/csharp.svg',
      alt: 'Ícone de conhecimento C#',
    },
    {
      src: 'assets/knowledge/go.svg',
      alt: 'Ícone de conhecimento Go',
    },
  ]);
}
