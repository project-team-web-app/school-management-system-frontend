import React from 'react'
import { IconProp } from "./IconType";

// #0D0C10
export default function WindowIcon(props = IconProp) {
    const { color, height, width, className, backgroundColor } = props;
    return (
        <svg className={className} width={width} height={height} style={{ color: color }} viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.556875 0H7.767C8.49937 0.072054 8.32275 1.34538 8.32275 2.17288V6.11221C8.32275 6.96785 8.48588 8.01714 7.911 8.26032C7.5375 8.41794 6.53288 8.30761 6.048 8.30761H2.22525C1.34213 8.30761 0.136125 8.51589 0 7.75819V0.549412C0.099 0.280335 0.27225 0.08669 0.556875 0ZM1.548 1.62347V6.75619H6.75V1.55141H1.57275C1.54463 1.55592 1.54575 1.58969 1.548 1.62347ZM10.2341 0H17.4443C17.7379 0.108081 17.9393 0.30623 18 0.645109V7.66362C17.9336 7.95522 17.7795 8.20403 17.4915 8.28396C17.0212 8.41456 16.2394 8.30761 15.6769 8.30761H11.9756C11.4176 8.30761 10.5896 8.42357 10.1374 8.28396C9.49725 8.08694 9.67725 6.85414 9.67725 5.99287V2.31586C9.67725 1.32062 9.45563 0.139605 10.2341 0ZM11.2264 1.62347V6.75619H16.4284V1.55141H11.25C11.2219 1.55592 11.2241 1.58969 11.2264 1.62347ZM3.9195 3.1276C4.644 2.99249 5.21325 3.47548 5.22563 4.1296C5.24137 4.99312 4.34812 5.4671 3.65287 5.10796C2.8575 4.69815 2.91037 3.31561 3.9195 3.1276ZM13.5968 3.1276C15.3034 2.81348 15.2708 5.47948 13.5968 5.20478C12.5314 5.02915 12.4976 3.33025 13.5968 3.1276ZM7.7175 18H0.5805C0.284625 17.9099 0.084375 17.7253 0 17.4269V10.2418C0.070875 10.0313 0.232875 9.78584 0.48375 9.71604C0.957375 9.58431 1.73137 9.69239 2.29837 9.69239H5.99963C6.54638 9.69239 7.34288 9.57193 7.83787 9.71604C8.50838 9.91081 8.32162 11.1233 8.32162 11.9835V15.7787C8.32275 16.7075 8.52525 17.9167 7.7175 18ZM1.548 11.3159V16.4486H6.75V11.2438H1.57275C1.54463 11.2483 1.54575 11.2821 1.548 11.3159ZM18 10.3364V12.3415C17.9438 13.0181 17.9921 13.7972 17.9764 14.5133H12.8228V13.3435C12.339 13.2872 11.7506 13.3356 11.2264 13.3199C11.1701 14.8319 11.2185 16.4475 11.2016 17.9989H10.2577C9.44662 17.8379 9.67725 16.6377 9.67725 15.683V11.9824C9.67725 11.4262 9.5625 10.5919 9.70088 10.1439C9.86625 9.61021 10.5817 9.69014 11.2972 9.69014H14.805V12.865H16.4261C16.4419 11.8146 16.3935 10.7012 16.4497 9.69014C17.2316 9.64623 17.9539 9.65749 18 10.3364ZM4.03988 12.7952C4.81388 12.7108 5.45288 13.4448 5.1525 14.2521C4.73625 15.3712 2.74725 14.9501 3.11963 13.536C3.22425 13.1442 3.52125 12.8526 4.03988 12.7952ZM14.5642 18H12.8228C12.8385 17.3875 12.7901 16.7109 12.8475 16.1379H14.5654L14.5642 18ZM18 16.1379V17.3549C17.9325 17.6938 17.7311 17.9021 17.4195 18H16.1854C16.2011 17.3875 16.1528 16.7109 16.2101 16.1379C16.8064 16.1379 17.4037 16.1379 18 16.1379Z" fill={color} />
        </svg>
    )
}