import { StyleSheet, View, Image, Text } from "react-native";

/**
 * View for profile picture
 * @returns {React.JSX.Element}
 */
const ProfilePic = () => {
    return (
        <View style={profileStyle.Container}>
            <Image 
                source={require('../assets/IMG_1361.jpg')}
                style={profileStyle.ProfileImage}
            />
            <View style={profileStyle.ProfileParagraph}>
                <Text style={profileStyle.ProfileText}>Sinh viên:</Text>
                <Text style={profileStyle.ProfileText}>Đặng Minh Triết</Text>
                <Text style={profileStyle.ProfileText}>MSSV: 21125096</Text>
                <Image
                    source={require('../assets/logo-apcs.png')}
                    style={{resizeMode: 'contain', width: 'auto', flex: 3}}/>
            </View>
        </View>
    )
}

/**
 * @constant {StyleSheet}
 */
const profileStyle = StyleSheet.create({
    Container: {
        margin: 10, padding: 20, borderRadius: 20,
        backgroundColor: '#242526',
        flexDirection: 'row',
        flex: 0.3,
    },
    ProfileImage: {
        borderRadius: 20,
        height: 'auto', resizeMode: 'cover',
        flex: 1,
    },
    ProfileParagraph: {
        paddingLeft: 20,
        color: 'white',
        flexDirection: "column", flex: 1,
    },
    ProfileText: {
        fontFamily: 'monospace',
        color: 'white',
        flex: 1
    }
})

export default ProfilePic;
