import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

interface Project {
  id: number;
  name: string;
  desc: string;
  link: string;
  skills: string[];
  img: string;
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 0,
      name: "SH-Store-App",
      desc: "Angular Application",
      link: "https://shopping-store-1fe69.firebaseapp.com/",
      skills: ["Angular", "Typescript", "Rxjs", "Firebase", "Bootstrap", "SCSS"],
      img: "../../assets/img/SH-Store-App.png"
    },
    {
      id: 1,
      name: "Recipes Book",
      desc: "Angular project from The Complete Angular Guide course in udemy",
      link: "https://recipe-book-2-712fc.firebaseapp.com//",
      skills: ["Angular", "Typescript", "Rxjs", "Bootstrap"],
      img: "../../assets/img/Recipes-book.png"
    },
    {
      id: 2,
      name: "Kerri Template",
      desc: "Simple landing page",
      link: "https://kerri.netlify.app/",
      skills: ["Html", "Css", "Bootstrap", "SCSS", "Javascript", "jQuery", "gulpjs", "webpack"],
      img: "../../assets/img/Kerri-Template.png"
    },
    {
      id: 3,
      name: "Budgety App",
      desc: "Pure Javascript application using mvc design patter and oop",
      link: "https://mybudgety.netlify.app/",
      skills: ["Html", "Css", "Javascript"],
      img: "../../assets/img/Budgety-app.png"
    },
  ];

  projectId: string;
  projectSelected;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.params["id"];
    this.projectSelected = this.projects[+this.projectId];
  }

}
