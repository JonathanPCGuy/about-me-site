/* */

// for first pass we'll stick the json in here.
// after we learn ajax and stuff we'll move to an external json file

var udacityProjects = {
  "projects": [
    {
      "title": "Project 1",
      "description": "Using a supplied mockup and resources, create the webpage from scratch.",
      "gitURL": "http://github.com"
    },
    {
      "title": "Project 2",
      "description": "Create a web page resume whose content is populated all via Javascript.",
      "gitURL": "http://github.com"
    }
  ],

  display: function() {
    this.projects.forEach( function(project) {
      $('#projects').append(HTMLprojectDiv);
      var displayString = formatHTML(HTMLprojectTitleCell, project.title);
      displayString += formatHTML(HTMLprojectDescription, project.description)
      $('.project-row:last').append(displayString);
    });
  }
};

$(document).ready( function() {
  udacityProjects.display()
});