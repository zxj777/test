import {ElementParam, SVGElementAttrs} from './type'

export function getElement(el: HTMLElement | string) {
  return (typeof el === 'string'
    ? document.querySelector(el)
    : el) as HTMLElement
}


export function createSvg(tag: keyof SVGElementTagNameMap, attrs: SVGElementAttrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag)
  for (let attr in attrs) {
    if (attr === 'appendTo') {
        const parent = attrs.appendTo;
        parent.appendChild(el);
    } else if (attr === 'innerHTML') {
        el.innerHTML = attrs.innerHTML;
    } else {
        el.setAttribute(attr, attrs[attr]);
    }
  }
  return el;
}
