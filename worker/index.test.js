const rewire = require("rewire")
const index = rewire("./index")
const fib = index.__get__("fib")
// @ponicode
describe("fib", () => {
    test("0", () => {
        let callFunction = () => {
            fib(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fib(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fib(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fib(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fib(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fib(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
