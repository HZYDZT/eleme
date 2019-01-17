/**
 *  @Author : HZY
 *  @Date : 2019/1/16
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   TouchableOpacity,
   Image,
   Text,
} from 'react-native'
import {DoderBlue, K_FONTSIZE_14, K_WIDTH, White, tagColor} from "../Src/UIComponent/HConst";

class HSearchBar extends React.Component {

   render() {
      return (
          <View style={{backgroundColor: DoderBlue, width: '100%', height: 44, justifyContent: 'center', alignItems: 'center'}}>
             <TouchableOpacity>
                <View style={{
                   width: K_WIDTH - 40,
                   height: 30,
                   borderRadius: 15,
                   backgroundColor: White,
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexDirection:'row'
                }}>
                   <Image style={{width: 15, height: 15,tintColor:tagColor}} source={require('../Src/Res/Home/search.png')}/>
                   <Text style={{fontSize: K_FONTSIZE_14, color: tagColor,marginLeft:3}}>{'输入商家,商品名称'}</Text>
                </View>
             </TouchableOpacity>
          </View>
      )
   }
}

export default HSearchBar
