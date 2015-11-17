'use strict';

module.exports = function(options, done) {
  var fields = options && options.input || {},
      clicked = fields && fields.type === 'click';

  if(clicked) {
    fields.lists = this.utils.helpers.Array.stringify(fields.list, 'name');    
    fields.name = fields.contact.first_name + ' ' + fields.contact.last_name;
    done(null, fields);
  }
};
