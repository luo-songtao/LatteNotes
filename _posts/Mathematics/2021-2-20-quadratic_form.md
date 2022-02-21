---
title: Quadratic Form
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Quadratic Form]
tags: [Quadratic Form]
math: true
mermaid: true
---

## 二次型

#### 二次型（Quadratic form）

- 数域$F$上的一个$n$元二次型是系数在$F$中的$n$个变量的二次齐次多项式，其一般形式为：

  $$\begin{aligned} f(x_1, x_2, \cdots, x_n) = a_{11}x_1^2 + 2a_{12}x_1x_2+2a_{13}x_1x_3+\cdots+2a_{1n}x_1x_n &\\ + a_{22}x_2^2+ 2a_{23}x_2x_3+\cdots+2a_{2n}x_2x_n& \\ + \cdots \qquad  \cdots \qquad  \cdots \qquad& \\ + a_{nn}x_n^2  \end{aligned}$$

  也即:

  $$\begin{aligned} f(x_1, x_2, \cdots, x_n) = \sum_{i=1}^n\sum_{j=1}^na_{ij}x_ix_j \qquad 其中a_{ij}=a{ji}  \end{aligned}$$

- 现在把上式中的系数按照原来的顺序排成一个$n$阶矩阵$\boldsymbol{A}$：

  $$\boldsymbol{A} = \left [\begin{matrix} a_{11}& a_{12}& a_{13}& \cdots& a_{1n} \\ a_{21}& a_{22}& a_{23}& \cdots& a_{2n} \\ \vdots& \vdots& \vdots& \cdots& \vdots \\ a_{n1}& a_{n2}& a_{n3}& \cdots& a_{nn} \end{matrix}\right]$$

  则称矩阵$\boldsymbol{A}$为**二次型$f(x_1, x_2, \cdots, x_n)$的矩阵**。显然根据定义，矩阵$\boldsymbol{A}$是一个对称矩阵

- 令：

  $$\boldsymbol{x} = \left [\begin{matrix} x_1 \\x_2 \\ \vdots \\ x_n \end{matrix}\right]$$

  则二次型可以写成：

  $$f(x_1, x_2, \cdots, x_n) = \boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x} \qquad \boldsymbol{A}是对称矩阵$$

#### 二次型等价

- 非退化线性替换

  - 对于$F^n$中的$\boldsymbol{x}=(x_1,x_2,\cdots,x_n)^T,\boldsymbol{y}=(y_1,y_2,\cdots,y_n)^T$，矩阵$\boldsymbol{P}$是数域$F$上的$n$阶可逆矩阵，则关系式：

    $$\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$$

    称为变量$\boldsymbol{x}$到变量$\boldsymbol{y}$的一个非退化线性替换

- 二次型的变量代换

  $$f(x_1, x_2, \cdots, x_n) = \boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}=(\boldsymbol{P}\boldsymbol{y})^T\boldsymbol{A}\boldsymbol{P}\boldsymbol{y}=\boldsymbol{y}^T(\boldsymbol{P}^T\boldsymbol{A}\boldsymbol{P})\boldsymbol{y} \qquad \boldsymbol{A}是对称矩阵$$

  - 令$\boldsymbol{B}=\boldsymbol{P}^T\boldsymbol{A}\boldsymbol{P}$，矩阵$\boldsymbol{B}$是对称矩阵，因此矩阵$\boldsymbol{B}$是二次型$f(y_1, y_2, \cdots, y_n)$的矩阵
    - 对称矩阵证明：$\boldsymbol{B}^T = \boldsymbol{P}^T\boldsymbol{A}^T\boldsymbol{P}=\boldsymbol{P}^T\boldsymbol{A}\boldsymbol{P}=\boldsymbol{B}$

- 二次型等价
  
- 数域$F$上两个$n$元二次型$f(x_1, x_2, \cdots, x_n)$和$f(y_1, y_2, \cdots, y_n)$，即$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$和$\boldsymbol{y}^T\boldsymbol{B}\boldsymbol{y}$，如果存在一个非退化线性退换$\boldsymbol{x}=\boldsymbol{P}\boldsymbol{y}$，将$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$转换为$\boldsymbol{y}^T\boldsymbol{B}\boldsymbol{y}$，则称$n$元二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$和$\boldsymbol{y}^T\boldsymbol{B}\boldsymbol{y}$**等价**，记作$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x} \cong  \boldsymbol{y}^T\boldsymbol{B}\boldsymbol{y}$
  
