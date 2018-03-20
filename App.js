import React, { Component } from "react"
import { View, Text } from "react-native"
import { StackNavigator } from "react-navigation"
import TechStack from "./src/TechStack"

export default StackNavigator({
  TechStack: { screen: TechStack }
})