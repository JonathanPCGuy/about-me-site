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


