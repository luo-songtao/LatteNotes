---
title: Matrix Determinant
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Matrix]
tags: [Determinant]
math: true
mermaid: true
---

## 行列式

#### 完全展开式

$$\begin{aligned} \rm{det} A =\vert A \vert= \left\vert\begin{matrix} &a_{11} \space &a_{12} \space &\cdots \space &a_{1n} \\ &a_{21} \space &a_{22} \space &\cdots \space &a_{2n} \\ &\vdots \space &\vdots \space &\cdots \space &\vdots \\ &a_{n1} \space &a_{n2} \space &\cdots \space &a_{nn}  \end{matrix}\right\vert = \sum_{j_1j_2\cdots j_n}(-1)^{\tau(j_1j_2\cdots j_n)}a_{1j_1}a_{2j_2}\cdots a_{nj_n} \end{aligned}$$

- 上式称为行列式的**完全展开式**
- $j_1j_2\cdots j_n$表示$1\sim n$的$n$元排列
- $\tau(j_1j_2\cdots j_n)$表示$n$元排列的逆序数

#### 行列式的性质

- 行列互换，行列式值不变
- 行列式一行的公因子可以提取出去
- 行列式中若某一行是两组数的和，则此行列式等于两个行列式的和，这两个行列式的这一行分别是第一组数和第二组数
- 两行互换，行列式反号
- 两行相同，行列式的值为$0$
- 两行成比例，行列式的值为$0$
- 把一行的倍数加到另一行上，行列式的值不变

#### 按一行(列)展开式

- **余子式**
  
- $n$阶矩阵中$\boldsymbol{A}$，划去第$i$行和第$j$列，剩下的元素按原来次序组成的$n-1$阶矩阵的行列式称为矩阵$\boldsymbol{A}$的$(i,j)$元的**余子式**，记作$M_{ij}$
  
- **代数余子式**
  
- 令$\boldsymbol{A}_{ij} = (-1)^{i+j}M_{ij}$，则$A_{ij}$称为矩阵$A$的$(i,j)$元的**代数余子式**
  
- **按行展开**

  $$\begin{aligned} \vert \boldsymbol{A}\vert &= a_{i1}A_{i1}+a_{i2}A_{i2}+\cdots +a_{in}A_{in} \\ &= \sum_{j=1}^n a_{ij}A_{ij}  \end{aligned}$$

- **按列展开**

  $$\begin{aligned} \vert \boldsymbol{A}\vert &= a_{1j}A_{1j} + a_{2j}A_{2j} + \cdots + a_{nj}A_{nj}  \\ &= \sum_{i=1}^n a_{ij}A_{ij} \end{aligned}$$

- **第$i$行与第$k$行$(k\neq i)$所有代数余子式的乘积之和为0**，即：

  $$\begin{aligned} \sum_{j=1}^n a_{ij}A_{kj} = 0 \qquad i\neq k \end{aligned}$$

  - 证明：上式等价于对将第$k$行替换为第$i$行元素所得到的矩阵计算行列式，由于存在相同的两行，因此行列式为$0$

#### 克拉默法则（Cramer‘s Rule）

- 数域$F$上的有$n$个方程的$n$元线性方程组有唯一解的充要条件是它的系数矩阵的行列式不等于$0$
  
- 推论：数域$F$上的有$n$个方程的$n$元齐次线性方程组**只有零解**的充要条件是它的系数矩阵的行列式不等于$0$；如果**有非零解**的充要条件是它的系数矩阵的行列式等于$0$
  
- 对于数域$F$上的有$n$个方程的$n$元线性方程组：$\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$

  - 令$\boldsymbol{B}_j$表示用$\boldsymbol{b}$替换系数矩阵$\boldsymbol{A}$的第$j$列所得的矩阵

  - 若$\vert \boldsymbol{A} \vert\neq 0$，该方程组有唯一解，且为：

    $$\left[ \frac {\vert \boldsymbol{B}_1 \vert}{\vert \boldsymbol{A} \vert},\frac {\vert \boldsymbol{B}_2 \vert}{\vert \boldsymbol{A} \vert},\cdots,\frac {\vert \boldsymbol{B}_n \vert}{\vert \boldsymbol{A} \vert}  \right]$$

    证明：

    $$\begin{aligned} 令\boldsymbol{x} &= \left[ \frac {\vert \boldsymbol{B}_1 \vert}{\vert \boldsymbol{A} \vert},\frac {\vert \boldsymbol{B}_2 \vert}{\vert \boldsymbol{A} \vert},\cdots,\frac {\vert \boldsymbol{B}_n \vert}{\vert \boldsymbol{A} \vert} \right] ，\boldsymbol{a}_i 表示第i个方程的系数向量，则： \\ \boldsymbol{a}_i^T\boldsymbol{x} &= \sum_{j=1}^n a_{ij}\frac {\vert \boldsymbol{B}_j \vert}{\vert \boldsymbol{A} \vert} \\ &= \frac {1}{\vert \boldsymbol{A}\vert}\sum_{j=1}^n a_{ij}(\sum_{k=1}^n b_k\boldsymbol{B}_{kj}) \\&=  \frac {1}{\vert \boldsymbol{A}\vert}\sum_{k=1}^n b_k(\sum_{j=1}^n a_{ij}\boldsymbol{B}_{kj}) \\ &= \frac {1}{\vert \boldsymbol{A}\vert} b_i \vert \boldsymbol{A}\vert \qquad 当k\neq i时,结果均为0\\&= b_i \end{aligned}$$

- **克拉默法则**：如果数域$F$上的有$n$个方程的$n$元线性方程组有唯一解，则它的系数矩阵的**行列式不等于$0$**，且该**唯一解**为：

  $$\left[ \frac {\vert \boldsymbol{B}_1 \vert}{\vert \boldsymbol{A} \vert},\frac {\vert \boldsymbol{B}_2 \vert}{\vert \boldsymbol{A} \vert},\cdots,\frac {\vert \boldsymbol{B}_n \vert}{\vert \boldsymbol{A} \vert}  \right]$$

#### 按$k$行(列)展开式

- **$k$阶子式**
  
  - $n$阶矩阵$\boldsymbol{A}$中任意取定$k$行$k$列$(1\le k \lt n)$，位于这些行和列的交叉处的$k^2$个元素按原来的排法组成的$k$阶矩阵的行列式称为$\boldsymbol{A}$的一个$k$阶子式
- **$k$阶子式的余子式**
  
  - 剩下的$n-k$阶矩阵的行列式称为$k$阶子式的余子式
- **$k$阶子式的代数余子式**
  
- $k$阶子式的余子式乘上$(-1)^{(i_1+i_2+\cdots+i_k)+(j_1+j_2+\cdots+j_k)}$则称为该$k$阶子式的代数余子式
  
- **Laplace定理**

  - 在$n$阶矩阵$\boldsymbol{A}$中，取定$k$行，则这$k$行元素形成的所有的$k$阶子式与它们各自的代数余子式的乘积之和等于$\vert\boldsymbol{A} \vert$

  - 推论：

    $$\left\vert\begin{matrix} \boldsymbol{A}\space\space \boldsymbol{0} \\ \boldsymbol{C}\space\space \boldsymbol{B} \end{matrix}\right\vert = \vert\boldsymbol{A}\vert\vert\boldsymbol{B}\vert$$



