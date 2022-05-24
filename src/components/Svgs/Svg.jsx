import React from 'react'

function Svg(props) {
    switch(props.type){
        case 'arrow':
            return (
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.90039 1.75L6.40039 6.25L10.9004 1.75" stroke="#664EF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            )
        case 'map':
            return (
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.svgClass}>
                <path d="M7.43806 1.74419C6.7055 0.627907 5.4962 0 4.13573 0C2.7869 0 1.5776 0.627907 0.821781 1.74419C0.0659671 2.83721 -0.108452 4.23256 0.356665 5.45349C0.484572 5.77907 0.682246 6.11628 0.93806 6.4186L3.87992 9.88372C3.94969 9.95349 4.01946 10 4.12411 10C4.22876 10 4.29853 9.95349 4.36829 9.88372L7.32178 6.4186C7.5776 6.11628 7.7869 5.7907 7.90318 5.45349C8.36829 4.23256 8.19387 2.83721 7.43806 1.74419ZM4.13573 5.86047C3.13573 5.86047 2.31015 5.03488 2.31015 4.03488C2.31015 3.03488 3.13573 2.2093 4.13573 2.2093C5.13574 2.2093 5.96132 3.03488 5.96132 4.03488C5.96132 5.03488 5.14736 5.86047 4.13573 5.86047Z" fill="#1E2123"/>
                </svg>
            )
        case 'facebookLetter':
            return(
                <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.88397 3.79773H9.44259V1.08311C9.17369 1.04612 8.2489 0.962891 7.17188 0.962891C4.92464 0.962891 3.38522 2.3764 3.38522 4.97434V7.36528H0.905365V10.4H3.38522V18.0359H6.42565V10.4007H8.8052L9.18294 7.36599H6.42493V5.27525C6.42565 4.39813 6.66182 3.79773 7.88397 3.79773V3.79773Z" fill="#664EF9"/>
                </svg>
            )
        case 'facebook':
                return(
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8047 5.32031C10.2827 5.32031 5.80566 9.79731 5.80566 15.3193C5.80566 20.3093 9.46166 24.4453 14.2427 25.1983V18.2103H11.7027V15.3193H14.2427V13.1163C14.2427 10.6083 15.7357 9.22531 18.0187 9.22531C19.1127 9.22531 20.2587 9.42031 20.2587 9.42031V11.8793H18.9947C17.7547 11.8793 17.3667 12.6513 17.3667 13.4423V15.3173H20.1377L19.6947 18.2083H17.3667V25.1963C22.1477 24.4473 25.8037 20.3103 25.8037 15.3193C25.8037 9.79731 21.3267 5.32031 15.8047 5.32031Z" fill="#1E2123"/>
                    </svg>
                )

        case 'inst':
            return(
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8054 9.56142C12.4802 9.56142 9.79665 12.245 9.79665 15.5702C9.79665 18.8954 12.4802 21.579 15.8054 21.579C19.1306 21.579 21.8142 18.8954 21.8142 15.5702C21.8142 12.245 19.1306 9.56142 15.8054 9.56142ZM15.8054 19.4755C13.655 19.4755 11.9002 17.7206 11.9002 15.5702C11.9002 13.4198 13.655 11.6649 15.8054 11.6649C17.9558 11.6649 19.7107 13.4198 19.7107 15.5702C19.7107 17.7206 17.9558 19.4755 15.8054 19.4755ZM22.0603 7.91493C21.284 7.91493 20.657 8.54189 20.657 9.31825C20.657 10.0946 21.284 10.7216 22.0603 10.7216C22.8367 10.7216 23.4636 10.0976 23.4636 9.31825C23.4639 9.1339 23.4277 8.95132 23.3573 8.78095C23.2868 8.61059 23.1835 8.4558 23.0531 8.32544C22.9228 8.19508 22.768 8.09173 22.5976 8.02128C22.4273 7.95084 22.2447 7.9147 22.0603 7.91493V7.91493ZM27.5183 15.5702C27.5183 13.953 27.533 12.3505 27.4422 10.7362C27.3513 8.86122 26.9236 7.19716 25.5525 5.82607C24.1785 4.45204 22.5173 4.02724 20.6423 3.93642C19.0252 3.8456 17.4226 3.86025 15.8084 3.86025C14.1912 3.86025 12.5886 3.8456 10.9744 3.93642C9.09938 4.02724 7.43532 4.45497 6.06423 5.82607C4.6902 7.20009 4.2654 8.86122 4.17458 10.7362C4.08376 12.3534 4.09841 13.956 4.09841 15.5702C4.09841 17.1845 4.08376 18.7899 4.17458 20.4042C4.2654 22.2792 4.69313 23.9433 6.06423 25.3143C7.43825 26.6884 9.09938 27.1132 10.9744 27.204C12.5916 27.2948 14.1941 27.2802 15.8084 27.2802C17.4256 27.2802 19.0281 27.2948 20.6423 27.204C22.5173 27.1132 24.1814 26.6854 25.5525 25.3143C26.9265 23.9403 27.3513 22.2792 27.4422 20.4042C27.5359 18.7899 27.5183 17.1874 27.5183 15.5702V15.5702ZM24.9402 22.4784C24.7263 23.0116 24.4685 23.4101 24.0554 23.8202C23.6423 24.2333 23.2468 24.4911 22.7136 24.705C21.1726 25.3173 17.5134 25.1796 15.8054 25.1796C14.0974 25.1796 10.4353 25.3173 8.8943 24.7079C8.3611 24.494 7.96266 24.2362 7.55251 23.8231C7.13942 23.4101 6.88161 23.0145 6.66774 22.4813C6.05837 20.9374 6.19606 17.2782 6.19606 15.5702C6.19606 13.8622 6.05837 10.2001 6.66774 8.65908C6.88161 8.12587 7.13942 7.72743 7.55251 7.31728C7.96559 6.90712 8.3611 6.64638 8.8943 6.43251C10.4353 5.82314 14.0974 5.96083 15.8054 5.96083C17.5134 5.96083 21.1756 5.82314 22.7166 6.43251C23.2498 6.64638 23.6482 6.90419 24.0584 7.31728C24.4715 7.73036 24.7293 8.12587 24.9431 8.65908C25.5525 10.2001 25.4148 13.8622 25.4148 15.5702C25.4148 17.2782 25.5525 20.9374 24.9402 22.4784Z" fill="#1E2123"/>
                </svg>
            )
        case 'vk':
            return(
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.2554 9.26839C27.4231 8.72142 27.2554 8.32031 26.4625 8.32031H23.836C23.1676 8.32031 22.8622 8.66731 22.6946 9.04843C22.6946 9.04843 21.3591 12.2467 19.4668 14.3205C18.8559 14.9239 18.5769 15.1145 18.2439 15.1145C18.0774 15.1145 17.8355 14.9239 17.8355 14.3769V9.26839C17.8355 8.61203 17.6427 8.32031 17.0857 8.32031H12.9585C12.5417 8.32031 12.2902 8.62379 12.2902 8.91315C12.2902 9.53423 13.2363 9.67773 13.3333 11.428V15.225C13.3333 16.0567 13.1812 16.2084 12.8459 16.2084C11.956 16.2084 9.79056 12.9984 8.50543 9.32367C8.25511 8.60968 8.0024 8.32149 7.33169 8.32149H4.70633C3.95538 8.32149 3.80566 8.66849 3.80566 9.0496C3.80566 9.73419 4.69555 13.1219 7.9509 17.6023C10.1211 20.6618 13.1765 22.3203 15.9599 22.3203C17.6283 22.3203 17.8343 21.9521 17.8343 21.317V19.0044C17.8343 18.2681 17.9936 18.1198 18.5218 18.1198C18.9098 18.1198 19.5781 18.3128 21.1364 19.7866C22.9161 21.5346 23.2108 22.3191 24.2108 22.3191H26.8362C27.586 22.3191 27.9608 21.951 27.7452 21.224C27.5093 20.5006 26.6589 19.4479 25.5307 18.2022C24.9175 17.4917 24.0012 16.7271 23.7222 16.3448C23.3329 15.852 23.4455 15.6344 23.7222 15.1968C23.7234 15.198 26.9224 10.7728 27.2554 9.26839Z" fill="#1E2123"/>
                </svg>
            )
        case 'home':
            return(
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_305_2083)">
                <path d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z" fill="#664EF9"/>
                <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9"/>
                </g>
                <defs>
                <clipPath id="clip0_305_2083">
                <rect width="12" height="12" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            )
        case 'search':
            return(
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8676 15.2581L13.5441 11.9344C13.3941 11.7844 13.1907 11.7011 12.9774 11.7011H12.434C13.3541 10.5243 13.9008 9.04417 13.9008 7.43401C13.9008 3.60364 10.7973 0.5 6.96711 0.5C3.13693 0.5 0.0334473 3.60364 0.0334473 7.43401C0.0334473 11.2644 3.13693 14.368 6.96711 14.368C8.57718 14.368 10.0573 13.8213 11.234 12.9012V13.4446C11.234 13.658 11.3173 13.8613 11.4673 14.0113L14.7908 17.335C15.1042 17.6483 15.6108 17.6483 15.9209 17.335L16.8642 16.3916C17.1776 16.0782 17.1776 15.5715 16.8676 15.2581ZM6.96711 11.7011C4.61033 11.7011 2.70024 9.79424 2.70024 7.43401C2.70024 5.07711 4.607 3.16693 6.96711 3.16693C9.32388 3.16693 11.234 5.07378 11.234 7.43401C11.234 9.79091 9.32722 11.7011 6.96711 11.7011Z" fill="white"/>
                </svg>
            )
        case 'viber':
            return(
                <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7671 2.47798C9.36994 2.49685 6.3636 2.72621 4.68188 4.26712C3.43347 5.50827 2.99725 7.33806 2.94645 9.60407C2.9029 11.8614 2.85209 16.1001 6.93845 17.2549V19.0114C6.93845 19.0114 6.91087 19.7154 7.37539 19.8606C7.94879 20.0421 8.27541 19.4984 8.81977 18.9178L9.83592 17.771C12.6303 18.0032 14.7715 17.4669 15.0183 17.387C15.5844 17.2056 18.7787 16.7984 19.3013 12.5589C19.8384 8.18146 19.04 5.42335 17.6029 4.17495L17.5956 4.17349C17.1602 3.77429 15.4182 2.50411 11.5205 2.48959C11.5205 2.48959 11.2331 2.47145 10.7671 2.47798ZM10.8158 3.7097C11.2113 3.70752 11.4545 3.72421 11.4545 3.72421C14.7497 3.73147 16.3255 4.72584 16.6956 5.05972C17.9077 6.09691 18.5305 8.58429 18.0747 12.2395C17.6392 15.7815 15.048 16.0065 14.569 16.1589C14.3658 16.2243 12.4786 16.6888 10.1037 16.5364C10.1037 16.5364 8.33347 18.671 7.78185 19.2226C7.69475 19.317 7.59314 19.346 7.52781 19.3315C7.43346 19.3097 7.40443 19.1936 7.41168 19.0339L7.4262 16.1168C3.96332 15.1588 4.16655 11.5427 4.20284 9.6556C4.24639 7.76847 4.60204 6.22103 5.65448 5.17585C7.0749 3.89115 9.62833 3.71695 10.815 3.7097H10.8158ZM11.0771 5.59682C11.0485 5.59673 11.0202 5.60227 10.9938 5.61313C10.9674 5.624 10.9434 5.63997 10.9231 5.66013C10.9029 5.68029 10.8869 5.70425 10.8759 5.73063C10.865 5.757 10.8593 5.78528 10.8593 5.81384C10.8593 5.87159 10.8823 5.92698 10.9231 5.96781C10.9639 6.00865 11.0193 6.03159 11.0771 6.03159C11.6167 6.02129 12.153 6.11798 12.655 6.31605C13.1571 6.51413 13.6149 6.80968 14.0021 7.18564C14.7933 7.95501 15.1787 8.98567 15.1932 10.3357C15.1932 10.3643 15.1988 10.3926 15.2098 10.419C15.2207 10.4454 15.2367 10.4694 15.257 10.4897C15.2772 10.5099 15.3012 10.5259 15.3276 10.5369C15.354 10.5478 15.3823 10.5534 15.4109 10.5534V10.5469C15.4687 10.5469 15.5241 10.524 15.5649 10.4831C15.6057 10.4423 15.6287 10.3869 15.6287 10.3292C15.6556 9.69428 15.553 9.06056 15.3272 8.46659C15.1013 7.87263 14.7569 7.33086 14.3149 6.87426C13.4512 6.03232 12.361 5.59682 11.0763 5.59682H11.0771ZM8.20718 6.09764C8.05283 6.07564 7.89556 6.10633 7.7608 6.18474H7.75209C7.45451 6.35893 7.18015 6.57668 6.91885 6.86701C6.72288 7.09927 6.61328 7.3308 6.58425 7.55581C6.56717 7.68777 6.57957 7.82188 6.62054 7.94848L6.63506 7.95573C6.85878 8.61343 7.15069 9.24592 7.50604 9.84286C7.96665 10.6789 8.53257 11.4524 9.18994 12.1444L9.21171 12.1735L9.24075 12.1952L9.26252 12.217L9.2843 12.2388C9.97907 12.8978 10.7546 13.4661 11.5924 13.9299C12.5505 14.4525 13.1326 14.6993 13.481 14.8009V14.8082C13.5826 14.8372 13.6755 14.8517 13.7699 14.8517C14.0672 14.83 14.3488 14.7094 14.5697 14.5091C14.8528 14.2551 15.0778 13.9735 15.2447 13.6759V13.6687C15.4117 13.3566 15.3536 13.0582 15.1141 12.855C14.6314 12.4327 14.1087 12.0584 13.5536 11.7372C13.1834 11.534 12.806 11.6574 12.6535 11.8606L12.3269 12.2736C12.16 12.4769 11.8551 12.4478 11.8551 12.4478L11.8464 12.4551C9.58188 11.8744 8.97945 9.58157 8.97945 9.58157C8.97945 9.58157 8.95042 9.26947 9.16091 9.10979L9.56736 8.78317C9.76334 8.62349 9.90124 8.24606 9.69075 7.87589C9.37005 7.32045 8.99567 6.79778 8.57299 6.31538C8.48105 6.20135 8.35125 6.12409 8.20718 6.09764ZM11.4538 6.74362C11.396 6.74381 11.3407 6.76694 11.3 6.80791C11.2593 6.84888 11.2366 6.90434 11.2367 6.96209C11.2369 7.01984 11.2601 7.07515 11.301 7.11585C11.342 7.15654 11.3975 7.1793 11.4552 7.17911C12.1816 7.19172 12.8733 7.49189 13.3786 8.0138C13.6066 8.26531 13.7819 8.55996 13.8941 8.88034C14.0063 9.20073 14.0531 9.54036 14.0319 9.87915C14.0321 9.93678 14.0551 9.99198 14.0959 10.0327C14.1367 10.0733 14.192 10.0962 14.2496 10.0962L14.2569 10.1049C14.2855 10.1049 14.3139 10.0992 14.3404 10.0882C14.3668 10.0773 14.3909 10.0611 14.4111 10.0409C14.4313 10.0206 14.4474 9.99646 14.4583 9.96996C14.4692 9.94346 14.4747 9.91507 14.4746 9.88641C14.4964 9.02269 14.2278 8.29687 13.698 7.71621C13.1681 7.13556 12.4278 6.80894 11.4843 6.74362C11.4741 6.74291 11.4639 6.74291 11.4538 6.74362ZM11.8094 7.91872C11.7803 7.91786 11.7513 7.92275 11.7241 7.9331C11.6968 7.94345 11.6719 7.95906 11.6507 7.97904C11.6295 7.99903 11.6125 8.02299 11.6005 8.04956C11.5886 8.07614 11.582 8.1048 11.5811 8.13392C11.5803 8.16304 11.5852 8.19204 11.5955 8.21928C11.6059 8.24651 11.6215 8.27143 11.6415 8.29263C11.6615 8.31382 11.6854 8.33088 11.712 8.34281C11.7386 8.35475 11.7672 8.36133 11.7964 8.36219C12.5149 8.39848 12.8633 8.76139 12.9069 9.50899C12.9087 9.56547 12.9325 9.61901 12.9731 9.65828C13.0138 9.69756 13.0681 9.7195 13.1246 9.71947H13.1319C13.1611 9.71856 13.1899 9.71177 13.2164 9.6995C13.243 9.68723 13.2668 9.66973 13.2864 9.64805C13.3061 9.62637 13.3212 9.60096 13.3308 9.57332C13.3404 9.54569 13.3443 9.5164 13.3423 9.48721C13.2915 8.51461 12.7617 7.96953 11.8181 7.91872C11.8152 7.91866 11.8123 7.91866 11.8094 7.91872Z" fill="#000"/>
                </svg>
            )
        case 'whatsup':
            return(         
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1558 2.87929C14.3846 2.10244 13.4667 1.48655 12.4555 1.06738C11.4442 0.64821 10.3598 0.43412 9.26514 0.43754C4.67675 0.43754 0.942178 4.17211 0.942178 8.76365C0.942178 10.2308 1.32656 11.6654 2.05436 12.9257L0.872864 17.241L5.28692 16.0826C6.50723 16.7473 7.87449 17.0961 9.26409 17.0971H9.26724C13.8556 17.0971 17.5934 13.3625 17.5934 8.771C17.5961 7.67672 17.3821 6.59273 16.9635 5.58165C16.5449 4.57058 15.9302 3.65246 15.1548 2.88034L15.1558 2.87929ZM9.26724 15.6919C8.0271 15.6921 6.80973 15.3588 5.74272 14.7268L5.48961 14.5755L2.87038 15.2613L3.56982 12.7083L3.40599 12.4457C2.71049 11.3438 2.34295 10.0667 2.34632 8.76365C2.34854 6.92797 3.07897 5.16815 4.37729 3.87042C5.67561 2.57269 7.43576 1.84307 9.27144 1.84168C11.1188 1.84168 12.859 2.56423 14.1644 3.86965C14.8086 4.51152 15.3192 5.2747 15.6668 6.11507C16.0143 6.95544 16.1919 7.85636 16.1892 8.76575C16.1861 12.5854 13.0816 15.6909 9.26724 15.6909V15.6919ZM13.0617 10.507C12.8548 10.402 11.8308 9.89999 11.6407 9.83067C11.4506 9.76136 11.312 9.72565 11.1713 9.93569C11.0337 10.1426 10.6336 10.612 10.5117 10.7528C10.3899 10.8903 10.2691 10.9103 10.0623 10.8053C9.85536 10.7002 9.18218 10.4808 8.38821 9.77186C7.77068 9.2205 7.35165 8.53786 7.22982 8.33096C7.108 8.12407 7.21617 8.0096 7.32224 7.90773C7.41781 7.81531 7.52914 7.66513 7.63416 7.5433C7.73918 7.42148 7.77174 7.33641 7.84105 7.19568C7.91036 7.0581 7.87676 6.93628 7.82425 6.83125C7.77173 6.72623 7.3548 5.70227 7.18466 5.28534C7.01768 4.87785 6.84334 4.93457 6.71522 4.92721C6.59339 4.92091 6.45581 4.92091 6.31824 4.92091C6.18066 4.92091 5.95381 4.97342 5.76372 5.18032C5.57363 5.38721 5.03487 5.89236 5.03487 6.91632C5.03487 7.94028 5.77947 8.92854 5.8845 9.06927C5.98952 9.20684 7.35165 11.3104 9.43843 12.2105C9.93413 12.4237 10.3217 12.5518 10.6231 12.6505C11.1219 12.808 11.5746 12.7849 11.9327 12.7324C12.3328 12.6736 13.1635 12.2304 13.3379 11.7442C13.5122 11.2579 13.5122 10.842 13.4597 10.7559C13.4103 10.6635 13.2728 10.612 13.0627 10.506L13.0617 10.507Z" fill="#000"/>
                </svg>

            )
        case 'telegram':
            return(         
                <svg width="18" height="18" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2089 0.997407L1.56595 6.644C0.566623 7.04538 0.572405 7.60286 1.3826 7.85145L5.14204 9.02421L13.8403 3.53619C14.2516 3.28594 14.6274 3.42056 14.3185 3.69476L7.27118 10.0549H7.26953L7.27118 10.0557L7.01185 13.9308C7.39176 13.9308 7.55941 13.7565 7.77249 13.5509L9.59853 11.7752L13.3968 14.5808C14.0971 14.9665 14.6001 14.7683 14.7744 13.9325L17.2677 2.18173C17.5229 1.15846 16.8771 0.695132 16.2089 0.997407Z" fill="#000"/>
                </svg>
            )
        case 'errorSign':
        return(         
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 0C5 0 0.5 4.5 0.5 10C0.5 15.5 5 20 10.5 20C16 20 20.5 15.5 20.5 10C20.5 4.5 16 0 10.5 0ZM10.5 2C11.6 2 12.4 2.9 12.3 4L11.5 12H9.5L8.7 4C8.6 2.9 9.4 2 10.5 2ZM10.5 18C9.4 18 8.5 17.1 8.5 16C8.5 14.9 9.4 14 10.5 14C11.6 14 12.5 14.9 12.5 16C12.5 17.1 11.6 18 10.5 18Z" fill="#EB5757"/>
            </svg>
        )
        case 'moreOption':
            return(         
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.81148 4.29814C6.81148 2.90551 5.83739 1.73697 4.53492 1.4358V0.661897C4.53492 0.296309 4.23861 0 3.87303 0C3.50744 0 3.21113 0.296309 3.21113 0.661897V1.4358C1.90874 1.73689 0.93457 2.90551 0.93457 4.29814C0.93457 5.69077 1.90866 6.85931 3.21113 7.16048V17.3381C3.21113 17.7037 3.50744 18 3.87303 18C4.23861 18 4.53492 17.7037 4.53492 17.3381V7.16048C5.83739 6.85931 6.81148 5.69077 6.81148 4.29814ZM2.25844 4.29814C2.25844 3.40781 2.98277 2.68348 3.8731 2.68348C4.76343 2.68348 5.48776 3.40781 5.48776 4.29814C5.48776 5.18846 4.76343 5.9128 3.8731 5.9128C2.98277 5.9128 2.25844 5.18846 2.25844 4.29814Z" fill="#664EF9"/>
                <path d="M9.56239 8.89222V0.661897C9.56239 0.296309 9.26608 0 8.90049 0C8.5349 0 8.2386 0.296309 8.2386 0.661897V8.89222C6.9362 9.19331 5.96204 10.3619 5.96204 11.7546C5.96204 13.1472 6.93613 14.3157 8.2386 14.6169V17.3381C8.2386 17.7037 8.5349 18 8.90049 18C9.26608 18 9.56239 17.7037 9.56239 17.3381V14.6169C10.8648 14.3158 11.8389 13.1472 11.8389 11.7546C11.8389 10.3619 10.8649 9.19338 9.56239 8.89222ZM7.2859 11.7546C7.2859 10.8642 8.01024 10.1399 8.90057 10.1399C9.79089 10.1399 10.5152 10.8642 10.5152 11.7546C10.5152 12.6449 9.79089 13.3692 8.90057 13.3692C8.01024 13.3692 7.2859 12.6449 7.2859 11.7546Z" fill="#664EF9"/>
                <path d="M16.866 7.20151C16.866 5.80888 15.892 4.64034 14.5895 4.33918V0.661897C14.5895 0.296309 14.2932 0 13.9276 0C13.562 0 13.2657 0.296309 13.2657 0.661897V4.33918C11.9633 4.64027 10.9891 5.80888 10.9891 7.20151C10.9891 8.59415 11.9632 9.76269 13.2657 10.0639V17.3381C13.2657 17.7037 13.562 18 13.9276 18C14.2932 18 14.5895 17.7037 14.5895 17.3381V10.0639C15.892 9.76269 16.866 8.59415 16.866 7.20151ZM12.313 7.20151C12.313 6.31119 13.0373 5.58685 13.9277 5.58685C14.818 5.58685 15.5423 6.31119 15.5423 7.20151C15.5423 8.09184 14.818 8.81618 13.9277 8.81618C13.0373 8.81618 12.313 8.09184 12.313 7.20151Z" fill="#664EF9"/>
                </svg>
            )

        

                
        case 'dots':
            return(
                <svg width="70" height="70" viewBox="0 0 70 70" className={props.className} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_552_2322)">
                <circle cx="6.5" cy="2.5" r="2.5" />
                </g>
                <g filter="url(#filter1_d_552_2322)">
                <circle cx="6.5" cy="39.9622" r="2.5" />
                </g>
                <g filter="url(#filter2_d_552_2322)">
                <circle cx="6.5" cy="21.2312" r="2.5" />
                </g>
                <g filter="url(#filter3_d_552_2322)">
                <circle cx="6.5" cy="58.6938" r="2.5" />
                </g>
                <g filter="url(#filter4_d_552_2322)">
                <circle cx="25.2314" cy="2.50024" r="2.5" />
                </g>
                <g filter="url(#filter5_d_552_2322)">
                <circle cx="25.2314" cy="39.9624" r="2.5" />
                </g>
                <g filter="url(#filter6_d_552_2322)">
                <circle cx="25.2314" cy="21.2314" r="2.5" />
                </g>
                <g filter="url(#filter7_d_552_2322)">
                <circle cx="25.2314" cy="58.6936" r="2.5" />
                </g>
                <g filter="url(#filter8_d_552_2322)">
                <circle cx="43.9624" cy="2.5" r="2.5" />
                </g>
                <g filter="url(#filter9_d_552_2322)">
                <circle cx="43.9624" cy="39.9624" r="2.5" />
                </g>
                <g filter="url(#filter10_d_552_2322)">
                <circle cx="43.9624" cy="21.2314" r="2.5" />
                </g>
                <g filter="url(#filter11_d_552_2322)">
                <circle cx="43.9624" cy="58.6938" r="2.5" />
                </g>
                <g filter="url(#filter12_d_552_2322)">
                <circle cx="62.6934" cy="2.50024" r="2.5" />
                </g>
                <g filter="url(#filter13_d_552_2322)">
                <circle cx="62.6934" cy="39.9624" r="2.5" />
                </g>
                <g filter="url(#filter14_d_552_2322)">
                <circle cx="62.6934" cy="21.2314" r="2.5" />
                </g>
                <g filter="url(#filter15_d_552_2322)">
                <circle cx="62.6934" cy="58.6934" r="2.5" />
                </g>
                <defs>
                <filter id="filter0_d_552_2322" x="0" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter1_d_552_2322" x="0" y="37.4622" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter2_d_552_2322" x="0" y="18.7312" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter3_d_552_2322" x="0" y="56.1938" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter4_d_552_2322" x="18.7314" y="0.000244141" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter5_d_552_2322" x="18.7314" y="37.4624" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter6_d_552_2322" x="18.7314" y="18.7314" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter7_d_552_2322" x="18.7314" y="56.1936" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter8_d_552_2322" x="37.4624" y="0" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter9_d_552_2322" x="37.4624" y="37.4624" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter10_d_552_2322" x="37.4624" y="18.7314" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter11_d_552_2322" x="37.4624" y="56.1938" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter12_d_552_2322" x="56.1934" y="0.000244141" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter13_d_552_2322" x="56.1934" y="37.4624" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter14_d_552_2322" x="56.1934" y="18.7314" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                <filter id="filter15_d_552_2322" x="56.1934" y="56.1934" width="13" height="13" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.482353 0 0 0 0 0.345098 0 0 0 0.13 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_552_2322"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_552_2322" result="shape"/>
                </filter>
                </defs>
                </svg>
            )
        default:
            return(
                <p></p>
            )

    }
}

export default Svg