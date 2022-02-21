---
title: Inner Product Space (1) Inner Product and Norm
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Inner Product, Norm]
math: true
mermaid: true
---

## 内积与范数

**点积（dot product）**	$x,y\in R^n$，$x$和$y$的点积（记作$x\cdot y$）定义为：

$$x\cdot y = x_1y_1 + \cdots + x_ny_n$$



**内积（inner product）**	内积是点积的推广。$x,y \in V$，$V$上的内积就是一个函数，把$V$中每一个有序对$(x,y)$都映成一个数：$\langle x,y\rangle \in F$：

$$\langle x,y\rangle = x_1\overline{y_1} + \cdots + x_n\overline{y_n}$$



**范数（norm）**	$x\in V$，范数记为$ \vert\vert x \vert\vert$，而$\vert \vert x \vert \vert^2$看作$x$与自身的内积：

$$\vert \vert x \vert \vert = \sqrt{\langle x,x \rangle} = \sqrt{x_1\overline{x_1} + \cdots + x_n\overline{x_n} }= \sqrt{\vert x_1 \vert ^2 + \cdots + \vert x_n\vert ^2}$$

- $\vert \vert x \vert \vert =0 \Leftrightarrow x = 0$
- $\forall \lambda\in F，\vert \vert \lambda x \vert \vert  = \lambda\vert \vert x \vert \vert $

**内积的性质**

- 正性（positivity）：$\forall v\in V,\langle v,v\rangle \ge 0$
- 定性 （definiteness）：$\langle v,v\rangle = 0 \Leftrightarrow v = 0$
- 位置1上的加性（additivity）：$\forall u,v,w\in V, \langle u+v,w\rangle = \langle u,w\rangle+\langle v,w\rangle$
- 位置1上的齐性（homogeneity）：$\forall \lambda \in F,\forall u,v \in V,\langle \lambda u,v\rangle = \lambda\langle u,v\rangle$
- 共轭对称性（conjugate symmetry）：$\forall u,v \in V,均有\langle u,v\rangle = \overline{\langle v,u \rangle}$



**内积基本性质**

- 取定$u\in V$，将$v$变为$\langle v,u \rangle$的函数是$V$到$F$的线性映射

- $\langle 0,u\rangle = \langle u,0 \rangle=0$

- 位置2上的加性：$\forall u,v,w\in V, \langle u,v+w\rangle = \langle u,v\rangle+\langle u,w\rangle$

  - 证明：根据共轭对称性和位置1的加性可得

    $$\begin{aligned}  \langle u,v+w\rangle &= \overline{ \langle v+w,u \rangle} \\& = \overline{\langle v,u\rangle} + \overline{\langle w,u\rangle} \\ &= \langle u,v\rangle+\langle u,w\rangle \end{aligned}$$

- 位置2的数乘：$\forall \lambda \in F,\forall u,v \in V,\langle u,\lambda v\rangle = \overline{\lambda}\langle u,v\rangle$



**内积空间**	即具有内积的向量空间

- 一般情况下，内积空间最主要是指的$F^n$上定义的欧几里得内积

- 假设$c_1,c_2,\cdots,c_n$都是正数，那么在$F^n$上也可以定义内积为，$x,y\in F^n$:

  $$\begin{aligned} \langle (x_1,\cdots,x_n),(y_1,\cdots,y_n) \rangle = c_1x_1\overline{y_1}+\cdots+ c_nx_n\overline{y_n}\end{aligned}$$

- 在区间$[-1,1]$上的实值连续函数构成的向量空间上可定义内积：

  $$\begin{aligned} \langle f,g \rangle = \int_{-1}^1 f(x)g(x)dx \end{aligned}$$

- 在所有多项式的集合$\mathcal{P}(R)$上可定义内积：

  $$\begin{aligned} \langle f,g \rangle = \int_0^{\infty}f(x)g(x)e^{-x}dx \end{aligned}$$



**正交（orthogonal）**	设向量$u,v \in V$，若$\langle u,v \rangle = 0$，则称向量$u,v$正交

- $0$向量正交于$V$中的任意向量
- $0$向量是唯一一个与自身正交的向量



**毕达哥拉斯定理（pythagoras theory）**	即勾股定理。设$u,v\in V$是两个相互正交的向量，则

$$\vert\vert u + v\vert\vert^2 = \vert\vert u \vert\vert^2 + \vert\vert v \vert\vert^2$$



**正交分解**	设$u,v \in V,v\neq 0$。若$w = u - \frac{\langle u,v \rangle}{\vert \vert v \vert \vert^2 }v$，则有$\langle v,w \rangle = 0$。即$u = w + \frac{\langle u,v \rangle}{\vert \vert v \vert \vert^2 }v$



**柯西-施瓦茨不等式**	设$u,v \in V$，则$\vert \langle u,v \rangle \vert  \le \vert \vert u \vert \vert \cdot \vert \vert v \vert \vert$。等号成立当且仅当$u,v$之一是另一个的标量倍，即共线

$$\begin{aligned} \vert\vert u \vert\vert^2 &= \vert\vert w\vert\vert^2 + \frac{\vert\langle u,v \rangle\vert^2}{\vert \vert v \vert \vert^2 } \\ &\ge  \frac{\vert\langle u,v \rangle\vert^2}{\vert \vert v \vert \vert^2 } \\ \Longrightarrow \vert \langle u,v \rangle \vert  &\le \vert \vert u \vert \vert \cdot \vert \vert v \vert \vert \qquad （当且仅当w=0，即u =  \frac{\langle u,v \rangle}{\vert \vert v \vert \vert^2 }v时，等号成立） \end{aligned}$$

**三角不等式**	设$u,v \in V$，则$\vert\vert u+v \vert \vert  \le \vert \vert u \vert \vert + \vert \vert v \vert \vert$。

$$\begin{aligned} \vert \vert u+v \vert \vert ^2 &= \langle u+v, u+v\rangle \\  &= \langle u,u\rangle + \langle v,v\rangle + \langle u,v\rangle + \langle v,u\rangle \\ &= \langle u,u\rangle + \langle v,v\rangle + \langle u,v\rangle + \overline{\langle u,v \rangle} \\&= \langle u,u\rangle + \langle v,v\rangle +2\mathrm{Re}(\langle u,v\rangle) \\ &\le \langle u,u\rangle + \langle v,v\rangle+ 2\vert \langle u,v\rangle \vert\qquad (当u,v都是实向量时取等)\\ &\le \langle u,u\rangle + \langle v,v\rangle+ 2 \vert \vert u \vert \vert \vert \vert v \vert \vert \qquad (柯西-施瓦茨不等式，当\langle u,v\rangle=\vert \vert u \vert \vert \vert \vert v \vert \vert时取等) \\ &=  (\vert \vert u \vert \vert + \vert \vert v \vert \vert)^2  \end{aligned}$$



**平行四边形恒等式**	设$u,v \in V$，则

$$\vert \vert u+v \vert \vert ^2 + \vert \vert u-v \vert \vert^2 = 2(\vert \vert u\vert \vert^2+\vert \vert v \vert \vert^2)$$

即：平行线对角线长度的平方和等于四边长度的平方和

- 证明：

  $$\begin{aligned} \vert \vert u+v \vert \vert ^2 + \vert \vert u-v \vert \vert^2 &= \langle u+v, u+v \rangle + \langle u-v, u-v \rangle \\ &= 2\langle u, u \rangle +2\langle v, v \rangle \\ &= 2(\vert \vert u\vert \vert^2+\vert \vert v \vert \vert^2)  \end{aligned}$$













