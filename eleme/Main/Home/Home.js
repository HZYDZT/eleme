/**
 *  @Author : HZY
 *  @Date : 2019/1/15
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {
   View,
   ScrollView,
   Image,
   TouchableOpacity,
   Text,
} from 'react-native'
import HStatusBar from "../Src/UIComponent/HStatusBar";
import {
   DoderBlue,
   K_HEIGHT,
   White,
   isIphoneX, K_WIDTH, tagColor, contentColor, lostColor, Color_99, K_FONTSIZE_18, Color_33, K_FONTSIZE_14, OrangeRed, Color_66
} from "../Src/UIComponent/HConst";
import HLocation from "./HLocation";
import HSearchBar from "./HSearchBar";
import Swiper from 'react-native-sf-swiper'
import HTagBar from "./HTagBar";

class Home extends React.Component {

   componentWillMount() {
      this.dataSource = [
         {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547621901848&di=f76e4a1437b58d876d4fff299c4c2f50&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014ec25a1f7a3ea80120908d75c69a.jpg%401280w_1l_2o_100sh.jpg'
         },
         {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547621985604&di=b4206817f85bfca822e27f27ed0e98ed&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201411%2F22%2F20141122002820_XRdLx.jpeg'
         },
         {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548216766&di=4ef6bc0e1b1f6eabefbd3047215cf6ef&imgtype=jpg&er=1&src=http%3A%2F%2Fimg05.tooopen.com%2Fproducts%2F20150611%2Ftooopen_45279565.jpg'
         }
      ]
   }

   render() {
      console.log(K_HEIGHT)
      return (
          <View style={{flex: 1, backgroundColor: DoderBlue}}>
             <ScrollView style={{flex: 1}}>
                <HStatusBar color={DoderBlue}/>
                <HLocation/>
                <View style={{width: '100%', minHeight: K_HEIGHT - (isIphoneX ? 171 : 113), backgroundColor: White}}>
                   <HSearchBar/>
                   <Swiper
                       width={K_WIDTH}
                       height={120}
                       loop={true}
                       showsPagination={true}
                       autoplay={true}
                       autoplayTimeout={3}
                       autoplayDirection={true}>
                      {this.renderImage()}
                   </Swiper>
                   <HTagBar/>
                   <View style={{width: '100%', height: 5, backgroundColor: DoderBlue}}/>
                   <View style={{width: '100%', height: 200}}>
                      {this.setItem()}
                   </View>
                   <View style={{width: K_WIDTH - 30, marginLeft: 15, height: 50, flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{
                         width: (K_WIDTH - 30 - 10) / 3,
                         height: 40,
                         justifyContent: 'center',
                         alignItems: 'center',
                         flexDirection: 'row',
                         borderRadius: 4,
                         borderWidth: 1,
                         borderColor: lostColor
                      }}>
                         <Image style={{width: 22, height: 22}} source={require('../Src/Res/Home/dianying.png')}/>
                         <Text style={{marginLeft: 5, fontSize: 16, color: Color_99}}>{'电影'}</Text>
                      </View>
                      <View style={{
                         marginLeft: 5,
                         width: (K_WIDTH - 30 - 10) / 3,
                         height: 40,
                         justifyContent: 'center',
                         alignItems: 'center',
                         flexDirection: 'row',
                         borderRadius: 4,
                         borderWidth: 1,
                         borderColor: lostColor
                      }}>
                         <Image style={{width: 20, height: 20}} source={require('../Src/Res/Home/jiudian.png')}/>
                         <Text style={{marginLeft: 5, fontSize: 16, color: Color_99}}>{'酒店'}</Text>
                      </View>
                      <View style={{
                         marginLeft: 5,
                         width: (K_WIDTH - 30 - 10) / 3,
                         height: 40,
                         justifyContent: 'center',
                         alignItems: 'center',
                         flexDirection: 'row',
                         borderRadius: 4,
                         borderWidth: 1,
                         borderColor: lostColor
                      }}>
                         <Image style={{width: 20, height: 20}} source={require('../Src/Res/Home/huoche.png')}/>
                         <Text style={{marginLeft: 5, fontSize: 16, color: Color_99}}>{'火车票'}</Text>
                      </View>
                   </View>
                   <TouchableOpacity>
                      <View style={{width: '100%', height: 60, justifyContent: 'center', alignItems: 'center'}}>
                         <Image style={{width: K_WIDTH - 30, height: (K_WIDTH - 30) / 777 * 94}} source={require('../Src/Res/Home/12.png')}/>
                      </View>
                   </TouchableOpacity>

                   <View style={{width: '100%', height: 40, marginTop: 10, justifyContent: 'center'}}>
                      <Text style={{fontSize: K_FONTSIZE_18, color: Color_33, marginLeft: 15, fontWeight: '500'}}>{'优惠专区'}</Text>
                   </View>

                   <View style={{width: K_WIDTH - 30, height: (K_WIDTH - 40) / 2 - 10, flexDirection: 'row', marginTop: 5}}>
                      <Image
                          style={{width: (K_WIDTH - 35) / 2, marginLeft: 15, height: (K_WIDTH - 40) / 2 - 35, borderRadius: 5}}
                          source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547631624077&di=58549412e76dde56ffe409d328934e62&imgtype=0&src=http%3A%2F%2Fpic39.photophoto.cn%2F20160611%2F1155115736939016_b.jpg'}}
                      />
                      <Image
                          style={{width: (K_WIDTH - 35) / 2, marginLeft: 5, height: (K_WIDTH - 40) / 2 - 35, borderRadius: 5}}
                          source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548226377&di=65a6c836ac7a14ac21dd6266fd7455ee&imgtype=jpg&er=1&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160830%2F1132113661840705_b.jpg'}}
                      />
                      <View style={{
                         width: (K_WIDTH - 35) / 2 - 16,
                         bottom: 35, position: 'absolute',
                         left: 23, borderRadius: 4, height: 60, backgroundColor: White, opacity: 0.97,justifyContent:'center',alignItems:'center'
                      }}>
                         <Text style={{fontSize:K_FONTSIZE_18,fontWeight:'500',color:Color_33}}>
                            {'0元起配送'}
                         </Text>
                         <Text style={{fontSize:K_FONTSIZE_14,fontWeight:'300',color:tagColor,marginTop:5}}>
                            {'优享品质餐'}
                         </Text>
                      </View>
                      <View style={{
                         width: (K_WIDTH - 35) / 2 - 16,
                         bottom: 35, position: 'absolute',
                         left: (K_WIDTH - 35) / 2+ 13 + 15, borderRadius: 4, height: 60, backgroundColor: White, opacity: 0.97,justifyContent:'center',alignItems:'center'
                      }}>
                         <Text style={{fontSize:K_FONTSIZE_18,fontWeight:'500',color:Color_33}}>
                            {'下午茶9.9起'}
                         </Text>
                         <Text style={{fontSize:K_FONTSIZE_14,fontWeight:'300',color:OrangeRed,marginTop:5}}>
                            {'445人正在抢'}
                         </Text>
                      </View>
                   </View>

                </View>
             </ScrollView>
          </View>
      )
   }

   renderImage = () => {
      var imgs = []
      for (var i = 0; i < this.dataSource.length; i++)
         imgs.push(
             <View
                 key={'image' + i}
                 style={{width: '100%', height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: DoderBlue}}>
                <Image
                    resizeMode={"cover"}
                    style={{width: K_WIDTH - 44, height: 100, borderRadius: 4}} source={{uri: this.dataSource[i].img}}/>
             </View>
         )
      return imgs
   }

   setItem = () => {
      var width = K_WIDTH;
      var t = [
         require('../Src/Res/Home/ic_sp_1.png'),
         require('../Src/Res/Home/ic_sp_2.png'),
         require('../Src/Res/Home/ic_sp_3.png'),
         require('../Src/Res/Home/ic_sp_4.png'),
         require('../Src/Res/Home/ic_sp_5.png'),
         require('../Src/Res/Home/ic_sp_6.png'),
         require('../Src/Res/Home/ic_sp_7.png'),
         require('../Src/Res/Home/ic_sp_8.png'),
         require('../Src/Res/Home/ic_sp_9.png'),
         require('../Src/Res/Home/ic_sp_10.png'),
      ]
      var title = ['美食', '商超便利', '水果', '跑断代购', '甜品饮品', '星选好店', '送药上门', '大牌惠吃', '蜂鸟配送', '签到好礼']
      var itemArr = []
      for (var i = 0; i < 10; i++) {
         itemArr.push(
             <View
                 key={i}
                 style={{
                    width: width / 5,
                    height: width / 5 + 10,
                    position: 'absolute',
                    top: parseInt(i / 5) === 0 ? 0 : width / 5 + 10,
                    left: (i % 5) * width / 5,
                    alignItems: 'center'
                 }}>
                <TouchableOpacity
                    activeOpacity={1}>
                   <Image
                       resizeMode={'contain'}
                       source={t[i]}
                       style={{
                          width: width / 5 * 0.8,
                          height: width / 5 * 0.8,
                          marginTop: 5
                       }}
                   />
                   <Text style={{
                      fontSize: 14,
                      textAlign: 'center',
                      marginTop: 0,
                      color: contentColor
                   }}>{title[i]}</Text>
                </TouchableOpacity>
             </View>
         )
      }
      return itemArr;
   }

   clickItem = () => {

   }
}

export default Home
