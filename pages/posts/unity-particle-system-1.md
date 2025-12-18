---
title: Unity粒子系统（1）
date: 2023-12-20 22:04:18
categories: 学习
tags: 
    - Unity
---

# 一、粒子系统概述

小型效果诸如击中特效，火焰特效等使用内置粒子系统即可，对于更加绚丽，需要粒子数量更多的，诸如雨雪天气，大爆炸之类的可酌情使用VFX（Visual Effect Graph粒子系统）。

<!-- more -->

# 二、粒子系统结构概述

在Unity中，粒子系统是作为组件存在的即 Particle System 组件，Emission、Shape、Render三个模块是发射粒子的基础模块。

# 三、粒子系统模块概述

- Mian：控制粒子初始状态，全局状态

- Emission：控制粒子的发射速率、时间、波次

- Shape：粒子的体积形状

- Velocity over Lifetime：控制粒子在生命周期内的速度

- Limit  Velocity over Lifetime： 生命周期内  限制粒子的速度

- Inherit Velocity：控制粒子的速度如何随着时间推移而受父物体移动的影响

- Force over Lifetime：运用这个模块里面的指定力来对粒子产生影响

- Color over Lifetime： 指定粒子颜色和透明度在生命周期内的变化

- Color by Speed：粒子颜色随着速度的变化

- Size over Lifetime：设置在生命周期内的大小

- Size by Speed：设置大小随着速度的变化

- Rotation over Lifetime：控制粒子在生命周期的旋转

- Rotation by Speed：控制粒子旋转根据粒子速度的变化

- External Forces：修改力场对于粒子的影响

- Noise：给粒子添加湍流

- Collision：控制粒子如何和其他物体碰撞

- Triggers：控制粒子的触发

- Sub Emitters： 在某粒子的生命周期的阶段创建附加粒子发射器

- Texture Sheet Animation：控制动画帧进行播放

- Lights：控制实时光照

- Trails：控制轨迹（拖尾）

- Custom Data： 在Editor中定义要附加到粒子的自定义数据格式

- Renderer：设置粒子的图像或网格如何被其他粒子变换、着色和绘制


# 四、Scene视图中的Particle Effect面板

左侧是我们刚刚创建的粒子，右侧是预览粒子的一些控制项（**修改这些数值只会影响Scene窗口下的粒子显示效果，并不会影响实际粒子运行效果**）

- **Pause** 暂停播放 | **Restart** 重新播放 | **Stop** 停止播放
- **Playback Speed** 播放速度

- **Playback Time** 粒子开始播放的累计时间，Restart重新播放可重置该值

- **Particles** 当前存在的粒子数量
- **Speed Range** **暂无解释** 
- **Simulate Layers** 一般情况下，Scene场景中只会播放你选中的粒子特效，如果你想要让场景中所有的粒子特效或者个别粒子特效播放，就需要选择相应的层级，或者是Everything（全都播放） 
- **Resimulate** 若启用，粒子系统会立即将属性更改立刻应用于已生成的粒子；若禁用，仅将属性更改应用于新生成的粒子。（仅在Scene窗口预览模式下生效）
-  **Show Bounds** 显示包围体积 
- **Show Only Selected** 隐藏所有未选中的粒子特效 

# 五、粒子显示紫色

因为Unity的bug，粒子显示紫色是因为粒子的材质丢失，是Unity没有默认给粒子赋予材质的原因，在Render模块里面赋予材质即可解决
