import { View, Text, StyleSheet, Image } from 'react-native';

const Bio = () => {
    return (
        <View style={bioStyle.container}>
            <Text style={bioStyle.text}>
                {'\u2022'}{'\u0009'}Interested in:
            </Text>
            <Text style={bioStyle.text}>
                {'\n'}{'\u0009'}Software engineer{'\n'}
                {'\n'}{'\u0009'}Backend development{'\n'}
                {'\n'}{'\u0009'}General purpose software{'\n'}
            </Text>
            <Text style={bioStyle.text}>
                {'\u2022'}{'\u0009'}Top skill:
            </Text>
            <View style={bioStyle.skillBox}>
                <Image style={bioStyle.logoStyle}
                    source={require('../assets/go-logo.png')}/>
                <Image style={bioStyle.logoStyle}
                    source={require('../assets/python-logo.png')}/>
                <Image style={bioStyle.logoStyle}
                    source={require('../assets/sqlite-logo.gif')}/>
            </View>
            <Text style={bioStyle.text}>
                {'\u2022'}{'\u0009'}Still a noob skill:
            </Text>
            <View style={bioStyle.skillBox}>
                <Image style={bioStyle.logoStyle}
                    source={require('../assets/js-logo.png')}/>
                <Image style={bioStyle.logoStyle}
                    source={require('../assets/rust-logo.png')}/>
                <Image style={bioStyle.logoStyle}
                    source={require('../assets/git-logo.png')}/>
            </View>
        </View>
    )
}

const bioStyle = StyleSheet.create({
    container: {
        margin: 10,
        padding: 20,
        backgroundColor: 'tan',
        borderRadius: 20,
        flex: 0.5
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'darkolivegreen',
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
    skillBox: {
        flexDirection: 'row',
        flex: 1
    },
    logoStyle: {
        margin: 10,
        resizeMode: 'contain',
        height: 'auto',
        width: 'auto',
        flex: 1
    }
})

export default Bio;
