---
title: xLua热更新
date: 2024-08-05 14:37:59
categories: 学习
tags: 
    - 热更新
    - Unity
path: /posts/xlua-hotfix
---

# xLua的新功能-HotFix

优势：

开发时使用C#，打好hotfix标签，出现问题时再使用lua修复，大版本更新时将lua部分更新回C#。

劣势：

- 热修复复杂脚本的难度：
  - 储备lua开发人员。
  - 制定C#编写规范。
  - 考虑C#和lua之间“翻译”的语言特性问题。
- 更新频率：
  - 不适合高频维护项目。
