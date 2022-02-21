---
title: Exponential Family Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Exponential Family]
math: true
mermaid: true
---

## 指数簇分布

#### 指数簇分布

$$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\theta}) = g(\boldsymbol{\theta})f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\phi}^T(\boldsymbol{\theta})\boldsymbol{u}(\boldsymbol{x})] \end{aligned}$$

- $p(\boldsymbol{x}\vert \boldsymbol{\theta})$指在给定参数$\boldsymbol{\theta}$得条件下，随机变量$\boldsymbol{x}$的概率分布，其中$\boldsymbol{x}\in \mathbb{R}^n、\boldsymbol{\theta}\in \mathbb{R}^K$

- $\boldsymbol{\phi}(\boldsymbol{\theta})$称为分布的**natural parameters**

- $\boldsymbol{u}(\boldsymbol{x})$是一个充分统计量

- 且由于它是一个概率密度函数，则有：

  $$\begin{aligned} g(\boldsymbol{\theta})\int f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\phi}^T(\boldsymbol{\theta})\boldsymbol{u}(\boldsymbol{x})]d\boldsymbol{x} = 1 \end{aligned}$$

#### 指数簇分布的"natural form"

- 若使用$\boldsymbol{\eta}$表示**natural parameters**，即$\boldsymbol{\eta} = \boldsymbol{\phi}(\boldsymbol{\theta})$，那么$g(\boldsymbol{\theta})$也可以表示为一个关于**natural parameters**的函数，为了方便这里同样用$g$表示，即$g(\boldsymbol{\eta})$。则指数簇分布的**natural form**为：

  $$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\eta}) = g(\boldsymbol{\eta})f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\eta}^T\boldsymbol{u}(\boldsymbol{x})] \end{aligned}$$

- 即将指数簇分布转化为使用**natural parameters**表示

- 且同样有：

  $$\begin{aligned} g(\boldsymbol{\eta})\int f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\eta}^T\boldsymbol{u}(\boldsymbol{x})]d\boldsymbol{x} = 1 \end{aligned}$$

#### 指数簇分布的最大似然估计与充分统计量

- 若上式左右两边分别对参数**natural parameters**，即$\boldsymbol{\eta}$求导，可得：

  $$\begin{aligned} &\nabla g(\boldsymbol{\eta})\int f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\eta}^T\boldsymbol{u}(\boldsymbol{x})]d\boldsymbol{x} + g(\boldsymbol{\eta})\int f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\eta}^T\boldsymbol{u}(\boldsymbol{x})]\boldsymbol{u}(\boldsymbol{x})d\boldsymbol{x}= 0 \\ \Longrightarrow  &-\frac {\nabla g(\boldsymbol{\eta})}{g(\boldsymbol{\eta})} = g(\boldsymbol{\eta})\int f(\boldsymbol{x})\mathrm{exp}[\boldsymbol{\eta}^T\boldsymbol{u}(\boldsymbol{x})]\boldsymbol{u}(\boldsymbol{x})d\boldsymbol{x} = \mathbb{E}[\boldsymbol{u}(\boldsymbol{x})] \\ \Longrightarrow &-\nabla \ln g(\boldsymbol{\eta}) = \mathbb{E}[\boldsymbol{u}(\boldsymbol{x})] \end{aligned}$$

- 若考虑一个独立同分布的数据集$\boldsymbol{X}=\{\boldsymbol{x}_1, \boldsymbol{x}_2,\cdots,\boldsymbol{x}_n  \}$，则似然函数为：

  $$\begin{aligned} p(\boldsymbol{X}\vert \boldsymbol{\eta}) = g(\boldsymbol{\eta})^n \prod_{i=1}^nf(\boldsymbol{x}_i)\mathrm{exp}[\boldsymbol{\eta}^T\boldsymbol{u}(\boldsymbol{x}_i)] \end{aligned}$$

