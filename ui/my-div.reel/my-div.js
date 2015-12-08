/**
 * @module ui/my-div.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class MyDiv
 * @extends Component
 */
exports.MyDiv = Component.specialize(/** @lends MyDiv# */ {
    constructor: {
        value: function MyDiv() {
            this.super();
        }
    }
});
