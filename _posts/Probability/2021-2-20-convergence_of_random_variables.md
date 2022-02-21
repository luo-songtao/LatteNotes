---
title: Convergence OF Random Variables
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability]
tags: [Stochastic Sequence]
math: true
mermaid: true
---


## 随机变量的收敛

- 随机变量的收敛也可以称为随机收敛，当研究足够多的项时，有时可以预期一系列本质上随机或不可预测的事件会逐渐趋于稳定。一种直观的理解是：
  - 随机变量序列最终取一个恒定值，并且随机变量序列中的值继续变化，但可以用一个固定的概率分布来描述。

#### 依分布收敛（Convrgence in distribution）

- $X_1,X_2,···$是一个实值随机变量序列，F_n是$X_n$的累积分布函数；$X$是一随机变量，$F$是其累积分布函数，如果满足：

  $$\begin{aligned} \lim_{n\rightarrow \infty} F_n(x) = F(x) \end{aligned}$$

  则称随机变量序列$X_1,X_2,···$依分布收敛到随机变量$X$

- 其他表现形式

  - $p(X_n\le x) \rightarrow p(X\le x)$
  - $\mathbb{E}[f(X_n)]\rightarrow \mathbb{E}[f(X)]$  

#### 依概率收敛（Convergence in probability）

- 如果对于任意的$\varepsilon > 0$：

  $$\begin{aligned} \lim_{n\rightarrow \infty}p(\vert X_n-X\vert > \epsilon) = 0 \end{aligned}$$

  则称随机变量序列$\{X_n\}$概率收敛到随机变量$X$

- 依概率收敛则必定意味着依分布收敛

  $$\begin{aligned} \lim_{n\rightarrow \infty}p(\vert X_n-X\vert > \epsilon) = 0 \Longrightarrow \lim_{n\rightarrow \infty} F_n(x) = F(x) \end{aligned}$$

#### 几乎确定收敛（Almost sure convergence）

- 如果满足：

  ​	$$p(\lim_{n\rightarrow \infty}X_n = X) = 1$$

  则称随机变量序列$\{X_n\}$几乎确定、几乎任意地收敛到随机变量$X$

#### 完全收敛（Sure convergence）

- 如果满足：

  $$\lim_{n\rightarrow \infty}X_n(\omega) = X(\omega), \qquad \forall \omega \in \Omega$$

  则称随机变量序列$\{X_n\}$完全收敛到随机变量$X$。

  注意：$\Omega$表示样本空间，且这里所有的随机变量都是函数形式。因此完全收敛是逐点收敛（Pointwise Convergence）在随机变量上的推广