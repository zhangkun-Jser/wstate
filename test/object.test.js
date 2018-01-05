describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual autils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, autils.deepClone(person))
        });

        it(`person === autils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, autils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`autils.isEmptyObject({}) should return true`, function () {
            assert(autils.deepClone({}))
        });

        it(`autils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(autils.isEmptyObject({
                one: 1
            }))
        });

        it(`autils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(autils.isEmptyObject([]))
        });
    });
})