import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, View } from "react-native";
import { useDispatch } from "react-redux";

function Primary() {

    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch({type:"ADD_NAME", payload: {name: text}})
    };

    return(
        <SafeAreaView>
        <View style= {{borderWidth:2, margin:10, padding:5}}>
        <TextInput value= {text} onChangeText= {setText} placeholder= "enter name"/>
        </View>
        <Button title="ADD" onPress={handleAdd} />
        </SafeAreaView>
    )
}
export default Primary;