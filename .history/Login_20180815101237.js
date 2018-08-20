// import React, {Component} from 'react';
// import {
//     View,
//     Text
// } from 'react-native';
// import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';


// class Login extends Component {
//     componentWillReceiveProps(){
//         console.log("inside CWP");
//         console.log("Props", this.refs.forminput.refs.username);
//     }
//     render(){
//         console.log("Console working");
//         return(
//             <View>
//                 <Text>Login</Text>
//                 <FormLabel>username:</FormLabel>
//                 <FormInput
//                 textInputRef="username"
//                 placeholder='Input username'
//                 ref={input => this.input = input}
//                 />
//                 <FormLabel>password:</FormLabel>
//                 <FormInput
//                 textInputRef="password"
//                 placeholder='Input password'
//                 passref={input => this.input = input}
//                 />
//                 <FormValidationMessage>This field is required</FormValidationMessage>
//             </View>
//         );
//     }
//     componentWillUnmount(){
//         console.log("Form username", this.refs.forminput.refs.username);
//     }
// }

// export default Login;
import React, { Component } from 'react';
import { Text,TextInput, View, Button, StyleSheet } from 'react-native';
// import t from 'tcomb-form-native'; // 0.6.15

// Form
// const Form = t.form.Form;

// // Form model
// const User = t.struct({
//   email: t.String,
//   password: t.String,
// });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'Mock username',
      password: '123'
    };
  }
  handleSubmit = () => {
    console.log("username",this.state.username);
    console.log("username",this.state.password);

    this.props.dispatch({type:'Login', username});
    // alert(this.);
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Text>Login</Text>
        {/* <Form ref={c => this._form = c} type={User} /> */}
        {/* <Form ref="form" type={User} /> */}
        {/* <Button
          title="Login"
          onPress={this.handleSubmit}
        /> */}
        <Text>username</Text>
         <TextInput
          {...this.props}
          editable = {true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text>password</Text>
        <TextInput
          {...this.props}
          editable = {true}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button
          title="Login"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});