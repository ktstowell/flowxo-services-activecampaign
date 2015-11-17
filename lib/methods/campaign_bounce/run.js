'use strict';

module.exports = function(options, done) {
  var fields = options.input || {},
      bounce = fields && fields.type === 'bounce';
  
  if(bounce) {
    fields.lists = this.utils.helpers.Array.stringify(fields.list, 'name');
    fields.name = fields.contact.first_name + ' ' + fields.contact.last_name;
    done(null, fields);
  }
};
