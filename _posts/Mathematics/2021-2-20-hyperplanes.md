---
title: Hyperplanes
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Hyperplane]
tags: [Hyperplanes]
math: true
mermaid: true
---



## 超平面


#### 仿射超平面

$$\begin{aligned} \boldsymbol{a}^T\boldsymbol{x} = b \end{aligned}$$



#### 点到超平面的距离

令超平面外一点$\boldsymbol{x_1}$在超平面$\begin{aligned} \boldsymbol{a}^T\boldsymbol{x} = b \end{aligned}$的投影为$\boldsymbol{x_0}$，则$\boldsymbol{x_1}$到超平面$\begin{aligned} \boldsymbol{a}^T\boldsymbol{x} = b \end{aligned}$的距离等于$\boldsymbol{x_1}、\boldsymbol{x_0}$分别在法向量$\boldsymbol{a}$上的投影的差值：

$$\begin{aligned} s &= \left \vert \frac {\boldsymbol{x_1}^T\boldsymbol{a}}{\vert\vert \boldsymbol{a} \vert \vert } - \frac {\boldsymbol{x_0}^T\boldsymbol{a}}{\vert\vert \boldsymbol{a} \vert \vert } \right \vert \\ &= \frac {\vert \boldsymbol{x_1}^T\boldsymbol{a}-b \vert}{\vert\vert \boldsymbol{a} \vert \vert } \end{aligned}$$



