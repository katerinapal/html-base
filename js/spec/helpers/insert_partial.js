import { Request } from "..\\..\\lib\\mootools.js";
import { Element } from "..\\..\\lib\\mootools.js";
import { $ } from "..\\..\\lib\\mootools.js";

export var insertPartial = function(url){
  if ($('htmlContainer') != null) $('htmlContainer').dispose();
  var container = new Element('div', {id: 'htmlContainer', style:'display:none'});
  document.body.appendChild(container);
  new Request.HTML({url: '/js/spec/specs/' + url, update:'htmlContainer', async: false}).send();
};