---
title: Polynomial Theorem
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Information Theory, Basic Concept]
tags: [Entropy]
math: true
mermaid: true
---

#### 信息（Information）

​	$$I(x) = -\log p(x)$$

- 负号确保了信息是非负的

- 信息单位：

  - $bits$：如果对数是以2为底。$binary \space digits$
  - $nats$：如果对数是以$e$为底。$natural \space units$

- 使用对数表示信息的一个直观理解是：两件**独立统计**事件的信息应当是二者的和

  $$I(x,y) = - \log p(x,y) = -\log (p(x)p(y)) = -\log p(x) - \log p(y)$$

#### 互信息（Mutual Information）

  $$\begin{aligned} I(x,y) = \log \frac {p(x\vert y)}{p(x)} \end{aligned} $$

- 度量两个随机变量之间的相互依赖的程度
- 后面还可以看到，互信息还表示这两个随机变量的联合概率分布与各自边缘分布乘积之间的差异(KL散度)

#### 条件信息（Conditional Information）

  $$\begin{aligned} I(x\vert y) = - \log p(x\vert y) \end{aligned} $$

​	可得：

  $$\begin{aligned} I(x, y) = \log p(x\vert y) - \log p(x) = I(x)-I(x\vert y) \end{aligned}$$

#### 熵（Entropy）

​	$$\begin{aligned} H(x) = -\sum_{x\in \mathcal{X}}p(x)\log p(x) \end{aligned} $$

- 随机变量的信息的期望被称为熵。如果是连续随机变量，上式累加换为积分即可。

- 当随机变量的所有取值是等概率时(equiprobable)，熵取最大值

  - 证明（基于拉格朗日乘子法）

    $$\begin{aligned} \rm{maximum} \qquad &-\sum p_i\log p_i \qquad 令q(x)=q_i \\ \rm{subject.to} \qquad &\sum p_i=1 \\ \space \\ L(p_i, \lambda) &= -\sum p_i\log p_i + \lambda (\sum p_i -1)  \\ \space \\ \frac {\partial L}{\partial p_i} &= - \log p_i -1+\lambda \\ 令导数为0，可得:& \\  p_i &= e^{\lambda -1} \qquad 假设使用自然对数 \\ 则可知当熵取最大值时，&所有的p_i都相等 \\\end{aligned}  $$

#### 条件熵（Conditional Entropy）

  $$\begin{aligned} H(x\vert y) = -\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log \frac {p(x, y)}{p(y)} \end{aligned} $$

- 证明：

  $$\begin{aligned} H(x\vert y) &= \sum_{y\in \mathcal{Y}}p(y)H(x\vert y) \\&= -\sum_{y\in \mathcal{Y}}p(y)\sum_{x\in \mathcal{X}}p(x\vert y)\log p(x\vert y) \\ &= - \sum_{y\in \mathcal{Y}}\sum_{x\in \mathcal{X}}p(x,y)\log p(x\vert y) \\ &= -\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log \frac {p(x, y)}{p(y)}\end{aligned} $$

- 互信息与熵：$I(x,y) = H(x)- H(x\vert y)$

  - 证明：

    $$\begin{aligned} H(x)- H(x\vert y) &=  -\sum_{x\in \mathcal{X}}p(x)\log p(x) + \sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log \frac {p(x, y)}{p(y)} \\&= -\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log p(x) + \sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log \frac {p(x, y)}{p(y)} \\ &= \sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log \frac {p(x, y)}{p(y)p(x)} \\ &= \sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y) \log \frac {p(x\vert y)}{p(x)} \\ &= \sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y) I(x,y) \\&= I(x,y) \end{aligned}$$

#### 联合熵（Joint Entropy）

  $$\begin{aligned} H(x,y) = -\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log p(x, y) \end{aligned}$$

- 则有$H(x,y) = H(y\vert x) + H(x)$
  - 证明：

    $$\begin{aligned} H(y\vert x) + H(x) &= -\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log \frac {p(x, y)}{p(x)} - H(x) \\&= -\sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log p(x, y) - \sum_{x\in \mathcal{X}}\sum_{y\in \mathcal{Y}}p(x,y)\log p(x) - H(x) \\&= H(x,y)- \sum_{x\in \mathcal{X}}p(x)\log p(x) - H(x) \\&= H(x,y) \end{aligned}$$

- $I(x,y) = H(x)- H(x\vert y) = H(x)+ H(y)-H(x,y)$

#### 相对熵（Relative Entropy）

  $$\begin{aligned} KL(p\vert\vert q) &= \sum_{x\in \mathcal{X}}p(x)\log \frac{p(x)}{q(x)} \\&= -\sum_{x\in \mathcal{X}}p(x)\log \frac{q(x)}{p(x)} \end{aligned}$$

- 相对熵也称为**KL散度（Kullback-Leibler divergence）**

  - 常用于度量两个概率分布之间的相似情况

- $I(x,y)=KL(p(x,y)\vert\vert p(x)p(y))$

  - 证明：

    $$\begin{aligned} KL(p(x,y)\vert\vert p(x)p(y)) &= \sum_{x,y} p(x,y)\log \frac{p(x,y)}{p(x)p(y)} \\&= \sum_{x,y} p(x,y)\log \frac{p(x\vert y)}{p(x)} \\&= I(x,y) \end{aligned}$$

- 注意相对熵不是对称的，即$KL(p\vert\vert q) \neq KL(q\vert\vert p)$

#### 交叉熵（Cross Entropy）

  $$\begin{aligned} H(p,q) = -\mathbb{E}_p [\log q] \end{aligned}$$

- 交叉熵主要用于度量两个概率分布间的差异性信息

- $H(p,q) = H(p)+KL(p\vert\vert q)$

  - 证明：

    $$\begin{aligned} H(p,q) &= -\mathbb{E}_p [\log q] \\&= -\sum_x p(x)\log q(x) \\&=  -\sum_x p(x)\log [\frac{q(x)}{p(x)}p(x)] \\&= -\sum_x p(x) \log \frac{q(x)}{p(x)} - \sum_x p(x)\log p(x) \\&= H(p)+KL(p\vert\vert q) \end{aligned}$$

#### 微分熵（Differential Entropy）

- 针对连续变量的熵成为微分熵，上述公式中，将累加替换为积分号，就对应着相应的微分熵

