#项目名称<br>
南开大学一站式学生服务平台<br>
通过Vue 实现南开大学一站式学生服务平台的运行，适用于学生服务。<br>
<br>
#功能特点<br>
模块化：使用Vue组件，模块化开发<br>
易用：容易使用<br>
功能丰富:有丰富的功能<br>
<br>
#安装步骤<br>
1.下载安装包到本地并解压<br>
2.首次运行前，在文件夹打开终端，运行 npm install，接着运行 npm run serve<br>
3.以后使用只需运行 npm run serve<br>
<br>
#项目结构
project/<br>
|---public/<br>
&nbsp;&nbsp;&nbsp;|---images/ # 图片<br>
&nbsp;&nbsp;&nbsp;|---index/<br>
|---src/<br>
&nbsp;&nbsp;&nbsp;|---assets/ # 图片<br>
&nbsp;&nbsp;&nbsp;|---components/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---common/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---Notification/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---layout/<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---AppFooter/ # 页脚<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---AppHeader/ # 页头<br>
&nbsp;&nbsp;&nbsp;|---router/ # 路由<br>
&nbsp;&nbsp;&nbsp;|---store/<br>
&nbsp;&nbsp;&nbsp;|---views/<br> 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---life/ # 生活服务板块<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---CardLoss/ # 校园卡补办<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---CardRecharge/ # 校园卡充值<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---ClubActivities/ # 社团活动<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---DormRepair/ # 宿舍报修<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---PsychologicalCounseling/ # 心理咨询<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---ShuttleBue/ # 班车<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|---StadiumBooking/ # 体育馆预定<br>
&nbsp;&nbsp;&nbsp;|---AboutView/ # 介绍页<br>
&nbsp;&nbsp;&nbsp;|---HomeView/ # 主页<br>
&nbsp;&nbsp;&nbsp;|---LifeView/ # 生活服务页<br>
&nbsp;&nbsp;&nbsp;|---MapView/ # 地图页<br>
&nbsp;&nbsp;&nbsp;|---WeatherView/ # 天气预报页<br>
