/**
 *  @Author : HZY
 *  @Date : 2019/1/15
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   Text,
   ScrollView,
   TouchableOpacity,
   Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {
   DoderBlue,
   CornflowerBlue,
   LightSkyBlue,
   isIphoneX,
   Color_33,
   K_FONTSIZE_18,
   White,
   K_WIDTH,
   tagColor,
   lineColor,
   Black,
   Red,
   K_FONTSIZE_12,
   K_FONTSIZE_16,
   lostColor, contentColor, K_FONTSIZE_14, Tomato, backColor
} from "../Src/UIComponent/HConst";
import HTouchView from "../Src/UIComponent/HTouchView";
import HShadowLine from "../Src/UIComponent/HShadowLine";
import HListView from "../Src/UIComponent/HListView";
import HStatusBar from "../Src/UIComponent/HStatusBar";

class Find extends React.Component {

   componentDidMount() {
      //请求数据
   }

   constructor(props) {
      super(props)
      this.state = {
         headData: [
            {
               title: '金币商城', content: '0元好物在这里', img: require('../Src/Res/Find/icon1.png')
            },
            {
               title: '推荐有奖', content: '10元现金拿不停', img: require('../Src/Res/Find/icon2.png')
            },
            {
               title: '周边优惠', content: '领取口碑好券', img: require('../Src/Res/Find/Icon3.png')
            },
            {
               title: '免费流量', content: '每月最高500M', img: require('../Src/Res/Find/icon4.png')
            }
         ],
         contentData: [
            {
               icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=970421242,1598694056&fm=26&gp=0.jpg',
               title: '美美拌鸡架',
               sale: 102,
               count: 0,
               money: 12,
               store: '美美麻辣拌',
               active: '满20减3',
            },
            {
               icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=970421242,1598694056&fm=26&gp=0.jpg',
               title: '拌鸡架',
               sale: 50,
               count: 0,
               money: 10,
               store: '美美麻辣拌',
               active: '满20减3',
            },
            {
               icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=970421242,1598694056&fm=26&gp=0.jpg',
               title: '招牌拌鸡架',
               sale: 11120,
               count: 97,
               money: 15,
               store: '美美麻辣拌',
               active: '满20减3',
            },
            {
               icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=970421242,1598694056&fm=26&gp=0.jpg',
               title: '招牌拌鸡架+米饭',
               sale: 10245,
               count: 100,
               money: 14,
               store: '美美麻辣拌',
               active: '满20减3',
            }
         ]
      }
   }

   render() {
      return (
          <View style={{flex: 1}}>
             <LinearGradient
                 start={{x: 0, y: 0}}
                 end={{x: 1, y: 1}}
                 colors={[LightSkyBlue, DoderBlue]}
                 style={{height: isIphoneX ? 88 : 64, width: '100%'}}
                 locations={[0.1, 0.5, 1]}>
                <View style={{width: '100%', height: 44, marginTop: isIphoneX ? 44 : 20, justifyContent: 'center', alignItems: 'center'}}>
                   <Text style={{color: White, fontSize: K_FONTSIZE_18, fontWeight: 'bold'}}>{'发现'}</Text>
                </View>
             </LinearGradient>
             <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%', height: 160}}>
                   {this.setItem()}
                   <View style={{width: '100%', height: 1, backgroundColor: lineColor, position: 'absolute', top: 80}}/>
                   <View style={{width: 1, height: 160, backgroundColor: lineColor, position: 'absolute', left: K_WIDTH / 2}}/>
                </View>
                <HShadowLine height={10}/>
                <HTouchView onPress={this.clickAd}>
                   <Image style={{width: K_WIDTH, height: K_WIDTH / 828 * 238}} source={require('../Src/Res/Find/ad.png')}/>
                </HTouchView>
                <HShadowLine height={10}/>
                <HListView
                    count={2}
                    data={this.state.contentData}
                    item={this.renderItem}
                    header={this.header}
                />


             </ScrollView>
          </View>
      )
   }

   header = () => {
      return (
          <View style={{width: '100%', height: 60, marginTop: 15, justifyContent: 'center', alignItems: 'center'}}>
             <View style={{flexDirection: 'row', alignItems: 'center', height: 30, justifyContent: 'center'}}>
                <View style={{width: 12, height: 1, backgroundColor: Black}}/>
                <View style={{width: 6, height: 6, backgroundColor: Black, borderRadius: 3}}/>
                <Image style={{width: 20, height: 20, tintColor: Red, marginLeft: 10}} source={require('../Src/Res/Find/zan.png')}/>
                <Text style={{fontSize: K_FONTSIZE_18, fontWeight: 'bold', marginLeft: 5, color: Color_33}}>{'为你推荐'}</Text>
                <View style={{width: 6, height: 6, backgroundColor: Black, borderRadius: 3, marginLeft: 10}}/>
                <View style={{width: 12, height: 1, backgroundColor: Black}}/>
             </View>
             <Text style={{fontSize: K_FONTSIZE_12, color: tagColor, marginTop: 3}}>{'你的口味, 我都懂'}</Text>
             <View style={{width: '100%', height: 10}}/>
          </View>
      )
   }

   clickItem = (item) =>{
      console.log(item)
   }

   renderItem = ({item, index}) => {
      return (
          <HTouchView style={{width: K_WIDTH / 2, paddingBottom: 10,}} onPress={this.clickItem.bind(this,item)}>
             <View style={{
                marginLeft: index % 2 !== 0 ? 7.5 : 15,
                marginTop: 5,
                borderWidth: 1,
                backgroundColor: White,
                borderColor: lostColor,
                width: K_WIDTH / 2 - 15 - 7.5,
                paddingBottom: 10,
             }}>
                <View>
                   <Image
                       style={{width: K_WIDTH / 2 - 15 - 7.5, height: K_WIDTH / 2 - 15 - 7.5}}
                       source={{uri: item.icon}}/>
                   <View style={{
                      position: 'absolute',
                      bottom: 0,
                      width: K_WIDTH / 2 - 15 - 7.5,
                      minHeight: 18,
                      paddingVertical: 6,
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      justifyContent: 'center',
                      alignItems: 'center',
                   }}>
                      <Text style={{fontSize: K_FONTSIZE_12, color: White}}>
                         {'你可能感兴趣的美食'}
                      </Text>
                   </View>
                </View>
                <Text style={{marginLeft: 15, marginTop: 5, fontSize: K_FONTSIZE_16, fontWeight: '500', color: Color_33}}>
                   {item.title}
                </Text>
                <View style={{width: K_WIDTH / 2 - 15 - 7.5, marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
                   <Text style={{fontSize: K_FONTSIZE_12, color: contentColor, marginLeft: 15}}>{'月售' + item.sale + '份'}</Text>
                   <Text style={{fontSize: K_FONTSIZE_12, color: contentColor, marginLeft: 8}}>{'好评率' + item.count + '%'}</Text>
                </View>
                <View style={{width: K_WIDTH / 2 - 15 - 7.5, marginTop: 3, flexDirection: 'row', alignItems: 'center'}}>
                   <Text style={{fontSize: K_FONTSIZE_16, color: Tomato, marginLeft: 15,fontWeight:'bold'}}>{'¥' + item.money}</Text>
                   <View style={{padding: 3, borderRadius: 3, borderWidth: 1, borderColor: Tomato, marginLeft: 8}}>
                      <Text style={{fontSize: K_FONTSIZE_12, color: Tomato}}>{'好评率' + item.count + '%'}</Text>
                   </View>
                </View>
                <View style={{width: K_WIDTH / 2 - 15 - 7.5 - 30, marginLeft: 15, marginTop: 8, height: 1, backgroundColor: backColor}}/>
                <View style={{marginTop:8,width: K_WIDTH / 2 - 15 - 7.5,flexDirection:'row',alignItems:'center'}}>
                   <Image style={{width:14,height:14,tintColor:tagColor,marginLeft:15}} source={require('../Src/Res/Find/dianpu.png')}/>
                   <Text style={{fontSize: K_FONTSIZE_12, color: contentColor, marginLeft: 5}}>{item.store}</Text>
                </View>
             </View>
          </HTouchView>
      )
   }

   clickAd = () => {

   }

   setItem = () => {
      var arr = []
      var temp = this.state.headData
      for (var i = 0; i < temp.length; i++) {
         arr.push(
             <HTouchView
                 key={i}
                 style={{width: K_WIDTH * 0.5, height: 80, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                 onPress={this.onPress}>
                <View style={{width: K_WIDTH * 0.5 - 60, justifyContent: 'center', alignItems: 'center'}}>
                   <Text style={{fontSize: 16, color: DoderBlue}}>
                      {temp[i].title}
                   </Text>
                   <Text style={{fontSize: 13, color: tagColor, marginTop: 5}}>
                      {temp[i].content}
                   </Text>
                </View>
                <Image style={{width: 30, height: 30,}} source={temp[i].img}/>
             </HTouchView>
         )
      }
      return arr
   }

   onPress = () => {

   }

}

export default Find
