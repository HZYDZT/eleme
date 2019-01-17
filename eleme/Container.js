/**
 *  @Author : HZY
 *  @Date : 2019/1/15
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   Image
} from 'react-native'
import {
   createBottomTabNavigator,
   createAppContainer,
   createStackNavigator,
} from 'react-navigation';
//todo: home
import Home from './Main/Home/Home'

//todo: find
import Find from './Main/Find/Find'

//todo: order
import Order from './Main/Order/Order'

//todo: me
import Me from './Main/Me/Me'

//other
import {DoderBlue,} from './Main/Src/UIComponent/HConst'

const Tabbar = createBottomTabNavigator({
   Home: {
      screen: Home,
      navigationOptions: ({
         tabBarLabel: '首页',
         tabBarIcon: ({focused, tintColor, horizontal}) => (
             <Image
                 resizeMode={'contain'}
                 style={{width: 20, height: 20, tintColor: focused ? DoderBlue : 'rgba(169,169,169,1)'}}
                 source={require('./Main/Src/Res/Tabbar/ele.png')}
             />
         ),
      })
   },
   Find: {
      screen: Find,
      navigationOptions: ({
         tabBarLabel: '发现',
         tabBarIcon: ({focused, tintColor, horizontal}) => (
             <Image
                 resizeMode={'contain'}
                 style={{width: 20, height: 20, tintColor: focused ? DoderBlue : 'rgba(169,169,169,1)'}}
                 source={require('./Main/Src/Res/Tabbar/find.png')}
             />
         ),
      })
   },
   Order: {
      screen: Order,
      navigationOptions: ({
         tabBarLabel: '订单',
         tabBarIcon: ({focused, tintColor, horizontal}) => (
             <Image
                 resizeMode={'contain'}
                 style={{width: 20, height: 20, tintColor: focused ? DoderBlue : 'rgba(169,169,169,1)'}}
                 source={require('./Main/Src/Res/Tabbar/order.png')}
             />
         ),
      })
   },
   Me: {
      screen: Me,
      navigationOptions: ({
         tabBarLabel: '我的',
         tabBarIcon: ({focused, tintColor, horizontal}) => (
             <Image
                 resizeMode={'contain'}
                 style={{width: 20, height: 20, tintColor: focused ? DoderBlue : 'rgba(169,169,169,1)'}}
                 source={require('./Main/Src/Res/Tabbar/me.png')}
             />
         )
      })
   },

}, {
   initialRouteName: 'Home',
   backBehavior: false,
   tabBarOptions: {
      activeTintColor: DoderBlue,
      inactiveTintColor: 'rgba(169,169,169,1)'
   },
});


const Rooter = createStackNavigator({
   Tabbar:Tabbar,
},{
   initialRouteName: 'Tabbar',
   headerMode: 'none',
   defaultNavigationOptions: {
      gesturesEnabled: false
   }

})

Rooter.navigationOptions = ({navigation}) => {
   let tabBarVisible = true;
   return {
      tabBarVisible
   };
};
const AppRoot = createAppContainer(Rooter);

class Container extends React.Component {

   render() {
      return(
          <AppRoot/>
      )
   }
}

export default Container
