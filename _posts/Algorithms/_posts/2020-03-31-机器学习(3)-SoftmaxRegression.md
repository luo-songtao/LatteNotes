---
layout: post
title: 机器学习(三)-Softmax Regression
tags: [softmax-regression]
category: ['algorithms']
date: 2020-03-31 00:00:03
toc: true
---

## Softmax Regression

#### Softmax Regression模型预估公式

- Logistic Regression 只能用于二分类问题，将它进行推广可以得到处理多类分类问题的Softmax Regression
    
    - 给定m个训练样本$(\boldsymbol{x}_i, y_i)$，其中$\boldsymbol{x}_i$为n维特征向量，$y_i$为类别标签，取值是$1$~$k$的整数
    
    softmax回归按照下列公式估计一个样本属于每一类的概率：

    $$\boldsymbol{y}^* = \left [ \begin{matrix} P(Y=y_1\vert \boldsymbol{x}) \\ P(Y=y_2\vert \boldsymbol{x}) \\ ··· \\ P(Y=y_k\vert \boldsymbol{x}) \end{matrix} \right ]  = \frac {1}{\sum_{i=1}^k e^{\boldsymbol{\omega}_i^T \boldsymbol{x}}}  \left [ \begin{matrix} \boldsymbol{\omega}_1^T \boldsymbol{x} \\ \boldsymbol{\omega}_2^T \boldsymbol{x} \\ ··· \\ \boldsymbol{\omega}_k^T \boldsymbol{x} \end{matrix} \right ] $$

    - 模型的输出是一个$k$维的概率向量$\boldsymbol{y}^*$，其元素之和为1，每一个分量为样本属于该类的概率
    - 使用指数函数进行变换的原因是指数函数值都大于0，概率值必须是非负的

##### 参数矩阵

- 可见需要估计的参数为：

    $$\boldsymbol{\omega} = [\boldsymbol{\omega}_1 \space\space \boldsymbol{\omega}_2 \space\space ···  \space\space \boldsymbol{\omega}_k]$$

    - 其中每个$\boldsymbol{\omega}_i$都是一个$n$维列向量(若将偏置项置入$\boldsymbol{\omega}_i$中，则是$n+1$维，此时$\boldsymbol{x}_i = [\boldsymbol{x}_i;1]$)
    - 即$\boldsymbol{\omega}$是一个$n \times k$的矩阵。或$(n+1) \times k$


#### 似然函数

- 首先后面都假定对样本的真实标签向量使用$one-hot$编码，并记为向量 $\boldsymbol{y}$

##### 单样本概率估计公式

- 参照Logistic Regression的做法，每个样本属于每个类的概率计算公式：

    $$P(Y=y_i\vert \boldsymbol{x}) = \prod_{i=1}^k(\boldsymbol{y}^*[i])^{\boldsymbol{y}[i]} = \prod_{i=1}^k(\frac {e^{\boldsymbol{\omega}_i^T \boldsymbol{x}_j}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}}})^{\boldsymbol{y}[i]}$$

##### 训练样本集的似然函数

- 对于给定的一批样本(假设为$m$个)，由于样本之间独立，则与训练样本集的似然函数为：

    $$L(\boldsymbol{\omega}) = \prod_{j=1}^m \prod_{i=1}^k (\frac {e^{\boldsymbol{\omega}_i^T \boldsymbol{x}_j}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}_j}})^{\boldsymbol{y}[i]} $$

###### 训练样本集的对数似然函数

-  则可得对数似然函数：

    $$LL(\boldsymbol{\omega}) = \sum_{j=1}^m \sum_{i=1}^k \boldsymbol{y}[i] \ln (\frac {e^{\boldsymbol{\omega}_i^T \boldsymbol{x}_j}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}_j}})$$


#### 极大似然估计-参数预估

- 使用极大似然估计预估参数$\boldsymbol{\omega}^*$

    $$LL(\boldsymbol{\omega}^*) = \max_{\boldsymbol{\omega}} \space LL(\boldsymbol{\omega})$$

