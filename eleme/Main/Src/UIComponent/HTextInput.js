/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   TextInput,
} from 'react-native'

class HTextInput extends React.Component {

   //todo: example
   /**
    <HTextInput
    style={{fontSize: 16,marginLeft:8,marginRight:8,flex:1,height:30}}
    length={20}
    placeholder={''}
    changeText={(text) =>{}}
    submit={() =>{}}/>
    */

   /**
    *  @autoFocus : 自动获取焦距
    *  @style : 2019/1/14
    *  @type : 'numeric'
    *  @changeText: text
    */

   render() {
      const {
         changeText, //输入回调
         submit, //提交方法
         placeholder, //占位
         key,  //键盘确定键
         style, //style
         focus, //是否自动获取焦距
         type, //键盘类型
         length, //字数
      } = this.props
      return (
          <TextInput
              {...this.props}
              style={[{padding: 0}, style ? style : {}]}
              allowFontScaling={true}
              autoCorrect={false}
              autoFocus={focus ? focus : false}
              blurOnSubmit={true}
              keyboardType={type ? type : 'default'}
              maxLength={length ? length : 200}
              multiline={false}
              numberOfLines={1}
              onChangeText={changeText ? (text) => changeText(text) : (text) => {
              }}
              onSubmitEditing={submit ? submit : () => {
              }}
              placeholder={placeholder ? placeholder : ''}
              returnKeyType={key ? key : 'done'}
          />
      )
   }
}

export default HTextInput
