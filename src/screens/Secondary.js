import React from "react";
import { FlatList, SafeAreaView, Text} from "react-native";
import { useSelector } from "react-redux";

function Secondary() {
    const list = useSelector(s => s.nameList);
    return(
        <SafeAreaView>
            <FlatList  
                data={list} 
                renderItem= {({item}) => <Text>{item}</Text>}/>
        </SafeAreaView>
    )
}
export default Secondary;