describe('isElementSupported', function(){
    'use strict';

    var expect = chai.expect;

    it('should return undefined when the browser does not support HTMLUnknownElement', function(){
        var ref = window.HTMLUnknownElement;
        window.HTMLUnknownElement = undefined;
        expect(isElementSupported('div')).to.equal(undefined);
        window.HTMLUnknownElement = ref;
    });

    if(window.HTMLUnknownElement){
        it('should return true for supported elements', function(){
            var tags = [
                'area',
                'blockquote',
                'body',
                'button',
                'code',
                'div',
                'em',
                'embed',
                'fieldset',
                'form',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'hr',
                'html',
                'i',
                'iframe',
                'img',
                'input',
                'label',
                'legend',
                'li',
                'link',
                'label',
                'map',
                'meta',
                'noscript',
                'object',
                'ol',
                'optgroup',
                'option',
                'p',
                'param',
                'pre',
                'script',
                'select',
                'small',
                'span',
                'strong',
                'style',
                'table',
                'tbody',
                'td',
                'textarea',
                'tfoot',
                'th',
                'thead',
                'title',
                'tr',
                'ul'
            ];
            tags.forEach(function(tag){
                expect(isElementSupported(tag)).to.equal(true);
            });
        });

        it('should return false for unsupported elements', function(){
            var tags = [
                'foo',
                'bar',
                'baz'
            ];
            tags.forEach(function(tag){
                expect(isElementSupported(tag)).to.equal(false);
            });
        });
    }
});