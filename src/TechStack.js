import React from "react"
import { View, Text } from "react-native"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducers from "./reducers"
import LibraryList from "./components/LibraryList"

const TechStack = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <LibraryList />
            </View>
        </ Provider>
    )
}

export default TechStack