---
title: Inner Product Space (6) Positive Operator and Isometric Isomorphism
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Positive Operator, Isometric Isomorphism]
math: true
mermaid: true
---


## 正算子与等距同构

#### 正算子（半正定算子）

**正算子（positive operator）**	称算子$T\in \mathcal{L}(V)$是正的，如果$T$是自伴的，且对所有$v\in V$均有$\lang Tv,v\rang \ge 0$

- 正算子的矩阵是半正定矩阵，即$v^t\mathcal{M}(T)v\ge 0$
  - 在$\R$上，同时是实对称矩阵
  - 在$\C$上，同时是共轭对称矩阵
- 正交投影是正算子
- 如果$T$是自伴算子，且$b,c\in \R$，满足$b^2 < 4c$，则$T^2 + bT+cI$是正算子


**正算子等价条件**	设$T\in \mathcal{V}$，则以下条件等价：

- $T$是正算子

- $T$是自伴算子且$T$的所有特征值非负

  $$\begin{aligned} &0 \le \lang Tv,v\rang = \lang \lambda v,v\rang  = \lambda \lang v,v \rang  \Longrightarrow \lambda \ge 0 \\ & T是正算子，那么T必定是自伴算子  \end{aligned}$$

- $T$有正的平方根

- $T$有自伴的平方根

- 存在算子$A\in\mathcal{L}(V)$，使得$T=A^*A$

  - 话句话说：$\forall A\in \mathcal{L}(V),A^*A$都是正算子

**每个正算子都有唯一的正平方根**



#### 等距同构

**等距同构（isometric isomorphism）**	算子$S\in \mathcal{L}(V)$，如果满足，$\forall v\in V,\vert\vert Sv \vert\vert = \vert\vert v \vert\vert$，则称算子$S$是等距同构的

- 算子等距同构等价于指算子保持范数
- $\vert\lambda\vert =1$时，$\lambda I$是等距同构

**等距同构的等价条件**	设$S\in \mathcal{L}(V)$，则以下条件等价：

- $S$是等距同构
- $\forall u,v \in V,\lang Su,Sv\rang = \lang u,v\rang$
- 对$V$中的任意规范正交组$e_1,e_2,\cdots,e_n$均有$Se_1,Se_2,\cdots,Se_n$是规范正交的
- $V$有规范正交基$e_1,e_2,\cdots,e_n$使得$Se_1,Se_2,\cdots,Se_n$是规范正交的
- $S^*S=I、SS^*=I$
- $S^*$是等距同构
- $S$是可逆的，且$S^{-1}=S^*$



**正交算子**	实内积空间上，等距同构的算子称为正交算子

**酉算子**	复内积空间上，等距同构的算子称为酉算子

