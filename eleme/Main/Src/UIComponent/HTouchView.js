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
} from 'react-native'

class HTouchView extends React.Component {

   render() {
      const {onPress, style} = this.props;
      return (
          <TouchableOpacity activeOpacity={1} onPress={onPress ? onPress : () => {
          }}>
             <View style={style ? style : {flex: 1}}>
                {this.props.children}
             </View>
          </TouchableOpacity>
      )
   }
}

export default HTouchView
