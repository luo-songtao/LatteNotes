---
title: Eigenvalue and Eigenvector (2) Eigenspace and Diagonal Matrix
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Eigenvalue and Eigenvector]
tags: [Eigenspace, Eigenvector, Eigenvalue]
math: true
mermaid: true
---

## 特征空间和对角矩阵

**特征空间（eigenspace）**	设$T\in \mathcal{L}(V),\lambda\in F$，$T$的关于$\lambda$的特征空间定义为：

$$E(\lambda, T) = \mathrm{null}\space (T-\lambda I)$$

也就是说，$E(\lambda, T) $是$T$的关于$\lambda$的全体特征向量加上零向量构成的集合

- 特征空间是$V$的一个子空间
- $\lambda$是$T$的特征值当且仅当$E(\lambda, T)\neq 0$



**不同特征值的特征空间之和是直和**	设$V$是有限维的，且$\lambda_1,\cdots,\lambda_m$是$T$的互不相同的特征值，则：

$$E(\lambda_1, T) + \cdots + E(\lambda_m, T)$$

是直和，并且：

$$\dim E(\lambda_1, T) + \cdots +\dim E(\lambda_m, T) \le \dim V$$



**可对角化的等价条件**	设$T\in \mathcal{L}(V)$，$\lambda_1,\cdots,\lambda_m$表示$T$的所有互异的特征值

$$\begin{aligned} T可对角化 &\Longleftrightarrow T具有n个线性无关的特征向量（T的特征向量可以张成为V） \\ &\Longleftrightarrow V在T下有一维不变子空间U_1,\cdots,U_n使得V = U_1\oplus\cdots\oplus U_n \\ &\Longleftrightarrow V=E(\lambda_1, T)\oplus\cdots\oplus E(\lambda_m, T) \\ &\Longleftrightarrow \dim V = \dim E(\lambda_1, T) + \cdots +\dim E(\lambda_m, T)  \end{aligned}$$

- $T$如果有$\dim V$个互异的特征值，那么$T$必定可对角化；但$T$可对角化，$T$却不一定有$\dim V$个互异的特征值，但必有$\dim V$个线性无关的特征向量


