/**
 *  @Author : HZY
 *  @Date : 2019/1/14
 *  @Version : 1.0
 *  @Language: react native
 */
import React from 'react'
import {Dimensions, DeviceInfo} from 'react-native'
//todo: layout
const K_WIDTH = Dimensions.get('window').width
const K_HEIGHT = Dimensions.get('window').height
const K_BAR_HEIGHT = 44;

const isIphoneX = DeviceInfo.isIPhoneX_deprecated;

const K_FONTSIZE_20 = 20;
const K_FONTSIZE_18 = 18;
const K_FONTSIZE_16 = 16;
const K_FONTSIZE_14 = 14;
const K_FONTSIZE_12 = 12;
const K_FONTSIZE_10 = 10;

//todo: color
//fontcolor
const Color_33 = 'rgba(33,33,33,1)'
const Color_66 = 'rgba(66,66,66,1)'
const Color_99 = 'rgba(99,99,99,1)'
const titleColor = 'rgba(50,50,50,1)' //标题颜色
const contentColor = 'rgba(127,127,127,1)' //正文颜色
const tagColor = 'rgba(154,154,154,1)' //小字标注颜色
const lostColor = 'rgba(205,205,205,1)' //失效色
const lineColor = 'rgba(217,217,217,1)' //分割线
const backColor = 'rgba(245,245,245,1)' //背景色

const LightPink = '#FFB6C1'
const Pink = '#FFC0CB'
const Crimson = '#DC143C'
const LavenderBlush = '#FFF0F5'
const PaleVioletRed = '#DB7093'
const HotPink = '#FF69B4'
const DeepPink = '#FF1493'
const MediumVioletRed = '#C71585'
const Orchid = '#DA70D6'
const Thistle = '#D8BFD8'
const plum = '#DDA0DD'
const Viole = '#EE82EE'
const Magenta = '#FF00FF'
const Fuchsia = '#FF00FF'
const DarkMagenta = '#8B008B'
const Purple = '#800080'
const MediumOrchid = '#BA55D3'
const DarkVoilet = '#9400D3'
const DarkOrchid = '#9932CC'
const Indigo = '#4B0082'
const BlueViolet = '#8A2BE2'
const MediumPurple = '#9370DB'
const MediumSlateBlue = '#7B68EE'
const SlateBlue = '#6A5ACD'
const DarkSlateBlue = '#483D8B'
const Lavender = '#E6E6FA'
const GhostWhite = '#F8F8FF'
const Blue = '#0000FF'
const MediumBlue = '#0000CD'
const MidnightBlue = '#191970'
const DarkBlue = '#00008B'
const Navy = '#000080'
const RoyalBlue = '#4169E1'
const CornflowerBlue = '#6495ED'
const LightSteelBlue = '#B0C4DE'
const LightSlateGray = '#778899'
const SlateGray = '#708090'
const DoderBlue = '#1E90FF'
const AliceBlue = '#F0F8FF'
const SteelBlue = '#4682B4'
const LightSkyBlue = '#87CEFA'
const SkyBlue = '#87CEEB'
const DeepSkyBlue = '#00BFFF'
const LightBLue = '#ADD8E6'
const PowDerBlue = '#B0E0E6'
const CadetBlue = '#5F9EA0'
const Azure = '#F0FFFF'
const LightCyan = '#E1FFFF'
const PaleTurquoise = '#AFEEEE'
const Cyan = '#00FFFF'
const Aqua = '#00FFFF'
const DarkTurquoise = '#00CED1'
const DarkSlateGray = '#2F4F4F'
const DarkCyan = '#008B8B'
const Teal = '#008080'
const MediumTurquoise = '#48D1CC'
const LightSeaGreen = '#20B2AA'
const Turquoise = '#40E0D0'
const Auqamarin = '#7FFFAA'
const MediumAquamarine = '#00FA9A'
const MediumSpringGreen = '#00FF7F'
const MintCream = '#F5FFFA'
const SpringGreen = '#3CB371'
const SeaGreen = '#2E8B57'
const Honeydew = '#F0FFF0'
const LightGreen = '#90EE90'
const PaleGreen = '#98FB98'
const DarkSeaGreen = '#8FBC8F'
const LimeGreen = '#32CD32'
const Lime = '#00FF00'
const ForestGreen = '#228B22'
const Green = '#008000'
const DarkGreen = '#006400'
const Chartreuse = '#7FFF00'
const LawnGreen = '#7CFC00'
const GreenYellow = '#ADFF2F'
const OliveDrab = '#556B2F'
const Beige = '#F5F5DC'
const LightGoldenrodYellow = '#FAFAD2'
const Ivory = '#FFFFF0'
const LightYellow = '#FFFFE0'
const Yellow = '#FFFF00'
const Olive = '#808000'
const DarkKhaki = '#BDB76B'
const LemonChiffon = '#FFFACD'
const PaleGodenrod = '#EEE8AA'
const Khaki = '#F0E68C'
const Gold = '#FFD700'
const Cornislk = '#FFF8DC'
const GoldEnrod = '#DAA520'
const FloralWhite = '#FFFAF0'
const OldLace = '#FDF5E6'
const Wheat = '#F5DEB3'
const Moccasin = '#FFE4B5'
const Orange = '#FFA500'
const PapayaWhip = '#FFEFD5'
const BlanchedAlmond = '#FFEBCD'
const NavajoWhite = '#FFDEAD'
const AntiqueWhite = '#FAEBD7'
const Tan = '#D2B48C'
const BrulyWood = '#DEB887'
const Bisque = '#FFE4C4'
const DarkOrange = '#FF8C00'
const Linen = '#FAF0E6'
const Peru = '#CD853F'
const PeachPuff = '#FFDAB9'
const SandyBrown = '#F4A460'
const Chocolate = '#D2691E'
const SaddleBrown = '#8B4513'
const SeaShell = '#FFF5EE'
const Sienna = '#A0522D'
const LightSalmon = '#FFA07A'
const Coral = '#FF7F50'
const OrangeRed = '#FF4500'
const DarkSalmon = '#E9967A'
const Tomato = '#FF6347'
const MistyRose = '#FFE4E1'
const Salmon = '#FA8072'
const Snow = '#FFFAFA'
const LightCoral = '#F08080'
const RosyBrown = '#BC8F8F'
const IndianRed = '#CD5C5C'
const Red = '#FF0000'
const Brown = '#A52A2A'
const FireBrick = '#B22222'
const DarkRed = '#8B0000'
const Maroon = '#800000'
const White = '#FFFFFF'
const WhiteSmoke = '#F5F5F5'
const Gainsboro = '#DCDCDC'
const LightGrey = '#D3D3D3'
const Silver = '#C0C0C0'
const DarkGray = '#A9A9A9'
const Gray = '#808080'
const DimGray = '#696969'
const Black = '#000000'

