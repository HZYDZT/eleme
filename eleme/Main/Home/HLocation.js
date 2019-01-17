/**
 *  @Author : HZY
 *  @Date : 2019/1/16
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   Animated,
   Image,
   Text,
} from 'react-native'
import {
   DoderBlue,
   K_BAR_HEIGHT,
   K_FONTSIZE_12,
   White,
} from "../Src/UIComponent/HConst";

class HLocation extends React.Component {

   render() {
      return (
          <View style={{width: '100%', height: K_BAR_HEIGHT, backgroundColor: DoderBlue}}>
             <Animated.View style={{width: '100%', height: 44, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{height: 44, marginLeft: 15, flexDirection: 'row', alignItems: 'center'}}>
                   <Image source={require('../Src/Res/Home/location.png')} style={{width: 20, height: 20, tintColor: White}}/>
                   <Text style={{fontSize: 18, color: White, marginLeft: 5, fontWeight: '500'}}>{'民勇大厦'}</Text>
                   <Image source={require('../Src/Res/Home/down.png')} style={{width: 18, height: 18, tintColor: White}}/>
                </View>
                <View style={{height: 44, marginRight: 15, flexDirection: 'row', alignItems: 'center'}}>
                   <View style={{height: 44, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{fontSize: K_FONTSIZE_12, color: White}}>{'3°'}</Text>
                      <Text style={{fontSize: K_FONTSIZE_12, color: White}}>{'阵雨'}</Text>
                   </View>
                   <Image style={{width: 18, height: 18, tintColor: White}} source={require('../Src/Res/Home/lightningshandian.png')}/>
                </View>
             </Animated.View>
          </View>
      )
   }
}

export default HLocation
