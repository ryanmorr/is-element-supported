describe('isElementSupported', function(){
    'use strict';

    it('should return undefined when the browser does not support HTMLUnknownElement', function(){
        var ref = window.HTMLUnknownElement;
        window.HTMLUnknownElement = undefined;
        expect(isElementSupported('div')).to.equal(undefined);
        window.HTMLUnknownElement = ref;
    });

    if(window.HTMLUnknownElement){
        it('should return true for supported elements', function(){
            expect(isElementSupported('area')).to.equal(true);
            expect(isElementSupported('blockquote')).to.equal(true);
            expect(isElementSupported('body')).to.equal(true);
            expect(isElementSupported('br')).to.equal(true);
            expect(isElementSupported('button')).to.equal(true);
            expect(isElementSupported('code')).to.equal(true);
            expect(isElementSupported('div')).to.equal(true);
            expect(isElementSupported('em')).to.equal(true);
            expect(isElementSupported('embed')).to.equal(true);
            expect(isElementSupported('fieldset')).to.equal(true);
            expect(isElementSupported('form')).to.equal(true);
            expect(isElementSupported('h1')).to.equal(true);
            expect(isElementSupported('h2')).to.equal(true);
            expect(isElementSupported('h3')).to.equal(true);
            expect(isElementSupported('h4')).to.equal(true);
            expect(isElementSupported('h5')).to.equal(true);
            expect(isElementSupported('h6')).to.equal(true);
            expect(isElementSupported('hr')).to.equal(true);
            expect(isElementSupported('html')).to.equal(true);
            expect(isElementSupported('i')).to.equal(true);
            expect(isElementSupported('iframe')).to.equal(true);
            expect(isElementSupported('img')).to.equal(true);
            expect(isElementSupported('input')).to.equal(true);
            expect(isElementSupported('label')).to.equal(true);
            expect(isElementSupported('legend')).to.equal(true);
            expect(isElementSupported('li')).to.equal(true);
            expect(isElementSupported('link')).to.equal(true);
            expect(isElementSupported('label')).to.equal(true);
            expect(isElementSupported('map')).to.equal(true);
            expect(isElementSupported('meta')).to.equal(true);
            expect(isElementSupported('noscript')).to.equal(true);
            expect(isElementSupported('object')).to.equal(true);
            expect(isElementSupported('ol')).to.equal(true);
            expect(isElementSupported('optgroup')).to.equal(true);
            expect(isElementSupported('option')).to.equal(true);
            expect(isElementSupported('p')).to.equal(true);
            expect(isElementSupported('param')).to.equal(true);
            expect(isElementSupported('pre')).to.equal(true);
            expect(isElementSupported('script')).to.equal(true);
            expect(isElementSupported('select')).to.equal(true);
            expect(isElementSupported('small')).to.equal(true);
            expect(isElementSupported('span')).to.equal(true);
            expect(isElementSupported('strong')).to.equal(true);
            expect(isElementSupported('style')).to.equal(true);
            expect(isElementSupported('table')).to.equal(true);
            expect(isElementSupported('tbody')).to.equal(true);
            expect(isElementSupported('td')).to.equal(true);
            expect(isElementSupported('textarea')).to.equal(true);
            expect(isElementSupported('tfoot')).to.equal(true);
            expect(isElementSupported('th')).to.equal(true);
            expect(isElementSupported('thead')).to.equal(true);
            expect(isElementSupported('title')).to.equal(true);
            expect(isElementSupported('tr')).to.equal(true);
            expect(isElementSupported('ul')).to.equal(true);
        });

        it('should return false for unsupported elements', function(){
            expect(isElementSupported('foo')).to.equal(false);
            expect(isElementSupported('bar')).to.equal(false);
            expect(isElementSupported('baz')).to.equal(false);
        });
    }
});