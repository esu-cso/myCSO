import React from "react";
import {Text, View} from "react-native";

class AccountScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Your Account!</Text>
            </View>
        );
    }
}

export default AccountScreen;