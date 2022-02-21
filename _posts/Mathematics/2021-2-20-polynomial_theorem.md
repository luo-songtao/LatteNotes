---
title: Polynomial
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Basic Concept, Algebra]
tags: [Polynomial]
math: true
mermaid: true
---

## 多项式

#### 多项式定义	

对于函数$p:F\rightarrow F$，若存在$a_0,\cdots,a_m\in F$使得对所有的$x\in F$，都有：

$$p(x) = a_0 + a_1x+a_2x^2+\cdots + a_mx^m$$

则称函数$p$为系数在$F$中的多项式

- 多项式的阶数：$\deg p = m$
- 所有等于小于$m$阶多项式的集合（$x\in F$）：$\mathcal{P}_m(F) \in \mathcal{P}(F)$
- 若定义零多项式的阶数为$-\infty$，则：$\deg (pq) = \deg p +\deg q$

#### 多项式系数的唯一性

- **若一个多项式是零函数，则其所有系数均为0**	设$a_0,\cdots,a_m \in F$，若对任意$x\in F$，均有：

  $$a_0 + a_1x+a_2x^2+\cdots + a_mx^m = 0$$

  则必有：$a_0=a_1=\cdots=a_m=0$

  - 证明：（逆否命题：存在不全为零的$a_0,\cdots,a_m \in F$，对任意$x\in F$，有$a_0 + a_1x+a_2x^2+\cdots + a_mx^m = 0$）

    $$\begin{aligned} &假设a_m是不为零的,并令x>1，且为 \\&\qquad x=\frac {\vert a_0\vert+\vert a_1\vert+\cdots+\vert a_{m-1}\vert}{\vert a_m\vert}+1 \\ & 那么：\\ &\qquad \vert a_0 + a_1x+a_2x^2+\cdots + a_{m-1}x^{m-1} \vert \le \vert a_1+a_2+\cdots + a_{m-1} \vert x^{m-1} \\ & 根据三角不等式 \\& \qquad \vert a_1+a_2+\cdots + a_{m-1} \vert x^{m-1} \le (\vert a_1\vert+\vert a_2\vert+\cdots + \vert a_{m-1}\vert) x^{m-1} \\ &而根据假设 \vert a_1\vert+\vert a_2\vert+\cdots + \vert a_{m-1}\vert = x\vert a_m \vert + 1，则有： \\ & \qquad (\vert a_1\vert+\vert a_2\vert+\cdots + \vert a_{m-1}\vert) x^{m-1} \le \vert a_m \vert x^m + x^{m-1} \lt \vert a_m \vert x^m \\ &则： \\ &\qquad \vert a_0 + a_1x+a_2x^2+\cdots + a_{m-1}x^{m-1} \vert \neq  \vert a_m \vert x^m \\ &则有： \\ &\qquad a_0 + a_1x+a_2x^2+\cdots + a_{m-1}x^{m-1} +   a_m x^m \neq 0 \\ & 得证逆否命题不成立 \end{aligned}$$

- 前面的结论也证明了，多项式系数的唯一性。如果存在系数不同的两个相同的多项式，那么两式相减后的结果将与上面的结论矛盾



#### 多项式的带余除法	

设$p,s\in \mathcal{P}(F)$，且$s\neq 0$, 则存在唯一的多项式$q,r \in \mathcal{P}(F)$使得：

$$p = sq + r, \qquad \deg r < \deg s$$

- 证明：

  $$\begin{aligned} 令&n = \deg p, m =\deg s, k=\deg r \\ 1. 当n<m时：& 则必有p=r，q=0 \\ 2.当n=m时：&则必有r=0，q是非零常数 \\ 3.当n>m时：&定义T为\mathcal{P}_{n-m}(F)\times \mathcal{P}_{k}(F)\rightarrow \mathcal{P}_{n}(F)为\\ & \qquad T(q,r) = sq+r \\ &T满足加法和数乘封闭性，是一个线性映射  \\ &若(q,r)\in \mathrm{null}\space T ,那么sq+r = 0,但当且仅当q=r=0时，才满足 \\ & 因此\mathrm{null}\space T = 0，表明T是单的，得证具有唯一性 \\ & 此外 \dim \mathrm{range}\space T \le \dim \mathcal{P}_{n}(F) \\ & 即 dim(\mathcal{P}_{n-m}(F)\times \mathcal{P}_{k}(F)) = (n-m+1)+k+1 \le n+1 \\ &得 k \le m-1 <m ，即\deg r < \deg s\end{aligned}$$



#### 多项式的零点	

