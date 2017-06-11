# react赛车游戏

用react来实现状态的切换，css来实现动画，容易上手。

## 准备工作

下载react 0.14 版，用browser.min.js转换jsx语法为js，游戏界面:
游戏容器roadbed，路面road，主角车hero，敌车enemy，还有公里板kilo，失败提示failbub.

## 游戏开始

### 马路移动

小车固定在屏幕下方，路面循环向下运动。
.roadbed{
    background:url(../resource/road.png) repeat-y;
    width:480px;
    height:1600px;
    position:absolute;
    left:0;
    top:-800px;
}
.roadRun{
    -webkit-transform:translateZ(0);
    -webkit-animation:roadRun 1.2s linear infinite;
}
@-webkit-keyframes roadRun{
    100%{ -webkit-transform:translateY(800px);}
}

### 控制小车移动

在componentDidMount方法后通过键盘事件来监听左右方向键，并加上相应的类名。

### 敌方赛车
 
给敌车加上0-1000px的1s的运动，由于速度低于主角车发生碰撞，敌车随机出现，离开屏幕后切换不同的类名来换车。

### 碰撞

我方小车与敌方小车位于同一车道，且敌方小车的运动距离大于舞台高度-我方小车高度，即两车相撞。通过10ms的刷新频率来判断赛车是否相撞。