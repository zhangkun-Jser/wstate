describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual comutils.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, comutils.deepClone(person))
        });

        it(`person === comutils.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, comutils.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`comutils.isEmptyObject({}) should return true`, function () {
            assert(comutils.deepClone({}))
        });

        it(`comutils.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(comutils.isEmptyObject({
                one: 1
            }))
        });

        it(`comutils.isEmptyObject([]) should return false`, function () {
            assert.notEqual(comutils.isEmptyObject([]))
        });
    });
})