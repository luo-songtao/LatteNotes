---
title: Linear Map (3) Invertible and Isomorphic
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Linear Map]
tags: [Inverse Matrix, Linear Isomorphic]
math: true
mermaid: true
---

## 可逆的线性映射与同构的向量空间

#### 可逆的线性映射

**可逆映射**	对于线性映射$T\in \mathcal{L}(V,W)$，如果存在线性映射$S\in \mathcal{L}(W,V)$ 使得：$ST$是$V$上的恒等映射；$TS$是$W$上的恒等映射，则称线性映射$T\in \mathcal{L}(V,W)$是可逆的

**逆的唯一性**	可逆的线性映射有唯一的逆

**可逆的充要条件**	一个线性映射是可逆的，当且仅当它既是单的也是满的

- 意即可逆性等价于单射和满射



#### 同构的向量空间

**同构**	同构就是指的可逆的线性映射

**同构的向量空间**	若两个向量空间之间存在一个同构，则称这个两个向量空间是同构的

**同构的充要条件**	两个有限维的向量空间同构当且仅当其维数相同

- 每个有限维向量空间都同构于$F^n$



令$F^{m,n}$表示所有的$m \times n$的矩阵构成的集合，那么**线性映射的集合$\mathcal{L}(V,W)$与$m \times n$矩阵的集合$F^{m,n}$同构**	

- $\mathcal{L}(V,W)$和$F^{m,n}$的维度都是$mn$：$\dim \mathcal{L}(V,W) = (\dim V)(\dim W) = \dim F^{m,n}=mn$  

令**$\mathcal{M}$表示$\mathcal{L}(V,W)$与$F^{m,n}$的同构**，那么**线性映射的作用类似于矩阵乘**

- 设$v_1,v_2,\cdots,v_n$是$V$的基，那么向量$v\in V$关于这个基的矩阵$M(v)$是一个$n\times 1$的矩阵：

  $$\mathcal{M}(v) = \left [\begin{matrix} c_1 \\ \vdots \\ c_n \end{matrix}\right]$$

  - 其中：$v = c_1v_1 + \cdots + c_nv_n$

- 设$T\in \mathcal{L}(V,W)$，则：

  $$\mathcal{M}(Tv) = \mathcal{M}(T)\mathcal{M}(v)$$

- **任意的$m\times n$矩阵$A$都诱导一个从$F^{n,1}$到$F^{m,1}$的线性映射，即将$x\in F^{n,1}$，变为$Ax\in F^{m,1}$的矩阵乘**
- **通过有限维向量空间之间的同构$\mathcal{M}$，可以把线性映射当作矩阵乘积看待**。同时注意，矩阵$A$的取值除了依赖于线性映射$T$以外，还依赖于$V$的基的选取



#### 算子（operator）

**定义：算子**	向量空间$V$到其自身的线性映射称为算子。

- $\mathcal{L}(V)$表示$V$上所有算子的集合



**算子的特征**	

- 当$V$是有限维时，关于$V$上算子$T$的下列三个陈述等价：
  - $T$是可逆的
  - $T$是单的
  - $T$是满的
- 当$V$是无限维时，关于$V$上算子$T$必须既是单的又是满的，才可逆