- 对似然函数求导，并令导数为0，可得：

  $$\begin{aligned} &n\nabla g(\boldsymbol{\eta}_{mle})g(\boldsymbol{\eta})_{mle}^{n-1} \prod_{i=1}^nf(\boldsymbol{x}_i)\mathrm{exp}[\boldsymbol{\eta}_{mle}^T\boldsymbol{u}(\boldsymbol{x}_i)] + \left(g(\boldsymbol{\eta}_{mle})^n \prod_{i=1}^nf(\boldsymbol{x}_i)\mathrm{exp}[\boldsymbol{\eta}_{mle}^T\boldsymbol{u}(\boldsymbol{x}_i)]\right)\sum_{i=1}^n\boldsymbol{u}(\boldsymbol{x}_i) = 0 \\ \Longrightarrow & -\frac {\nabla g(\boldsymbol{\eta}_{mle})}{g(\boldsymbol{\eta}_{mle})} = \frac {1}{n}\sum_{i=1}^n\boldsymbol{u}(\boldsymbol{x}_i) \\ \Longrightarrow & -\nabla \ln g(\boldsymbol{\eta}_{mle}) = \frac {1}{n}\sum_{i=1}^n\boldsymbol{u}(\boldsymbol{x}_i)  \end{aligned}$$

  - 可见指数簇分布的参数的最大似然估计值仅仅依赖于分布的充分统计量

  - 且由于$n\rightarrow \infty$，$\frac {1}{n}\sum_{i=1}^n\boldsymbol{u}(\boldsymbol{x}_i)=\mathbb{E}[\boldsymbol{u}(\boldsymbol{x})]$，也就是说：

    $$\begin{aligned} \lim_{n\rightarrow \infty}{\eta_{mle}} = \eta_{real} \end{aligned}$$

#### 指数簇分布的共轭先验

- 指数簇分布的一大优势就是可以找到参数$\boldsymbol{\eta}$的共轭先验。即任一指数簇分布，都存在着一个共轭先验

  - 如果对于给定的概率分布$p(\boldsymbol{x}\vert \boldsymbol{\eta})$，可以找到一个与其似然函数$p(\boldsymbol{X}\vert \boldsymbol{\eta})$共轭的先验分布$p(\boldsymbol{\eta})$，使得后验分布$p(\boldsymbol{\eta}\vert \boldsymbol{X})$与先验分布具有相同的函数形式

- 指数簇分布的共轭先验形式为：

  $$\begin{aligned} p(\boldsymbol{\eta}\vert \lambda, \boldsymbol{\nu}) = h(\lambda, \boldsymbol{\nu})g(\boldsymbol{\eta})^\lambda \exp(\boldsymbol{\eta}^T\boldsymbol{\nu}) \end{aligned}$$

  - 其中$\lambda>0$、$\boldsymbol{\nu}\in R^s$是先验分布的超参数
  - $h(\lambda, \boldsymbol{\nu})$是一个归一化常数，它是由先验分布函数自动定义出的，目的是为了保证$p(\boldsymbol{\eta}\vert \lambda, \boldsymbol{\nu})$是一个概率函数

- 指数簇分布的后验分布形式为：

  $$\begin{aligned} p(\boldsymbol{\eta} \vert \boldsymbol{X}) &\propto p(\boldsymbol{X}\vert \boldsymbol{\eta})p(\boldsymbol{\eta}) \\ p(\boldsymbol{\eta}\vert \boldsymbol{X}, \lambda, \boldsymbol{\nu}) &\propto g(\boldsymbol{\eta})^{\lambda+n} \exp\left[\boldsymbol{\eta}^T\left(\boldsymbol{\nu}+\sum_{i=1}^n\boldsymbol{u}(\boldsymbol{x}_i)\right)\right] \end{aligned}$$

  - 即后验超参数应为：
    - $\tilde{\lambda} = \lambda +n$
    - $\tilde{\boldsymbol{\nu}} = \boldsymbol{\nu} + \sum_{i=1}^n\boldsymbol{u}(\boldsymbol{x}_i)$
  - 从这里可以看出：
    - 对于先验分布的超参数$\lambda$可以理解为由先验分布贡献的有效数据集(伪数据集)的大小；
    - 对于先验分布的超参数$\boldsymbol{\nu}$可以理解为由先验分布的$\lambda$个有效数据集(伪数据集)贡献给充分统计量的值。

#### 指数簇分布的成员

- 标准的指数簇分布成员
  - 正态/高斯分布（Normal）
  - 卡方分布（Chi-Squared）
  - 伯努利分布（Bernouli）
  - 威沙特分布（Wishart）
  - 指数分布（Exponential）
  - 贝塔分布（Beta）
  - 类别分布（Categorical）
  - 逆-威沙特分布（Inverse-Wishart）
  - 伽马分布（Gamma）
  - 狄利克雷分布（Dirichlet）
  - 泊松分布（Poisson）
  - 几何分布（Geometric）
