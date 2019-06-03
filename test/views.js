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
                .get('/api/views/povertyradar')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('mapConfig');
                  res.body.should.have.property('appConfig');
                  res.body.url.should.equal('/povertyradar');
                  done();
                });
        });

        it('should get a preconfigured object when passed a valid country', (done) => {
            chai.request(app)
                .get('/api/views/povertyradar/c/nigeria')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('mapConfig');
                  res.body.should.have.property('appConfig');
                  res.body.url.should.equal('/povertyradar/c/nigeria');
                  done();
                });
        });
    });
});

describe('static user configs', () => {
    describe('GET /u/:user/:id', () => {
        // Test to get the global view
        it('should get a preconfigured object belonging to that user', (done) => {
            chai.request(app)
                .get('/api/views/u/mmaki/10')
                .end((err, res) => {
                  res.should.have.status(200);
                  res.should.be.json;
                  res.body.should.be.a('object');
                  res.body.should.have.property('mapConfig');
                  res.body.should.have.property('appConfig');
                  res.body.url.should.equal('/u/mmaki/10');
                  done();
                });
        });
    });
});
