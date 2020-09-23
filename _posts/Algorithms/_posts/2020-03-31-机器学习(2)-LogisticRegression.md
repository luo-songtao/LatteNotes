---
layout: post
title: 机器学习(二)-LogisticRegression
tags: [线性模型, LogisticRegression]
category: ['algorithms']
date: 2020-03-31 00:00:02
toc: true
---

## Logistic Distribution

- 设$X$是连续随机变量，$X$服从Logistic Distribution是指$X$具有下列的概率分布函数和概率密度函数

    $$\begin{aligned} F(x) &= P(X\le x) = \frac {1}{1+e^{-(x-\mu)/r}} \\ f(x) &= F'(x) = \frac {e^{-(x-\mu)/r}}{\gamma (1+e^{-(x-\mu)/r})^2}  \end{aligned}$$

其中$\mu$为位置参数，$\gamma > 0$为形状参数

- 分布函数的图形是一条S型曲线(Sigmoid Curve)
- 该曲线以$(\mu, \frac 12)$为中心对称：$F(-x+\mu) - \frac 12 = -F(x+\mu)+\frac 12$
- 曲线在中心附近增长速度较快，在两端增长速度较慢
- 形状参数$\gamma$的值越小，曲线在中心附近增长得越快

## Logistic Regression Model

- LogisticRegression 常被翻译成逻辑回归或对数几率回归，但其实它主要和log函数也就是对数函数有关，和中文语义上的“逻辑”没有什么关系。后面我们将统一称之为对数几率回归。
- LogisticRegression 虽然是一种回归模型，但却是一种主要用于二分类问题的分类算法，因此这里称为二项对数几率回归。

- 对数几率回归的基本形式，对数几率回归函数：

    $$y = \frac {1}{1+e^{-z}}$$

二项对数几率回归是一种二分类模型，它有条件概率$P(Y\vert X)$表示，形式为参数化的Logistic Distribution。
- 随机变量$X$取值为实数
- 随机变量$Y$取值为0和1

考虑线性回归模型$z = \boldsymbol{\omega}^T\boldsymbol{x} + b$，其结果是实值，但通过对数几率回归函数，可以将实值映射到$(0,1)$区间上，并将其输出结果作为取正值的概率，从而实现分类。

- 将$z$代入可得：

    $$y = \frac {1}{1+e^{-(\boldsymbol{\omega}^T\boldsymbol{x} + b)}}$$

- 将上式转换一下，可得：

    $$\ln \frac {y}{1-y} = \boldsymbol{\omega}^T\boldsymbol{x} + b$$

这里的$\ln \frac {y}{1-y}$被称为对数几率

#### 几率与对数几率

- 几率：一个事件发生的几率(odds)是指该事件发生的概率$p$与该事件不发生的概率$1-p$的比值。

    $$\frac {p}{1-p}$$

- 对数几率: 该事件的对数几率也就是对几率取对数得之

    $$logit(p) = \log \frac {p}{1-p}$$

#### 后验概率估计公式

- 根据对数几率，那么由：
    
    $$\ln \frac {y}{1-y} = \boldsymbol{\omega}^T\boldsymbol{x} + b$$

- 可得：
    
    $$\ln \frac {P(Y=1\vert \boldsymbol{x})}{P(Y=0\vert \boldsymbol{x})} = \boldsymbol{\omega}^T\boldsymbol{x} + b$$

- 则可解出：

    $$\begin{aligned} P(Y=1\vert \boldsymbol{x}) &= \frac {e^{\boldsymbol{\omega}^T\boldsymbol{x} + b}}{1+e^{\boldsymbol{\omega}^T\boldsymbol{x} + b}} \\ P(Y=0\vert \boldsymbol{x}) &= \frac {1}{1+e^{\boldsymbol{\omega}^T\boldsymbol{x} + b}} \end{aligned}$$


#### 对数几率回归模型

通过上述推导，可以看到我们利用输入为$x$的线性函数可以得到$Y=1;Y=0$的对数几率。

换个角度说，考虑对输入为$x$进行分类的线性函数$\boldsymbol{\omega}^T\boldsymbol{x} + b$，其值域为是$R$。那么通过对数几率回归模型，可以将线性函数$\boldsymbol{\omega}^T\boldsymbol{x} + b$转换为概率：$$P(Y=1\vert \boldsymbol{x}) = \frac {e^{\boldsymbol{\omega}^T\boldsymbol{x} + b}}{1+e^{\boldsymbol{\omega}^T\boldsymbol{x} + b}} ;\space P(Y=0\vert \boldsymbol{x}) = \frac {1}{1+e^{\boldsymbol{\omega}^T\boldsymbol{x} + b}}$$， 此时
- 线性函数的值越接近正无穷，概率值越接近1
- 线性函数的值越接近负无穷，概率值越接近0

