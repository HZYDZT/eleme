/**
 *  @Author : HZY
 *  @Date : 2019/1/16
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
} from 'react-native'
import {K_WIDTH, backColor} from "./HConst";

class HShadowLine extends React.Component {

   render() {
      return (
          <View
              style={{
                 width: K_WIDTH ,
                 height: this.props.height,
                 backgroundColor: backColor,
                 shadowColor: 'rgba(169,169,169,1)',
                 shadowOffset: {width: 0, height: 0},
                 shadowOpacity: 0.5,
                 shadowRadius: 1,
              }}/>
      )
   }
}

export default HShadowLine
