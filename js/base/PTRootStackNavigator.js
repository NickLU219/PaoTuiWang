import React from 'react'
import {
    AppRegistry,
    Button
} from 'react-native'
import {
    StackNavigator
} from 'react-navigation';

const DrawContent = require('./PTRootDrawerNavigator');

const RightButton = () => (<Button title={}/>)

const PaoTuiWang = StackNavigator(
    {
        Home: {
            screen: DrawContent.drawContent,
            navigationOptions: {
                headerTitle: '跑腿网',
                // headerLeft: RightButton,
                headerTitleStyle: {
                    alignSelf:'center'
                }
            }
        },
    },

);

AppRegistry.registerComponent('PaoTuiWang', () => PaoTuiWang);