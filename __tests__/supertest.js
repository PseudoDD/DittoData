const request = require('supertest');
const server = 'http://localhost:3000';
const path = require('path');

//testing route integration

describe('Route integration', () => {
  //Before we run tests: Do X
  beforeAll(async () => {
    //
  });
  //After the tests complete: Do X
  afterAll(() => {
    //
  });

  //Testing add Schema route
  describe('/add', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/api/add')
          .send({
            schemaColumns: {
              first_name: 'name',
              last_name: 'name',
              email: 'email',
              cc_num: 'cc_num',
              trans_date: 'date',
              bank: 'bank',
              cc_expire: 'date',
            },
            user_id: 3,
          })
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(200);
      });
    });
  });

  describe('/add', () => {
    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => {
        return request(server)
          .post('/api/')
          .send({
            user_id: 3,
          })
          .expect('Content-Type', 'application/json; charset=utf-8')
          .expect(200);
      });
    });
  });
});
