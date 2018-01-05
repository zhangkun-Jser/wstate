describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('autils.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(autils.isEmail("leiquanlive.com"))
        });
        it('autils.isEmail("leiquan@live.com") should return true ', function () {
            assert(autils.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('autils.isIdCard("622224188203234033") should return true ', function () {
            assert(autils.isIdCard("622224188203234033"))
        });
        it('autils.isIdCard("zas224188203234033") should return false', function () {
            assert(!autils.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('autils.isPhoneNum("18882324234") should return true ', function () {
            assert(autils.isPhoneNum("18882324234"))
        });
        it('autils.isPhoneNum("8618882324234") should return true ', function () {
            assert(autils.isPhoneNum("8618882324234"))
        });
        it('autils.isPhoneNum("5534553") should return false', function () {
            assert(!autils.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('autils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(autils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('autils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(autils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('autils.isUrl("www.baidu.com") should return true', function () {
            assert(autils.isUrl("www.baidu.com"))
        });
        it('autils.isUrl("baidu.com") should return true', function () {
            assert(autils.isUrl("baidu.com"))
        });
        it('autils.isUrl("http://baiducom") should return false', function () {
            assert(!autils.isUrl("http://baiducom"))
        });
    });

});