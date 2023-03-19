import React from 'react';  
//import react in our code.  
import { StyleSheet, View, Button }from 'react-native';  
import { TextInput } from 'react-native-paper';
export default class HomeScreen extends React.Component {  
  
    constructor(props) {  
        //constructor to set default state  
        super(props);  
        this.state = {  
            username: '',  
        };  
    }  
    static navigationOptions = {  
        title: 'Home',  
        headerStyle: {  
            backgroundColor: '#f13',  
             alignItems:'center'
        },  
        //headerTintColor: '#0ff',  
        headerTitleStyle: {  
            fontWeight: 'bold',  
            alignItems:'center'
        },  
    };  
 
    render() {  
        const { navigate } = this.props.navigation;  
     
        return (  
            //View to hold our multiple components  
            <View style={styles.container}>  
            {/*Input to get the value from the user*/}  
            
    
      
            <TextInput  
        value={this.state.username}  
        onChangeText={username => this.setState({ username })}  
        label={'Enter Name'}  
        style={styles.textInput}  
        />  <br/>
        <TextInput
      label="Password"
       
      />
        <View style={styles.buttonStyle}>  
            <Button  
        title="Submit"  
        color="#f13"  
       onPress={() =>  
      this.props.navigation.navigate('Profile', { userName: this.state.username })  

    }  
        />  
        </View>  
        </View>  
    );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#192841', 
         
        alignItems: 'center',  
        padding: 16,  
    },  
    textInput: {  
        height: 45,width: "95%",borderColor: "gray",borderWidth: 1,fontSize:20, fontWeight:'bolder',color:'#fff'
    },  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
       
    }  
});  