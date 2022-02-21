---
title: Eigenvalue and Eigenvector (2) Eigenvector and Upper Triangular Matrix
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Eigenvalue and Eigenvector]
tags: [Upper Triangular Matrix, Eigenvector, Eigenvalue]
math: true
mermaid: true
---

## 特征向量与上三角矩阵

#### 多项式作用于算子

**定义$T^m$**	设$T\in \mathcal{L}(V)$，$m$是正整数

- $T^m = T\cdots T$
- $T^0 = I$
- $T^{-1}$称为$T$的逆（假设其可逆），$T^{-m} = (T^{-1})^m$
- $T^m+T^n = T^{m+n}$。T可逆时，m和n时任意整数，不可逆时，m和n时非负整数
- $(T^m)^n = T^{mn}$。T可逆时，m和n时任意整数，不可逆时，m和n时非负整数



**定义$\mathcal{p}(T)$**	

- 设$p\in \mathcal{P}_m(F),x\in F$，那么多项式$p(x)$定义为：

  $$p(x) = a_0+a_1x+a_2x^2+\cdots+a_mx^m$$

- 设$p\in \mathcal{P}_m(T),T\in \mathcal{L}(V)$，那么算子$p(T)$定义为：

  $$p(T) = a_0I+a_1T+a_2T^2+\cdots+a_mT^m$$



**多项式的积**	设$p,q\in\mathcal{P}_m(F)， T\in \mathcal{V}$，则：

- $(pq)(T) = p(T)q(T)$
- $p(T)q(T) = q(T)p(T)$



#### 特征值的存在性

**复向量空间上的算子都有特征值**	有限维非零向量空间上的每个算子都有特征值

- 证明：

  $$\begin{aligned} \because &对T\in \mathcal{L}(V),V是n维复向量空间。那么取v\in V，v\neq 0，则n+1维向量 \\  \therefore& v,Tv,T^2v,\cdots,T^nv 必定是线性相关的\\  \therefore& 存在不全为0的复数a_0,a_1,\cdots,a_n使得： \\  &\qquad a_0v+a_1Tv+\cdots+a_nT^nv = 0\\ &其中a1,\cdots a_n必不全为0，否则将有0=a_0v,即a_0=0 \\ \because & 复系数多项式可被唯一分解为：\\ &\qquad a_0+a_1x+\cdots+a_nx^n = c(x-\lambda_1)\cdots(x-\lambda_m)，\qquad c,\lambda_i \in C,i=1,\cdots,m \\ &同理 \\ & \qquad (a_0+a_1T+\cdots+a_nT^n)v = c(x-\lambda_1I)\cdots(x-\lambda_mI)=0，\qquad c,\lambda_i \in C,i=1,\cdots,m \\ &则至少存在一个T-\lambda_j I使得(T-\lambda_jI)v = 0，v\in V，v\neq 0\\ \therefore &非零复向量空间V上的每个算子T都有特征值 \end{aligned}$$



#### 上三角矩阵

**上三角矩阵的条件**	设$T\in \mathcal{V}$，且$v_1,\cdots,v_n$是$V$的基，$T$关于$v_1,\cdots,v_n$的矩阵为$A$，则以下的条件等价：

- $T$关于$v_1,\cdots,v_n$的矩阵是上三角的

- 对每个$k=1,\cdots,n$有$Tv_k \in \mathrm{span}\{v_1,\cdots,v_k\}$

