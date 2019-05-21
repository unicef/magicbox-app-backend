// Import the dependencies for testing
const chai =require('chai');
const chaiHttp =require('chai-http');
const app =require('../src/server.js');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('static povertyradar configs', () => {
    describe('GET /povertyradar', () => {
        // Test to get the global view
        it('should get a preconfigured object for the global view', (done) => {
            chai.request(app)
                .get('/api/files/povertyradar')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('mapConfig');
                  res.body.should.have.property('appConfig');
                  res.body.url.should.equal('/povertyradar');
                  console.log(res.body);
                  done();
                });
        });
    });

    describe('GET /povertyradar/c/:countryname ', () => {
        // Test to get the global view
        it('should get a preconfigured object for the global view', (done) => {
            chai.request(app)
                .get('/api/files/povertyradar/c/nigeria')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('mapConfig');
                  res.body.should.have.property('appConfig');
                  res.body.url.should.equal('/povertyradar/c/nigeria');
                  console.log(res.body);
                  done();
                });
        });
    });
});

describe('static user configs', () => {
    describe('GET /u/:user', () => {
        // Test to get the global view
        it('should get a preconfigured object belonging to that user', (done) => {
            chai.request(app)
                .get('/api/files/u/mmaki')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('mapConfig');
                  res.body.should.have.property('appConfig');
                  res.body.url.should.equal('/u/mmaki');
                  console.log(res.body);
                  done();
                });
        });
    });
});
