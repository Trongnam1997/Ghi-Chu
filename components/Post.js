//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput, Button } from 'react-native';


// create a component
class Post extends Component {
    state={
        title:"",
        content:""
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> i am the Post screen</Text>
                <TextInput style={{marginTop:20, height:40, borderColor:'gray', borderWidth:1}} placeholder="title" onChangeText={title => this.setState({title})} value={this.state.title} />
                <TextInput style={{marginTop:20, height:90, borderColor:'gray', borderWidth:1}} placeholder="content" onChangeText={content => this.setState({content})} value={this.state.content} />
     <Button title="Submit" onPress={this.submit} />
    
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Post;
