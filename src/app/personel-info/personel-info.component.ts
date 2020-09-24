import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personel-info',
  templateUrl: './personel-info.component.html',
  styleUrls: ['./personel-info.component.css']
})
export class PersonelInfoComponent implements OnInit {
  quote: string;
  perdetail: { key: string; value: string; }[];
  education: { year: string; from: string; division: string; data: string; }[];
  extra: { value: string; }[];
  hobby: { value: string; }[];

  constructor() { }

  ngOnInit() {
    this.quote = "A motivated and technical associate with experience working in Frontend development. Skills include HTML5, CSS3, JavaScript, Angular JS, Angular 2+, React JS, MONGODB, and MySQL. Able to communicate effectively with a team and very keen to develop more professional skills."
    this.perdetail = [{
      "key": "Age",
      "value": "25"
    },{
      "key": "Residence",
      "value": "India"
    },{
      "key": "Address",
      "value": "C1-602, Eden Tower, Shankar Kalat Nagar, Wakad, Pune, Maharastra"
    },{
      "key": "e-mail",
      "value": "rohancs0077@gmail.com"
    },{
      "key": "Phone",
      "value": "+91 8931950403"
    }];
    this.education = [{
      "year": "2010",
      "from": "Udai Pratap Public School, Varanasi",
      "division": "HIGHSCHOOL",
      "data": "with 7.6 CGPA. Coursework in Physics, Chemistry, Maths, and General Studies."
    },{
      "year": "2012",
      "from": "Udai Pratap Public School, Varanasi",
      "division": "INTERMEDIATE",
      "data": "with 61%. Coursework in Physics, Chemistry and Maths."
    },{
      "year": "2013-2017",
      "from": "United College of Engineering and Research, Allahabad",
      "division": "Computer Science and Engineering",
      "data": "with 70%. Majored in Operating System, Data Structure, Algorithm, and Software Engineering."
    }];
    this.extra = [{
      "value":"Participated in Android workshop organised by IIT-BHU."
    },{
      "value":"Participated in Web-development workshop organised by IIT-Roorkee."
    },{
      "value":"Participated in School Cricket Tournament. Appointed as a House Captain."
    },{
      "value":"Worked as the Volunteer in the college Fest."
    }];
    this.hobby = [{
      "value":"Problem-solving puzzles."
    },{
      "value":"Strategies games like chess."
    },{
      "value":"Reading books."
    },{
      "value":"Playing games."
    }];
  }

}
