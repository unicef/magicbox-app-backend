const request = require('request');
const kepler = require('kepler.gl');

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

module.exports = {
    getData: (view) => {
        return Promise.all(Object.values(view.data_endpoints).map(function(url) {
            // console.log("requesting:", url)
            return requestAsync(`http://localhost:5000/${url}`);
        })).then(function(results) {
            let data = {};
            Object.keys(view.data_endpoints).map((datapoint, index) => {
                data[datapoint] = results[index];
            });
            let keplerSchools =  kepler.processCsvData(data.schools);
            let keplerPopulationPoints =  kepler.processCsvData(data.population_points);
            // let keplerAdminBoundaries = kepler.processGeojson(data.admin_boundaries);
            kepler.addDataToMap(keplerSchools);
            kepler.addDataToMap(keplerPopulationPoints);
            // kepler.addDataToMap(keplerSchools);
        }).catch(function(err) {
          console.log(err); // eslint-disable-line
        });
    }
};
