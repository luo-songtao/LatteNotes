---
title: SVM for classification
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, SVM]
tags: [SVM, classification]
math: true
mermaid: true
---


## SVM for classification

### Linearly Separable case 

#### The Largest Margin Principle

In the two-classclassification problem using linear models of the form

$$\begin{aligned} y(\boldsymbol{x}) = \boldsymbol{w}^T\phi(\boldsymbol{x}) + b \end{aligned}$$

where $\phi(\boldsymbol{x})$ denotes a fixed feature-space transformation, and we have made the bias parameter b explicit.

We shall assume for the moment that the training data set is linearly separable in feature space, so that by definition there exists at least one choice of the parameters $\boldsymbol{w}$ and $b$ such that this function satisfies $y(\boldsymbol{x}_n)> 0$ for points having $t_n = +1$ and $y(\boldsymbol{x}_n) < 0$ for points having $t_n = -1$, so that $t_ny(\boldsymbol{x}_n) > 0$ for all training data points.

- Margin: The support vector machine approaches this problem through the concept of the margin, which is defined to be the smallest distance between the decision boundary and any of the samples.
- Maximum Margin: In support vector machines the decision boundary is chosen to be the one for
which the margin is maximized.

The distance of a point xn to the decision surface is given by

$$\begin{aligned} d = \frac {t_n y(\boldsymbol{x}_n)}{\|\boldsymbol{w}\|} = \frac {t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b)}{\|\boldsymbol{w}\|} \end{aligned}$$

Thus the maximum margin solution is found by solving

$$\begin{aligned} \arg \max_{\boldsymbol{w}, b} \left \{ \frac 1{\|\boldsymbol{w}\|} \min_n[t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b)] \right\} \end{aligned}$$

- We can see, that if let $\boldsymbol{w}=k\boldsymbol{w},b=kb$, then the distance $d$ is unchanged. So we can use this freedom to set:

    $$\begin{aligned} t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b) = 1 \end{aligned}$$

    for the point that is closest to the surface. 

    - And then, all data points will statisfy the constraints

        $$\begin{aligned} t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b) \ge 1 \end{aligned}$$

The optimization problem then simply requires that we maximize $\|\boldsymbol{w}\|^{-1}$, which is equivalent to minimizing $\|\boldsymbol{w}\|^2$, and so we have to solve the optimization problem

$$\begin{aligned} \arg \min_{\boldsymbol{w}, b}& \qquad \frac 12 \|\boldsymbol{w}\|^2 \\ \text{S.t.}& \qquad t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b) \ge 1 \end{aligned}$$

应用拉格朗日乘子法定义拉格朗日函数：

$$\begin{aligned} L(\boldsymbol{w}, b, \boldsymbol{u}) = -\frac 12 \|\boldsymbol{w}\|^2 - \sum_{n=1}^N u_n [t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b) - 1]  \end{aligned}$$

- Note: 这是一个二次规划问题

Setting the derivatives of $L$ with respect to $\boldsymbol{w}, b$ equal to zero, we obtain the following two conditions:

$$\begin{aligned} \boldsymbol{w} &= \sum_{n=1}^N a_nt_n\phi(\boldsymbol{x}_n) \\ 0 &= \sum_{n=1}^N a_n t_n \end{aligned}$$

Dual Representation and Kernel Function

- Eliminating $\boldsymbol{w}, b$ from $L(\boldsymbol{w}, b, \boldsymbol{a})$
- 得到 Dual Representaion of the Maximum margin problem in which we maximize:

    $$\begin{aligned} \max& \qquad\tilde{L}(\boldsymbol{a}) = \sum_{n=1}^N a_n - \frac 12 \sum_{n=1}^N\sum_{m=1}^N a_na_mt_nt_m k(\boldsymbol{x}_n, \boldsymbol{x}_m) \\ \text{S.t.}&\qquad a_n \ge 0 \\ &\qquad \sum_{n=1}^N a_nt_n = 0 \end{aligned}$$

  - Here $k(\boldsymbol{x}_n, \boldsymbol{x}_m) = \phi(\boldsymbol{x}_n)^T\phi(\boldsymbol{x}_m)$


