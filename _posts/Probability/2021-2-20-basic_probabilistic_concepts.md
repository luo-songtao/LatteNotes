---
title: Basic Probabilistic Concept
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability]
tags: []
math: true
mermaid: true
---



## 概率（Probalility）

#### 什么是概率

- 频率(Frequentist)解释：概率代表事件的长期发生**频率**

- 贝叶斯(Bayesian)解释：概率用于**量化(quantify)**我们对某事的**不确定性(uncertainty)**； 因此它从根本上与信息有关，而不是反复试验

#### 概率基本运算法则

- **Sum Rule**

  $$p(X) = \sum_Y p(X,Y)$$

- **Product Rule**

  $$p(X,Y) = p(Y \vert X)p(X)$$

#### 联合概率、边缘概率、条件概率

- **Joint Probabilities** (也就是乘积法则)

  $$\begin{aligned} p(X,Y) = p(Y \vert X)p(X) \end{aligned}$$

- **Marginal Probabilities**

  $$\begin{aligned} p(X) = \sum_Y p(X,Y) = \sum_Y p(X \vert Y)p(Y) \end{aligned}$$

  $$\begin{aligned} p(Y) = \sum_X p(X,Y) = \sum_X p(Y \vert X)p(X) \end{aligned}$$

- **Conditional Probabilities**

  $$ \begin{aligned}p(Y \vert X) = \frac {p(X,Y)}{p(X)} \qquad p(X)\neq 0 \end{aligned}$$

#### 贝叶斯理论

- **Bayes Theorem**

  $$\begin{aligned} p(Y\vert X) = \frac {p(X \vert Y)p(Y)}{p(X)} \end{aligned}$$

- 使用边缘概率$p(X)$可表示为：

  $$\begin{aligned} p(Y\vert X) = \frac {p(X \vert Y)p(Y)}{\sum_Y p(X \vert Y)p(Y)} \end{aligned}$$

  分母充当着一个归一化常数的作用，保证了将所有的条件概率相加的和为1



#### 非条件独立和条件独立

- **Uncondition Independence**（marginally independence）

  $$X\bot Y \Longleftrightarrow p(X,Y) = p(X)p(Y)$$

  含义：$X$和$Y$是非条件独立的

- **Conditional Independence**

  $$X\bot Y \vert Z \Longleftrightarrow p(X,Y\vert Z) = p(X\vert Z)p(Y\vert Z)$$

  含义：$X$和$Y$在给定条件$Z$的情况下是条件独立的



#### 离散随机变量和连续随机变量

- **Discrete Random Variables**

  - Probability Mass Function(PMF)

    $$p(X=x) \qquad X=x\in \mathcal{X}$$

    其中$\mathcal{X}$代表一个**有限的(finite)**或**可数且无限的(countably infinite)**集合

    - PMF需满足：
      - $0 \le p(x) \le 1$
      - $\sum_{x\in \mathcal{X}} p(x) = 1$

- **Continuous Random Variables**

  - Cumulative Distribution Function(CDF)

    累积分布函数定义为：

      $$F(x) \triangleq p(X\le x)$$

    对于连续随机变量，我们定义两个事件：

    - 事件$A: x\le a$
    - 事件$B: a \lt x \le b$
    - 事件$C: x \le b$

    则我们有：

      $$p(A) + p(B) = p(C)$$

    可得：

      $$p(a \lt x \le b) = F(b) - F(a)$$

  - Probability Density Function(PDF)

    因函数$F$是一个连续函数，可令$f(x) = F'(x)$，依据Newton-Leibniz公式

      $$\begin{aligned} p(a \lt x \le b) = F(b) - F(a) = \int_a^b f(x)dx \end{aligned}$$

    这里的函数$f$被称为概率密度函数，且：

      $$\begin{aligned} f(x) &\ge 0 \\ \int_{-\infty}^{+\infty}f(x)dx &= 1 \\ p(x\le a) = F(a) &= \int_{-\infty}^af(x)dx \end{aligned}$$

  - 连续随机变量的边缘概率表示

    $$\begin{aligned} p(X=x) &= \int_{-\infty}^{+\infty} p(X=x, Y=y)dy  \\ &= \int_{-\infty}^{+\infty} p(X=x \vert Y=y)p(Y=y)dy \end{aligned}$$

