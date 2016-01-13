var jlamdata = jlamdata || {};

jlamdata.bio = function () {
    return 'I am a Software Engineer who enjoys the breath of what the Computer Science realms offers. Some days I am programming in C++ for a desktop application, and other days I\'m making tweaks to Javascript code.' +
        'Although I enjoy taking a broad view of things, learning and picking up tools and skills on the fly, I do not hesitate to take a lower-level view of code and issues as needed.' +
        'Having a balance of broad and deep views and skills has served me well, especially in solving issues that may not be easy to root cause or fix.'
};

// TODO: move this
jlamdata.attribution = [
  {project: 'jQuery', license: 'MIT License', url: 'https://jquery.org', licenseUrl: 'https://jquery.org/license/'},
  {project: 'Bootstrap 3', license: 'MIT License', url: 'http://getbootstrap.com/', licenseUrl: 'https://github.com/twbs/bootstrap/blob/master/LICENSE'},
  {project: 'Ballicons', license: 'Creative Commons Attribution 3.0 Unported (CC BY 3.0)', url: 'http://ballicons.net/', licenseUrl: 'http://creativecommons.org/licenses/by/3.0/'},
  {project: 'Mail icon made by Simpleicon', license:"Creative Commons BY 3.0", url:'http://www.flaticon.com/authors/simpleicon', licenseUrl:'http://creativecommons.org/licenses/by/3.0/'}
];
var jlamdata = jlamdata || {};

jlamdata.contact = {
    contacts: [
        { 'title': 'LinkedIn', 'logo': 'images/contact/In-2C-66px-TM.png', 'url': 'https://www.linkedin.com/in/jonathan-lam-2332064' },
        { 'title': 'GitHub', 'logo': 'images/contact/GitHub-Mark-64px.png', 'url': 'https://www.github.com/JonathanPCGuy' },
        { 'title': 'Twitter', 'logo': 'images/contact/TwitterLogo_color.png', 'url': 'https://www.twitter.com/JonathanPCGuy' },
        { 'title': 'E-mail', 'logo': 'images/simpleicon/mail59.svg', 'url': 'mailto:jonathanpcguy@gmail.com' }
    ]
};
// i won't list all here; i will add link to see more
var jlamdata = jlamdata || {};
jlamdata.fenanoProjects = {
    "projects": [
        {
            "type": "fenano",
            "title": "Project 1 - Layout and formatting",
            "dates": "2015",
            "description": "Basic exercise to construct a webpage to match a mockup",
            "url": "link to live version",
            "repo": "link to repo",

        },
        {
            "type": "fenano",
            "title": "Project 2 - Online Resume",
            "dates": "2015",
            "description": "Introduction to Javascript, CSS, and DOM manipulation (JQuery). Involved created resulable functions and data sources to create an online resume.",
            "url": "link to live version",
            "repo": "link to repo",
        },
        {
            "type": "fenano",
            "title": "Project 3 - Game",
            "dates": "2015",
            "description": "Create a frogger-type game, leveraging provided game engine and assets. Emphasized Javascript coding skills (classes, objects, etc.)",
            "images": [
                "images/fenano/project3-1.png",
                "images/fenano/project3-2.png",
            ],
            "url": "link to live version",
            "repo": "link to repo",
            "highlight": true
        },
        {
            "type": "fenano",
            "title": "Project 4 - Web Site Optimization",
            "dates": "2015",
            "description": "Optimize the loading and performance of various pages, using a variety of techniques and tools",
            "url": "link to live version",
            "repo": "link to repo"
        },
        {
            "type": "fenano",
            "title": "Project 5 - Web App",
            "dates": "2015",
            "description": "Leverage 3rd party data sources and library to construct a Google Maps-based webapp",
            "images": [
                "images/fenano/project5-1.png",
                "images/fenano/project5-2.png"
            ],
            "url": "link to live version",
            "repo": "link to repo",
            "highlight": true
        },
        {
            "type": "fenano",
            "title": "Project 6 - Unit tests",
            "dates": "2015",
            "description": "Using Jasmine, build up a suite of specs and tests against the provided web application.",
            "url": "link to live version",
            "repo": "link to repo",
            "highlight": true
        },

    ],

    "moreinfo": {
        "url": "link to github or udacity profile"
    }
};
var jlamapp = jlamapp || {};

jlamapp.navigation = {
    menuItems: [
        {title: 'Projects', image: 'images/ballicons/graph.png', sectionClass: 'projects'},
        {title: 'About Me & Job History', image: 'images/ballicons/man.png', sectionClass: 'aboutMe'},
        {title: 'Contact', image: 'images/ballicons/open-box.png', sectionClass: 'contact'}
    ]
}
var jlamdata = jlamdata || {};

