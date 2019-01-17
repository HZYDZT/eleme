/**
 *  create react native js by godyu
 */
import React from 'react'
import {
   View,
   TouchableOpacity,
   Image,
   Text,
} from 'react-native'
import {K_WIDTH} from "./HConst";

class HNormalHeader extends React.Component {

   render() {
      return (
          <View
              style={[this.props.style, {width: K_WIDTH, height: 44, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
             {this.setLeft()}
             <Text style={{color: this.props.style ? 'white' : 'rgba(30,30,30,1)', fontWeight: 'bold', fontSize: 18}}>{this.props.title}</Text>
             {this.setRight()}
          </View>
      )
   }

   setRight = () => {
      const {rColor, rImage, rNeed, rClick} = this.props
      if (!rNeed) {
         return (
             <TouchableOpacity
                 activeOpacity={1}
                 onPress={rClick ? rClick : () => {
                 }}>
                <View style={{width: 44, height: 44, justifyContent: 'center', alignItems: 'center'}}>
                   <Image
                       source={rImage}
                       style={[{width: 18, height: 18}, rColor ? {tintColor: rColor} : {}]}
                       resizeMode={'cover'}
                   />
                </View>
             </TouchableOpacity>
         )
      }
      else {
         return (<View/>)
      }
   }

   setLeft = () => {
      const {lColor, lImage, lNeed, lClick} = this.props
      if (!lNeed) {
         return (
             <TouchableOpacity
                 activeOpacity={1}
                 onPress={lClick ? lClick : () => {
                 }}>
                <View style={{width: 44, height: 44, justifyContent: 'center', alignItems: 'center'}}>
                   <Image
                       source={lImage ? lImage : require('../Resource/Common/back.png')}
                       style={[{width: 18, height: 18}, lColor ? {tintColor: lColor} : {}]}
                       resizeMode={'cover'}
                   />
                </View>
             </TouchableOpacity>
         )
      }
      else {
         return (<View/>)
      }
   }




}

export default HNormalHeader;