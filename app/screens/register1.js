import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from '../components/container';
import { InputText } from '../components/input';
import { SButton } from '../components/button';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { usernameChange, passwordChange, emailChange, next } from '../actions/register';
import { connect } from 'react-redux';

class Register1 extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        username: PropTypes.string,
        password: PropTypes.string,
        email: PropTypes.string,
        token: PropTypes.string,

    };
    handleUsernameChange = (text) => {
        this.props.dispatch(usernameChange(text));
    };
    handlePasswordChange = (text) => {
        this.props.dispatch(passwordChange(text));
    };

    handleEmailChange = (text) => {
        this.props.dispatch(emailChange(text));
    };
    handleNextPress = () => {
        this.props.dispatch(next());
        this.props.navigation.navigate('Register2');
    };

    render() {
        return (
            <Container>
                <KeyboardAvoidingView behavior="padding">

                    <InputText value={this.props.username} onChangeText={(text) => this.handleUsernameChange(text)} />
                    <InputText value={this.props.password} onChangeText={(text) => this.handlePasswordChange(text)} />
                    <InputText value={this.props.email} onChangeText={(text) => this.handleEmailChange(text)} />
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>
                        <SButton text="Next" onPress={this.handleNextPress} />
                    </View>

                    <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Log in using:</Text>
                </KeyboardAvoidingView>

            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    const username = state.register.username;
    const password = state.register.password;
    const email = state.register.email;
    const token = state.register.token;
    return {
        username,
        password,
        email,
        token,
    };
};
export default connect(mapStateToProps)(Register1);