---
title: Dual Representations of Linear Models
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, Linear Models]
tags: [Kernel]
math: true
mermaid: true
---

## Dual Representations of Linear Models

- Many linear models for regression and classification can be reformulated in terms of a dual representation in which the kernel function arises naturally.


- For example: the regularized sum-of-squared error function of linera regression model

    $$\begin{aligned} J(\boldsymbol{w}) &= \frac 12 \sum_{n=1}^N \left( \boldsymbol{w}^T\phi(\boldsymbol{x}_n) -t_n \right) + \frac \lambda 2 \boldsymbol{w}^T\boldsymbol{w} \\ \\ \boldsymbol{w} &= -\frac 1\lambda \sum_{n=1}^N \left( \boldsymbol{w}^T\phi(\boldsymbol{x}_n) -t_n \right)\phi(\boldsymbol{x}_n) = \sum_{n=1}^N a_n\phi_n = \Phi^T\boldsymbol{a} \\ \boldsymbol{a} &= -\frac 1\lambda \left( \boldsymbol{w}^T\phi(\boldsymbol{x}_n) -t_n \right) \\ \\ \text{then}: &\\ J(\boldsymbol{a}) &= \frac 12 \boldsymbol{a}^T\Phi\Phi^T\Phi\Phi^T\boldsymbol{a} -\boldsymbol{a}^T\Phi\Phi^T\mathbf{t} + \frac 12 \mathbf{t}^T\mathbf{t} + \frac \lambda 2 \boldsymbol{a}^T\Phi\Phi^T \boldsymbol{a} \\\\J(\boldsymbol{a}) &= -\frac12 \boldsymbol{a}^TKK\boldsymbol{a} - \boldsymbol{a}^TK\mathbf{t} + \frac 12 \mathbf{t}^T\mathbf{t} + \frac \lambda 2 \boldsymbol{a}^TK \boldsymbol{a} \\ \\ \boldsymbol{a} &= (K+\lambda I_N)^{-1}\mathbf{t} \end{aligned}$$


    - where $\Phi$ is the design matrix
    - $K$ is the Gram matrix: $K=\Phi\Phi^T$, and kernel function $k(x,x')$
  
        $$\begin{aligned} K_{nm} = \phi(\boldsymbol{x}_n)^T\phi(\boldsymbol{x}_m) = k(\boldsymbol{x}_n,\boldsymbol{x}_m) \end{aligned}$$

    - finally:

        $$\begin{aligned} y(\boldsymbol{x}) &= \boldsymbol{w}^T\phi(\boldsymbol{x}) \\&= \boldsymbol{a}^T\Phi\phi(\boldsymbol{x}) \\&= \boldsymbol{k}(\boldsymbol{x})^T (K+\lambda I_N)^{-1}\mathbf{t} \\ \boldsymbol{k}_n(\boldsymbol{x}) &= k(\boldsymbol{x}_n, \boldsymbol{x}) \end{aligned}$$

- The advantage of the dual representation is that it is expressed entirely in terms of kernel function $k(x,x')$
- The existence of a dual representation based on the Gram matrix is a property of many linera models, including the perceptron.

$$\begin{aligned} \end{aligned}$$