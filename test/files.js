// Import the dependencies for testing
const chai =require('chai');
const chaiHttp =require('chai-http');
const app =require('../src/server.js');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('PovertyRadarConfigs', () => {
    describe('GET /povertyradar', () => {
        // Test to get the global view
        it('should get fetch a preconfigured object', (done) => {
            chai.request(app)
                .get('/api/files')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});
