---
title: Limit Theorem
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Limit Theorem]
tags: [Bernoulli, Binomial, Multinomial]
math: true
mermaid: true
---


## 极限定理

极限定理是概率论中最重要的理论。其中**大数定律**和**中心极限定理**是最核心的两大定理。

#### 马尔可夫不等式（Markov's inequality）

- 设$X$为取非负值的随机变量，则对于任何常数$a>0$，有：

  $$p(X\ge a) \le \frac {\mathbb{E}[X]}{a}$$

  - 证明：

    $$\begin{aligned} &令f(x)为p(x)的概率密度函数 \\&\because X 非负 \\ &\therefore \mathbb{E}[X] = \int_0^{\infty}xf(x)dx \\ 又&\because a>0 \\ &\therefore \mathbb{E}[X] \ge \int_a^{\infty}xf(x)dx \\&\therefore 当X\ge a 时: \\ &\mathbb{E}[X]\ge \int_a^{\infty}xf(x)dx \ge \int_a^{\infty}af(x)dx=ap(X\ge a) \\ &\therefore p(X\ge a) \le \frac {\mathbb{E}[X]}{a} \end{aligned}$$

- 马尔可夫不等式（和其他类似的不等式）使概率与期望相关，并为随机变量的累积分布函数提供（经常是宽松的但仍然有用的）界线

#### 切比雪夫不等式（Chebyshev's inequality）

- 设随机变量$X$的均值$\mu$和方差$\sigma^2$有限， 则对任何$k>0$，有：

  $$p(\vert X-\mu\vert \ge k) \le \frac {\sigma^2}{k^2}$$

  - 证明：

    $$\begin{aligned} &\because (X-\mu)^2非负，则根据马尔可夫不等式(a=k^2)\\ &\therefore p((x-\mu)^2 \ge k^2) \le \frac {\mathbb{E}[(X-\mu)^2]}{k^2}=\frac {\sigma^2}{k^2} \\ 又&\because (x-\mu)^2\ge k^2与\vert X-\mu\vert\ge k 等价 \\&\therefore p(\vert X-\mu\vert\ge k) \le \frac {\sigma^2}{k^2}\end{aligned}$$

- 切比雪夫不等式使用方差来限制随机变量偏离均值的可能性

- 证明：若$Var[X]=0$，则$p(X=\mathbb{E}[X])=1$，也就是说，一个随机变量的方差为0的充要条件是这个随机变量以概率1等于一个常数

  $$\begin{aligned} &\because Var[X]=0，则根据切比雪夫不等式，对于任意的n\ge 1 \\ &\therefore p(\left\vert X-\mathbb{E}[X] \right\vert > \frac 1n)=0 \\ &令n\rightarrow \infty \\ & 则 p(\left\vert X-\mathbb{E}[X] \right\vert > \lim_{n\rightarrow \infty}\frac 1n)=0 \\ &\Rightarrow p(\left\vert X-\mathbb{E}[X] \right\vert > 0) = 0 \\ &\Rightarrow p(\left\vert X-\mathbb{E}[X] \right\vert = 0) = 1 \\ &即p(X=\mathbb{E}[X])=1 \end{aligned}$$

  

#### 大数定理（Law of Large Numbers）

- 大数定律描述了在多次重复试验下，随机变量序列的平均值会非常接近某期望值，且随着试验次数增加，将越趋向于接近(收敛)到该期望值。

- 样本均值（Sample Mean）

  $$\overline{X_n} = \frac {X_1+x_2+···+X_n}{n}$$

- 样本方差（Sample Variance）

  - 假设变量方差$Var[X]=\sigma^2$

  $$Var[\overline{X_n}] = Var[\frac{X_1+X_2+···+X_n}{n}]=\frac 1{n^2}Var[X_1+X_2+···+X_n]=\frac {\sigma^2}{n^2}$$

##### 弱大数定律（Weak Law）

- 弱大数定律也称为辛钦大数定律

- 对于独立同分布的随机变量序列$X_1,X_2,···$，$\overline{X_n} = \frac {X_1+x_2+···+X_n}{n}$，则序列$\{\overline{X_n}\}$依概率收敛到该序列的公共期望$\mathbb{E}[X]<\infty$，即对于任意的$\varepsilon >0$：

  $$\begin{aligned} \lim_{n\rightarrow \infty}p(\vert \overline{X_n}-\mathbb{E}[X] \vert > \varepsilon) = 0 \end{aligned}$$

  - 证明：假设$Var[X]$有限，令$\varepsilon = \frac 1n$

    $$\begin{aligned} 根据切比雪夫不等式：&p(\vert \overline{X_n}-\mathbb{E}[X]\vert > \frac 1n) \le \frac {Var[X]}{n^2} \\ \Longrightarrow &\lim_{n\rightarrow \infty }p(\vert \overline{X_n}-\mathbb{E}[X]\vert > \frac 1n) \le 0 \end{aligned}$$



