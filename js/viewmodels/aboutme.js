var jlamapp = jlamapp || {};
jlamapp.AboutMeViewModel = function () {
    // load in projects
    // first direct load, later on load some other way...
    var self = this;

    var projectTypes = ko.observableArray([
        { 'key': 'fenano', 'displayName': 'Udacity Front-End Nanodegree' },
        { 'key': 'hpwork', 'displayName': 'HP Inc.' }
    ]);


    this.menuItems = ko.observableArray(jlamapp.navigation.menuItems);

    // TODO: single-page "print" view

    // null - nothing (initial page load)
    // "all" - show all (to be done)
    this.activeMenuItem = ko.observable();

    this.setActiveMenuItem = ko.computed(function() {
        if(self.activeMenuItem === null) {
            // don't do anything?
        }
        else if (self.activeMenuItem === "all") {
            // to be implemented
        }
        else
        {
            // show one, hide the rest
        }
    });



    this.navigate = function(clickedItem) {

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


