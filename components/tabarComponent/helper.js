import { ProfileIcon, FavoriteIcon, HomeIcon, ChatIcon,CenterHomeIcon } from "../svgComponent/TabBarNavigationIcon"


export const TabbBarIcons = {
    index: (props) => <HomeIcon styleProps={{ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} />,
    "tabs/Chat": (props) => <ChatIcon styleProps={{ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} />,
    "tabs/Favourite": (props) => <FavoriteIcon styleProps={{ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} />,
    "tabs/Profile": (props) => <ProfileIcon styleProps={{ width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} />,
    "tabs/CenterHomeTab": (props) => <CenterHomeIcon styleProps={{ width: "34", height: "34", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }} />
  }
