import React, { Component } from 'react';
import MapView {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Map extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello</Text>
            </View>
        );
    }
}


