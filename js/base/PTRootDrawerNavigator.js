import {
    DrawerNavigator
} from 'react-navigation';
import PTMainView from '../modules/main/PTMainView'
import PTPersonView from '../modules/main/PTPersonView'


const DrawContent = DrawerNavigator(
    {
        Home: {
            screen: PTMainView,
        },
        Notifications: {
            screen: PTPersonView,
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