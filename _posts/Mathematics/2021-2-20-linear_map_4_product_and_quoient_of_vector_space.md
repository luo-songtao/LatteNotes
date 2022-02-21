---
title: Linear Map (4) Product and Quotient of Vector Space
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Linear Map]
tags: [Vector Space, Quotient]
math: true
mermaid: true
---

## 向量空间的积与商

#### 向量空间的积（product of vector space）

设$V_1,\cdots,V_m$均为$F$上的向量空间（通常处理多个向量空间时，它们应当都在同一个域上）

**定义：积**	$V_1 \times V_2 \times \cdots \times V_m$

$$V_1 \times V_2 \times \cdots \times V_m = \{ (v_1, v_2,\cdots,v_m)\space \vert \space  v_1 \in V_1, \cdots,v_m \in V_m \}$$

- 有定义可见：**向量空间的积也是一个向量空间**

- 向量空间的积的维数等于维数的和：

  $$\dim (V_1 \times V_2 \times \cdots \times V_m) = \dim V_1 + \dim V_2 +\cdots + \dim V_m$$
  
  - $R^2\times R^3$的维数是5，虽然$R^2\times R^3$不等于$R^5$，但是$R^2\times R^3$与$R^5$是同构的



#### 积与直和

设$U_1,U_2,\cdots,U_m$都是$V$的子空间

**直和定义**	如果$U_1 + U_2 +\cdots + U_m$中的每个元素都可以唯一地表示成$u_1+u_2+\cdots+u_m$，($u_j$分别属于$U_j$)，则称$U_1 + U_2 +\cdots + U_m$是直和，记为$U_1 \oplus U_2 \oplus\cdots \oplus U_m$

- 若$U_j$是子空间，那么$U_1 + U_2 +\cdots + U_m$是直和，当且仅当它们两两的交集都是$\{0\}$
- $U_1 + U_2 +\cdots + U_m$当且仅当每个$u_j$都为0时，$u_1 + u_2 + \cdots + u_m$才为0

**积与直和**	定义线性映射$T：U_1 \times U_2 \times\cdots \times U_m  \rightarrow U_1 + U_2 +\cdots + U_m $为：

$$T(U_1 \times U_2 \times\cdots \times U_m) = u_1 + u_2 + \cdots + u_m \qquad 其中u_j分别属于U_j$$

那么：

- **$U_1 + U_2 +\cdots + U_m$是直和当且仅当$T$是单射**
  - 因为$T$是单的，当且仅当每个$u_j$都为0时，$u_1 + u_2 + \cdots + u_m$才为0

- **$U_1 + U_2 +\cdots + U_m$是直和当且仅当$\dim(U_1 + \cdots + U_m) = \dim U_1 + \cdots + \dim U_m$**
  $$\begin{aligned} & 根据前一推论：T是单的 \\ & \qquad \dim(U_1 \times U_2 \times\cdots \times U_m) =\dim(U_1 + U_2 +\cdots + U_m) \\ &又因为积的维数等于维数的和 \\&\qquad \dim(U_1 + U_2 +\cdots + U_m) = \dim U_1 + \cdots + \dim U_m \end{aligned}$$



#### 向量空间的商

**定义：向量和子空间的和**	设$v\in V$，$U$是$V$的子空间，则$v+U$是$V$的**子集**，定义如下：

$$v+U = \{ v+u \space \vert\space u \in U \}$$

**定义：仿射子集**	向量空间$V$的仿射子集是形如$v+U$的子集

**定义：平行**	向量空间$V$的仿射子集$v+U$平行于$U$

- **平行于$U$的两个仿射子集要么相等要么不相交**

  $$\begin{aligned} &v - w\in U \\ \Leftrightarrow & v+ U = w+U \\ \Leftrightarrow &(v+U)\cap (w+U) \neq \empty \end{aligned}$$



**定义：商空间**	设$U$是$V$的子空间，则商空间$V/U$是指$V$的所有平行于$U$的仿射子集的集合，即：

$$V/U = \{v+U \space \vert\space v\in V \}$$



**商空间上的加法和标量乘法**

$$\begin{aligned} (v+U)+(w+U) &= (v+w) + U \\ \lambda(v+U) = \lambda v+U \end{aligned}$$

- 可见，商空间也满足加法和标量乘法的封闭性，因此**商空间也是一个向量空间**



**商映射（quotient map）**	设$U$是$V$的子空间，则商映射$\pi:V\rightarrow V/U$定义为：

$$\pi(v) = v+U \quad v \in V$$

- $\mathrm{null} \space \pi = \{v \in V: v+u = 0, u\in U\} = U$
- $\mathrm{range} \space \pi = V/U$

**商空间的维数**	设$V$是有限维的，则：

$$\begin{aligned} \dim V/U = \dim \mathrm{range} \space \pi &= \dim V - \dim \mathrm{null} \space  \pi \\ &= \dim V - \dim U \end{aligned}$$



$V$上的每个线性映射$T\in \mathcal{L}(V,W)$都诱导一个$V/(\mathrm{null} \space T)$上的一个线性映射$\tilde{T}\in \mathcal{L}\left(V/(\mathrm{null} \space T),W\right)$，定义如下：

$$\tilde{T}(v+\mathrm{null} \space T) = Tv$$

- $\mathrm{null}\space \tilde{T} = \{0\}$，即$\tilde{T}$是单的。证明如下：

  $$\begin{aligned} &令\tilde{T}(v+\mathrm{null} \space T) = Tv = 0 \Longrightarrow v \in \mathrm{null} \space T \\ \Longrightarrow & v+ \mathrm{null} \space T = 0+\mathrm{null} \space T \\ \Longrightarrow & \mathrm{null} \space \tilde{T} = \{ t\in v+ \mathrm{null} \space T \space \vert \space T(t-u)=0, u \in \mathrm{null} \space T \} = \{ t\in v+ \mathrm{null} \space T \space \vert \space Tt=0 \} \\ \Longrightarrow & \mathrm{null} \space \tilde{T} = \{0\} \qquad t的取值是\mathrm{null} \space T与所有v+\mathrm{null} \space T上满足Tt=0的交集，则只有0 \end{aligned}$$

- 若将$\tilde{T}$视为$V/(\mathrm{null} \space T)$到$\mathrm{range}\space T$的映射，则$\tilde{T}$是$V/(\mathrm{null} \space T)$与$\mathrm{range}\space T$之间的同构





