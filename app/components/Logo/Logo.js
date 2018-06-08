import React from 'react'
import { View, Image, Text } from 'react-native'

const Logo = () => (
    <View>
        <View>
            <Image source={require('./images/background.png')}/>
            <Image source={require('./images/logo.png')}/>
        </View>
        <Text>Currency Convertor</Text>
    </View>
)

export default Logo