#### 期望与方差

- **Expectation**

  定义：函数$f(x)$在某个概率分布$p(x)$下的均值被称为函数$f(x)$的期望

  $$\begin{aligned} &\mathbb{E}[f(x)] \triangleq \sum_x p(x)f(x) \qquad &discrete-var\\ &\mathbb{E}[f(x)] \triangleq \int p(x)f(x)dx \qquad &continuous-var \end{aligned}$$

- **Variance**

  $$\begin{aligned} var[f(x)] &= \mathbb{E} [(f(x) - \mathbb{E}[f(x)])^2] \\ &= \mathbb{E}[(f(x))^2] - \mathbb{E}[f(x)]^2 \\ var[x] &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ var[x+y] &= \mathbb{E}[(x+y-\mathbb{E}[x]-\mathbb{E}[y])^2] \\ &= \mathbb{E}[(x-\mathbb{E}[x])^2]+ \mathbb{E}[(x-\mathbb{E}[y])^2]+2\mathbb{E}[(x-\mathbb{E}[x])(y-\mathbb{E}[y])] \\ &= var[x]+var[y]+2cov[x,y] \end{aligned} $$ 

  令$u$表示均值、$\sigma^2$表示方差，则有：

    $$\mathbb{E}[x^2] = u^2 + \sigma^2$$

- **Conditional Expectation**

  定义：函数$f(x,y)$在某个条件概率分布$p(x\vert y)$下的均值被称为函数$f(x,y)$的条件期望

  $$\begin{aligned} &\mathbb{E}_{y\vert x}[f(x,y)] \triangleq \sum_y p(y\vert x)f(x,y) \end{aligned}$$

- **Joint Expectation**

  $$\begin{aligned} \mathbb{E}_{x,y}[f(x,y)] = \mathbb{E}_x[\mathbb{E}_{y\vert x}[f(x,y)]] \end{aligned}$$

- **Covariance**

  $$\begin{aligned}  cov[x,y] &\triangleq \mathbb{E}_{x,y}[(x-\mathbb{E}[x])(y-\mathbb{E}[y])] \\ &= \mathbb{E}_{x,y}[xy-y\mathbb{E}[x]-x\mathbb{E}[y]+\mathbb{E}[x]\mathbb{E}[y]] \\ &= \mathbb{E}_{x,y}[xy] - \mathbb{E}[x]\mathbb{E}[y] \end{aligned} $$

- **Correlation**

  $$\begin{aligned} corr[x,y] &\triangleq \mathbb{E}_{x,y}[xy] \\ &= cov[x,y] + \mathbb{E}[x]\mathbb{E}[y] \end{aligned}$$

- **Covariance Matrix**

  - 随机向量$\boldsymbol{x},\boldsymbol{y}$的协方差矩阵为：

    $$\begin{aligned} cov[\boldsymbol{x},\boldsymbol{y}] &\triangleq \mathbb{E}[(\boldsymbol{x} - \mathbb{E}[\boldsymbol{x}])(\boldsymbol{y}-\mathbb{E}[\boldsymbol{y}])^T] \\ &= \mathbb{E}_{\boldsymbol{x},\boldsymbol{y}}[\boldsymbol{xy^T}] - \mathbb{E}[\boldsymbol{x}]\mathbb{E}[\boldsymbol{y^T}] \end{aligned}$$

  - $cov[\boldsymbol{x},\boldsymbol{x}]$表示随机向量$\boldsymbol{x}$的自身每个分量之间的协方差矩阵，也可简写为$cov[\boldsymbol{x}]$

    $$\begin{aligned} cov[\boldsymbol{x}] &\triangleq \mathbb{E}[(\boldsymbol{x} - \mathbb{E}[\boldsymbol{x}])(\boldsymbol{x}-\mathbb{E}[\boldsymbol{x}])^T] \\ &= \mathbb{E}[\boldsymbol{xx^T}] - \mathbb{E}[\boldsymbol{x}]\mathbb{E}[\boldsymbol{x}^T] \end{aligned}$$

    $cov[\boldsymbol{x}]$是对称且半正定的

