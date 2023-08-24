// generate by iconfont-componentized

export default class IconFontAnonymousIconfont extends HTMLElement {
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

        const classNameParts = ['icon-font', 'icon-font-anonymous-iconfont'];

        if (attrsMap['class']) {
            classNameParts.push(attrsMap['class']);
        }

        const classNames = classNameParts.join(' ');

        const createDom = (props) => {
            var namespace = "http://www.w3.org/2000/svg";
            var ele0 = document.createElementNS(namespace, "svg");
            ele0.setAttribute("viewBox", "0 0 1024 1024");
            ele0.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            ele0.setAttribute("width", props.size);
            ele0.setAttribute("height", props.size);
            Object.keys(attrsMap).forEach((key) => ele0.setAttribute(key, attrsMap[key]));
            ele0.setAttribute("class", props.classNames);

                var ele1 = document.createElementNS(namespace, "path");
                ele1.setAttribute("d", "M512.017908 126.754892c-210.718189 0-381.527436 172.019819-381.527436 384.221802s170.809247 384.221802 381.527436 384.221802 381.543809-172.019819 381.543809-384.221802S722.736097 126.754892 512.017908 126.754892zM702.799022 522.063193c0 16.338107-13.149485 29.573549-29.352515 29.573549L350.606705 551.636742c-16.202007 0-29.335119-13.235442-29.335119-29.573549l0-29.53978c0-16.33913 13.132088-29.573549 29.335119-29.573549l322.839803 0c16.20303 0 29.352515 13.235442 29.352515 29.573549L702.799022 522.063193z");
                ele0.appendChild(ele1);

            return ele0;
        }



        const dom = createDom({ size: size, className: classNames });

        this.shadowRoot.appendChild(dom);
    }
}

customElements.define('icon-font-anonymous-iconfont', IconFontAnonymousIconfont);
