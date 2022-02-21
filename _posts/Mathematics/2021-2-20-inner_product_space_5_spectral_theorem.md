---
title: Inner Product Space (5) Spectral Theorem
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Spectral Theorem]
math: true
mermaid: true
---


## 谱定理

**前言**	

- $V$上的算子关于$V$的某个基有对角矩阵的充要条件是这个基是由该算子的特征向量组成的
- 关于$V$上的某个规范正交基，具有对角矩阵的算子，是$V$上最好的算子。这样算子$T$满足：$V$有一个由$T$的特征向量构成的规范正交基

**谱定理（spectral theorem）** 谱定理表明，算子$T$若具有性质：$V$有一个由$T$的特征向量构成的规范正交基。则该算子当$F=\C$时，是正规算子；当$F=\R$时，是自伴算子

- 谱定理的结论由于依赖于$F$的选取，因此谱定理分成两部分，分别叫做复谱定理和实谱定理



#### 复谱定理

若$F=\C$，且$T\in \mathcal{L}(V)$是正规算子，则$T$关于$V$的某个规范正交基具有对角矩阵

**等价条件**

- $T$是正规算子
- $V$有一个由$T$的特征向量组成的规范正交基
- $T$关于$V$的某个规范正交基具有对角矩阵



#### 实谱定理

**可逆的二次式**	设$T\in \mathcal{L}(V)$是自伴算子，并设$b,c\in \R,b^2<4c$，则$T^2+bT+cI$是可逆的

$$\begin{aligned} \lang (T^2+bT+cI)v,v \rang &= \lang T^2v,v\rang + b\lang Tv,v \rang+ c\lang v,v \rang \qquad v\in V,v\neq 0\\ &= \lang Tv,Tv\rang +  b\lang Tv,v \rang+ c\vert\vert v\vert\vert^2  \\ &\ge \vert\vert Tv\vert\vert^2 -\vert b\vert \vert\vert Tv\vert\vert \vert\vert v\vert\vert + c\vert\vert v\vert\vert^2 \\ & = (\vert\vert Tv \vert\vert - \frac {\vert b\vert}{2}\vert\vert v\vert\vert) + (c-\frac {b^2}{4})\vert\vert v\vert\vert^2 \\ & >0 \\ \\ & \Rightarrow \lang (T^2+bT+cI)v \neq 0 \\ & \Rightarrow T^2+bT+cI是单的，即T^2+bT+cI是可逆的 \end{aligned}$$

**自伴算子都有特征值**

$$\begin{aligned} &设V是n维实内积空间，取v\in V,v\neq 0,则：\\ &\qquad v,Tv,T^2v,\cdots,T^nv \\ & 必定是线性无关的，因此有不全为0的实数a_0,a_1,\cdots,a_n使得：\\& \qquad 0 = a_0v+a_1Tv+\cdots + a_nT^nv \\ &以这些a_j作系数的多项式可分解为：\\ &\qquad a_0+a_1x+a_2x^2+\cdots+a_nx^n = \\ & \qquad c(x-\lambda_1)\cdots(x-\lambda_m)(x^2+b_1x+c_1)\cdots(x^2+b_Mx+c_M) \\ &其中c、b_j、c_j、\lambda_j都是实数，且b_j^2<4c_j,m+M\ge 1,上式对任意的实数x都成立，因此：\\ & \qquad 0=(a_0+a_1T+a_2T^2+\cdots+a_nT^n)v \\ &\qquad =c(T-\lambda_1I)\cdots(T-\lambda_mI)(T^2+b_1T+c_1)\cdots(T^2+b_MT+c_M)v \\ &根据上一个结论，对于自伴算子T，每个T^2+b_jT+c_j都是可逆的，因此上市表明m>0，且：\\ &\qquad 0=(T-\lambda_1I)\cdots(T-\lambda_mI)v \\ &所以至少有一个T-\lambda_jI是不可逆的，使得 (T-\lambda_jI) v=0 \\ &所以T必有特征值 \end{aligned}$$



**自伴算子与不变子空间**	设$T\in \mathcal{L}(V)$是自伴算子，并设$U$是$V$的在$T$下的不变子空间，则：

- $U^\perp$在$T$下不变
- $T\vert_U \in \mathcal{L}(U)$是自伴算子
- $T\vert_U^\perp \in \mathcal{L}(U^\perp)$是自伴算子

 $$\begin{aligned} &设v\in U^\perp,u\in U ,T是自伴算子，则：\\ &\qquad \lang Tv,u\rang = \lang v, Tu\rang \\ &又因为U是T下的不变子空间，则： \\ &\qquad \lang v, Tu\rang = 0 \\ & 则有 \lang Tv,u\rang = 0  \rang \Rightarrow Tv \in U^\perp ,即U^\perp在T下不变 \\ \\ &\qquad \lang (T\vert_U)u,v \rang = \lang Tu,v \rang = \lang u,Tv \rang = \lang u,(T\vert_U)v \rang \end{aligned}$$



**实谱定理**	

设$F=\R$，且$T\in \mathcal{L}(V)$，则一下条件等价：

- $T$是自伴算子（$T$的矩阵是实对称矩阵）
- $V$有一个由$T$的特征向量组成的规范正交基
- $T$关于$V$的某个规范正交基具有对角矩阵

$$\begin{aligned} 条件1蕴涵条件2、条件2蕴涵条件3、条件3蕴涵条件1 \end{aligned}$$

 