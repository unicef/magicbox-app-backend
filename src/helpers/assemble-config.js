const request = require('request');

// promisify the request module
function requestAsync(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(err, response, body) {
            if (err) {
                reject(err);
            } else if (response.statusCode !== 200) {
                reject(new Error('response.statusCode = ' + response.statusCode));
            } else {
                resolve(body);
            }
        });
    });
}
// multiple endpoints to retrieve data from
function getData(endpoints) {
    return Promise.all(endpoints.map(function(url) {
        return requestAsync(url);
    }));
}

let endpoints = [
    'http://localhost:5000/api/configs',
    'http://localhost:5000/api/schools',
    'http://localhost:5000/api/population-points',
    'http://localhost:5000/api/admin_boundaries'
];

getData(endpoints).then(function(results) {
    console.log(results); // eslint-disable-line
    // do some sort of results assembly into the config here
}).catch(function(err) {
    console.log(err); // eslint-disable-line
});
