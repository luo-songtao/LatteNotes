---
title: SVM for Regression
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, SVM]
tags: [SVM, regression]
math: true
mermaid: true
---

## SVM for Regression

#### Using $\epsilon$-insensitive error function

$\epsilon$-insensitive can lead to sparse solutions

$$\begin{aligned} \min &\qquad C\sum_{n=1}^N (\xi_n + \widehat{\xi}_n) + \frac 12 \| \boldsymbol{w}\|^2 \\ \text{S.t.}&\qquad \xi_n \ge 0 \\&\qquad \widehat{\xi}_n \ge 0 \\ &\qquad t_n \le y(\boldsymbol{x}_n) + \epsilon + \xi_n \\ &\qquad t_n \ge y(\boldsymbol{x}_n) - \epsilon - \widehat{\xi}_n \end{aligned}$$

- $\xi_n > 0$: corresponds to a point for which $t_n \gt y(\boldsymbol{x}_n) + \epsilon$
- $\widehat\xi_n > 0$: corresponds to a point for which $t_n \lt y(\boldsymbol{x}_n) - \epsilon$

#### Origional Problem

- Let $y_n = y(\boldsymbol{x}_n) = \boldsymbol{w}_n^T\boldsymbol{x}_n + b$

$$\begin{aligned} L =& C\sum_{n=1}^N (\xi_n + \widehat{\xi}_n) + \frac 12 \| \boldsymbol{w}\|^2 - \sum_{n=1}^N(\mu_n\xi_n + \widehat\mu_n\widehat\xi_n) \\ & -\sum_{n=1}^N a_n(\epsilon + \xi_n + y_n - t_n) -\sum_{n=1}^N \widehat a_n(\epsilon+\widehat{\xi}_n-y_n+t_n)  \end{aligned}$$

- Also set derivatives and ...

$$\begin{aligned} \frac {\partial L}{\partial \boldsymbol{w}} = 0 &\Rightarrow  \boldsymbol{w} = \sum_{n=1}^N (a_n-\widehat a_n)\phi_n \\ \frac {\partial L}{\partial b} = 0 &\Rightarrow \sum_{n=1}^N (a_n-\widehat a_n) = 0 \\ \frac {\partial L}{\partial \xi_n} = 0 &\Rightarrow a_n = C-\mu_n  \Rightarrow a_n \le C  \\ \frac {\partial L}{\partial \widehat\xi_n} = 0 &\Rightarrow \widehat a_n = C-\widehat\mu_n  \Rightarrow \widehat a_n \le C  \end{aligned}$$

#### Dual Problem

$$\begin{aligned} \widetilde L(\boldsymbol{a}, \widehat\boldsymbol{a}) =& -\frac 12 \sum_{n=1}^N\sum_{m=1}^N (a_n - \widehat{a}_n)(a_m - \widehat{a}_m)k(\boldsymbol{x}_n, \boldsymbol{x}_m) \\ &- \epsilon\sum_{n=1}^N (a_n +\widehat{a}_n) + \sum_{n=1}^N (a_n-\widehat{a}_n)t_n  \end{aligned}$$

- Again, we have the box constraints

    $$\begin{aligned} & 0\le a_n \le C \\ & 0\le \widehat a_n \le C \end{aligned}$$

#### Corresponding KKT conditions

$$\begin{aligned} a_n(\epsilon + \xi_n + y_n - t_n) &= 0 \\ \widehat a_n(\epsilon+\widehat{\xi}_n-y_n+t_n) &= 0\\ (C-a_n)\xi_n &= 0 \\ (C-\widehat a_n)\widehat \xi_n &= 0 \end{aligned}$$

- Support Vectors: for all 
  - $0\lt a_n \lt C\Rightarrow \epsilon + \xi_n + y_n - t_n = 0 \Rightarrow \xi_n = 0$: lie on upper boundary of $\epsilon$-tube
  - $0\lt \widehat a_n \lt C \Rightarrow \epsilon + \widehat\xi_n + y_n - t_n = 0 \Rightarrow \widehat\xi_n = 0$: lie on lower boundary of $\epsilon$-tube

#### The Predictions for new inputs

$$\begin{aligned} y(\boldsymbol{x}) = \sum_{n=1}^N (a_n-\widehat a_n)k(\boldsymbol{x}, \boldsymbol{x}_n) +b \end{aligned}$$

$$\begin{aligned} b &= t_n -\epsilon - \boldsymbol{w}^T\phi_n \\&= t_n \epsilon -\sum_{n=1}^N (a_m-\widehat a_m)k(\boldsymbol(x)_n, \boldsymbol{x}_m) \end{aligned}$$

### $\nu N$-SVM

$$\begin{aligned} \widetilde L(\boldsymbol{a}, \widehat\boldsymbol{a}) =& -\frac 12 \sum_{n=1}^N\sum_{m=1}^N (a_n - \widehat{a}_n)(a_m - \widehat{a}_m)k(\boldsymbol{x}_n, \boldsymbol{x}_m) + \sum_{n=1}^N (a_n-\widehat{a}_n)t_n  \end{aligned}$$

- subject to the constraints:

    $$\begin{aligned} & 0\le a_n \le C/N \\ & 0\le \widehat a_n \le C/N \\ & \sum_{n=1}^N(a_n-\widehat{a}_n) = 0 \\ & \sum_{n=1}^N (a_n + \widehat{a}_n) \le \nu C \end{aligned}$$

It can be shown that there are at most $\nu N$ data points falling outside the $\epsilon$-insensitive tube, while at least $\nu N$ data points are support vectors and so lie either on the tube or outside it
