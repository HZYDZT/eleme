/**
 *  @Author : HZY
 *  @Date : 2019/1/17
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   FlatList,
   View,
} from 'react-native'

class HListView extends React.Component {

   constructor(props){
      super(props)
      this.state = {

      }
   }

   render() {
      return (
          <FlatList
              {...this.props}
              keyExtractor={this._keyExtractor}
              extraData={this.state}
              renderItem={this.props.item}
              data={this.props.data}
              numColumns={this.props.count ? this.props.count : 1}
              ListHeaderComponent={this.props.header ? this.props.header : <View/>}
              ListFooterComponent={this.props.footer ? this.props.footer : <View/>}
              ListEmptyComponent={this.props.empty ? this.props.empty :<View/>}
              // ItemSeparatorComponent={this.props.line ? this.props.line : <View/>}

          />
      )
   }

   _keyExtractor = (item, index) => index + 'h'
}

export default HListView