- 二次型等价充要条件
  
  - 数域$F$上两个$n$元二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$和$\boldsymbol{y}^T\boldsymbol{B}\boldsymbol{y}$等价，当且仅当$n$阶对称矩阵$\boldsymbol{A}$与$\boldsymbol{B}$合同（即$\boldsymbol{A}=\boldsymbol{P}^T\boldsymbol{B}\boldsymbol{P}\qquad 其中\boldsymbol{P}可逆$）

#### 二次型标准形（Standard form）

- 如果二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$等价于一个只含平方项的二次型$\boldsymbol{x}^T\boldsymbol{B}\boldsymbol{x}$（即矩阵$\boldsymbol{B}$是一个对角矩阵），则称该二次型是二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$的一个**标准形**

- 实数域上的$n$元二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$有一个标准形为：

  $$\sum_{i=1}^n \lambda_iy_i^2$$

  其中$\lambda_i,i=1,2,\cdots,n$是矩阵$\boldsymbol{A}$的全部特征值		

- 任意二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$都等价于一个只含平方项的二次型$\boldsymbol{x}^T\boldsymbol{B}\boldsymbol{x}$（即矩阵$\boldsymbol{B}$是一个对角矩阵）

  - 证明：根据任一对称矩阵都合同于一个对角矩阵+二次型等价的充要条件

#### 二次型的秩

- 二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$的任意标准形的矩阵(对角矩阵)的秩等于矩阵$\boldsymbol{A}$的秩。因此矩阵$\boldsymbol{A}$的秩也称为二次型的秩

#### 矩阵合同（Matrix congruence）

- 数域$F$上两个$n$阶矩阵$\boldsymbol{A}$和$\boldsymbol{B}$，如果存在一个$F$上的$n$阶可逆矩阵$\boldsymbol{P}$，使得：

  $$\boldsymbol{P}^T\boldsymbol{A}\boldsymbol{P}=\boldsymbol{B}$$

  则称矩阵$\boldsymbol{A}$与$\boldsymbol{B}$**合同(congruence)**，记作$\boldsymbol{A}\backsimeq\boldsymbol{B}$

- 对称矩阵与对角矩阵的合同关系
  - 数域$F$上任一对称矩阵都合同于一个对角矩阵
    - 可推：任意二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$都等价于一个只含平方项的二次型$\boldsymbol{x}^T\boldsymbol{B}\boldsymbol{x}$（即矩阵$\boldsymbol{B}$是一个对角矩阵）
  - 如果对称矩阵$\boldsymbol{A}$合同于一个对角矩阵，那么这个对角矩阵称为$\boldsymbol{A}$的一个**合同标准形**

- 矩阵合同的充要条件
  
  - 设矩阵$\boldsymbol{A}$和$\boldsymbol{B}$都是数域$F$上的$n$阶矩阵，那么矩阵$\boldsymbol{A}$合同于$\boldsymbol{B}$，当且仅当$\boldsymbol{A}$经过一系列的初等行、列变换可以变成$\boldsymbol{B}$。且此时只需对单位矩阵进行初等列变换得到的可逆矩阵$\boldsymbol{P}$，就可使得$\boldsymbol{P}^T\boldsymbol{A}\boldsymbol{P}=\boldsymbol{B}$

#### 二次型的规范形（Canonical form）

- 已知一个二次型的标准形是不唯一的，这跟所做的非退化线性替换有关。标准形的矩阵其实就是一个对角矩阵。

