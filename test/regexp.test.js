describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('comutils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(comutils.isEmail("leiquanlive.com"))
        });
        it('comutils.isEmail("leiquan@live.com") should return true ', function () {
            assert(comutils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('comutils.isIdCard("622224188203234033") should return true ', function () {
            assert(comutils.isIdCard("622224188203234033"))
        });
        it('comutils.isIdCard("zas224188203234033") should return false', function () {
            assert(!comutils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('comutils.isPhoneNum("18882324234") should return true ', function () {
            assert(comutils.isPhoneNum("18882324234"))
        });
        it('comutils.isPhoneNum("8618882324234") should return true ', function () {
            assert(comutils.isPhoneNum("8618882324234"))
        });
        it('comutils.isPhoneNum("5534553") should return false', function () {
            assert(!comutils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('comutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(comutils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('comutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(comutils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('comutils.isUrl("www.baidu.com") should return true', function () {
            assert(comutils.isUrl("www.baidu.com"))
        });
        it('comutils.isUrl("baidu.com") should return true', function () {
            assert(comutils.isUrl("baidu.com"))
        });
        it('comutils.isUrl("http://baiducom") should return false', function () {
            assert(!comutils.isUrl("http://baiducom"))
        });
    });

});