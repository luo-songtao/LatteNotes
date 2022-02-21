---
title: Linear Equations
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Linear Equations]
tags: [Linear Equations]
math: true
mermaid: true
---

## 线性方程组

#### 线性子空间

- $F^n$的一个非空子集$U$如果满足：

  - $\boldsymbol{\alpha}, \boldsymbol{\gamma} \in U \Longrightarrow \boldsymbol{\alpha}+\boldsymbol{\gamma}\in U \qquad (加法封闭)$
  - $\boldsymbol{\alpha}\in U, k \in K \Longrightarrow k\boldsymbol{\alpha}\in U \qquad (数乘封闭)$

  则称$U$是$F^n$的一个线性子空间，简称子空间

#### 线性方程组有解的条件

$$c_1\boldsymbol{\alpha}_1 +c_2\boldsymbol{\alpha}_2+\cdots+c_m\boldsymbol{\alpha}_m=\boldsymbol{\beta} $$

- 列向量组$\boldsymbol{\alpha}_1、\boldsymbol{\alpha}_2、\cdots、\boldsymbol{\alpha}_n$张成的空间表示为$<\boldsymbol{\alpha}_1、\boldsymbol{\alpha}_2、\cdots、\boldsymbol{\alpha}_n>$

- 线性方程组是否有解的问题等价于：

  常数项列向量$\boldsymbol{\beta}$能否由系数矩阵的列向量组$\boldsymbol{\alpha}_1、\boldsymbol{\alpha}_2、\cdots、\boldsymbol{\alpha}_n$线性表出，即
  
  $$\boldsymbol{\beta}  \in <\boldsymbol{\alpha}_1、\boldsymbol{\alpha}_2、\cdots、\boldsymbol{\alpha}_n> \qquad \Longrightarrow \qquad 有解$$

- 线性方程组有解的充要条件是：
- 它的系数矩阵与增广矩阵的秩相等
  
  - 推论：数域$F$上$n$元齐次线性方程组有非零解的充要条件是：它的系数矩阵的秩小于未知数的个数$n$



#### 解空间

- 齐次线性方程组

  $$c_1\boldsymbol{\alpha}_1 +c_2\boldsymbol{\alpha}_2+\cdots+c_n\boldsymbol{\alpha}_n=\boldsymbol{0} \qquad (\boldsymbol{A}\boldsymbol{x}= \boldsymbol{0})$$

  的解集是$F^n$的一个子空间，称为**解空间**$V_{\boldsymbol{A}}$

- 解空间的维度: 

  $$\mathrm{dim}V_{\boldsymbol{A}} = n- rank(\boldsymbol{A})$$



#### 线性流型 

- 非齐次线性方程组 

  $$c_1\boldsymbol{\alpha}_1 +c_2\boldsymbol{\alpha}_2+\cdots+c_n\boldsymbol{\alpha}_n=\boldsymbol{\beta} \qquad (\boldsymbol{A}\boldsymbol{x}= \boldsymbol{\beta},\boldsymbol{\beta}\neq\boldsymbol{0})$$

  的解集为

  $$\{\boldsymbol{\gamma_0}+\boldsymbol{\eta} \vert \boldsymbol{\eta}\in W \}$$

  其中$\boldsymbol{\gamma_0}$是非齐次线性方程组的一个解(称为特解)，$W$是齐次线性方程组$\boldsymbol{A}\boldsymbol{x}= \boldsymbol{0}$的解空间

- 把集合$\{\boldsymbol{\gamma_0}+\boldsymbol{\eta} \vert \boldsymbol{\eta}\in W \}$记作$\boldsymbol{\gamma_0}+W$，称它为一个$W$型的**线性流型**(或子空间$W$的一个**陪集**)，把$\rm{dim} W$称为线性流型$\boldsymbol{\gamma_0}+W$的维数

- 线性流型不是一个子空间，因为它对加法和数乘都不封闭

- 推论：如果$n$元非齐次线性方程组有唯一解的充要条件是：它对应的齐次线性方程组只有零解

