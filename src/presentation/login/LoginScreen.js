import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import {Input, Button}  from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Network from '../../http/Network'
import *  as actions from './LoginActions'

class LoginScreen extends Component {

    constructor(props){
       super(props)
       this.state = {
           userName : '',
           password : '',
           isLoading : false
       }
    }

    getUser =  async () => {

        this.setState({isLoading : true})

        let loginRequest = {
            username: this.state.userName,
            password: this.state.password
        }
        
        console.log(loginRequest) 
    
        this.props.getMyUser(
            'Shreevridhee'
        );
        
        // try {
        // //   const response = await Network.instance.post('user/login', loginRequest) 
        // //   this.setState({isLoading: false})
        // //   console.log("My USer Data   ")
        // //   console.log(response.data)
        //   //alert(response.data.user.email)
        // } catch (err) {
        //     this.setState({isLoading: false})
        //    // console.log(err.response)
        //     alert(err.response.data.message[0])
        // }

        // try {
        //   const responseObject = await Network.postRequest('user/login', loginRequest)
        //   this.setState({isLoading: false})

        //   console.log("is called")
        //   alert(responseObject.user.email)
        // } catch (err) {
        //     console.log("is called error")
        //     console.log(err)
        //     alert(err.data.message[0])
        // }
    }

    render() {
        let userOne = this.props.loginReducer.name;
        console.log("in render");
        console.log(userOne);
        return ( 
            <SafeAreaView>
              <ScrollView>
                
              <View style = {{flex : 1, alignItems : 'center', marginTop : 100}}>

              <Input
              label = "Mobile"
              containerStyle = {{width: '80%'}}
              inputStyle = {{paddingStart: 10}}
              placeholder = "Enter Mobile"
              keyboardType = 'number-pad'
              leftIcon = {{ type: 'font-awesome', name: 'user' }}
              onChangeText = {(updatedUserName) => {this.setState( {userName : updatedUserName} )}}
              />

              <Input
              label = "Password"
              containerStyle = {{width: '80%'}}
              inputStyle = {{paddingStart: 10}}
              placeholder = "Enter Password"
              secureTextEntry = {true}
              leftIcon = {{ type: 'font-awesome', name: 'lock' }}
              onChangeText = { (updatedPassword) => {this.setState( {password: updatedPassword} )}} 
              />

              <Button 
               title = "Login"
               buttonStyle={{width: 290}}
               onPress = {this.getUser}
               loading = {this.state.isLoading}
               />
   
              </View>
              </ScrollView>  
            </SafeAreaView>
        )
    }
}

const mapStateToProps = store => {
    const { loginReducer } = store;
    return { loginReducer };
};

export default connect(mapStateToProps, actions)(LoginScreen);