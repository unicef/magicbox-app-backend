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
                console.log("resolving body", body)
                resolve(body);
            }
        });
    });
}

module.exports = {
  getData: (view) => {
      return Promise.all(Object.values(view.data_endpoints).map(function(url) {
          // console.log("requesting:", url)
          return requestAsync(`http://localhost:5000/${url}`);
      })).then(function(results) {
          console.log(results); // eslint-disable-line
          // do some sort of results assembly into the config here
      }).catch(function(err) {
          console.log(err); // eslint-disable-line
      });
  }
};
