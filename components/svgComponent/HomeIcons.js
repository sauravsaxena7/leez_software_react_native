import { G, Path, Svg } from "react-native-svg"

export const SearchIcon = ({ styleProps,styles }) => {
    console.log("styleProps HalfCircleBottom", styleProps)
    return (
        <Svg 
        width={styleProps.width} 
        height={styleProps.height} 
        viewBox={styleProps.viewBox} 
        fill={styleProps.fill} 
        xmlns={styleProps.xmlns} 
        style={styles}
        >
            <G>
                <Path fillRule="evenodd" clipRule="evenodd" d="M7.26923 1.84615C4.27415 1.84615 1.84615 4.27415 1.84615 7.26923C1.84615 10.2643 4.27415 12.6923 7.26923 12.6923C10.2643 12.6923 12.6923 10.2643 12.6923 7.26923C12.6923 4.27415 10.2643 1.84615 7.26923 1.84615ZM0 7.26923C0 3.25455 3.25455 0 7.26923 0C11.2839 0 14.5385 3.25455 14.5385 7.26923C14.5385 11.2839 11.2839 14.5385 7.26923 14.5385C3.25455 14.5385 0 11.2839 0 7.26923Z" fill="#161819" />
                <Path fillRule="evenodd" clipRule="evenodd" d="M11.0201 11.4434C11.367 11.0698 11.951 11.0482 12.3246 11.3951L17.7092 16.3951C18.0828 16.742 18.1045 17.3261 17.7576 17.6996C17.4107 18.0732 16.8266 18.0948 16.453 17.7479L11.0684 12.7479C10.6948 12.401 10.6732 11.817 11.0201 11.4434Z" fill="#161819" />
            </G>
        </Svg>
    )
}
export const FilterIcon = ({ styleProps,styles }) => {
    console.log("styleProps HalfCircleBottom", styleProps)
    return (
        <Svg width={styleProps.width} height={styleProps.height} viewBox={styleProps.viewBox} fill={styleProps.fill} xmlns={styleProps.xmlns} style={styles}>
            <G>
                <Path d="M6.75 18.75V13.5M6.75 10.5V5.25M12 18.75V12M12 9V5.25M17.25 18.75V15M17.25 12V5.25M4.5 13.5H9M9.75 9H14.25M15 15H19.5" stroke="#161819" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />

            </G>
        </Svg>
    )
}
