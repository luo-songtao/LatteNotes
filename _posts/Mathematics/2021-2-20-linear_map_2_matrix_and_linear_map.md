---
title: Linear Map (2) Matrix and Linear map
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Linear Map]
tags: [Matrix]
math: true
mermaid: true
---

## 矩阵与线性映射

#### 线性映射的矩阵

设$T \in \mathcal{L}(V,W)$，并设$v_1,v_2,\cdots,v_n$是$V$的基，$w_1,w_2,\cdots,w_m$是$W$的基。

规定线性映射$T$关于这些基的矩阵是一个$m\times n$的矩阵，这里记作$\mathcal{M}(T)$，令$a_{i,j}$表示矩阵的第$i$行、第$j$列的元素，那么：

$$\begin{aligned} Tv_k &= a_{1,k}w_1 + a_{2,k}w_2+\cdots+a_{m,k}w_m \\ &= \sum_{i=1}^m a_{i,k}w_i \end{aligned}$$

- **如果$T$是$n$维向量空间到$m$维向量空间的线性映射，则$\mathcal{M}(T)$是一个$m\times n$矩阵**
- 如果分别在向量空间$V,W$中选取不同的基，那么将得到不同的关于线性映射$T:V\rightarrow W$的矩阵$\mathcal{M}(T)$。简而言之，**$\mathcal{M}(T)$依赖于$V$和$W$的基的选取**



**线性映射和的矩阵**	设$S,T \in \mathcal{L}(V,W)$，则$\mathcal{M}(S+T) = \mathcal{M}(S) + \mathcal{M}(T)$

**线性映射标量乘的矩阵**	设$T \in \mathcal{L}(V,W)、\lambda \in F$，则$\mathcal{M}(\lambda T) = \lambda\mathcal{M}(T)$

**线性映射乘积的矩阵**	设$S,T \in \mathcal{L}(V,W)$，则$\mathcal{M}(ST) = \mathcal{M}(S)\mathcal{M}(T)$

- 注意：当考虑$T\in\mathcal{L}(U,V),S\in\mathcal{L}(V,W)$时，使用$V$的同一基。其他情况同理







