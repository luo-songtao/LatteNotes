---
title: Inner Product Space (4) Operators on Inner Product Space
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Adjoint Operator, Normal Operator]
math: true
mermaid: true
---


## 内积空间上的算子

#### 伴随

**伴随（adjoint）**	设$T\in \mathcal{L}(V,W)$，$T$的伴随是满足如下条件的函数$T^*:W\rightarrow V$

$$\lang Tv,w \rang = \lang v,T^*w \rang,\qquad \forall v\in V,w\in W$$

- 显然，伴随是一个线性映射

**伴随的性质**

- $\forall S,T\in \mathcal{L}(V,W)$均有$(S+T)^* = S^*+T^*$
- $\forall \lambda\in F,\forall T \in \mathcal{V,W}$均有$(\lambda T)^* = \overline{\lambda}T^*$
- $\forall T\in \mathcal{L}(V,w), (T^*)^* = T$
- $I^*= I$
- $\forall T\in \mathcal{L}(V,W),S\in \mathcal{L}(W,U)$，均有$(ST)^* = T^*S^*$

**伴随的零空间和值域**

- $\mathrm{null}\space T^* = (\mathrm{range}\space T)^\perp$

  $$\begin{aligned} w\in \mathrm{null} \space T^*  & \Leftrightarrow T^*w = 0 \\& \Leftrightarrow \lang v, T^*w\rang =0 ,\qquad \forall v\in V \\ &\Leftrightarrow \lang Tv,w\rang = 0, \qquad \forall v \in V  \\ & \Leftrightarrow  w\in (\mathrm{range}\space T)^\perp \end{aligned}$$
  
- $\mathrm{null}\space T = (\mathrm{range}\space T^*)^\perp$

  $$\begin{aligned} v \in \mathrm{null}\space T &\Leftrightarrow Tv = 0 \\ & \Leftrightarrow  \lang Tv,w \rang = 0 \qquad \forall w \in W \\ &\Leftrightarrow \lang v, T^*w\rang = 0 \qquad \forall w\in W \\ &\Leftrightarrow v \in (\mathrm{range} \space T^*)^\perp  \end{aligned}$$

- $\mathrm{range}\space T^* = (\mathrm{null}\space T)^\perp$

- $\mathrm{range}\space T = (\mathrm{null}\space T^*)^\perp$



**伴随的矩阵**	对线性映射$T\in \mathcal{L}(V,W)$，在都取$V,W$的**规范正交基**的情况下，$T^*$的矩阵是$T$的矩阵的共轭转置

$$\begin{aligned} &设e_1,\cdots,e_n是V的规范正交基，f_1,\cdots,f_m是W的规范正交基; \\ &\mathcal{M}(T)、\mathcal{M}(T^*)分别表示对应规范正交基下的矩阵 \\ &且：\\ &\qquad Te_k = \lang Te_k,f_1 \rang f_1 + \cdots+ \lang Te_k,f_m \rang f_m \\ & \qquad  Tf_k = \lang Tf_k,e_1 \rang e_1 + \cdots+ \lang Tf_k,e_n \rang e_n \\ &可知：\\ &\qquad  \lang Te_k,f_1 \rang、\cdots、\lang Te_k,f_m \rang 是\mathcal{M}(T)的第k列 \\ &\qquad \lang T^*f_k,e_1 \rang、\cdots、\lang T^*f_k,e_n \rang 是\mathcal{M}(T^*)的第k列 \\ &那么\mathcal{M}(T)的第j行第k列元素将是 \lang Te_k,f_j \rang 、而\mathcal{M}(T^*)的第k行第j列元素将是\lang T^*f_j,e_k \rang \\ &又因为：\\ & \qquad \lang Te_k,f_j \rang = \lang e_k,T^*f_j \rang = \overline{\lang T^*f_j,e_k \rang} \\ &所以可知\mathcal{M}(T) 是\mathcal{M}(T^*)的共轭转置 \end{aligned}$$

- 该结论仅在取规范正交基时成立



**伴随算子的特征值**	设$T\in \mathcal{L}(V)$，$\lambda \in F$，$\lambda$是$T$的特征值当且仅当$T^*$的特征值是$\overline{\lambda}$

$$\begin{aligned} &设T\in \mathcal{L}(V),且T^*是T的伴随满足 \\ & \qquad \forall u,m \in V, \lang Tu,m \rang =\lang u,T^*m\rang \\ & 再设\lambda是T的特征值，v是T的特征向量，则必有h\in V使得：\\&\qquad \lang Tv,h \rang = \lang v, T^*h \rang \\ &而\lang Tv,h \rang = \lang \lambda v,h \rang = \lang v,\overline{\lambda} h \rang  \\ &则有T^*h = \overline{\lambda}h，即有\overline{\lambda}是T^*的特征值 \\ &反之，若假设\overline{\lambda}是T^*的特征值，也可得\lambda 是T的特征值 \end{aligned}$$



#### 自伴算子

**自伴算子（self-adjoint opeartor）**	算子$T\in \mathcal{L}(V)$，若满足$T=T^*$，则称$T$是自伴的。即：

$$\lang Tv,w \rang = \lang v,Tw \rang\qquad \forall v,w \in V$$