这样的模型就被称为对数几率回归模型，而且它是一个对数线性模型。


#### 极大似然估计

- 对数几率回归是一个线性模型，涉及到系数向量$\boldsymbol{\omega}$，和偏置项$b$两种参数。

- 对数几率回归输出的是样本属于一个类的概率，而样本的类别标签是离散值，因此不适合使用欧几里得距离来定义损失函数。而需要使用极大似然估计来确定参数。

- 由于样本之间独立，则对于训练样本集的似然函数：

    $$L(\boldsymbol{\omega}, b) = \prod_{i=1}^m P(y_i \vert x_i; \boldsymbol{\omega}, b)$$

- 假设$y_i$取值为0和1，则有

    $$L(\boldsymbol{\omega}, b) = \prod_{i=1}^m P(Y=1 \vert x_i; \boldsymbol{\omega}, b)^{y_i} P(Y=0 \vert x_i; \boldsymbol{\omega}, b)^{1-y_i}$$

    该函数对应于n重伯努利分布

- 则得到，对数似然函数(将累乘转换为累加)：

    $$\begin{aligned} \ln L(\boldsymbol{\omega}, b) &= \sum_{i=1}^m [\ln P(Y=1 \vert x_i; \boldsymbol{\omega}, b)^{y_i} + \ln P(Y=0 \vert x_i; \boldsymbol{\omega}, b)^{1-y_i}] \\ &= \sum_{i=1}^m [y_i\ln P(Y=1 \vert x_i; \boldsymbol{\omega}, b) + (1-y_i)\ln P(Y=0 \vert x_i; \boldsymbol{\omega}, b)] \end{aligned}$$

- 将对数几率模型公式代入上式简化后，可得简化的对数似然函数：

    $$ LL(\boldsymbol{\omega}, b) = \ln L(\boldsymbol{\omega}, b) = \sum_{i=1}^m [ y_i (\boldsymbol{\omega}^T\boldsymbol{x}_i + b) - \ln (1+e^{\boldsymbol{\omega}^T\boldsymbol{x}_i + b}) ]$$

    现在我们的目标就是对其进行极大似然估计，预测出参数$\boldsymbol{\omega}$、$b$

#### 参数估计

- 对上面的似然函数取最大值，等价于对:

    $$ f(\boldsymbol{\omega}, b) = -LL(\boldsymbol{\omega}, b) = \sum_{i=1}^m [\ln (1+e^{\boldsymbol{\omega}^T\boldsymbol{x}_i + b}) - y_i (\boldsymbol{\omega}^T\boldsymbol{x}_i + b) ]$$

    取最小值

    可证$f(\boldsymbol{\omega}, b)$是一个高阶连续可导的凸函数。因此对数几率回归求解的优化问题是一个不带约束条件的凸优化问题。
    可以借助梯度下降法、牛顿法等求的最优解。

- 计算梯度(令$z = \boldsymbol{\omega}^T\boldsymbol{x}_i + b$)

    $$\begin{aligned} \frac {\partial f(\boldsymbol{\omega}, b)}{\partial \boldsymbol{\omega}} &= \sum_{i=1}^m (\frac {e^z}{1+e^z} - y_i)\boldsymbol{x}_i \end{aligned}$$

- 计算二阶导数

    $$\frac {\partial^2 f(\boldsymbol{\omega}, b)}{\partial \boldsymbol{\omega} \partial \boldsymbol{\omega}^T } = \sum_{i=1}^m \boldsymbol{x}_i \boldsymbol{x}_i^T \frac {e^z}{(1+e^z)^2} = \sum_{i=1}^m \boldsymbol{x}_i \boldsymbol{x}_i^T \frac {e^z}{1+e^z}(1-\frac {e^z}{1+e^z})$$

#### 牛顿法

$$\boldsymbol{\omega}_{i+1} = \boldsymbol{\omega}_i - (\frac {\partial^2 f(\boldsymbol{\omega}, b)}{\partial \boldsymbol{\omega} \partial \boldsymbol{\omega}^T })^{-1} \frac {\partial f(\boldsymbol{\omega}, b)}{\partial \boldsymbol{\omega}}$$

#### 梯度下降法

$$\boldsymbol{\omega}_{i+1} = \boldsymbol{\omega}_i - \alpha \sum_{i=1}^m (\frac {e^z}{1+e^z} - y_i)\boldsymbol{x}_i$$
