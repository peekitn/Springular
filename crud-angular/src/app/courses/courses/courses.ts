import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { Course } from '../model/course'; // 👈 AJUSTA O CAMINHO SE PRECISAR

@Component({
  selector: 'app-courses',
  standalone: true, // 👈 MUITO IMPORTANTE
  imports: [MatTableModule, MatCardModule, MatToolbar],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Frontend' },
    { _id: '2', name: 'Spring Boot', category: 'Backend' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
