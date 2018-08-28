/*jslint node: true, nomen: true */
"use strict";

exports.createRepositories = function (options) {
    var repositories = {}
    repositories['songs'] = require('./songs').createRepository(options);
    repositories['authors'] = require('./authors').createRepository(options);
    return repositories;
};
