---
title: Linear Map (5) Duality
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Linear Map]
tags: [Duality]
math: true
mermaid: true
---

## 对偶

#### 对偶空间和对偶映射

**线性泛函（linear functional）**	$V$上的线性泛函是指从$V$到$F$的线性映射。即线性泛函是集合$\mathcal{L}(V,F)$中的元素

**对偶空间（dual space）**	已知$\mathcal{L}(V,F)$也是一个向量空间，但它有一个特殊的名称：$V$的对偶空间，可记作$V'$

- $\dim V' = \dim V \dim F = \dim V$

**对偶基（dual basis）**	设$v_1,v_2,\cdots,v_n$是$V$的基，则$v_1,\cdots,v_n$的对偶基是$V'$中的元素组 $\varphi_1,\varphi_2,\cdots,\varphi_n$，其中 $\varphi_j$都是$V$上的线性泛函，并使得：

$$\varphi_j(v_k) = \left \{\begin{aligned}&1,\qquad if \space k=j \\ &0, \qquad if \space k\neq j  \end{aligned} \right.$$

- 对偶基也即是对偶空间的基

  $$\begin{aligned} &设a_1,a_2,\cdots,a_n \in F，并令 \\ &\qquad \alpha = a_1\varphi_1+\cdots +a_n\varphi_n \\ & 则根据\varphi_j的定义有：\alpha v_k = a_k \\ &那么若令\alpha=0，那么a_1=\cdots=a_n=0，也就是说：\\ &  \qquad a_1\varphi_1+\cdots +a_n\varphi_n =0 \Longleftrightarrow a_1=\cdots=a_n=0 \\ &  \Longleftrightarrow  \varphi_1,\varphi_2,\cdots,\varphi_n 是线性无关组 \end{aligned}$$



**对偶映射（dual map）**	若$T\in\mathcal{L}(V,W)$，则$T$的对偶映射是线性映射$T' \in \mathcal{L}(W',V')$：对于$\varphi \in W'$，$T'(\varphi) = \varphi \circ T$

- 对偶映射的代数性质：
  - $\forall S,T \in \mathcal{L}(V,W),有(S+T)' = S'+T'$
  - $\forall \lambda\in F,\forall T\in \mathcal{L}(V,W),有(\lambda T)' = \lambda T'$
  - $\forall T\in \mathcal{L}(U,V),\forall S\in \mathcal{L}(V,W),有(ST)'=T'S'$
    - $(ST)'(\varphi) = \varphi \circ (ST) = \varphi \circ S \circ T = T'(\varphi\circ S) = (T'S')(\varphi)$



#### 线性映射的对偶的零空间和值域

**零化子（annihilator）**	对于$U\in V$，$U$的零化子（记为$U^0_V$或$U^0$），定义如下：

$$U^0 = \{ \varphi\in V' \space \vert \space 对所有u\in U都有\varphi(u) = 0 \}$$

- $U^0$是$V$的对偶空间$V'$的子集，因此$U^0$依赖于包含$U$的向量空间$V$

- $U^0$且是$V$的对偶空间$V'$的子空间

  $$\begin{aligned} &设\varphi、\psi \in U^0,那么\forall u \in U,有\varphi(u)=\psi(u) = 0 \\ &则(\varphi + \psi)(u) = \varphi(u) + \psi(u) = 0,则U^0对加法封闭 \\ &设\lambda \in F,则\forall u \in U,有\lambda(\varphi(u)) = (\lambda\varphi)(u) = 0,则U^0对数乘封闭  \end{aligned}$$



**零化子的维数**	设$V$是有限维的，$U$是$V$的子空间，则：

$$\dim U + \dim U^0 = \dim V$$

- 证明：

  $$\begin{aligned} &设i\in \mathcal{L}(U,V)，且\forall u \in U,有i(u) = u \\ &而i' \in  \mathcal{L}(V',U'),\psi\in V',i'(\psi) = \psi \circ i，且：\\ &\qquad \dim V' = \dim \mathrm{range}\space i' + \dim \mathrm{null} \space i' \\ & 而 \forall u \in U,有i'(\psi)(u) = \psi \circ i(u) = \psi(u)，因此\mathrm{null} \space i'=U^0，则有：\\ & \qquad \dim V = \dim \mathrm{range}\space i' + \dim U^0 \\ & \\ &\because \varphi \in U'=\mathcal{L}(U,F), \psi\in V'=\mathcal{L}(V,F),U\in V \\ & \therefore  任意的\varphi\in U' 都可以扩张成V'中的一个线性泛函 \\ &\therefore \mathrm{range} \space i' = U',则有\dim \mathrm{range} \space i' = \dim U' = \dim U  \\ & \\ &\qquad \dim V = \dim U + \dim U^0 \end{aligned}$$



**对偶映射的零空间**	设$V$和$W$都是有限维，$T\in \mathcal{L}(V,W)$：

- $\mathrm{null}\space T'=(\mathrm{range}\space T)^0$

  $$\begin{aligned} &\mathrm{null}\space T' = \{ \varphi \in W' \space \vert \space T'(\varphi)=\varphi \circ T=0 \} \\ \Longrightarrow &\varphi \in W', \forall v \in V, (\varphi \circ T)(v) = \varphi(Tv) = 0  \\ \Longrightarrow &\varphi \in W', \forall w \in \mathrm{range}\space T,\varphi(w)=0 \\ \Longrightarrow & \mathrm{null}\space T' = \{ \varphi \in W' \space \vert \space \forall w\in \mathrm{range}\space T, \varphi(w) = 0 \} = (\mathrm{range}\space T)^0  \end{aligned}$$

- $\dim \mathrm{null}\space T' = \dim \mathrm{null} \space T + \dim W - \dim V$

  $$\begin{aligned} \dim \mathrm{null}\space T' &= \dim (\mathrm{range}\space T)^0 \\ &= \dim W - \dim \mathrm{range}\space T \\ &\dim W - \dim V + \dim \mathrm{null}\space T \end{aligned}$$



**对偶映射的值域**	设$V$和$W$都是有限维，$T\in \mathcal{L}(V,W)$：

- $\dim \mathrm{range}\space T' =\dim \mathrm{range}\space T$

  $$\begin{aligned} \dim \mathrm{range}\space T' &= \dim W' - \dim \mathrm{null}\space T' \\ &= \dim W' - \dim (\mathrm{range}\space T)^0 \\ &= \dim \mathrm{range}\space T \end{aligned}$$

- $\mathrm{range}\space T' = (\mathrm{null}\space T)^0$

  $$\begin{aligned} &设\psi \in \mathrm{range}\space T'\sub V', 那么存在\varphi \in W',使得\forall v \in \mathrm{null}\space T：\\ &\qquad \psi(v) = T'(\varphi)(v) = \varphi (Tv) = 0 \\ &则有\psi \in (\mathrm{null}\space T)^0 \\ &又\because \dim \mathrm{range}\space T' = \dim \mathrm{range}\space T = \dim V - \dim \mathrm{null}\space T = \dim (\mathrm{null} \space T)^0 \\ & \therefore 当且仅当 \mathrm{range}\space T' = (\mathrm{null}\space T)^0时，上述结论成立  \end{aligned}$$



**线性映射与对偶映射关系**	

- **线性映射是满的，等价于其对偶映射是单的。**设$T\in \mathcal{L}(V,W)$：

  $$\begin{aligned} T是满的 &\Leftrightarrow \mathrm{range} \space T=W \\ &\Leftrightarrow (\mathrm{range}\space T)^0 = \{ 0 \} \\ &\Leftrightarrow T'是单的 \end{aligned}$$

- **线性映射是单的，等价于其对偶映射是满的。**设$T\in \mathcal{L}(V,W)$：

  $$\begin{aligned} T是单的 &\Leftrightarrow \mathrm{null} \space T = \{0\} \\ &\Leftrightarrow  (\mathrm{null} \space T)^0 = V' \\ &\Leftrightarrow  \mathrm{range}\space T' = V' \end{aligned}$$



#### 对偶映射的矩阵

**对偶映射的矩阵是对应线性映射的矩阵的转置**	设$T \in \mathcal{L}(V,W)$，则$\mathcal{M}(T') = (\mathcal{M}(T))^t$。（这里使用$t$表示矩阵转置）

$$\begin{aligned} &设A = \mathcal{M}(T)，C = \mathcal{M}(T') \\ &\varphi_i是V'的基,i\in[1,n],\psi_j是W'的基,j\in[1,m] \\ &\qquad T'(\psi_j) = \sum_{r=1}^nC_{r,j}\varphi_r = \psi_j \circ T \\ &再设v_i是V的基，w_j是W的基，那么结合对偶映射的定义有： \\ &\qquad  \psi_j \circ T(v_i) = \sum_{r=1}^nC_{r,j}\varphi_r(v_i) = C_{i,j} \\ &同时 \\ &\qquad \psi_j \circ T(v_i) = \psi_j(Tv_i) = \psi_j(\sum_{r=1}^mA_{r,i}w_r)=A_{j,i} \\ &则有：A_{j,i}=C_{i,j} \\ &得证  \end{aligned}$$





#### 矩阵的秩

设$A$是元素属于$F$的$m\times n$矩阵：

- **行秩**： $A$的诸行在$F^{1,n}$中的张成空间的维数
- **列秩**： $A$的诸列在$F^{n,1}$中的张成空间的维数



**线性映射的值域的维数等于该线性映射的矩阵的列秩**	设$V$和$W$都是有限维，$T\in \mathcal{L}(V,W)$，则$\dim \mathrm{range} \space T$等于矩阵$\mathcal{M}(T)$的列秩

$$\begin{aligned} &设v_1,\cdots,v_n是V的基，w_1,\cdots,w_m是W的基 \\ & \qquad \dim \mathrm{range}\space T = \dim \mathrm{span}\{Tv_1,\cdots,Tv_n \} \\ &\mathcal{M}可看作\mathcal{L}(V,W)与F^{m,n}之间的同构 \\ & 那么也可以将\mathcal{M}(w),w\in \mathrm{span}\{Tv_1,\cdots,Tv_n\}，看作是\mathrm{span}\{Tv_1,\cdots,Tv_n\}与  \mathrm{span}\{\mathcal{M}(Tv_1),\cdots,\mathcal{M}(Tv_n)\}之间的同构\\ &则 \dim \mathrm{span}\{Tv_1,\cdots,Tv_n \} = \dim \mathrm{span}\{\mathcal{M}(Tv_1),\cdots,\mathcal{M}(Tv_n)\}，\dim \mathrm{span}\{\mathcal{M}(Tv_1),\cdots,\mathcal{M}(Tv_n)\}正好是\mathcal{M}(T)的列秩 \\ &得证  \end{aligned}$$



**矩阵的行秩等于列秩**	

$$\begin{aligned} 定义T: F^{n,1}\rightarrow F^{m,1},&Tx=Ax，则\mathcal{M}(T) = A \\ A的列秩&=\mathcal{M}(T)的列秩 \\ &= \dim \mathrm{range}\space T \\&= \dim \mathrm{range}\space T' \\&= \mathcal{M}(T')的列秩 \\ &= A^t的列秩 \\&= A的行秩 \end{aligned}$$





