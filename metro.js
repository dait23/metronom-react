var router = module.exports = require('express').Router();
var login  = require('./login');

//////////// config DB localydb
var db = new (require('locallydb'))('./.data');
var metros = db.collection('metro');
////////////////////// Express Router
router.route('/api/metros')
    .all(login.required)
    .get(function (req, res) {
        res.json(metros.toArray());
    })
    .post(function (req, res) {
        var metro = req.body;
        metro.userId = req.user.cid;

        // TO BE REMOVED
        metro.username = req.user.username;
        metro.fullname = req.user.fullname;
        metro.email    = req.user.email;

        var id = metros.insert(metro);
        res.json(metros.get(id));
    });
