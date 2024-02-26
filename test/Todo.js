import * as chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);

chai.use(chaiHttp);

//Our parent block
describe('Todo', () => {
    describe('/GET todos', () => {
        it('get all todos from get', function(done) {
            chai.request("http://localhost:3001").get('/get')
            .then((res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                chai.assert.equal(res.body, 1 , '');
            })
        });
    });

    describe('/POST todo', () => {
        it('add record to DB', function(done) {
            chai.request("http://localhost:3001").post('/add')
                .send({task: 'grocery'})
                .end(function(error, response, body) {
                    if (error) {
                        done(error);
                    } else {
                        done();
                    }
                });
        });
    });

    describe('/PUT todo', () => {
        it('UPDATE todo make it completed', function(done) {
            chai.request("http://localhost:3001").put('/update/')
                .send({id: '1234'})
                .end(function(error, response, body) {
                    if (error) {
                        done(error);
                    } else {
                        done();
                    }
                });
        });
    });

    describe('/DELETE todo', () => {
        it('DELETE todo from Database', function(done) {
            chai.request("http://localhost:3001").delete('/delete/')
                .send({id: '1234'})
                .end(function(error, response, body) {
                    if (error) {
                        done(error);
                    } else {
                        done();
                    }
                });
        });
    });

});