- **Correlation Matrix**

  - 随机向量$\boldsymbol{x},\boldsymbol{y}$的相关性矩阵为：

    $$\begin{aligned} corr[\boldsymbol{x},\boldsymbol{y}] &\triangleq \mathbb{E}_{\boldsymbol{x},\boldsymbol{y}}[\boldsymbol{x}\boldsymbol{y}^T] \\ &= cov[\boldsymbol{x},\boldsymbol{y}] + \mathbb{E}[\boldsymbol{x}]\mathbb{E}[\boldsymbol{y}^T] \end{aligned}$$

  - $corr[\boldsymbol{x},\boldsymbol{x}]$表示随机向量$\boldsymbol{x}$的自身每个分量之间的相关性矩阵，也可简写为$corr[\boldsymbol{x}]$

    $$\begin{aligned} corr[\boldsymbol{x}] &\triangleq \mathbb{E}[\boldsymbol{x}\boldsymbol{x}^T] \\ &= cov[\boldsymbol{x}] + \mathbb{E}[\boldsymbol{x}]\mathbb{E}[\boldsymbol{x}^T] \end{aligned}$$

    $corr[\boldsymbol{x}]$是对称且半正定的



#### 随机变量函数的分布

- 设$X、Y$都是连续随机变量，其累积分布函数分别表示为$F_X、F_Y$，概率密度函数分别为$f_X、f_Y$

- 设$y = g(x)$是一个严格单调可微函数，可知该函数可逆，则有：$x=g^{-1}(y)$

- 令$x\in X, y\in Y$，即$Y = g(X)、X = g^{-1}(Y)$

  不失一般性，假设$g(x)$单调递增

  $$\begin{aligned} F_Y(y) &= p(Y \le y) \\ &= p(g^{-1}(Y) \le g^{-1}(y)) \qquad g^{-1}是单调增函数\\ &= p(X \le g^{-1}(y)) \\ &= F_X(g^{-1}(y)) \end{aligned}$$

  对上式左右分别对$y$求导，可得：

  $$\begin{aligned} f_Y(y) &= f_X(g^{-1}(y)) \frac {d}{dy}g^{-1}(y) \\ &= f_X(x) \frac {dx}{dy}\end{aligned}$$

  同理，在$g(x)$单调递减时可得：

  $$\begin{aligned} f_Y(y) &= - f_X(x) \frac {dx}{dy} \\ &= f_X(x) \left\vert \frac {dx}{dy} \right\vert  \qquad 此时导数负数  \end{aligned}$$

  综上可得：

  $$\begin{aligned} f_Y(y) &= f_X(x)  \left\vert \frac {dx}{dy} \right\vert \end{aligned}$$

  则分别可得：

  $$\begin{aligned} p(x \lt X \le x+\Delta x) &= p(y \lt Y \le y+\Delta y) \qquad g(x)单调递增时 \\  p(x \lt X \le x+\Delta x) &= p(y + \Delta y \lt Y \le y) \qquad g(x)单调递减时 \\ \Longrightarrow  f_Y(y)\vert \Delta y \vert &= f_X(x)\vert \Delta x \vert \end{aligned}$$

  

#### 随机变量函数的联合分布

- 设$X、Y$都是$\mathbb{R}^n$的连续随机变量(向量)

- 设$\boldsymbol{g}: \mathbb{R}^n \longmapsto \mathbb{R}^n$

- $\boldsymbol{x}: (x_1, x_2, ..., x_n)$、$\boldsymbol{y}: (y_1, y_2, ..., y_n)$

  Jacobian Matrix：

  $$J(\boldsymbol{x}) = \frac {\partial \boldsymbol{y}}{\partial \boldsymbol{x}} = \left[ \begin{matrix} &\frac {\partial y_1}{\partial x_1}  &... &\frac {\partial y_1}{\partial x_n} \\ &... &... &... \\ &\frac {\partial y_n}{\partial x_1} &... &\frac {\partial y_n}{\partial x_n} \end{matrix} \right ]$$

  同理可得：

  $$\begin{aligned} f_Y(\boldsymbol{y}) &= f_X(\boldsymbol{x}) \vert J(\boldsymbol{x})\vert^{-1} \end{aligned}$$

