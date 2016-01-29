var constants = require('../constants');
var UserStore = require('./users');

var MetroStore = module.exports = require('./store').extend({
    init: function () {
        this.bind(constants.GOT_METROS, this.set);
        this.bind(constants.METROED, this.add);
    },
    timeline: function () {
        var ids = [UserStore.currentUser.cid].concat(UserStore.currentUser.following);
        return this._data.filter(function (chirp) {
            return ids.indexOf(metro.userId) > -1;
        });
    },
    byUserId: function (id) {
        return this._data.filter(function (chirp) {
            return metro.userId === id;
        });
    }
});
