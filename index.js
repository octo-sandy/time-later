/**
 * Created by tommyZZM.OSX on 16/9/4.
 */
"use strict";
const Promise = require("bluebird");

module.exports = function (delay) {
    return new Promise(pass=>setTimeout(()=>pass(),delay))
}
