// generate by iconfont-componentized

export default class IconFontBriefcase extends HTMLElement {
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

        const classNameParts = ['icon-font', 'icon-font-briefcase'];

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
                ele1.setAttribute("d", "M421.647059 783.058824l0-90.352941 60.235294 0 0 30.117647 60.235294 0 0-30.117647 60.235294 0 0 90.352941-180.705882 0zM1024 662.588235l-60.235294 0 0 361.411765-903.529412 0 0-361.411765-60.235294 0 0-481.882353 217.810824 0c56.500706-110.230588 168.96-180.705882 294.189176-180.705882s237.748706 70.535529 294.189176 180.705882l217.810824 0 0 481.882353zM287.262118 180.705882l449.596235 0c-49.694118-74.270118-133.12-120.470588-224.798118-120.470588s-175.104 46.260706-224.798118 120.470588zM903.529412 662.588235l-783.058824 0 0 301.176471 783.058824 0 0-301.176471zM963.764706 240.941176l-903.529412 0 0 361.411765 903.529412 0 0-361.411765z");
                ele0.appendChild(ele1);

            return ele0;
        }



        const dom = createDom({ size: size, className: classNames });

        this.shadowRoot.appendChild(dom);
    }
}

customElements.define('icon-font-briefcase', IconFontBriefcase);
