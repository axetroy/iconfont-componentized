// generate by iconfont-componentized

export default class IconFontCanjuYongcan extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({ mode: 'open' })

        const svgElement = this.shadowRoot.querySelector('svg');

        const attributes = Array.from(this.attributes)

        for (const attr of attributes) {
            svgElement.setAttribute(attr.name, attr.value);
        }
    }

    connectedCallback() {
        this.render(); // 初始渲染
    }

    // 当任何属性发生变化时被调用
    attributeChangedCallback(name, oldValue, newValue) {
        this.render(); // 重新渲染
    }

    // 开启属性变化监视器
    static get observedAttributes() {
        // 获取所有属性名称
        const attributes = [];
        for (const attr of this.attributes) {
            attributes.push(attr.name);
        }
        return attributes;
    }

    render() {
        this.shadowRoot.innerHTML = ''; // 清空 shadow DOM
        const size = this.getAttribute('size') ?? 32;

        const attrs = this.getAttributeNames();

        const attrsMap = {};

        for (const attr of attrs) {
            attrsMap[attr] = this.getAttribute(attr);
        }

        const classNameParts = ['icon-font', 'icon-font-canju-yongcan'];

        if (attrsMap['class']) {
            classNameParts.push(attrsMap['class']);
        }

        const classNames = classNameParts.join(' ');

        const createDom = (props) => {
            var namespace = "http://www.w3.org/2000/svg";
            var ele0 = document.createElementNS(namespace, "svg");
            ele0.setAttribute("viewBox", "0 0 1024 1024");
            ele0.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            (props.size) !== undefined && (props.size) !== null && ele0.setAttribute("width", props.size);
            (props.size) !== undefined && (props.size) !== null && ele0.setAttribute("height", props.size);
            Object.keys(attrsMap).forEach((key) => attrsMap[key] !== undefined && attrsMap[key] !== null && ele0.setAttribute(key, attrsMap[key]));
            (props.classNames) !== undefined && (props.classNames) !== null && ele0.setAttribute("class", props.classNames);

                var ele1 = document.createElementNS(namespace, "path");
                ele1.setAttribute("d", "M351.747011 282.675051h61.691996l14.161999-262.956982h46.519997V216.940055c0 35.158998 3.723 77.312995-5.056 105.179993-12.974999 41.190997-52.839996 78.375995-95.067994 90.010994v577.48696c-36.477998 28.612998-54.209996 26.512998-91.020993 0v-577.48996L247.580018 397.970043c-21.739999-9.391999-43.010997-22.903998-54.615996-42.477997-16.347999-27.569998-14.154999-72.153995-14.154999-116.304992V19.722069h44.493997l21.239998 262.952982h52.593997l7.075999-269.022982 42.477997 1.013 5.056 268.009982zM597.508994 1.51707c18.516999-0.226 119.170992-4.343 126.416992 2.023 22.369998 19.497999 34.131998 53.486996 49.556996 79.896994 30.979998 53.039996 49.999997 116.930992 64.724996 186.089988l6.069999 61.690995 1.013 65.738996c-5 29.922998-9.012999 59.611996-13.148999 86.974994h-109.229992v540.064963H597.509994V1.51407z");
                ele0.appendChild(ele1);

            return ele0;
        }



        const dom = createDom({ size: size, className: classNames });

        this.shadowRoot.appendChild(dom);
    }
}

customElements.define('icon-font-canju-yongcan', IconFontCanjuYongcan);
