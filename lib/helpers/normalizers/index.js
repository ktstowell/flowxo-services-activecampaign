'use strict';

/**
 * NORMALIZERS -
 *
 * @description Initially this was designed to handle (read: scale with) unforseen normalization
 *              requirements that might surface for some namespaces and not others - motivating
 *              me to place the abstraction here.
 *
 * 							After implementing the following, I realized that most of the operations were
 * 							ubiquitous, while the details were proprietary. Going forward I would create
 * 							API abstractions by data type and provide each implementation with a strategy
 * 							map of what response values need to be what SDK required values.
 */

module.exports = {
	deals: require('./deals'),
	pipelines: require('./pipelines'),
	stages: require('./stages'),
	users: require('./users'),
	contacts: require('./contacts'),
	lists: require('./lists'),
	automations: require('./automations')
};