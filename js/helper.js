var HTMLprojectDiv ='<div class="row project-row"></div>'
var HTMLprojectTitleCell = '<div class="col-md-3 project-header"><h3>%data%</h3><img src="http://placehold.it/128x128"></div>'
var HTMLprojectLink = '<h4><a href="%url%">%data%</a></h4>'
var HTMLprojectDescription = '<div class="col-md-9 project-description">%data%</div>'

// my defined helper functions
function formatHTML(template, text) {
  return template.replace('%data%', text);
}

function formatLink(template, text, link) {
  template = template.replace('%data%', text);
  template = template.replace('%url%', link)
}

function formatIfStringPresent(template, text) {
  return $.type(text) === 'string' ? formatHTML(template, text) : '';
}