- 当某些参数固定且已知时
  - 二项分布（Binomial）：试验次数固定时
  - 多项分布（Multinomial）：试验次数固定时
  - 负二项分布（Negative Binomial）：试验失败次数固定时

#### 指数簇分布--伯努利分布

$$\begin{aligned} p(x\vert \mu) &= \mu^x(1-\mu)^x \\ &= \exp \left[x\ln \mu+(1-x)\ln(1-\mu) \right] \\ &= (1-\mu)\exp \left[\ln\left(\frac {\mu}{1-\mu}\right)x \right] \end{aligned}$$

- 对应指数簇分布形式，则自然参数$\eta$为：

  $$\begin{aligned}\eta = \ln\left(\frac {\mu}{1-\mu}\right) \end{aligned}$$

- 令$\mu = \sigma(\eta)$，则$g(\eta) = 1-\sigma(\eta)$，且：

  $$\begin{aligned}\sigma(\eta) = \frac{\exp\eta}{1+\exp\eta} =\frac{1}{1+\exp(-\eta)} \end{aligned}$$

  - 可见$\sigma(\eta)$也就是**Logistic Sigmoid​**函数

  $$g(\eta) = 1-\sigma(\eta) = \sigma(-\eta)$$

- 则伯努利分布化为指数簇分布形式为：

  $$p(x\vert \eta)=\sigma(-\eta)\exp(\eta x)$$

  - $h(x)=1$
  - $u(x)=x$
  - $g(\eta)=\sigma(-\eta)$

#### 指数簇分布--类别分布

$$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\mu})=\prod_{k=1}^K \mu_k^{x_k} = \exp\left[\sum_{k=1}^Kx_k\ln\mu_k\right]\end{aligned}$$

- 对应指数簇分布形式，则自然参数为$\boldsymbol{\eta}=(\ln\mu_1,\ln\mu_2,\cdots,\ln\mu_K)^T$，其中$\sum_{k=1}^K\mu_k = 1$

- $\boldsymbol{x}=(x_1,x_2,\cdots,x_K)^T$，则多项分布化为指数簇分布形式为：

  $$p(\boldsymbol{x}\vert \boldsymbol{\mu})=\exp(\boldsymbol{\eta}^T\boldsymbol{x})$$

  - $h(\boldsymbol{x})=1$
  - $\boldsymbol{\mu}(\boldsymbol{x})=\boldsymbol{x}$
  - $g(\boldsymbol{\eta})=1$

- 由于$\sum_{k=1}^K\mu_k = 1$，因此如果确定了$K-1$个$\mu_k$，那么也就确定了第$K$个；加之$\sum_{k=1}^Kx_k = 1$

  $$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\mu}) &=\exp\left[\sum_{k=1}^Kx_k\ln\mu_k\right] \\ &= \exp\left[ \sum_{k=1}^{K-1} x_k\ln \mu_k + (1-\sum_{k=1}^{K-1}x_k)\ln(1-\sum_{k=1}^{K-1}\mu_k) \right] \\&= \exp\left [ \sum_{k=1}^{K-1}x_k\ln\left(\frac {\mu_k}{1-\sum_{k=1}^{K-1}\mu_k}\right) + \ln(1-\sum_{k=1}^{K-1}\mu_k)\right] \end{aligned} $$

  - 即可利用$K-1$个参数来表示$K$项的类别分布

- **Softmax Function**

  - 令

    $$\begin{aligned} \eta_k = ln\left(\frac {\mu_k}{1-\sum_{j=1}^{K-1}\mu_j}\right) \end{aligned}$$

  - $K$个参数形式，即如果对$\eta_k$左右两边以$K$项累加，整理回带后可得：

    $$\begin{aligned} \mu_k = \frac{\exp(\eta_k)}{\sum_{j=1}^K\exp(\eta_j)} \qquad k=1,2,\cdots,K \end{aligned}$$

  - $K-1$个参数形式，即如果对$\eta_k$左右两边以$K-1$项累加，整理回带后可得：

    $$\begin{aligned} \mu_k = \frac{\exp(\eta_k)}{1+\sum_{j=1}^{K-1}\exp(\eta_j)} \qquad k=1,2,\cdots,K-1 \end{aligned}$$

  - 上面两种形式的关于$\eta_k$的函数，被称为softmax函数

