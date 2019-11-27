"use strict";
var carDealsCacheName = "carDealscacheV1 ";
var carDealsCachePagesName = "carDealsCachePagesV1";
var carDealsCacheFiles = [
    'js/app.js',
    'js/carService.js',
    'js/clientStorage.js',
    'js/swRegister.js',
    'js/template.js',

    './',
    'resources/es6-promise/es6-promise.js',
    'resources/es6-promise/es6-promise.map',
    'resources/fetch/fetch.js',
    'resources/localforage/localforage.min.js',
    'resources/localforage/localforage-getitems.js',
    'resources/localforage/localforage-setitems.js',
    'resources/material-design-light/material.min.js',
    'resources/material-design-light/material.min.js.map',
    'resources/material-design-light/material.red-indigo.min.css',
    'resources/systemjs/system.js',
    'resources/systemjs/system-polyfills.js',
    'resources/systemjs/system.js.map',
    'resources/systemjs/system.src.js'
];

self.addEventListener('install', function (event) {
    console.log('From SW: Install Event', event);
    event.waitUntil(
        caches.open(carDealsCacheName)
            .then(function (cache) {
                return cache.addAll(carDealsCacheFiles);
            }))
});

self.addEventListener('activate', function (event) {
    console.log('From SW: Activate State', event);
    event.waitUntil(
        caches.keys()
            .then(function (cacheKeys) {
                var deletePromises = [];
                for (var i = 0; i < cacheKeys.length; i++) {
                    if (cacheKeys[i] != carDealsCacheName &&
                        cacheKeys[i] != carDealsCachePagesName) {
                        deletePromises.push(caches.delete(cacheKeys[i]));
                    }
                }
                return Promise.all(deletePromises);
            })
    )
})

// self.addEventListener('fetch' , function(event){
//    event.respondWith(new Response('hellofaiz'))
// });

// function fetchRequestAndCache(request){
// return fetch(request).then(function(networkResponse){
// caches.open(getCacheName(request)).then(function(cache){

// })
// })

// function getCacheName(){

// }

