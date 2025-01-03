import React from 'react'
import { IconProp } from "./IconType";

// "#AFC6FF" 
// "#2C2B46" 
export default function VideoPlayIcon(props = IconProp) {
    const { color, height, width, className, backgroundColor } = props;
    return (
        <svg className={className} width={width} height={height} style={{ color: color }} viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.9575 2.16675H10.0425V6.89008H15.9575V2.16675Z" fill={color} />
            <path d="M17.5825 2.16675V6.89008H23.6925C23.14 3.91091 20.9409 2.17758 17.5825 2.16675Z" fill={color} />
            <path d="M2.16663 8.51489V17.5391C2.16663 21.4824 4.51746 23.8332 8.46079 23.8332H17.5391C21.4825 23.8332 23.8333 21.4824 23.8333 17.5391V8.51489H2.16663ZM15.6433 17.5282L13.39 18.8282C12.9133 19.0991 12.4475 19.2399 12.0141 19.2399C11.6891 19.2399 11.3966 19.1641 11.1258 19.0124C10.4975 18.6549 10.1508 17.9182 10.1508 16.9649V14.3649C10.1508 13.4116 10.4975 12.6749 11.1258 12.3174C11.7541 11.9491 12.5558 12.0141 13.39 12.5016L15.6433 13.8016C16.4775 14.2782 16.9325 14.9499 16.9325 15.6757C16.9325 16.4016 16.4666 17.0407 15.6433 17.5282Z" fill={color} />
            <path d="M8.41749 2.16675C5.05916 2.17758 2.86 3.91091 2.3075 6.89008H8.41749V2.16675Z" fill={color} />
        </svg>
    )
}
