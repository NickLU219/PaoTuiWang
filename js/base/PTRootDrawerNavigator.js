import React from 'react'
import {
    Button
} from 'react-native'
import {
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
import PTMainView from '../modules/main/PTMainView'
import PTPersonView from '../modules/main/PTPersonView'

const RightButton = (screen) => (<Button title={'点击'} onPress={() => this.props.navigation.navigate('DrawerOpen')}/>)

const nav_PTMainView = StackNavigator({
    Home: {
        screen: PTMainView,
        navigationOptions: {
            headerTitle: 'PTMainView',
            headerLeft: RightButton(PTMainView),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
})
const nav_PTPersonView = StackNavigator({
    Home: {
        screen: PTPersonView,
        navigationOptions: {
            headerTitle: 'PTPersonView',
            headerLeft: RightButton(PTPersonView),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
})

const DrawContent = DrawerNavigator(
    {
        Home: {
            screen: nav_PTMainView,
        },
        Notifications: {
            screen: nav_PTPersonView,
        }
    },
    {
        drawerWidth: 200,
        drawerPosition: 'right',
        contentOptions: {
            initialRouteName: PTMainView, // 默认页面组件
            activeTintColor: '#008AC9',  // 选中文字颜色
            activeBackgroundColor: '#f5f5f5', // 选中背景颜色
            inactiveTintColor: '#000',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {  // 样式

            }
        }
    }
)

module.exports = {
    drawContent: DrawContent
}