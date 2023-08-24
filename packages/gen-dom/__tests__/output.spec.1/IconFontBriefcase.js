// generate by iconfont-componentized

export default function IconFontBriefcase(props) {
    const classNameParts = ['icon-font', 'icon-font-briefcase'];

    if (props.className) {
        classNameParts.push(props.className);
    }

    const classNames = classNameParts.join(' ');

    var namespace = "http://www.w3.org/2000/svg";
    var ele0 = document.createElementNS(namespace, "svg");
    ele0.setAttribute("viewBox", "0 0 1024 1024");
    ele0.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    ele0.setAttribute("width", props.size ?? "32");
    ele0.setAttribute("height", props.size ?? "32");
    ele0.setAttribute("class", classNames);

        var ele1 = document.createElementNS(namespace, "path");
        ele1.setAttribute("d", "M421.647059 783.058824l0-90.352941 60.235294 0 0 30.117647 60.235294 0 0-30.117647 60.235294 0 0 90.352941-180.705882 0zM1024 662.588235l-60.235294 0 0 361.411765-903.529412 0 0-361.411765-60.235294 0 0-481.882353 217.810824 0c56.500706-110.230588 168.96-180.705882 294.189176-180.705882s237.748706 70.535529 294.189176 180.705882l217.810824 0 0 481.882353zM287.262118 180.705882l449.596235 0c-49.694118-74.270118-133.12-120.470588-224.798118-120.470588s-175.104 46.260706-224.798118 120.470588zM903.529412 662.588235l-783.058824 0 0 301.176471 783.058824 0 0-301.176471zM963.764706 240.941176l-903.529412 0 0 361.411765 903.529412 0 0-361.411765z");
        ele0.appendChild(ele1);

    return ele0;
}
