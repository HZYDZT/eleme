/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
} from 'react-native'
import {K_WIDTH, lineColor} from "./HConst";

class HSepLine extends React.Component {

   render() {
      const {left} = this.props
      return (
          <View style={{marginLeft:left,width:K_WIDTH - (left ? left : 0),height:1,backgroundColor:lineColor}}/>
      )
   }
}

export default HSepLine
