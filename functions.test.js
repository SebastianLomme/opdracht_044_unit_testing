const functions = require('./functions')

test("adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4)
})

test("adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

test("multiplayed 2 * 10 to equal 20 ", () => {
    expect(functions.multiplay(2, 10)).toBe(20)
})

test("subtract 10 - 5 equal 5", () => {
    expect(functions.subtract(10, 5)).toBe(5)
})

test("zou null moeten zijn", () => {
    expect(functions.isNull()).toBeNull()
})

test("checkValue Should be falsy when argument is undefined", () => {
    const x = 5
    expect(functions.checkValue()).toBeUndefined()
})

test("User should be Brad Traversy object", () => {
    expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy' })
})

test("zou onder of gelijk aan 1600 zijn", () => {
    const load1 = 800
    const load2 = 800
    expect(load1 + load2).toBeLessThanOrEqual(1600)
})

test("There is no I in team", () => {
    expect("team").not.toMatch(/I/i)
})

test("Admin should be in usernames", () => {
    usernames = ["john", "karen", "admin"];
    expect(usernames).toEqual(expect.arrayContaining(["admin"]))
})