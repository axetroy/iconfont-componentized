// generate by iconfont-componentized

export default function IconFontJia(props = {}) {
    const classNameParts = ['icon-font', 'icon-font-jia'];

    if (props.className) {
        classNameParts.push(props.className);
    }

    const classNames = classNameParts.join(' ');

    const size = props.size ?? 32;

    var namespace = "http://www.w3.org/2000/svg";
    var ele0 = document.createElementNS(namespace, "svg");
    ele0.setAttribute("viewBox", "0 0 1024 1024");
    ele0.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    (size) !== undefined && (size) !== null && ele0.setAttribute("width", size);
    (size) !== undefined && (size) !== null && ele0.setAttribute("height", size);
    (classNames) !== undefined && (classNames) !== null && ele0.setAttribute("class", classNames);
    (props.color) !== undefined && (props.color) !== null && ele0.setAttribute("fill", props.color);

        var ele1 = document.createElementNS(namespace, "path");
        ele1.setAttribute("d", "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z");
        ele0.appendChild(ele1);

    return ele0;
}
