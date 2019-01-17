/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   Dimensions,
   DeviceInfo,
   StatusBar,
   Platform
} from 'react-native'

const {width} = Dimensions.get('window')
const K_STATUS_HEIGHT = DeviceInfo.isIPhoneX_deprecated ? 44 : 20;

class HStatusBar extends React.Component {

   /**
    *  color: 背景颜色
    */

   render() {
      if(Platform.OS === 'ios') {
         return(
             <View
                 style={{
                    width: width,
                    height: K_STATUS_HEIGHT,
                    backgroundColor: this.props.color ? this.props.color : 'white'
                 }}/>
         )
      }
      else {
         return(
             <View>
                <StatusBar
                    backgroundColor={'rgba(0,0,0,0)'}
                    translucent={true}
                    animated={true}
                />
                <View style={{height:K_STATUS_HEIGHT,width:width,backgroundColor:this.props.color ? this.props.color : 'white'}}/>
             </View>

         )
      }
   }
}

export default HStatusBar




