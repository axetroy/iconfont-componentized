// generate by iconfont-componentized
import React, { memo, useMemo } from 'react';

function IconFontBriefcase (props) {
    const classNames = useMemo(() => {
        const classNameParts = ['icon-font', 'icon-font-briefcase'];

        if (props.className) {
            classNameParts.push(props.className);
        }

        return classNameParts.join(' ');
    }, [props.className]);

    return (
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} {...props} className={classNames}>
            <path d="M421.647059 783.058824l0-90.352941 60.235294 0 0 30.117647 60.235294 0 0-30.117647 60.235294 0 0 90.352941-180.705882 0zM1024 662.588235l-60.235294 0 0 361.411765-903.529412 0 0-361.411765-60.235294 0 0-481.882353 217.810824 0c56.500706-110.230588 168.96-180.705882 294.189176-180.705882s237.748706 70.535529 294.189176 180.705882l217.810824 0 0 481.882353zM287.262118 180.705882l449.596235 0c-49.694118-74.270118-133.12-120.470588-224.798118-120.470588s-175.104 46.260706-224.798118 120.470588zM903.529412 662.588235l-783.058824 0 0 301.176471 783.058824 0 0-301.176471zM963.764706 240.941176l-903.529412 0 0 361.411765 903.529412 0 0-361.411765z" />
        </svg>
    )
}

IconFontBriefcase.displayName = 'IconFontBriefcase';

IconFontBriefcase.defaultProps = {
    size: 32
}

export default memo(IconFontBriefcase)
