// generate by iconfont-componentized

export default class IconFontJia extends HTMLElement {
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

        const classNameParts = ['icon-font', 'icon-font-jia'];

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
                ele1.setAttribute("d", "M514.048 62.464q93.184 0 175.616 35.328t143.872 96.768 96.768 143.872 35.328 175.616q0 94.208-35.328 176.128t-96.768 143.36-143.872 96.768-175.616 35.328q-94.208 0-176.64-35.328t-143.872-96.768-96.768-143.36-35.328-176.128q0-93.184 35.328-175.616t96.768-143.872 143.872-96.768 176.64-35.328zM772.096 576.512q26.624 0 45.056-18.944t18.432-45.568-18.432-45.056-45.056-18.432l-192.512 0 0-192.512q0-26.624-18.944-45.568t-45.568-18.944-45.056 18.944-18.432 45.568l0 192.512-192.512 0q-26.624 0-45.056 18.432t-18.432 45.056 18.432 45.568 45.056 18.944l192.512 0 0 191.488q0 26.624 18.432 45.568t45.056 18.944 45.568-18.944 18.944-45.568l0-191.488 192.512 0z");
                ele0.appendChild(ele1);

            return ele0;
        }



        const dom = createDom({ size: size, className: classNames });

        this.shadowRoot.appendChild(dom);
    }
}

customElements.define('icon-font-jia', IconFontJia);
