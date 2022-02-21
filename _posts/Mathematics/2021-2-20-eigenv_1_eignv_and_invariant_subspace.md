---
title: Eigenvalue and Eigenvector (1) Eigenvector and Invariant Subspace
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Eigenvalue and Eigenvector]
tags: [Invariant Subspace, Eigenvector, Eigenvalue]
math: true
mermaid: true
---

## 特征值、特征向量与不变子空间

#### 不变子空间（invariant subspace）	

**不变子空间**	设$T\in \mathcal{L}(V)$，$U$是$V$的子空间，若$\forall u \in U$，都有$Tu\in U$，则称$U$是$V$的不变子空间

假设$V$有直和分解，$U_j$都是$V$的真子空间：

$$V = U_1 \oplus \cdots \oplus U_m$$

那么要想了解T的特性，只需了解每个$T\vert_{U_j}$的特征，$T\vert_{U_j}$表示将T限制到更小的定义域$U_j$上。

而如果$T\vert_{U_j}$恰好把$U_j$映到自身，那么这样的$U_j$也就是$V$的不变子空间



#### 特征值与特征向量	

**一维不变子空间**	下面定义的子空间$U$是$V$的一维子空间

$$U = \{ \lambda v: \lambda \in F, v \in V,v\neq 0 \} = \mathrm{span}\{v\}$$

如果$U$在$T\in \mathcal{L}(V)$下不变，则$Tv \in U$，因此必有$\lambda \in F$使得$Tv = \lambda v$。这时的$U$是$V$的一维不变子空间

**特征值**	设$T\in \mathcal{L}(V)$，若存在$v \in V,v\neq 0,\lambda \in F$，且$Tv=\lambda v$，则称$\lambda $为$T$的特征值

- $T$有一维不变子空间，当且仅当$T$有特征值

- 特征值的等价条件：
  - $\lambda$是$T$的特征值
  - $T-\lambda I$不是单的
    - 如果是单的，那么只有$v=0$才满足$Tv=\lambda v$
  - $T-\lambda I$不是满的
    - 对于算子而言，如果是满的，那么必是单的
  - $T-\lambda I$是不可逆的
    - 对于算子而言，如果是可逆的，那么必是单的，满的

**特征向量**	设$T\in \mathcal{L}(V)$，$\lambda \in F$是$T$的特征值，若$v\neq 0，Tv=\lambda v$，则$v\in V$称为$T$的关于$\lambda$的特征向量

- 非零向量$v\in V$是$T$关于$\lambda$的特征向量，当且仅当$v\in \mathrm{null}\space (T-\lambda I)$



**特征向量的线性无关性**	设$T\in \mathcal{L}(V)$，设$\lambda_1,\cdots,\lambda_m$是$T$的互不相同的特征值，并设$v_1,\cdots,v_m$是相应的特征向量，则$v_1,\cdots,v_m$线性无关

$$\begin{aligned} &设非零向量v_1,\cdots,v_m线性相关，并设k是使得 \\ &\qquad v_k \in \mathrm{span}\{v_1,\cdots,v_{k-1}\} \\ &成立的最小正整数，既k\le m \\ &则有非全零的a_1,\cdots,a_{k-1} \in F使得：\\ &\qquad v_k = a_1v_1+\cdots+a_{k-1}v_{k-1} \\ &那么将\lambda_k\neq0与上式两端相乘的结果减去T作用于上式两端的结果，可得： \\ &\qquad 0 = a_1(\lambda_k-\lambda_1)v_1+\cdots + a_{k-1}(\lambda_k - \lambda_{k-1})v_{k-1} \\ &而根据假设v_1,\cdots,v_{k-1}线性无关，那么将有v_k=0 \\ &这与假设条件v_1,\cdots,v_m都是非零向量矛盾   \end{aligned}$$



**特征值的数量**	有限维向量空间$V$上， 每个算子最多有$\dim V$个**互不相同**的特征值

- $T\in \mathcal{L}(V)$，$T$的特征值的数量等于$\dim \mathrm{range}\space T$



#### 限制算子和商算子

若$T\in \mathcal{L}(V)$，且$U$是$V$的在$T$下不变的子空间，则$U$以自然的方式确定了另外算子

- **限制算子**：$T\vert_U \in \mathcal{L}(U)$。顾名思义，将$T$的定义域限制在$V$在$T$下的不变子空间$U$上

  $$T\vert_U(u) = Tu,\qquad u\in U$$

- **商算子**：$T/U \in \mathcal{L}(V/U)$。定义在商空间$V/U$的元素$v+U$上的算子

  $$(T/U)(v+U) = Tv+U, \qquad v\in V$$

  - 商算子推导：为了满足加法封闭，需要验证若$v+U=w+U$，有$Tv+U = Tw+U$

    $$\begin{aligned} &设v+U=w+U \\ &则v-w \in U\qquad(平行于U的两个仿射子集要么相等要么不相交) \\ & \because U是V在T下的不变子空间 \\ & \therefore T(v-w)\in U,即Tv-Tw \in U \\&\therefore Tv+U = Tw+U  \end{aligned}$$











