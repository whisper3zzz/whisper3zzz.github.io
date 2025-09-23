---
title: transform.forward和Vector3.forward的区别
date: 2024-01-21 20:49:53
categories: 学习
tags: 
    - Unity
---

transform.forward：其值是物体局部坐标的Z轴在世界坐标的指向，不一定是（0,0,1）。

Vector3.forward：其值永远等于（0,0,1），是世界坐标，是不变的。
