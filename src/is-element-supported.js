export default function isElementSupported(tag) {
    if (tag.indexOf('-') > -1) {
        return customElements.get(tag) !== undefined;
    }
    const element = document.createElement(tag);
    return Object.prototype.toString.call(element) !== '[object HTMLUnknownElement]';
}
