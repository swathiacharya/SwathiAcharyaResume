import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swathi-portfolio';




  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  images: any[] = [
    "../assets/certificate/Infosys/InfosysCertifiedDatabaseandSQLProfessional.jpg",
    "../assets/certificate/doc.jpg",
    "../assets/certificate/git.jpg",
    "../assets/certificate/js.jpg",
    "../assets/certificate/ai.png",

    "../assets/certificate/angular.jpg",
    "../assets/certificate/ts.jpg",

    "../assets/certificate/dams.jpg",
    "../assets/certificate/java.jpg",


    // INFY CERTIFICATE

    "../assets/certificate/Infosys/Database_Management_System_Part-1.jpg",
    "../assets/certificate/Infosys/Essentials_of_Cloud_Computing.jpg",
    "../assets/certificate/Infosys/Introduction_to_Artificial_Intelligence.jpg",
    "../assets/certificate/Infosys/Introduction_to_Business_Intelligence.jpg",
    "../assets/certificate/Infosys/Introduction_to_Data_Warehouse.jpg",
    "../assets/certificate/Infosys/Introduction_to_NoSQL_databases.jpg",    
    "../assets/certificate/Infosys/Introduction_to_snowflake_data_warehouse.jpg",
    "../assets/certificate/Infosys/Java_11_Beyond_Basics.jpg",
    "../assets/certificate/Infosys/Java_11_Essentials.jpg",
    "../assets/certificate/Infosys/Snowflake_Data_Warehouse.jpg",
    "../assets/certificate/Infosys/SQL_for_data_analysis.jpg",
    "../assets/certificate/Infosys/Teradata_Basics.jpg",

  ]


  projectDetail: any[] = [
    {
      "projectName": "Emotional Recognition Using EEG",
      "descrption":"Brain waves emotion analysis is the most novel method of emotion analysis at present. Human emotion is very difficult to determine just by looking at the face  and the behaviour of a person.  The aim is to develop a program that can detect human emotions quickly and easily."
      ,
      "subname": "Machine Learning",
      "date": " Dec,2020-Jun 2021",

      "languageTool": "Python, Flask"
    },

    {
      "projectName": "Online Tutor",
      "subname": "Web-Based Mini Project",
      "date": " Nov, 2020 - Jan, 2021",
      "descrption": "As the name specifies 'ONLINE TUTOR' is a software developed for managing online classes between tutors and students. Studying online at your own convenience allows you to no longer worry about class location when choosing what to learn next. By taking an online course. you can really focus on the subject you are interested in and choose from the variety of online courses and programs.",
      "languageTool": "Html, CSS, Bootstrap, Javascript, PHP, MySQL."

    },

    {
      "projectName": "FixRep",
      "subname": "Mobile App",
      "date": "Aug, 2020 - Nov, 2020",
      "descrption": "The app is based on the e-HomeService. The main idea is to give service to the local community house chores. Here, if the user has any issue regarding household repair, just has to post the query to admin. Based on the Query if they can solve it by themself, the admin will instruct how to repair it. If the repair into done by the admin itself, then the admin will repair the broken household stuff.",
      "languageTool": "Dart, FireBase Console."

    },

    {
      "projectName": "Crop Database Management System",
      "subname": "RDBMS Mini Project",
      "date": " Sep, 2019 - Dec, 2019",
      "descrption": "The purpose of the crops database management system is to automate the process involved. The main goal is to minimize the workload of the officer in the agricultural field. The data stored can be accessed and can be manipulated easily. The objective of this project includes various types of agricultural officers to manage the huge amount of data on crops with various types of credentials.",
      "languageTool": "Java, MySQL, Eclipse."

    },
  ]

  be = {
    "name": "Sahyadri College Of Engineering and Management",
    "time": "2017 - 2021", "mark": "8.99", "place": "Mangaluru, India", "course": "Computer Science & Engineering"
  }

  puc = {
    "name": "Govinda Dasa Pre University College	",
    "time": "2015 - 2017", "course": "PCMB", "mark": "87.67", "place": "Mangaluru, India"
  }


  school = {
    "name": "Vidyadayinee English Medium School  ",
    "time": "2014- 2015", "mark": "91.84", "place": "Mangaluru, India"
  }


  article: any[] = [
    
    {
      "name": "Registration Form using Angular and MySQL",
      "link": "https://acharyaswathi999.medium.com/registration-form-using-angular-and-mysql-fbffc31afb2a"
    },
    {
      "name": "Sahyadri Spring E-Magazine - 2020",
      "link": "https://sahyadri.edu.in/newcampusbuzz/emagazine/FINAL%20COPY%20OF%20E-Magazine%202020.pdf"
    },
    {
      "name": "Sahyadri Spring E-Magazine - 2019",
      "link": "https://sahyadri.edu.in/files/emj/E-Magazine-2019-web.pdf"
    },
    {
      "name": "Binary Search Tree Implementation In Java",
      "link": "https://acharyaswathi999.medium.com/binary-search-tree-implementation-in-java-50656802d690"
    },
    {
      "name": "Adjacency List Representation For A Graph in Java",
      "link": "https://acharyaswathi999.medium.com/adjacency-list-representation-for-a-graph-in-java-772dd90a6a5a"
    }
  ]




}
