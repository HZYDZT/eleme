/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'

class HNav extends React.Component {

   /**
      //跳转 后2参数可不传
      HNav.push(this, 'CustomerAdd', param, (p) => {})

      //返回  p即上面方法的p 返回值
      HNav.pop(this,p)

      //参数
      HNav.param
    */


   static push(master, name, param, callback) {
      if (master && name) {
         master.props.navigation.navigate(name, {
            param: param ? param : {}, callback: callback ? callback : () => {
            }
         });
      }
   }

   static pop(master, param) {
      if (master) {
         master.props.navigation.state.params.callback(param ? param : '')
         master.props.navigation.goBack()
      }
   }

   static param(master) {
      return master.props.navigation.state.params.param;
   }
}

export default HNav