- 若利用$K-1$个参数的softmax函数，那么可将类别分布表示为：

  - 即

    - 令：$$\begin{aligned} \eta_k = ln\left(\frac {\mu_k}{1-\sum_{j=1}^{K-1}\mu_j}\right) \qquad k=1,2,\cdots,K-1 \end{aligned}$$
    - $\boldsymbol{\eta} = (\eta_1,\eta_2,\cdots,\eta_{K-1})^T$
    - $\boldsymbol{x}=(x_1,x_2,\cdots,x_{K-1})^T$
    - $\sum_{k=1}^{K-1}x_k+x_K= 1$

  - 则有：

    $$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\eta}) = \left(1+\sum_{k=1}^{K-1}\exp(\eta_k)\right)^{-1}\exp(\boldsymbol{\eta}^T\boldsymbol{x}) \end{aligned}$$

    - $h(\boldsymbol{x})=1$
    - $\boldsymbol{\mu}(\boldsymbol{x})=\boldsymbol{x}$
    - $g(\boldsymbol{\eta})=\left(1+\sum_{k=1}^{K-1}\exp(\eta_k)\right)^{-1}$

#### 指数簇分布--单元高斯分布

$$\begin{aligned} p(x\vert \mu,\sigma^2) &= \frac {1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac {1}{2\sigma^2}(x-\mu)^2\right) \\ &= \frac {1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac {1}{2\sigma^2}x^2+\frac {\mu}{\sigma^2}x-\frac {\mu^2}{2\sigma^2} \right) \end{aligned}$$

- 令$\boldsymbol{\eta}=(\frac {\mu}{\sigma^2}, -\frac {1}{2\sigma^2})$、$\boldsymbol{u}(x)=(x,x^2)$，则有

  $$\begin{aligned} p(x\vert\boldsymbol{\eta})= \frac{1}{\sqrt{2\pi}}{\sqrt{-2\eta_2}}\exp(\frac{\eta_1^2}{4\eta_2} )\exp(\boldsymbol{\eta}^T\boldsymbol{u}(x)) \end{aligned}$$
  - $h(x)=\frac{1}{\sqrt{2\pi}}$
  - $\boldsymbol{\mu}(x)=(x,x^2)$
  - $g(\boldsymbol{\eta})={\sqrt{-2\eta_2}}\exp(\frac{\eta_1^2}{4\eta_2} )$

#### 指数簇分布--多元高斯分布

$$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\mu}, \boldsymbol{\Sigma})&=\frac{1}{\sqrt{(2\pi)^D\vert\boldsymbol{\Sigma}\vert}}\exp\left[-\frac12(\boldsymbol{x}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\boldsymbol{x}-\boldsymbol{\mu})\right] \qquad \boldsymbol{x}\in \mathbb{R}^D \\ &=\frac{1}{\sqrt{(2\pi)^D\vert\boldsymbol{\Sigma}\vert}} \exp\left[-\frac12\boldsymbol{x}^T\boldsymbol{\Sigma}^{-1}\boldsymbol{x} + \boldsymbol{x}^T\boldsymbol{\Sigma}^{-1}\boldsymbol{\mu}-\frac12\boldsymbol{\mu}^T\boldsymbol{\Sigma}^{-1}\boldsymbol{\mu} \right] \end {aligned}$$

- 令$\boldsymbol{\eta} = (\boldsymbol{\Sigma}^{-1}\boldsymbol{\mu}, -\frac 12 \boldsymbol{\Sigma}^{-1})$、$\boldsymbol{u}(\boldsymbol{x})=(\boldsymbol{x}, \boldsymbol{x}\boldsymbol{x}^T)$，则有：

  $$\begin{aligned} p(\boldsymbol{x}\vert\boldsymbol{\eta})= \frac{1}{\sqrt{(2\pi)^D}} \sqrt{-2\vert\boldsymbol{\eta}_2\vert}\exp(-\frac 14 \boldsymbol{\eta}_1^T(\boldsymbol{\eta}_2^T)^{-1}\boldsymbol{\eta}_1) \exp(\boldsymbol{\eta}^T\boldsymbol{u}(x))\end{aligned}$$

  - $h(\boldsymbol{x})=\frac{1}{\sqrt{(2\pi)^D}}$
  - $\boldsymbol{u}(\boldsymbol{x})=(\boldsymbol{x}, \boldsymbol{x}\boldsymbol{x}^T)$
  - $g(\boldsymbol{\eta})=\sqrt{-2\vert\boldsymbol{\eta}_2\vert}\exp(-\frac 14 \boldsymbol{\eta}_1^T(\boldsymbol{\eta}_2^T)^{-1}\boldsymbol{\eta}_1)$

