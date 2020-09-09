/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button, TouchableOpacity,
    Image,
    ActivityIndicator,
    ScrollView,
    FlatList
} from 'react-native';
import {
    Query
} from 'parse/react-native';
import OptionsMenu from "react-native-options-menu";

import RoleManager from '../utils/RoleManager'

export default class UserManagement extends Component {

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
        this.state = {
            loading: true,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            roleLevel: RoleManager.getLevel(),
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        var query = new Query("employeeData");
        var eachPromise = query.each((result) => {

            this.state.data.push({
                userId: result.get('auth'),
                userName: result.get('firstname') + " " + result.get('lastname'),
                userPost: result.get("Designation"),
                userWorkExperience: result.get("workExperience"),
                userGender: result.get('gender'),
                userDateofbirth: result.get('dob'),
                userMobile: result.get('phone'),
                userAddress: result.get('address'),
            });
            this.setState(this.state);
            console.log("data read");
        })
        eachPromise.then((result) => {
            console.log("data promise fulfilled");
        }, (errorin) => {
            this.setState({ error: errorin, loading: false });
            console.log("data Promise ERROR:" + error);
        }).catch((errorin) => {
            this.setState({ error: errorin, loading: false });
            console.log("data Promise ERROR:" + error);
        })
    }
    render() {
        let posts = this.state.data.map((val, key) => {
            console.log(key);
            return (
                <TouchableOpacity style={{ elevation: 10 }}
                    onPress={() =>
                        this.navigation.navigate("UserDetails", {
                            userName: val.userName,
                            userId: val.userId,
                            userPost: val.userPost,
                            userWorkExperience: val.userWorkExperience,
                            userGender: val.userGender,
                            userDateofbirth: val.userDateofbirth,
                            userMobile: val.userMobile,
                            userAddress: val.userAddress,
                        })
                    } >

                    <View style={styles1.jobcard_view}>

                        <Text style={styles1.jobcard_head}>{val.userName}</Text>
                        <Text style={styles1.jobcard_details}>ID: {val.userId}</Text>
                        <Text style={styles1.jobcard_details}>POST: {val.userPost}</Text>
                        <Text style={styles1.jobcard_details}>WORK EXP: {val.userWorkExperience}</Text>
                        <Text style={styles1.jobcard_details}>GENDER: {val.userGender}</Text>
                        <Text style={styles1.jobcard_details}>MOBILE: {val.userMobile}</Text>
                        <Text style={styles1.jobcard_details}>ADDRESS: {val.userAddress}</Text>

                    </View>
                </TouchableOpacity>
            );
        });

        return (
            <ScrollView>
                {posts}
            </ScrollView>
        );

    }
    clickHandler = () => {
        this.navigation.navigate("NewUser");
    };
}


const styles1 = require('../stylesheets/job_card_style');

const styles = StyleSheet.create({
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },

    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
});

