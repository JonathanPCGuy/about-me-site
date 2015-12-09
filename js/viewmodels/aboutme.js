var AboutMeViewModel = function() {
    // load in projects
    // first direct load, later on load some other way...
    var self = this;

    var projectTypes = ko.observableArray([
       {'key': 'fenano', 'displayName': 'Udacity Front-End Nanodegree'},
       {'key': 'hpwork', 'displayName': 'HP Inc.'}
    ]);


    this.menuItems = ko.observableArray(navigation.menuItems);

    this.projects = ko.observableArray();

    this.contacts = ko.observableArray(contact.contacts);
    // load fenano

    workProjects.projects.forEach(function(element) {
        this.projects.push(element);
    }, this);


    fenanoProjects.projects.forEach(function(element) {
        this.projects.push(element);
    }, this);
    // load work

    // sorting?!?!
    this.aboutMeText = ko.observable();

    $.ajax('./bio.txt').done(function(response) {
        self.aboutMeText(response);
    });

};


