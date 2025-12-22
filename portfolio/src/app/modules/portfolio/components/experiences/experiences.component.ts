import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
 public arrayExperiences = signal<IExperiences[]>([
  {
    summary: {
      strong: 'Software Engineer 1',
      p: 'DELL | jun 2025 - present',
    },
    text: '<p>Know im skjw</p>',
  },
  {
    summary: {
      strong: 'Software Engineer Intern',
      p: 'DELL | jun 2023 - Jun 2023',
    },
    text: '<p>Know im skjw<p/>',
  }
 ]);
}
