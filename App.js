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
        <SafeAreaView style={{backgroundColor: 'darkorchid', flex: 1}}>
            <StatusBar style={mainPageStyle.topbar} />
            <Portfolio/>
        </SafeAreaView>
    );
}

/**
 * Style for main page
 * @constant {StyleSheet}
 */
const mainPageStyle = StyleSheet.create({
    topbar: {
        backgroundColor: 'black',
        color: 'white'
    },
});