jlamdata.workHistory = [

    {
        "employer": "HP Inc.",
        "url": "http://www.hp.com",
        "title": "C++ and Web Engineer",
        "location": "Houston, TX",
        "dates": "November 2013 - current",
        "description": "Working on a cloud-based manageability solution (client and cloud-side)"
    },
    {
        "employer": "HP Inc.",
        "url": "http://www.hp.com",
        "title": "Software Engineer",
        "location": "Houston, TX",
        "dates": "May 2007 - November 2013",
        "description": "Worked on various manageability tools designed for HP business PCs"
    }

];

jlamdata.education = {
    "schools": [
        {
            "name": "Texas A&M",
            "location": "College Station, TX",
            "major": "Computer Engineering, B.S.",
            "dates": 2007,
            "url": "http://www.tamu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": "2015",
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
};

jlamdata.workProjects = {

    "projects": [
        {
            "type": "hpwork",
            "title": "HP Touchpoint Manager",
            "dates": "January 2014 - current",
            "description": "Cloud-based Manageability solution. Worked on various client and server side components.",
            "images": [
                "images/hptpm1.jpg",
                "images/hptpm2.png"
            ],
            "url": "https://www.hptouchpointmanager.com",
            "highlight": true
        },
        {
            "type": "hpwork",
            "title": "HP Client Integration Kit for Microsoft SCCM",
            "dates": "2013",
            "description": "Plugin for Microsoft's System Center Configuration Manager to enhance bare-metal image deployment for HP computers.",
            "images": [
                "images/sccm1.png"
            ],
            "url": "http://www.hp.com/go/clientmanagement"
        }
    ],

    "moreinfo": {
        "url": "link to linked in or somewhere else?"
    }
};

// need to add work data
var jlamapp = jlamapp || {};
jlamapp.AboutMeViewModel = function () {
    // load in projects
    // first direct load, later on load some other way...
    var self = this;

    this.projectTypes = {
        'fenano':'Udacity Front-End Nanodegree',
        'hpwork':'HP Inc.'
    };

    this.projectTypeText = function(item) {
      if(self.projectTypes.hasOwnProperty(item.type)) {
          return self.projectTypes[item.type];
      }
      else {
          return '';
      }
    };

    // this seems to create a "pointer" to the underlying object
    // add an active observable field before we load into obs array
    jlamapp.navigation.menuItems.forEach(function(v,i,a) {
       a[i].active = ko.observable(false);
    });
    this.menuItems = ko.observableArray(jlamapp.navigation.menuItems);



    // TODO: single-page "print" view

    // null - nothing (initial page load)
    // "all" - show all (to be done)



    this.activeMenuItem = ko.observable();

    this.setActiveMenuItem = ko.computed(function () {
        if (typeof self.activeMenuItem() === 'undefined') {
            // don't do anything?
        }
        else if (self.activeMenuItem() === "all") {
            // to be implemented
        }
        else {
            // show one, hide the rest
            var targetClass = '.' + self.activeMenuItem().sectionClass;
            $(targetClass).removeClass('hidden');
            $(targetClass).addClass('active');
            var activeIndex = jlamapp.navigation.menuItems.map(function (x) {
                return x.sectionClass;
            }).indexOf(self.activeMenuItem().sectionClass);


            // this seems inefficient? todo: refactor
            jlamapp.navigation.menuItems.forEach(function (value, index) {
                if (index !== activeIndex) {
                    self.menuItems()[index].active(false);
                    var classToHide = '.' + value.sectionClass;
                    // todo: refactor to use knockout?
                    $(classToHide).removeClass('active');
                    $(classToHide).addClass('hidden');
                }
                else {
                    self.menuItems()[index].active(true);
                }
            });
        }
    });

    this.projectFilter = ko.observable(true);


    this.filteredProjects = ko.computed(function() {
        if(self.projectFilter() !== true) {
            return self.projects();
        }
        else
        {
            return ko.utils.arrayFilter(self.projects(), function(project) {
               if(project.highlight === true) {
                   return true;
               }
               else {
                   return false;
               }
            });
        }
    }, self, { deferEvaluation: true });

    this.navigate = function (clickedItem) {
        // any need/eqv to stop properagation?
        self.activeMenuItem(clickedItem);
    };

    this.projects = ko.observableArray();

    this.contacts = ko.observableArray(jlamdata.contact.contacts);
    // load fenano

    jlamdata.workProjects.projects.forEach(function (element) {
        this.projects.push(element);
    }, this);


    jlamdata.fenanoProjects.projects.forEach(function (element) {
        this.projects.push(element);
    }, this);
    // load work

    // sorting?!?!
    this.aboutMeText = ko.observable(jlamdata.bio());

};



$(function () {
    ko.applyBindings(new jlamapp.AboutMeViewModel());
});