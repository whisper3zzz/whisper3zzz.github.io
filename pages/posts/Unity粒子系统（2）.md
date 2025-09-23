---
title: Unity粒子系统（2）
date: 2023-12-20 22:04:18
categories: 学习
tags: 
    - Unity
---

# 粒子系统主模块

<!-- more -->

## 参数详解

###### **Duration**

粒子系统运行的时间长度（秒）

##### **Looping**

若启用此属性，系统将重复播放粒子，也就是开启循环模式（无论是Scene窗口还是运行时）

##### Prewarm

若启用此属性，则粒子系统会在播放前进行预加载，比如漫天星河有3000颗粒子，但按照粒子发射速率，估计要好多秒，勾选此项，一旦播放就会达到预设置的Max Particles

**Start Delay**

粒子系统发射前将延迟播放一段时间（秒）

**Start Lifetime**

每个粒子的初始生命周期（秒），指粒子从被创建到被销毁的时间

**Start Speed**

粒子初始速度

**3D Start Size**

控制每个轴的大小

**Start Size**

初始大小，按照定值等比缩放

**3D Start Rotation**

控制每个轴的旋转角度

**Start Rotation**

初始旋转角度，按照定值等比缩放

**Flip Rotation**

使得一些粒子以相反的方向旋转，值取0-1之间，数值越大，翻转越多

*这个属性和上一个Start Rotation是一对，如果上一个属性有值，比如45，那么下面这个属性就是让一些**粒子**反转度数为-45，如果这里的值是0.1，那就是让10%的粒子反转，如果值为1，则是全部反转*

**Start Color**

初始颜色

**Gravity Modifier**

物理系统的重力值

**Simulation Space**

粒子系统的参照坐标，世界，局部，自定义

**Delta Time**

在 Scaled 和 Unscaled 之间进行选择，其中的 Scaled 使用 Time Scale 值，而 Unscaled 将忽略该值

**Scaling Mode**

有三个选项

1.Hierarchy：粒子随着父级进行缩放

2.Local：忽略父级缩放

3.Shape：整体缩放是按照当前粒子的发射形状（Shape）进行缩放的，不会影响粒子本身的缩放，选Local会影响粒子本身的缩放。

**Play On Awake**

启用则粒子被创建时候就开始播放

**Emitter Velocity**

发射器速率，使用那种组件来计算速度（.translate，.velocity）

Rigidbody

Transform

**Max Particles**

同时存在的最大粒子数，达到上限时，移除活的最久的粒子

**Auto Random Seed**

启用则随机发射粒子，每次初始化的时候，粒子位置不一样

**Random Seed**

禁用**Auto Random Seed**，则此值生效，用于创建唯一的可重复的粒子效果

**Stop Action**

当粒子特效不在摄像机范围内时是否暂停粒子系统模拟 1.Automatic 自动模式（如果是单次播放则不暂停，如果是循环（Looping）播放则暂停模拟） 2.Pause And Catch-up 暂停但是没有完全暂停（暂停模拟，但当再次注视时则演算出它应该在的位置） 3.Pause 暂停模拟 4.Always Simulate 总是模拟

**Ring Buffer** **Mode**

粒子不会在它们的生命周期结束时死亡，而是会一直存活到最大粒子缓冲区（Max Particles）满，届时新的粒子将取代旧的粒子。 1.Disabled 禁用该模式 2.Pause Until Replaced 暂停直到替换

在旧粒子的生命周期结束时暂停它们，直到达到最大粒子限制，此时系统会回收它们，因此它们会重新显示为新粒子 3.Loop Until Replaced 循环直到替换

在其生命周期结束时，粒子会回退到其生命周期的指定比例，直到达到最大粒子限制，此时系统会回收它们，因此它们会重新出现为新粒子
