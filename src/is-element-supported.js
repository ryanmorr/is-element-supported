/*
 * Feature test HTML element support
 *
 * @param {String} tag
 * @return {Boolean|Undefined}
 */
export default function isElementSupported(tag) {
    const element = document.createElement(tag);
    return {}.toString.call(element) !== '[object HTMLUnknownElement]';
}
