const { response } = require("express");
const request = require("supertest");
const { app } = require("./configure");

describe("Testing /start path", () => {
    test("it should return status code 200", done => {
        request(app)
            .get("/start/1234")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    })

    test("it should return application/json content-type", done => {
        request(app)
            .get("/start/1234")
            .then(response => {
                expect(response.type).toBe("application/json");
                done();
            })
    })

    test("it should return a valid json object", done => {
        request(app)
            .get("/start/1234")
            .then(response => {
                expect(response.body).not.toBeNull();
                expect(response.body.message).not.toBeUndefined();
                done();
            })
    })


})


describe("Testing /play path", () => {
    process.env.CORRECTO = 1234;
    test("it should return status code 200", done => {
        request(app)
            .get("/play/1234")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    })

    test("it should return application/json content-type", done => {
        request(app)
            .get("/play/1234")
            .then(response => {
                expect(response.type).toBe("application/json");
                done();
            })
    })

    test("it should return a valid json object", done => {
        request(app)
            .get("/play/1234")
            .then(response => {
                expect(response.body).not.toBeNull();
                expect(response.body.response).not.toBeUndefined();
                done();
            })
    })

    test("it should return XXXX", done => {
        request(app)
            .get("/play/1234")
            .then(response => {
                expect(response.body.response).toBe("XXXX");
                done();
            })
    })


})