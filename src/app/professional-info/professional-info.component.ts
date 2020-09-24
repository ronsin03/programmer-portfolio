import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.css']
})
export class ProfessionalInfoComponent implements OnInit {
  experience: { year: string; from: string; division: string; data: string; }[];
  project: { year: string; from: string; division: string; data: string; }[];

  constructor() { }

  ngOnInit() {
    this.experience = [{
      "year": "JAN'18-MAR'19",
      "from": "Codezen Tech Solutions, Mumbai",
      "division": "Automation Testing and UI Developer",
      "data": "Started with manual testing for learning the flow of the project and after that shifted to the automation testing in which developed scripts for every page in the project with error and result page, which is in form of the excel sheet. Worked in a project which helped me gain confidence. Learned concepts like Angular JS, Bootstrap, HTML, CSS, etc.Pitched, designed, optimized and managed the organizations web application projects. Maintaining and managing error occurrences in the previous and current projects. Other responsibilities included understanding client requirements to the product and solution Implementation for the same."
    },{
      "year": "MAR'19-Present",
      "from": "Leo TechnoSoft, Pune",
      "division": "Software Developer (UI)",
      "data": "Started with working in a project Immortalize where i have to develop the UI functionality using Angular JS, JavaScript of the web apps and integrated with the backend. This project is about Immortalize is an online vault of a person’s life and times up until death The site allows for mentoring and networking while a person is alive, and provides an online memorial for friends and family to remember the person once he/she has passed. Currently working on Angular 8, ReactJS where I have initiated this project from scratch like develop the architecture and modules of the projects."
    }]
    this.project = [{
      "year": "SEP’16 – JAN’17",
      "from": "United College of Engineering and Research",
      "division": "Advanced Scheduler | JAVA & MySQL",
      "data": "A smart a scheduler that lists, organizes and schedules the day to day plans. User can enter the details of his activities and gets reminders as per the plan."
    },{
      "year": "JUL’17 – OCT’17",
      "from": "NIT, Hyderabad",
      "division": "Case Studies | R programming and Machine Learning Algorithms",
      "data": "Predictive Analytics & Data Visualization Titanic Data set. Total Number of people survived and their gender.Finding Relation between clusters of people (Grouped as a Family or independent).Interpret & translate analytic output into insights. Perform multivariate analysis, predictive modelling,cluster, market basket analysis using sophisticated statistical techniques. Assess data quality, identify gaps in the data and eliminate irrelevant data."
    }]
  }
}