- 在$\C$上，自伴算子也称为**Hermite**算子。自伴算子的矩阵是共轭对称矩阵
- 在$\R$上，自伴算子的矩阵是实对称矩阵

**自伴算子的特征值都是实数**

$$\begin{aligned} &设T是V上的自伴算子，\lambda是T的特征值，Tv=\lambda v，v\neq0，则 \\& \lambda \vert\vert v \vert\vert^2 = \lang\lambda v, v\rang = \lang Tv, v\rang = \lang v, Tv\rang = \lang v, \lambda v\rang =\overline{\lambda}\vert\vert v \vert\vert^2  \\ &则有\lambda = \overline{\lambda} \\ &因此\lambda是实数 \end{aligned}$$



**在$\C$上，只有零算子才能使$Tv$总正交于$v$**	设$V$是复内积空间，$T\in \mathcal{L}(V)$吗，若$\forall v\in V$，有$\lang Tv,v \rang = 0$，则必有$T=0$

$$\begin{aligned} &\forall u,w \in V，有：\\ &\qquad \lang Tu,w\rang = \frac 14 \left[ (\lang Tu+w,u+w\rang - \lang Tu-w,u-w\rang) + (\lang Tu+iw,u+iw\rang - \lang Tu-iw,u-iw\rang)i \right]\\ &分解上式后可证明上式恒成立。从上式可以看到，若\forall v\in V，都有\lang Tv,v\rang = 0，则意味着: \\ &\qquad \forall u,w \in V,都有\lang Tu,w\rang = 0 \Leftrightarrow T=0 \end{aligned}$$



**在$\C$上，只有自伴算子才能使$\lang Tv,v\rang$都是实数**	设$V$是复内积空间，$T\in \mathcal{L}(V)$，则$T$是自伴算子当且仅当$\forall v\in V$，均有$\lang Tv,v\rang \in \R$

$$\begin{aligned} \lang Tv,v \rang - \overline{\lang Tv,v \rang} &= \lang Tv,v \rang - \lang v,Tv \rang \\&= \lang Tv,v \rang - \lang T^*v,v \\ &= \lang (T-T^*)v,v \rang \rang \end{aligned}$$



**在$\C$或$\R$上，若$T=T^*$，且$\forall v\in V，\lang Tv,v \rang = 0$，则$T=0$**

- 在$\C$上，根据前两个结论，是显然成立的

- 在$\R$上：

  $$\begin{aligned} &\forall u,w \in V，有：\\ &\qquad \lang Tu,w\rang = \frac 14 (\lang Tu+w,u+w\rang - \lang Tu-w,u-w\rang)\\ &分解上式后可证明上式恒成立。但与复内积空间上不同的是，这里需要加上T是自伴算子的条件才能成立 \\ & 那么与前面同理，可得只要T是自伴算子，那么当\lang Tv,v\rang =0时，必有T=0 \end{aligned}$$

#### 正规算子

**正规算子（normal operator）**	内积空间上的算子$T\in \mathcal{L}(V)$，若满足$TT^* = T^*T$，则称算子$T$是正规算子

- 自伴算子显然是正规算子

**$T\in \mathcal{L}(V)$是正规算子，当且仅当$\forall v\in V，\vert\vert Tv \vert\vert^2 = \vert\vert T^*v\vert\vert^2$**

$$\begin{aligned} T是正规算子 &\Leftrightarrow TT^* - T^*T = 0 \\ &\Leftrightarrow \forall v\in V, (TT^*-T^*T)v = 0 \\ &\Leftrightarrow \forall v\in V,  \lang (TT^*-T^*T)v,v\rang = 0 \\ &\Leftrightarrow \forall v\in V,\lang TT^*v,v \rang = \lang T^*Tv,v\rang \\ &\Leftrightarrow \forall v\in V,\lang T^*v,T^*v \rang = \lang Tv,Tv\rang \\ &\Leftrightarrow \forall v\in V,\vert\vert Tv \vert\vert^2 = \vert\vert T^*v\vert\vert^2 \end{aligned}$$

**若$T$是正规算子，那么$T$与$T^*$具有相同的特征向量**

- 上面关于$T\in \mathcal{L}(V)$，$T$与$T^*$的特征值互为共轭复数，而对应的特征向量可以不同。但如果加上$T$是正规算子的条件，那么$T$与$T^*$具有相同的特征向量

  $$\begin{aligned} &若T是正规算子，那么易证T-\lambda I也是正规算子 \\ & 令\lambda是T的特征值,v是对应的特征向量，则：\\ &\qquad 0 = \vert\vert (T-\lambda I)v \vert\vert = \vert\vert (T-\lambda I)^*v \vert\vert =\vert\vert (T^*-\overline{\lambda} I)v \vert\vert \\ & 得证 \end{aligned}$$




**正规算子的关于不同特征值的特征向量两两正交**

$$\begin{aligned} &设\alpha,\beta是T的不同特征值，u，v分别是对应的特征向量 则：\\ & (\alpha -\beta)\lang u,v \rang = \lang \alpha u,v\rang -\lang u,\overline{\beta}v\rang = \lang Tu,v\rang - \lang u,T^*v\rang =0 \\ &则有\lang u,v \rang=0 ,遂得证 \end{aligned}$$