- 实二次型的规范形

  - 现在假设将一个$n$元实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$经过一个适当的非退化线性替换化成下述形式：

    $$d_1y_1^2+d_2y_2^2+\cdots+d_py_p^2-d_{p+1}y_{p+1}^2-\cdots-d_ry_r^2 \\ \qquad d_i >0;i=1,2,\cdots,r;p\in\{1,2,\cdots,r\};r是矩阵\boldsymbol{A}的秩$$

  - 那么再做一次非退化线性替换：

    $$\begin{aligned} y_i &= \frac 1{\sqrt{d_i}}z_i \qquad  i=1,2,\cdots,r& \\ y_j &= z_j \qquad j=r+1,\cdots,n& \end{aligned}$$

  - 则二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$可表示为：

    $$z_1^2+\cdots+z_p^2-z_{p+1}^2-z_r^2$$

  - 这被称为实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$的规范形，其系数为$+1$、$-1$或$0$

- 惯性定理
  - $n$元实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$的规范形是唯一的
    - 正惯性指数：系数为$+1$的平方项个数，$p$
    - 负惯性指数：系数为$-1$的平方项个数，$r-p$
    - 符号差：正惯性指数$-$负惯性指数，$2p-r$
  - 惯性定理推论：
    - 两个$n$元实二次型等价 $\Longleftrightarrow$ 它们的规范形相同 $\Longleftrightarrow$ 它们的秩相等，且正惯性指数相等
    - $n$阶实对称矩阵$\boldsymbol{A}$合同于对角矩阵$\mathrm{diag}\{1,\cdots,1,-1,\cdots,-1,0,\cdots,0\}$
    - 两个$n$阶实对称矩阵合同、秩相等

- 复二次型的规范形

  - 现在假设将一个$n$元复二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$经过一个适当的非退化线性替换化成下述形式：

    $$d_1y_1^2+d_2y_2^2+\cdots+d_ry_r^2 \\ d_i \neq 0;i=1,2,\cdots,r;r是矩阵\boldsymbol{A}的秩$$

  - 设$d_j=r_j(\cos\theta_j+i\sin\theta_j)$，其中$0\le \theta_j \lt 2\pi$，可证：$d_j = [\pm \sqrt{r_j}(\cos\frac{\theta_j}{2}+i\sin\frac{\theta_j}{2})]^2$

  - 同样再做一次非退化线性退换：

    $$\begin{aligned} y_i &= \frac 1{\sqrt{d_i}}z_i \qquad  i=1,2,\cdots,r& \\ y_j &= z_j \qquad j=r+1,\cdots,n& \end{aligned}$$

  - 则二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$可表示为下述形式的标准形：

    $$z_1^2+z_2^2+\cdots+z_r^2$$

  - 这被称为复二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$的规范形，其系数为$+1$或$0$

- 复二次型的规范形性质
  - $n$元复二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$的规范形是唯一的
  - 两个$n$元复二次型等价 $\Longleftrightarrow$ 它们的规范形相同 $\Longleftrightarrow$ 它们的秩相等
  - 两个$n$阶复对称矩阵合同、秩相等

#### 正定二次型与正定矩阵

- $n$元实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$，如果对于$R^n$中任意非零列向量$\boldsymbol{\alpha}$，都有$\boldsymbol{\alpha}^T\boldsymbol{A}\boldsymbol{\alpha}>0$，则称该二次型是**正定二次型**
  - $n$元实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$正定，当且仅当它的正惯性指数等于$n$
  - $n$元实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$正定，当且仅当它的二次型矩阵的存在$n$个特征值且均为正
- $n$阶实对称矩阵$\boldsymbol{A}$，如果实二次型$\boldsymbol{x}^T\boldsymbol{A}\boldsymbol{x}$是正定的，则该实对称矩阵$\boldsymbol{A}$称为**正定矩阵**
  - 正定矩阵的行列式大于0
  - 与正定矩阵合同的实对称矩阵也是正定矩阵
  - 与正定二次型等价的实二次型也是正定的
  - 实对称矩阵$\boldsymbol{A}$正定的充要条件是：$\boldsymbol{A}$的所有顺序主子式全大于$0$

- 正定：标准形的系数全部为正，满秩的
- 半正定：标准形的系数全部非负，不满秩的
- 负定：标准形的系数全部为负，满秩的
- 负半定：标准形的系数全部非正，不满秩的
- 不定：标准形的系数既有正、也有负。如果没有系数为0，则满秩；反之，不满秩

