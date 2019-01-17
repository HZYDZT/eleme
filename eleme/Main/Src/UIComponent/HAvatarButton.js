/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   TouchableOpacity,
   Image,
} from 'react-native'

class HAvatarButton extends React.Component {

   render() {
      const {
         size, //number
         corner, //number
         res, //uri  or  require
         onPress,
         style,
      } = this.props;
      return (
          <TouchableOpacity
              activeOpacity={1}
              onPress={onPress ? onPress : () => {
              }}
              style={style}
          >
             <View style={{width: size, height: size, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: size, height: size, borderRadius: corner ? corner : 0}} source={res} resizeMode={'cover'}/>
             </View>
          </TouchableOpacity>
      )
   }
}

export default HAvatarButton
