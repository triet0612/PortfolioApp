import { View } from "react-native";

import ProfilePic from './ProfilePic';
import Bio from "./Bio";
import Communication from "./Communication";

/**
 * Portfolio component
 * @returns {React.JSX.Element}
 */
const Portfolio = () => {
    return (
        <View style={{flexDirection: 'column', flex: 1}}>
            <ProfilePic/>
            <Bio/>
            <Communication/>
        </View>
    );
}

export default Portfolio;
