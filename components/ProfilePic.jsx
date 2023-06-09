import { ScrollView, StyleSheet, View, Image, Text, Dimensions } from "react-native";

/**
 * @constant {number}
 */
const screenHeight = Dimensions.get('window').height

/**
 * View for profile picture
 * @returns {React.JSX.Element}
 */
const ProfilePic = () => {
    return (
        <View style={portfolioStyle.Container}>
            <Image 
                source={require('../assets/IMG_1361.jpg')}
                style={portfolioStyle.ProfileImage}
            />
            <View style={portfolioStyle.ProfileParagraph}>
                <Text style={portfolioStyle.ProfileText}>Sinh viên:</Text>
                <Text style={portfolioStyle.ProfileText}>Đặng Minh Triết</Text>
                <Text style={portfolioStyle.ProfileText}>MSSV: 21125096</Text>
                <Image
                    source={require('../assets/logo-apcs.png')}
                    style={{resizeMode: 'contain', width: 'auto', flex: 3}}/>
            </View>
        </View>
    )
}

const portfolioStyle = StyleSheet.create({
    Container: {
        margin: 10,
        borderRadius: 20,
        height: screenHeight / 3.5,
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#242526',
    },
    ProfileImage: {
        flex: 1,
        borderRadius: 20,
        height: 'auto',
        resizeMode: 'cover',
    },
    ProfileParagraph: {
        flex: 1,
        paddingLeft: 20,
        color: 'white',
        flexDirection: "column"
    },
    ProfileText: {
        fontFamily: 'monospace',
        color: 'white',
        flex: 1
    }
})

export default ProfilePic;