- Classify new data points:

    $$\begin{aligned} y(\boldsymbol{x}) = \sum_{n=1}^N a_n t_n k(\boldsymbol{x}, \boldsymbol{x}_n) + b \end{aligned}$$


This constrained optimization problem statisfies the Karush-Kuhn-Tucker (KKT) conditions, that is :

$$\begin{aligned} a_n &\ge 0 \\ t_ny(\boldsymbol{x}_n) - 1 & \ge 0 \\ a_n\{t_ny(\boldsymbol{x}_n) - 1\} &= 0 \end{aligned}$$

- Thus for every data point, either $a_n=0$ or $t_ny(\boldsymbol{x}_n) = 1$

- Support Vectors: satisfy $t_ny(\boldsymbol{x}_n) = 1$


解决上述的二次规划问题后，得到$\hat{\boldsymbol{a}}$, 那么对于所有的$a_n \gt 0$的项及对应的$x_n$将构成支持向量集合$\mathcal{S}$

根据支持向量集合$\mathcal{S}$计算$b$: using $t_n^2 = 1$

$$\begin{aligned} t_n\left(\sum_{m\in \mathcal{S}} a_m t_m k(x_n, x_m) +b \right) &= 1 \\ t_n^2\left(\sum_{m\in \mathcal{S}} a_m t_m k(x_n, x_m) +b \right) &= t_n \end{aligned}$$

- we can obtain

$$\begin{aligned} b = t_n - \sum_{m\in \mathcal{S}} a_m t_m k(x_n, x_m) \end{aligned}$$

- a numerically more stable solution is obtained by averaging:

$$\begin{aligned} b = \frac 1{N_{\mathcal{S}}} \sum_{m\in \mathcal{S}} \left(t_n - \sum_{m\in \mathcal{S}} a_m t_m k(x_n, x_m) \right)\end{aligned}$$

#### Error functoin view

For later comparison with alternative models, we can express the maximummargin classifier in terms of the minimization of an error function, with a simple quadratic regularizer, in the form

$$\begin{aligned} \sum_{n=1}^N E_{\infty}(y(\boldsymbol{x_n})t_n - 1) + \lambda \|\boldsymbol{w}\|^2 \end{aligned}$$

- $E_{\infty}(z)$ is a function that is zero if $z\ge 0$ else $\infty$ and ensures that $t_n(\boldsymbol{w}^T\phi(\boldsymbol{x}_n) + b) \ge 1$ are statisfied.


### Nonlinear Separable case


#### Slack Variables

Introduce slack variables $\xi_n \ge 0$

- $\xi = 0$: points are on or inside the correct margin boundary
- $\xi \in (0,1)$: between correct margin boundary and decision boundary
- $\xi = 1$: on the decision boundary
- $\xi > 1$: points are missclassified

New Classification Constraints: Soft Margin Constraints

$$\begin{aligned} t_n y(\boldsymbol{x}_n) \ge 1 - \xi_n \end{aligned}$$

- Note: contrast to Hard Margin Constraints  $t_n y(\boldsymbol{x}_n) \ge 1$

#### Original Problem

Our goal is now to maximize the margin while softly penalizing points that lie on the wrong side of the margin boundary.

$$\begin{aligned} \min&\qquad  C\sum_{n=1}^N \xi_n  + \frac 12 \|\boldsymbol{w}\|^2 \\ \text{S.t.} & \qquad t_n y(\boldsymbol{x}_n) \ge 1 - \xi_n \\ &\qquad C > 0 \\ & \qquad \xi_n \ge 0 \end{aligned}$$

where the parameter $C > 0$ controls the trade-off between the slack variable penalty and the margin.

  - Because any point that is misclassified has $\xi_n> 1$ , it follows that $\sum_n \xi_n$ is an upper bound on the number of misclassified points. The parameter $C$ is therefore analogous to (the inverse of) a regularization  coefficient because it controls the trade-off between minimizing training errors and controlling model complexity. In the limit $C \rightarrow \infty$, we will recover the earlier support vector machine for separable data.