- 对每个$k=1,\cdots,n$有$\mathrm{span}\{v_1,\cdots,v_k\}$在$T$下不变

  **证明**

  $$\begin{aligned} \because& Tv_k = A_{1,k}v_1+\cdots+A_{n,k}v_n，\qquad (A是T关于v_1,\cdots,v_n的矩阵) \\  &且假若 Tv_k\in \mathrm{span}\{v_1,\cdots,v_k\},那么\\ &\qquad Tv_1 \in \mathrm{span}\{v_1\} \Leftrightarrow Tv_1 = a_{1,1}v_1 \\ &\qquad Tv_2 \in \mathrm{span}\{v_1,v_2\} \Leftrightarrow Tv_2 = a_{1,2}v_1+a_{2,2}v_2 \\ & \qquad \vdots\\ & \qquad Tv_k \in \mathrm{span}\{v_1,\cdots,v_k\} \Leftrightarrow  Tv_k = a_{1,k}v_1+\cdots+a_{n,k}v_2 \\ \therefore&可见 a_{i,j} = A_{i,j}，则表示A必定是上三角的；反之亦然 \\ \because &若取v\in \mathrm{span}\{v_1,\cdots,v_k\}，则Tv \in \mathrm{span}\{v_1,\cdots,v_k\} \\ \therefore & \mathrm{span}\{v_1,\cdots,v_k\}在T下不变；反向假设亦成立 \end{aligned}$$	



**有限维复向量空间上的每个算子均有上三角矩阵**	

**线性映射可逆条件**	如果一个线性映射关于某个基有上三角矩阵，那么该线性映射可逆当且仅当其上三角矩阵对角线上的元素都不是0

- **证明**

  $$\begin{aligned} &假设T\in \mathcal{L}(V)有上三角矩阵A且对角线元素非0，分别为\lambda_1,\cdots,\lambda_n \\ &首先有Tv_1 = \lambda_1 v_1 ,则有T(v_1/\lambda_1) = v_1，即v_1\in\mathrm{range}\space T\\ &将v_1扩充为V的基为：v_1,v_2,\cdots,v_n \\ & 那么T(v_2) = a_{1,2}v_1+\lambda_2v_2,则有T(v_2/\lambda_2) = \frac {a_{1,2}}{\lambda_2}v_1 + v_2,可知v_2\in \mathrm{range}\space T \\ & 同理可得：v_1,\cdots,v_n \in \mathrm{range}\space T，即\mathrm{range}\space T = V \\ &那么T时满射，因此可逆\\ &\\ &反之，通过假设T是可逆的，且\lambda_j = 0,1\le j\le n,反证可得结果 \end{aligned}$$

- 如果$T \in \mathcal{L}(V)$，不可逆，则也表明$\dim \mathrm{range}\space T < \dim V$，即特征值的个数将低于$\dim V$



**上三角矩阵与特征值**	如果一个线性映射关于某一个基有上三角矩阵，那么该线性映射的特征值恰为这个上三角矩阵的对角线上的元素

- **证明**

  $$\begin{aligned} &T\in \mathcal{L}(V)有特征值\lambda 等价于 \\ & \qquad \circ T- \lambda I 不是单的 \\ & \qquad \circ T-\lambda I不是满的 \\ & \qquad \circ T-\lambda I不是可逆的  \\ &也就是说，如果T-\lambda I是不可逆的，那么\lambda就是T的特征值 \\ & \\ &若假设T的矩阵为\mathcal{M}(T)是一个上三角矩阵，其对角线元素分别为\lambda_1,\cdots,\lambda_n \\ & 那么T-\lambda I的矩阵为\mathcal{M}(T-\lambda I)也是一个上三角矩阵，其对角线元素分别为\lambda_1-\lambda,\cdots,\lambda_n-\lambda \\ &则根据前面的结论：线性映射可逆当且仅当其上三角矩阵对角线全不为0 。可知：\\ & T-\lambda I不可逆 当且仅当\lambda 等于\lambda_1,\cdots,\lambda_n中的某一个(此时有一个对角线元素为0了) \\ &也就是说，T-\lambda_1 I、\cdots、T-\lambda_n I都是不可逆的 \\ &所以有：当T关于某个基有上三角矩阵时，那么其对角线上的元素都是T的特征值 \end{aligned}$$

- 一旦得知$F^n$上一个算子的特征值，那么利用高斯消元法就能很快计算出对应的特征向量

  









