import React from 'react'
import {
    AppRegistry,
    Button
} from 'react-native'

const DrawContent = require('./PTRootDrawerNavigator');

const PaoTuiWang = DrawContent.drawContent;

AppRegistry.registerComponent('PaoTuiWang', () => PaoTuiWang);