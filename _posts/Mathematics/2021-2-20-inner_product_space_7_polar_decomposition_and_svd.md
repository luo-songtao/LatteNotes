---
title: Inner Product Space (7) Polar Decomposition and SVD
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Polar Decomposition, SVD]
math: true
mermaid: true
---

## 极分解与奇异值分解

如果将所有的算子集合与复数域$\C$进行类比（虽然并不十分恰当）：

-  一个复数$z$相应于一个算子$T$
- 实数$z=\overline{z}$相应于自伴算子$T=T^*$

而复数域上一个重要的子集是**单位圆**

- $\C$上的单位圆是由所有满足$\vert z\vert =1$的复数$z$组成，而$\vert z\vert =1$等价于$z\overline{z} = 1$
- 那么按照前面的类比，这相当于条件$TT^*=I$，也就等价于$T$是等距同构的。

这也就意味着，$\C$上的单位圆相应于全体等距同构。此外：

- 对于$\C$上的任何复数$z$，都有$z=\frac {z}{\vert z\vert}\vert z\vert = \frac {z}{\vert z\vert}\sqrt{z\overline{z}}$。而$\frac {z}{\vert z\vert}$正好表示的单位圆上的复数，也就是说每一个复数$z$都可以表示成一个单位圆上的复数乘上$\sqrt{z\overline{z}}$
- 那么类比到算子上，意味着$V$上的算子$T$，将可以写成一个等距同构和$\sqrt{T^*T}$的乘积。
  - 注意$T^*T$必定是正算子，而$\sqrt{T^*T}$表示$T^*T$的唯一正平方根

#### 极分解（Polar Decomposition）

设$T\in \mathcal{L}(V)$，则有一个等距同构$S \in \mathcal{L}(V)$，使得$T=S\sqrt{T^*T}$

- 证明：

  $$\begin{aligned}  \because&\vert \vert T v\vert \vert^2 = \lang Tv,Tv\rang = \lang T^*Tv,v\rang \\ & 且T^*T是正算子，那么令\sqrt{T^*T}表示T^*T的唯一正平方根 \\ \therefore & \vert \vert T v\vert \vert^2  = \lang \sqrt{T^*T} v, \sqrt{T^*T} v \rang  = \vert \vert \sqrt{T^*T} v \vert\vert ^2 \\ &即\forall v \in V,\vert\vert Tv\vert\vert = \vert\vert \sqrt{T^*T}v \vert\vert \\ \\ &定义线性映射S_1:\mathrm{range}\space \sqrt{T^*T} \rightarrow \mathrm{range}\space T \\ &定义线性映射S_2: (\mathrm{range}\space \sqrt{T^*T})^\perp \rightarrow (\mathrm{range}\space T)^\perp \\ &易知，S_1、S_2均是单的，且分别在\mathrm{range}\space \sqrt{T^*T}、(\mathrm{range}\space \sqrt{T^*T})^\perp上是等距同构\\ &即\vert\vert S_1 u \vert\vert = \vert \vert u\vert\vert,\vert\vert S_2 w \vert\vert = \vert \vert w\vert\vert，u\in\mathrm{range}\space \sqrt{T^*T}、w\in(\mathrm{range}\space \sqrt{T^*T})^\perp \\ &而\forall v\in V, v = u+w \\ \\ &设S是\mathcal{L}(V)上的算子\\ &并定义：Sv=S_1u + S_2w \\ &首先有：\vert\vert Sv\vert\vert^2 = \vert\vert S_1 u \vert\vert^2 + \vert\vert S_2w\vert\vert^2  = \vert\vert u \vert\vert ^2 + \vert\vert w\vert\vert^2 = \vert\vert v\vert\vert^2,即S是一个等距同构  \\ &其次：若取v\in\mathrm{range}\space \sqrt{T^*T},即令v=\sqrt{T^*T}v,则 u=\sqrt{T^*T}v,w=0，那么：S(\sqrt{T^*T} u) = S_1(\sqrt{T^*T} u) = Tv，则表明此时T=S\sqrt{T^*T} \end{aligned}$$

- 极分解表明：$V$上每个算子都是一个等距同构和一个正算子的乘积。简而言之，$V$上每个算子都可以表示成两个算子的乘积，其中一个是等距同构算子，另一个是正算子。
  
  - 但也要注意，考虑$F=\C$的情形，设$T=S\sqrt{T^*T}$，$S$是一个等距同构。$S$和$\sqrt{T^*T}$都存在着一个规范正交基使得它们各自关于对应的基具有对角矩阵。这里要注意的是，它们各自对应的这个规范正交基不一定相同。





#### 奇异值分解（Singular Value Decomposition）



**奇异值（Singular Value）**	设$T\in \mathcal{L}(V)$，则$T$的奇异值就是$\sqrt{T^*T}$的特征值，而且每个特征值$\lambda$都将重复$\dim E(\lambda,\sqrt{T^*T})$次

- 因为$\sqrt{T^*T}$是正算子，因此$\lambda \ge 0$。若将0算上，那么每个$T\in \mathcal{L}(V)$，都将有$\dim V$个奇异值



**奇异值分解**	设$T\in \mathcal{L}(V)$，有奇异值$s_1,\cdots,s_n$，则$V$上有两个规范正交基$e_1,\cdots,e_n$，$f_1,\cdots,f_n$使得：$\forall v\in V$均有$Tv=s_1\lang v, e_1\rang f_1+ \cdots+s_n\lang v, e_n\rang f_n$

- 证明：

  $$\begin{aligned} &因为\sqrt{T^*T}是正算子，也是自伴算子，那么根据谱定理。自伴算子的特征向量可构成V上的一组规范正交基 \\ &那么假设e_j满足：\sqrt{T^*T} e_j = s_je_j \\ &又因：\forall v\in V,\space v=\lang v,e_1 \rang e_1 + \cdots + \lang v,e_n \rang e_n \\ &对上式两端作用\sqrt{T^*T}可得\\ &\qquad \sqrt{T^*T}v = \lang v,e_1 \rang \sqrt{T^*T}e_1 + \cdots + \lang v,e_n \rang \sqrt{T^*T}e_n = s_1\lang v,e_1 \rang e_1 + \cdots + s_n\lang v,e_n \rang e_n \\ &根据极分解定理可知，存在等距同构S使得：T=S\sqrt{T^*T}，那么把S作用于上式可得：\\ &\qquad Tv = s_1\lang v,e_1 \rang Se_1 + \cdots + s_n\lang v,e_n \rang Se_n \\ &而等距同构S又有：Se_j = f_j,（f_j是V上另一个规范正交基），因此则有：\\ &\qquad Tv = s_1\lang v,e_1 \rang f_1 + \cdots + s_n\lang v,e_n \rang f_n \end{aligned}$$

- 奇异值分解表明：**对于$V$上的任意一个算子$T$，如果允许使用两个不同的基，那么$T$对于这对规范正交基都有对角矩阵。**

- 另外：**由于$T^*T$必定是正算子，那么其特征值必定是非负的，因此$T$的奇异值也就是$T^*T$的特征值的非负平方根**

