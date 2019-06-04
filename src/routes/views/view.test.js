const {MongoClient} = require('mongodb');
const View = require('./views')

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
    db = await connection.db('myproject');
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    const views = db.collection('views');

    const mockView = {url: '/u/mmaki/10', mapConfig: {}, appConfig: {}};
    await views.insertOne(mockView);

    const insertedView = await views.findOne({url: '/u/mmaki/10'});
    expect(insertedView).toEqual(mockView);
  });
});
