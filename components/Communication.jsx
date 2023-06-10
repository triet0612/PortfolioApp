import { StyleSheet, View, Text, Button, Linking, TouchableOpacity, Image } from "react-native"

const Communication = () => {
    return (
        <View style={communicationStyle.container}>
            <TouchableOpacity 
                onPress={
                    async (title) => {await Linking.openURL("tel:(+84)917550612")}}
                style={communicationStyle.telephoneContainter}>
                <Text style={communicationStyle.text}>{"tel:(+84)917550612"}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    async (title) => {await Linking.openURL("https://github.com/triet0612")}}
                style={communicationStyle.GithubContainer}>
                <Image style={communicationStyle.GithubImage}
                    source={require("../assets/github-mark-white.png")}/>
                <Image style={communicationStyle.GithubImage}
                    source={require("../assets/GitHub_Logo_White.png")}/>
            </TouchableOpacity>
            
        </View>
    )
}

const communicationStyle = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: "column", flex: 0.2
    },
    text: {
        color: 'white',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        textShadowRadius: 20,
        textShadowColor: 'black'
    },
    telephoneContainter: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#25D366',
        borderWidth: 3,
        justifyContent: 'center'
    },
    GithubContainer:{
        flex: 1,
        borderRadius: 20,
        marginVertical: 5,
        backgroundColor: 'black',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    GithubImage: {
        margin: 10,
        
        resizeMode: 'contain',
        height: 'auto',
        width: 'auto',
        flex: 1
    },
})

export default Communication;
