"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const {registerPlugin} = require('@scullyio/scully');

// registerPlugin('router', 'thinksterDonutPlugin', async() => {
//     return [{ route: '/donuts/1'}, {route: '/donuts/2'}, {route: '/donuts/3'}];
// })


// exports.config = {
//     projectRoot: "./src",
//     projectName: "DonutStore",
//     outDir: './dist/static',
//     routes: {
//         '/donuts/:donutId': {
//             type: 'thinksterDonutPlugin'
//         }
//     }
// };

exports.config = {
    projectRoot: "./src",
    projectName: "DonutStore",
    outDir: './dist/static',
    routes: {
        // This here gets the json and using property if creates the routes (intresting!)
        '/blog/:id': {
            type: 'contentFolder',
            id: {
                folder: "./blog"
            }
        },
        '/donuts/:donutId': {
            type: 'json',
            donutId: {
                url: 'http://localhost:3000/donuts',
                property: 'id'
            }
        }
    }
};