多项式的零点即多项式的根

- **多项式的每个零点对应一个一次因式**	设$p \in \mathcal{P}(F),\lambda \in F$，则$p(\lambda) = 0$当且仅当$\forall x\in F，p(x) = (x-\lambda)t(x)$,，其中$t \in \mathcal{P}(F)$

- **多项式的零点个数不超过它的阶数**



#### 复系数多项式	

- **代数学基本定理**	每个非常数的复系数多项式都有零点

- **复系数多项式分解**	若$x\in C，p\in \mathcal{P}_m(C)$是非常数多项式，则$p$可以唯一的分解为：

  $$p(x) = c(x-\lambda_1)(x-\lambda_2)\cdots(x-\lambda_m),\qquad c,\lambda_i \in C,i=1,\cdots,m$$



#### 实系数多项式

- **实系数多项式的非实数零点都是成对出现的**	设$p\in \mathcal{P}(C)$是实系数多项式，若$\lambda \in C$是$p$的零点，则$\overline{\lambda}$也是$p$的零点。如$x^2+1=0$可分解为：$(x-i)(x+i)=0$

- **实系数多项式分解**	设$p\in \mathcal{P}(R)$是非常数多项式，则$p$可以唯一分解成：

  $$p(x) = c(x-\lambda_1)\cdots(x-\lambda_m)(x^2+b_1x+c_1)\cdots(x^2+b_Mx+c_M)$$

  其中$c,\lambda_i \in R,i=1,\cdots,m;b_j,c_j\in R,j=1,\cdots,M$，且$b_j^2 \lt 4c_j$




#### 二项式定理

$$\begin{aligned} (x+y)^n &= \left(\begin{matrix} n \\ 0 \end{matrix}\right)x^n + \left(\begin{matrix} n \\ 1 \end{matrix}\right)x^{n-1}y^1+ \left(\begin{matrix} n \\ 2 \end{matrix}\right)x^{n-2}y^2 + ··· + \left(\begin{matrix} n \\ n-1 \end{matrix}\right)x^{1}y^{n-1} + \left(\begin{matrix} n \\ n \end{matrix}\right)y^n \\ &= \sum_{k=0}^n \left(\begin{matrix} n \\ k \end{matrix}\right)x^{n-k}y^k \\ (x+y)^{n-1} &= \left(\begin{matrix} n-1 \\ 0 \end{matrix}\right)x^{n-1} + \left(\begin{matrix} n-1 \\ 1 \end{matrix}\right)x^{n-2}y^1 + ··· + \left(\begin{matrix} n-1 \\ n-2 \end{matrix}\right)x^{1}y^{n-2} + \left(\begin{matrix} n-1 \\ n-1 \end{matrix}\right)y^{n-1} \\ &= \sum_{k=0}^{n-1} \left(\begin{matrix} n-1 \\ k \end{matrix}\right)x^{n-1-k}y^k \\ &= \sum_{k=1}^{n} \left(\begin{matrix} n-1 \\ k-1 \end{matrix}\right)x^{(n-1)-(k-1)}y^{k-1} \qquad 令k=k-1 \end{aligned}$$



#### 多项式定理

$$\begin{aligned} (x_1+x_2+···+x_K)^n &= ((x_1+x_2+···+x_{K-1})+x_K)^n \\ &= \sum_{n_K=0}^n \left(\begin{matrix} n \\ n_K \end{matrix}\right) x_K^{n_K}(x_1+x_2+···+x_{K-1})^{n-n_K} \\&= \sum_{n_K=0}^n \frac{n!}{n_K!(n-n_K)!} x_K^{n_K} \sum_{n_{K-1}=0}^{n-n_K}\frac{(n-n_K)!}{(n_{K-1})!(n-n_K-n_{K-1})!}x_{K-1}^{n_{K-1}} (x_1+x_2+···+x_{K-2})^{n-n_K-n_{K-1}} \\&=  \sum_{n_1+n_2+···+n_K=n}\frac{n!}{n_1!n_2!···n_K!}\prod_{k=1}^Kx_k^{n_k} \\ &= \sum_{n_1+n_2+···+n_K=n} \left(\begin{matrix} n \\ n_1,n_2,···,n_K \end{matrix}\right) \prod_{k=1}^K x_k^{n_k}  \end{aligned} $$

$$\begin{aligned} \sum_{k=1}^K n_k &= n \\ \left(\begin{matrix} n \\ n_1,n_2,···,n_K \end{matrix}\right) &= \frac {n!}{n_1!n_2!···n_K!} \end{aligned} $$