/*jslint node: true, nomen: true */
"use strict";

exports.createNavigations = function (options) {
    return {
        'event-play': require('./event-play').createNavigation(options)
        ,'event-change-songdone': require('./event-change-songdone').createNavigation(options)
        ,'event-stop': require('./event-stop').createNavigation(options)
        ,'selected-author': require('./selected-author').createNavigation(options)
        ,'selected-song': require('./selected-song').createNavigation(options)
        ,'system-event-end': require('./system-event-end').createNavigation(options)
        ,'event-stop-song-done': require('./event-stop-song-done').createNavigation(options)
        ,'event-start-song-done': require('./event-start-song-done').createNavigation(options)
    };
};
