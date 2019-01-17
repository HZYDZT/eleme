/**
 *  @Author : HZY
 *  @Date : 2019/1/16
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   Text,
} from 'react-native'
import {DoderBlue, K_FONTSIZE_14, K_WIDTH} from "../Src/UIComponent/HConst";

class HTagBar extends React.Component {

   render() {
      return (
          <View style={{width: K_WIDTH, height: 30, backgroundColor: DoderBlue, paddingLeft: 15,flexDirection:'row',alignItems:'center'}}>
             {this.setTag()}
          </View>
      )
   }

   setTag = () => {
      var arr = ['拌鸡架', '凉皮', '鸡蛋果子', '烤肉拌饭'];
      var t = []
      for (var i = 0; i < arr.length; i++) {
         t.push(
             <Text key={i} style={{fontSize: K_FONTSIZE_14, color: 'white', fontWeight: '500',marginLeft:10}}>{arr[i]}</Text>
         )
      }
      return t;
   }

}

export default HTagBar
