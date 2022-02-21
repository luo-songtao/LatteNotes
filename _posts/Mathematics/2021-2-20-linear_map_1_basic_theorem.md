---
title: Linear Map (1) Basic Theorem
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Linear Map]
tags: [Liner Transofrmation]
math: true
mermaid: true
---

## 线性映射基本定理

记号：

- $\boldsymbol{F}$表示$\boldsymbol{R}$或$\boldsymbol{C}$
- $V$和$W$表示$\boldsymbol{F}$上的向量空间

#### 定义：线性映射（linear map)

从向量空间$V$到$W$的线性映射是具有下列性质的**函数**$T$：$V\rightarrow W$

**Additivity：加性**

- 对所有的$u,v\in V$，都有：$T(u+v) = Tu+Tv$

**Homogeneity：齐性**

- 对所有$\lambda \in \boldsymbol{F}$和$v\in V$都有$T(\lambda v) = \lambda T(v)$

**线性映射的集合**	通常使用$\mathcal{L}(V,W)$表示从向量空间$V$到$W$的所有线性映射的集合

**线性映射与线性变换**	是含义相同的两个术语



**线性映射与定义域的基**	设$v_1,v_2,\cdots,v_n$是$V$的基，$w_1,w_2,\cdots,w_n\in W$，则存在**唯一**一个线性映射$T：V\rightarrow W$，使得对任意$j=1,\cdots,n$，都有：

$$Tv_j = w_j$$

- 存在性：表明线性映射可根据其在一个基上的取值来构造
- 唯一性：表明一个先行银蛇完全由其在基上的取值确定

**集合$\mathcal{L}(V,W)$上的代数运算**

令$S、T\in \mathcal{L}(V,W)$，$\lambda \in F$，定义对于所有的$v \in V$

- 和：$(S+T)(v) = Sv+Tv$
- 标量积：$(\lambda T)(v) = \lambda (Tv)$

都是$V\rightarrow W$的线性映射

则有：$\mathcal{L}(V,W)$也是一个向量空间



**线性映射的乘积**	对于一对适当的线性映射（当$T$映射到$S$的定义域内时），线性映射的乘积需要引入第三个向量空间，假设$U$是$F$上的向量空间

若$T \in \mathcal{L}(U,V)$，$S \in \mathcal{L}(V,W)$，则定义乘积$ST \in \mathcal{L}(U,W)$：对于任意的$u \in U$，$(ST)(u) = S(Tu)$

- **只有当$T$映射到$S$的定义域内时，$ST$才有定义**

- 结合性：$T_1T_2T_3 = T_1(T_2T_3)$
- 单位元：$TI = IT = T$
- 分配性质：$(S_1+S_2)T = S_1T + S_2T$



#### 零空间和值域

**零空间（null space/ null T）**	对于$T \in \mathcal{L}(V,W)$，则$T$的零空间定义为：

$$\mathrm{null} \space T = \{v \in V: Tv = 0\}$$

- 零空间是子空间。即$\mathrm{null} \space T$是$V$的子空间

  - 证明：

    $$\begin{aligned}  &T(0) = 0,则有0 \in \mathrm{null}\space T \\& 设u,v \in \mathrm{null}\space T，则： \\ &\qquad T(u+v) = Tu + Tv = 0 \\ &可知u+v \in \mathrm{null}\space T，即\mathrm{null}\space T对加法封闭 \\ & 设 u \in \mathrm{null}\space T, \lambda \in F，则 \\ &\qquad T(\lambda u) = \lambda Tu = 0 \\ &可知\lambda u \in \mathrm{null}\space T，即\mathrm{null}\space T对标量乘封闭  \\ & 因此\mathrm{null}\space T 是V的子空间 \end{aligned}$$



**单射性（injective）**	如果当$Tu = Tv$时，必有$u=v$，则称映射$T:V\rightarrow W$是是单的

**单射性等价条件：零空间为$\{0\}$**



**值域（range T）**	对于映射$T: V\rightarrow W$，$T$的值域定义为：

$$\mathrm{range} \space T = \{Tv:v\in V\}$$

- 值域也是子空间。即$\mathrm{range} \space T$是$W$的子空间
  - 证明：同理



**满射（surjective）**	如果映射$T:V\rightarrow W$的值域等于$W$，则称$T$是满的



#### 线性映射的基本定理

设$V$是有限维的，$T\in \mathcal{L}(V,W)$，则$\mathrm{range} \space T$是有限维的，且：

$$\dim V = \dim \mathrm{null}\space T + \dim \mathrm{range}\space T$$

证明：

$$\begin{aligned} 1.&先证\mathrm{range}\space T是有限维的 \\ &设u_1,u_2,\cdots,u_m是\mathrm{null}\space T的基，则\dim\mathrm{null}\space T=m \\ & 而线性无关组u_1,u_2,\cdots,u_m可以扩充成V的基\\ & 那么假设V的基为 u_1,u_2,\cdots,u_m,v_1,v_2,\cdots,v_n, 那么令v\in V，且：\\ & \qquad v = a_1u_1+\cdots +a_mu_m + b_1v_1 + \cdots + b_nv_n \\ & 则： \\& \qquad Tv = b_1Tv_1 + \cdots + b_nTv_n \\ & 可知Tv_1 + \cdots + Tv_n  张成\mathrm{range} \space T \\ &得证\mathrm{range} \space T是有限维的 \\ 2.&证\mathrm{range} \space T的维度为n，即证Tv_1 , \cdots , Tv_n线性无关 \\ & 设c_1,\cdots,c_n \in F，使得 \\ &\qquad c_1Tv_1 + \cdots + c_nTv_n = 0 \\ & 那么：\\ &\qquad T(c_1v_n+\cdots+c_nv_n) = 0 \\ &则有c_1v_n+\cdots+c_nv_n\in \mathrm{null}\space T：\\ & \qquad c_1v_1+\cdots+c_nv_n = d_1u_1+\cdots+d_m+u_m \\ & 又因u_1,u_2,\cdots,u_m,v_1,v_2,\cdots,v_n是V的基，两两线性无关，那么上式成立，当且仅当c、d全为0 \\ & 等价于c_1Tv_1 + \cdots + c_nTv_n = 0成立，当且仅当c全为0 \\ &则有Tv_1 , \cdots , Tv_n线性无关 \end{aligned}$$


**到更小维数向量空间的线性映射不是单的**

$$\begin{aligned} \dim \mathrm{null}\space T &= \dim V - \dim \mathrm{range}\space T \\ & \le \dim V - \dim W \\ &\gt 0 \end{aligned}$$

- 齐次线性方程组：若变量多余方程，则必有非零解（不是单射，因此零空间有非零元素）

**到更大维数向量空间的线性映射不是满的**

$$\begin{aligned} \dim \mathrm{range}\space T &= \dim V - \dim \mathrm{null}\space T \\ & \lt \dim W- \dim \mathrm{null}\space T \\ &\lt \dim W \end{aligned}$$

- 非齐次线性方程组：若变量少于方程，则必有一组常数项使得相应的非齐次线性方程组无解（不是满射，因此$W$存在使得方程组无解的点）