##### 强大数定理（Strong Law）

- 对于独立同分布的随机变量序列$X_1,X_2,···$，$\overline{X_n} = \frac {X_1+x_2+···+X_n}{n}$，则序列$\{\overline{X_n}\}$几乎完全收敛到该序列的公共期望$\mathbb{E}[X]<\infty$，即：

  $$\begin{aligned}  p(\lim_{n\rightarrow \infty}\overline{X_n}=\mathbb{E}[X]) = 1 \end{aligned} $$

#### 中心极限定理（Central Limit Theorem）

##### 基础形式的中心极限定理（Classic Central Limit Theorem）

- 设随机变量$X_1,X_2,···,X_n,···$是**独立同分布**的，且具有期望$\mu$和有限的方差$\sigma^2$，则随机变量：	

  $$\frac {X_1+X_2+···+X_n-n\mu}{\sigma\sqrt{n}}$$

  的分布在当$n\rightarrow \infty$时趋向于标准正态分布。即对任意的$-\infty<a<+\infty$，

  $$\begin{aligned} \lim_{n \rightarrow \infty} p(\frac {X_1+X_2+···+X_n-n\mu}{\sigma\sqrt{n}} \le a) = \frac {1}{\sqrt{2\pi}}\int_{-\infty}^a e^{-\frac {x^2}{2}}dx \end{aligned}$$

##### 李亚普洛夫中心极限定理（Lyapunov Central Limit Theorem）

- 李亚普洛夫中心极限定理要求随机变量$X_i$之间是独立的，但不必是同分布的。同时也要求随机变量$\vert X_i\vert$具有某些$2+\delta$阶矩，并且这些矩的增长率受下面给出的Lyapunov条件的限制

- 设随机变量$X_1,X_2,···,X_n,···$是**独立**的，且每个都具有有限的期望$\mu$和方差$\sigma^2$

  $$\begin{aligned} 定义： &S_n^2=\sum_{i=1}^n \sigma_i^2 \\ 如果存在&\delta >0，满足： \\ & \lim_{n\rightarrow \infty} \frac {1}{S_n^{2+\delta}}\sum_{i=1}^n\mathbb{E}[\vert X_i-\mu_i\vert ^{2+\delta}]=0 \\ 那么随机变量&\frac {\sum_{i=1}^n(X_i-\mu_i)}{S_n}，在n\rightarrow \infty下，依分布收敛到一个标准正态分布变量，即：\\& \lim_{n\rightarrow \infty}F_n(x) = \lim_{n\rightarrow \infty} p(\frac {\sum_{i=1}^n(X_i-\mu_i)}{S_n}\le x) = \int_{-\infty}^x \frac 1{\sqrt{2\pi}}e^{-\frac {t^2}{2}}dt=\phi(x)  \end{aligned}$$

##### 林德贝格中心极限定理（Lindeberg Central Limit Theorem）

- 林德贝格条件：

  - 如果对于一个独立的随机变量序列$X_i$，满足对于任意的$\varepsilon >0$，满足：

    $$\begin{aligned} \lim_{n\rightarrow \infty}\frac {1}{S_n^2}\sum_{i=1}^n\mathbb{E}[(X_i-\mu_i)·\mathbb{I}(\vert X_i-\mu_i\vert>\epsilon S_n)]=0 \end{aligned}$$

- 满足林德贝格条件的独立的随机变量序列$X_i$，那么可得出与李亚普洛夫中心极限定理一样的结论，即：

  $$\begin{aligned}如果满足上&述的林德贝格条件\\则随机变量&\frac {\sum_{i=1}^n(X_i-\mu_i)}{S_n}，在n\rightarrow \infty下，依分布收敛到一个标准正态分布变量，即：\\& \lim_{n\rightarrow \infty}F_n(x) = \lim_{n\rightarrow \infty} p(\frac {\sum_{i=1}^n(X_i-\mu_i)}{S_n}\le x) = \int_{-\infty}^x \frac 1{\sqrt{2\pi}}e^{-\frac {t^2}{2}}dt=\phi(x)\end{aligned}$$

##### 棣莫弗—拉普拉斯定理（De Moivre-Laplace）

$$\begin{aligned} \lim_{n\rightarrow \infty} \left(\begin{matrix}n\\k\end{matrix}\right)p^k(1-p)^{n-k} = \frac {1}{\sqrt{2\pi np(1-p)}}e^{\frac{(k-np)^2}{2np(1-p)}},\qquad 0\lt p\lt 1 \end{aligned}$$

- 即当$n\rightarrow \infty$时，二项分布趋近于正态分布