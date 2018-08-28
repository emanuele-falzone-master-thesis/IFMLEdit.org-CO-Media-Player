/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['authors'] = require('./authors').createRepository(options);
    repositories['songs'] = require('./songs').createRepository(options);
    return repositories;
};