- 也就等价于: 

    $$\begin{aligned}  &\min_{\boldsymbol{\omega}}\space -LL(\boldsymbol{\omega}) \\ 即 &\min_{\boldsymbol{\omega}}\space - \sum_{j=1}^m \sum_{i=1}^k \boldsymbol{y}[i] \ln (\frac {e^{\boldsymbol{\omega}_i^T \boldsymbol{x}_j}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}_j}}) \end{aligned}$$

##### 总体损失函数

- 令$E(\boldsymbol{\omega}_1, \boldsymbol{\omega}_2, ···, \boldsymbol{\omega}_k)$表示Softmax Regression对于训练集的总损失函数：

    $$E(\boldsymbol{\omega}_1, \boldsymbol{\omega}_2, ···, \boldsymbol{\omega}_k) = - \sum_{j=1}^m \sum_{i=1}^k \boldsymbol{y}[i] \ln (\frac {e^{\boldsymbol{\omega}_i^T \boldsymbol{x}_j}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}_j}})$$

    该式也被称为交叉熵损失函数。可证该式是凸函数。

##### 单样本损失函数

- 对于单个样本 $(\boldsymbol{x}, y)$ 的损失函数$e(\boldsymbol{\omega}_1, \boldsymbol{\omega}_2, ···, \boldsymbol{\omega}_k)$：

    $$\begin{aligned} e(\boldsymbol{\omega}_1, \boldsymbol{\omega}_2, ···, \boldsymbol{\omega}_k) &= - \sum_{i=1}^k \boldsymbol{y}[i] \ln (\frac {e^{\boldsymbol{\omega}_i^T \boldsymbol{x}}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}}}) \\ &= - \sum_{i=1}^k \boldsymbol{y}[i](\boldsymbol{\omega}_i^T \boldsymbol{x} - \ln (\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}})) \\ &= \ln (\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}}) - \boldsymbol{\omega}_i^T \boldsymbol{x} \qquad (因为\boldsymbol{y}是one-hot编码)  \end{aligned}$$

###### 梯度

- 对$\boldsymbol{\omega}_p$计算一阶导数 $(p = 1,2,···,k)$：
    - 当$i=p$时：

        $$\frac {\partial e(\boldsymbol{\omega})}{\partial \boldsymbol{\omega}_p} = \frac {\boldsymbol{\omega}_p^T \boldsymbol{x}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}}} \boldsymbol{x} - \boldsymbol{x}$$

        可以发现，其实此时 $\boldsymbol{y}[p] = 1$
    
    - 当$i\neq p$时：

        $$\frac {\partial e(\boldsymbol{\omega})}{\partial \boldsymbol{\omega}_p} = \frac {\boldsymbol{\omega}_p^T \boldsymbol{x}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}}} \boldsymbol{x}$$

        此时 $\boldsymbol{y}[p] = 0$

    - 统一写为：

        $$\begin{aligned} \frac {\partial e(\boldsymbol{\omega})}{\partial \boldsymbol{\omega}_p} &= \frac {\boldsymbol{\omega}_p^T \boldsymbol{x}}{\sum_{t=1}^k e^{\boldsymbol{\omega}_t^T \boldsymbol{x}}} \boldsymbol{x} - \boldsymbol{y}[p]\boldsymbol{x} \\ &= (\boldsymbol{y}^*[p] - \boldsymbol{y}[p])\boldsymbol{x} \end{aligned}$$                


###### 梯度下降法迭代求解

- 由于Softmax Regression涉及的参过较多，不方便计算二阶导数，因此这里使用梯度下降法来迭代求解，而不使用牛顿法

    $$\boldsymbol{\omega}_{p+1} = \boldsymbol{\omega}_p - \alpha \frac {\partial e(\boldsymbol{\omega})}{\partial \boldsymbol{\omega}_p}$$

