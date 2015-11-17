'use strict';

module.exports = function(options, done) {
  var fields = options && options.input || {},
      open = fields && fields.type === 'open';

  if(open) {
    fields.lists = this.utils.helpers.Array.stringify(fields.list, 'name');    
    fields.name = fields.contact.first_name + ' ' + fields.contact.last_name;
    done(null, fields);
  }
};
