/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   Image,
   Text,
   TouchableOpacity,
} from 'react-native'
import { K_FONTSIZE_14, K_FONTSIZE_16, K_WIDTH, tagColor, titleColor} from "./HConst";

class HImageTextBar extends React.Component {

   render() {
      const {
         onPress,
         BarHeight,
         icon,
         iconSize,
         title,
         tColor,
         tSize,
         content,
         cColor,
         cSize,
      } = this.props;
      return (
          <TouchableOpacity activeOpacity={1} onPress={onPress}>
             <View style={{width: K_WIDTH, height: BarHeight ? BarHeight : 40, flexDirection: 'row', alignItems: 'center'}}>
                {icon ? <Image style={{width: iconSize ? iconSize : 30, height: iconSize ? iconSize : 30, marginLeft: 15}} resizeMode={'contain'} source={icon}/> : <View/>}
                <Text style={{marginLeft: 15, color: tColor ? tColor : titleColor, fontSize: tSize ? tSize : K_FONTSIZE_16}}>{title}</Text>
                <View style={{flex: 1}}/>
                <Text style={{marginRight: 10, color: cColor ? cColor : tagColor, fontSize: cSize ? cSize : K_FONTSIZE_14,maxWidth:200}} numberOfLines={2}>{content}</Text>
                {this.setRight()}
             </View>
          </TouchableOpacity>
      )
   }

   setRight = () => {
      if (this.props.showRight) {
         return (
             <Image source={require('./Img/more.png')} style={{width: 14, height: 14, marginRight: 10, tintColor:tagColor}}/>
         )
      }
      return <View/>
   }
}

export default HImageTextBar