Lagrangian function:

$$\begin{aligned} L(\boldsymbol{w}, b, \boldsymbol{a}) = \frac 12 \|\boldsymbol{w}\|^2 + C\sum_{n=1}^N \xi_n -\sum_{n=1}^N a_n(t_n y(\boldsymbol{x}_n) - 1 + \xi_n) -\sum+{n=1}^n \mu_n \xi_n \end{aligned}$$

- With KKT conditions:

    $$\begin{aligned} a_n &\ge 0 \\ t_n y(\boldsymbol{x}_n) - 1 + \xi_n &\ge 0 \\ a_n(t_n y(\boldsymbol{x}_n) - 1 + \xi_n) &= 0 \\ \mu_n &\ge 0\\ \xi_n &\ge 0\\ \mu_n\xi_n &= 0 \end{aligned}$$

- optimize out $\boldsymbol{w}$, $b$, and ${\xi_n}$

    $$\begin{aligned} \frac {\partial L}{\partial \boldsymbol{w}} = 0 &\Rightarrow  \boldsymbol{w} = \sum_{n=1}^N a_nt_n\phi_n \\ \frac {\partial L}{\partial b} = 0 &\Rightarrow \sum_{n=1}^N a_nt_n = 0 \\ \frac {\partial L}{\partial \xi_n} = 0 &\Rightarrow a_n = C-\mu_n \\ &\Rightarrow a_n \le C \end{aligned}$$

#### Dual Problem

eliminate $\boldsymbol{w}$, $b$, and ${\xi_n}$ from $L$

$$\begin{aligned} \max& \qquad\tilde{L}(\boldsymbol{a}) = \sum_{n=1}^N a_n - \frac 12 \sum_{n=1}^N\sum_{m=1}^N a_na_mt_nt_m k(\boldsymbol{x}_n, \boldsymbol{x}_m) \\ \text{S.t.}&\qquad 0 \le a_n \le C \\ &\qquad \sum_{n=1}^N a_nt_n = 0 \end{aligned}$$

- WOW, which is identical to the separable case, except that $a_n$ has a box constraints as $0 \le a_n \le C$.

And also, 同样是一个二次规划问题 

Support Vectors: 在所有的$a_n>0$中，判断：
- $a_n < C \Longrightarrow \mu>0 \Longrightarrow \xi_n=0$: on the margin boundary
- $a_n = C \Longrightarrow \mu=0 \Longrightarrow \xi_n > 0$:
  - $\xi \le 1$: correctly clssified
  - $\xi_n > 1$: misclassified

- 换句话说，我只对$0< a_n < C$所对应的$\boldsymbol{x}_n$感兴趣......

所有总结如下：
- 先求对偶问题-二次规划解，得到$\hat{\boldsymbol{a}}$
- 对满足$0< a_n < C$条件的，用来计算$\boldsymbol{w}，b$，和前面一样
- 其中同样用核函数，来表示$\boldsymbol{w}$所对应的结果，也和前面一样

与数据线性可分情况相比，唯一区别在于，限制了$a_n$的最大值，从而引入误分类点和边界内的点对决策边界的影响。如果$C$非常大，那么将等于没有任何影响，等价于解决数据线性可分情况，换句话说，此时忽略了所有误分类点和边界内的点。

### $\nu$-SVM

$$\begin{aligned} \max& \qquad\tilde{L}(\boldsymbol{a}) = - \frac 12 \sum_{n=1}^N\sum_{m=1}^N a_na_mt_nt_m k(\boldsymbol{x}_n, \boldsymbol{x}_m) \\ \text{S.t.}&\qquad 0 \le a_n \le \frac 1N \\ &\qquad \sum_{n=1}^N a_n \ge \nu \\ &\qquad \sum_{n=1}^N a_nt_n = 0 \end{aligned}$$

This approach has the advantage that the parameter $\nu$, which replaces $C$, can be interpreted as both an upper bound on the fraction of margin errors(points for which $\xi_n > 0$ and hence which lie on the wrong side of the margin boundary and which may or may not be misclassified) and a lower bound on the fraction of support vectors


