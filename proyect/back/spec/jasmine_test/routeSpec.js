// const {Notes} = require('../../src/db');
const supertest = require('supertest')(require('../../src/app'));

describe('Routes', () => {

    describe('/notes', () => {
        it('POST addNotes', () => {
            return supertest
            .post('/notes/addNotes')
            .send({title: "Note, prueba de jasmine", description: "Description, prueba de jasmine"})
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('POST addNotes - (TITLE)', () => {
            return supertest
            .post('/notes/addNotes')
            .send({title: "Note, prueba de jasmine"})
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('POST addNotes - (DESCRIPTION)', () => {
            return supertest
            .post('/notes/addNotes')
            .send({description: "Description, prueba de jasmine"})
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('POST addNote - STATUS 404', () => {
            return supertest
            .post('/notes/addNotes')
            .send({})
            .expect(404)
        })

        it('GET notes by ID', () => {
            return supertest
            .get('/notes/detailNote/1')
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('GET notes by ID - STATUS 404', () => {
            return supertest
            .get('/notes/detailNote')
            .expect(404)
        })

        it('GET all notes', () => {
            return supertest
            .get('/notes/getNotes')
            .expect(200)
            .expect('Content-Type', /json/)
        })

        it('DELETE a note', () => {
            return supertest
            .delete('/notes/deleteNote/1')
            .expect(200)            
        })

        it('DELETE a note', () => {
            return supertest
            .delete('/notes/deleteNote')
            .expect(404)
        })

        it('PUT update a note', () => {
            return supertest
            .put('/notes/updateNote/1')
            .send({title: "Note, prueba de jasmine", description: "Description, prueba de jasmine"})
            .expect(200)
        })

        it('PUT update a note', () => {
            return supertest
            .put('/notes/updateNote/1')
            .send({title: "Note, prueba de jasmine"})
            .expect(200)
        })

        it('PUT update a note - STATUS 4040', () => {
            return supertest
            .put('/notes/updateNote')
            .send({title: "Note, prueba de jasmine", description: "Description, prueba de jasmine"})
            .expect(404)
        })

    })

})