/*------------------
-- Define Objects --
------------------*/

var bio = {
  "name" : "Evan Ponter",
  "role" : "Salesforce Administrator",
  "contacts" : {
    "mobile" : "571-244-2786",
    "email" : "etponter@gmail.com",
    "github" : "RealEvanPonter",
    "twitter" : "@RealEvanPonter",
    "location" : "Baltimore, MD"
  },
  "welcomeMessage" : "Well, hello there. Welcome to my interactive resume.",
  "skills" : [
    "JavaScript", "jQuery", "HTML", "CSS", "Salesforce", "Music", "Guitar", "Bass"
  ],
  "bioPic" : "images/fry.jpg",
  "display" : function() {
    
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(formattedRole);
    
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $('#header').prepend(formattedName);
    
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedGitHub);
    
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);
    
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    $("#footerContacts").append(formattedLocation);
    
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);
    
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      
      for (var skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
    }
  }
};

var work = {
  "jobs" : [
    {
      "employer" : "Astrum Solar",
      "title" : "Salesforce Administrator",
      "location" : "Annapolis Junction, MD",
      "dates" : "2/23/2015 - present",
      "description" : "Support all roles within the company with any Salesforce concerns"
    },
    {
      "employer" : "UMBC Training Centers",
      "title" : "Systems Analyst",
      "location" : "Columbia, MD",
      "dates" : "9/11/2012 - 2/20/2015",
      "description" : "Responsible for all enterprise software including Salesforce, Blackboard, Kentico, SurveyGizmo, and Adobe Connect"
    }
  ],
  "display" : function() {
    for (var job in work.jobs) {
      $('#workExperience').append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $('.work-entry:last').append(formattedEmployerTitle);
      
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      $('.work-entry:last').append(formattedDates);
      
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      $('.work-entry:last').append(formattedLocation);
      
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $('.work-entry:last').append(formattedDescription);
    }
  }
};

var projects = {
  "projects" : [
    {
      "title" : "The Last to Fire Website",
      "dates" : "Ongoing",
      "description" : "A website for my band. I built the entire thing from scratch using HTML and CSS. I did not use the Twitter Bootstrap framework. This website is responsive.",
      "images" : [
        "images/LtFLogo.png", "images/bandCamp.png", "images/album.png"
      ]
    },
    {
      "title" : "Interactive Resume",
      "dates" : "March 2015",
      "description" : "A website that displayed an interactive resume",
      "images" : [
        "images/website.png"
      ]
    },
    {
      "title" : "My First Udacity Project",
      "dates" : "February 2015",
      "description" : "A basic website that showcased a mug and all the wonderful things it could do.",
      "images" : [
        "images/mug.png"
      ]
    },
    {
      "title" : "My First Website",
      "dates" : "February 2015",
      "description" : "A basic website that allowed me to experiment with HTML.",
      "images" : [
        "images/app.png"
      ]
    }
  ],
  "display" : function() {
    for (var project in projects.projects) {
      $('#projects').append(HTMLprojectStart);
      
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $('.project-entry:last').append(formattedTitle);
      
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $('.project-entry:last').append(formattedDates);
      
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $('.project-entry:last').append(formattedDescription);
      
      for (var img in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
};

var education = {
  "schools" : [
    {
      "name" : "University of Maryland, Baltimore County",
      "location" : "Baltimore, MD",
      "degree" : "Bachelors of Arts",
      "majors" : "Music Entrepreneurship",
      "dates" : 2012,
      "url" : "http://www.umbc.edu"
    },
    {
      "name" : "McDonough High School",
      "location" : "Pomfret, MD",
      "degree" : "High School Diploma",
      "majors" : "",
      "dates" : 2008,
      "url" : "http://www.edline.net/pages/maurice_j__mcdonough_high_scho"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Development",
      "school" : "Udacity",
      "date" : 2015,
      "url" : "http://www.udacity.com"
    },
    {
      "title" : "Intermediate Java",
      "school" : "Ed2Go",
      "date" : 2014,
      "url" : "http://www.ed2go.com"
    },
    {
      "title" : "Intro to Java",
      "school" : "UMBC Training Centers",
      "date" : 2014,
      "url" : "http://www.umbctraining.com"
    }
  ],
  "display" : function() {
    for (var school in education.schools) {
      $("#education").append(HTMLschoolStart);
      
      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedName = formattedName.replace("#", education.schools[school].url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedNameDegree = formattedName + formattedDegree;
      $(".education-entry:last").append(formattedNameDegree);
      
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);
      
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);
      
      if (education.schools[school].majors.length > 0) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
      }
    }
    
    $("#education").append("<br />" + HTMLonlineClasses);
    
    for (var course in education.onlineCourses) {
      $("#education").append(HTMLschoolStart);
      
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
      formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
      var formattedTitleSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedTitleSchool);
      
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
      $(".education-entry:last").append(formattedDate);
      
      var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[course].url);
      formattedURL = formattedURL.replace("%data%", education.onlineCourses[course].url);
      $(".education-entry:last").append(formattedURL);

    }
  }
};

/*-------------------
-- Display objects --
-------------------*/

bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);