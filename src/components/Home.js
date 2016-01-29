var React = require('react');
var actions = require('../actions');
var MetroInput = require('./MetroInput');
var MetroList = require('./MetroList');
var MetroStore = require('../stores/metros');

var Home = React.createClass({
    getInitialState: function () {
        return {
            metros: MetroStore.timeline()
        };
    },
    mixins: [MetroStore.mixin()],
    render: function () {
        return <div>
            <MetroInput onSave={this.saveMetro} />
            <MetroList metros={this.state.metros} />
        </div>;
    },
    saveMetro: function (text) {
        actions.metro(text);
    }
});

module.exports = Home;