export {
   K_WIDTH,
   K_HEIGHT,
   K_BAR_HEIGHT,
   lostColor,
   lineColor,
   backColor,
   Color_33,
   Color_66,
   Color_99,
   titleColor,
   contentColor,
   tagColor,
   LightPink,
   Pink,
   Crimson,
   LavenderBlush,
   PaleVioletRed,
   HotPink,
   DeepPink,
   MediumVioletRed,
   Orchid,
   Thistle,
   plum,
   Viole,
   Magenta,
   Fuchsia,
   DarkMagenta,
   Purple,
   MediumOrchid,
   DarkVoilet,
   DarkOrchid,
   Indigo,
   BlueViolet,
   MediumPurple,
   MediumSlateBlue,
   SlateBlue,
   DarkSlateBlue,
   Lavender,
   GhostWhite,
   Blue,
   MediumBlue,
   MidnightBlue,
   DarkBlue,
   Navy,
   RoyalBlue,
   CornflowerBlue,
   LightSteelBlue,
   LightSlateGray,
   SlateGray,
   DoderBlue,
   AliceBlue,
   SteelBlue,
   LightSkyBlue,
   SkyBlue,
   DeepSkyBlue,
   LightBLue,
   PowDerBlue,
   CadetBlue,
   Azure,
   LightCyan,
   PaleTurquoise,
   Cyan,
   Aqua,
   DarkTurquoise,
   DarkSlateGray,
   DarkCyan,
   Teal,
   MediumTurquoise,
   LightSeaGreen,
   Turquoise,
   Auqamarin,
   MediumAquamarine,
   MediumSpringGreen,
   MintCream,
   SpringGreen,
   SeaGreen,
   Honeydew,
   LightGreen,
   PaleGreen,
   DarkSeaGreen,
   LimeGreen,
   Lime,
   ForestGreen,
   Green,
   DarkGreen,
   Chartreuse,
   LawnGreen,
   GreenYellow,
   OliveDrab,
   Beige,
   LightGoldenrodYellow,
   Ivory,
   LightYellow,
   Yellow,
   Olive,
   DarkKhaki,
   LemonChiffon,
   PaleGodenrod,
   Khaki,
   Gold,
   Cornislk,
   GoldEnrod,
   FloralWhite,
   OldLace,
   Wheat,
   Moccasin,
   Orange,
   PapayaWhip,
   BlanchedAlmond,
   NavajoWhite,
   AntiqueWhite,
   Tan,
   BrulyWood,
   Bisque,
   DarkOrange,
   Linen,
   Peru,
   PeachPuff,
   SandyBrown,
   Chocolate,
   SaddleBrown,
   SeaShell,
   Sienna,
   LightSalmon,
   Coral,
   OrangeRed,
   DarkSalmon,
   Tomato,
   MistyRose,
   Salmon,
   Snow,
   LightCoral,
   RosyBrown,
   IndianRed,
   Red,
   Brown,
   FireBrick,
   DarkRed,
   Maroon,
   White,
   WhiteSmoke,
   Gainsboro,
   LightGrey,
   Silver,
   DarkGray,
   Gray,
   DimGray,
   Black,
   isIphoneX,
   K_FONTSIZE_10,
   K_FONTSIZE_12,
   K_FONTSIZE_14,
   K_FONTSIZE_16,
   K_FONTSIZE_18,
   K_FONTSIZE_20,
}
