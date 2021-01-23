const codebreaker = require("./codebreaker")

describe("Validacion", () => {
    process.env.CORRECTO = 4325;
    test('validar que retorne XXXX ', () => {
        var value = codebreaker.breaker("4325")
        expect(value).toBe("XXXX");
    })

    test('validar que retorne ____ ', () => {
        var value = codebreaker.breaker("5234")
        expect(value).toBe("____");
    })

    test('validar que retorne ___ ', () => {
        var value = codebreaker.breaker("2436")
        expect(value).toBe("___");
    })
    test('validar que retorne __ ', () => {
        var value = codebreaker.breaker("2136")
        expect(value).toBe("__");
    })
    test('validar que retorne _ ', () => {
        var value = codebreaker.breaker("9136")
        expect(value).toBe("_");
    })
    test('validar que retorne XXX ', () => {
        var value = codebreaker.breaker("4326")
        expect(value).toBe("XXX");
    })
    test('validar que retorne XX ', () => {
        var value = codebreaker.breaker("9326")
        expect(value).toBe("XX");
    })
    test('validar que retorne X ', () => {
        var value = codebreaker.breaker("1027")
        expect(value).toBe("X");
    })
    test('validar que retorne X_ ', () => {
        var value = codebreaker.breaker("1372")
        expect(value).toBe("X_");
    })
    test('validar que retorne XX_ ', () => {
        var value = codebreaker.breaker("4372")
        expect(value).toBe("XX_");
    })
    test('validar que retorne XX__ ', () => {
        var value = codebreaker.breaker("3425")
        expect(value).toBe("XX__");
    })
    test('validar que retorne X___ ', () => {
        var value = codebreaker.breaker("2435")
        expect(value).toBe("X___");
    })

})


