// generate by iconfont-componentized

export default function IconFontCanjuYongcan(props = {}) {
    const classNameParts = ['icon-font', 'icon-font-canju-yongcan'];

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
        ele1.setAttribute("d", "M351.747011 282.675051h61.691996l14.161999-262.956982h46.519997V216.940055c0 35.158998 3.723 77.312995-5.056 105.179993-12.974999 41.190997-52.839996 78.375995-95.067994 90.010994v577.48696c-36.477998 28.612998-54.209996 26.512998-91.020993 0v-577.48996L247.580018 397.970043c-21.739999-9.391999-43.010997-22.903998-54.615996-42.477997-16.347999-27.569998-14.154999-72.153995-14.154999-116.304992V19.722069h44.493997l21.239998 262.952982h52.593997l7.075999-269.022982 42.477997 1.013 5.056 268.009982zM597.508994 1.51707c18.516999-0.226 119.170992-4.343 126.416992 2.023 22.369998 19.497999 34.131998 53.486996 49.556996 79.896994 30.979998 53.039996 49.999997 116.930992 64.724996 186.089988l6.069999 61.690995 1.013 65.738996c-5 29.922998-9.012999 59.611996-13.148999 86.974994h-109.229992v540.064963H597.509994V1.51407z");
        ele0.appendChild(ele1);

    return ele0;
}
