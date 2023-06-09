import {
    SafeAreaView, StyleSheet, StatusBar
} from 'react-native';

import Portfolio from './components/Portfolio';


/**
 * Main app page
 * @returns {React.JSX.Element}
 */
export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: 'pink'}}>
            <StatusBar style={mainPageStyle.topbar} />
            <Portfolio/>
        </SafeAreaView>
    );
}

/**
 * Style for main page
 * @param {StyleSheet}
 */
const mainPageStyle = StyleSheet.create({
    topbar: {
        backgroundColor: 'black',
        color: 'white'
    },
});
