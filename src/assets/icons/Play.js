import React from 'react'
import { IconProp } from "./IconType";

// white
export default function PlayIcon(props = IconProp) {
    const { color, height, width, className, backgroundColor } = props;
    return (
        <svg className={className} width={width} height={height} style={{ color: color }} viewBox="0 0 24 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2929 19.5448L11.0253 24.9893C9.87483 25.674 8.59654 26 7.3502 26C6.07191 26 4.82557 25.674 3.6751 24.9893C1.37417 23.6201 0 21.2075 0 18.469V7.54734C0 4.84138 1.37417 2.39624 3.6751 1.02696C5.97603 -0.34232 8.72437 -0.34232 11.0573 1.02696L20.3249 6.47147C22.6258 7.84075 24 10.2533 24 12.9919C24 15.7304 22.6258 18.1756 20.2929 19.5448Z" fill={color} />
        </svg>
    )
}
