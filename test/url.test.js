describe('Url API:', function () {
    describe('#parseQs()', function () {
        it(`autils.parseQs('https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10') deepEqual '{
            wd: '百度',
            rsv_spt: '10'
        }' should return true`, function () {
            let url = 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'
            assert.deepEqual(autils.parseQs(url), {
                wd: '百度',
                rsv_spt: '10'
            })
        });
    });

    describe('#stringfyQs()', function () {
        it(`autils.stringfyQs({
            wd: '百度',
            rsv_spt: '10'
        }) === 'https://www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6&rsv_spt=10'  should return true`, function () {
            let param = {
                wd: '百度',
                rsv_spt: '10'
            }
            assert(autils.stringfyQs(param) === 'wd=%E7%99%BE%E5%BA%A6&rsv_spt=10')
        });
    });
})