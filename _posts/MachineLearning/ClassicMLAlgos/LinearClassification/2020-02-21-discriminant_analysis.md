---
title: Discriminant Analysis
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, Discriminant Analysis]
tags: [FLDA, LDA]
math: true
mermaid: true
---

## Discriminant Analysis

#### Least Square for classification

- Each class has a linear model:

    $$\begin{aligned} y_k = \boldsymbol{w}_k^T\boldsymbol{x}_k + w_0 \end{aligned}$$

    - In total:
    
        $$\begin{aligned} \boldsymbol{y}(\boldsymbol{x}) = W^T\boldsymbol{x} \end{aligned}$$
      
    - where $W$ is a $M\times K$ matrix

- Error function: Sum of Square error

    $$\begin{aligned} E_D(W) = \frac 12 \text{Tr}[(XW-Y)^T(XW-Y)] \end{aligned}$$
    - Where $X$ is a $N\times M$ matrix, $Y$ is a $N\times K$ matrix

    - Solution:
  
    $$\begin{aligned} \hat{W} = (X^TX)^{-1}X^T Y \end{aligned}$$

- The discriminant function:
  
    $$\begin{aligned} \boldsymbol{y}(\boldsymbol{x}) &= \hat{W}^T\boldsymbol {x} \\&= Y^TX(X^TX)^{-1}(\boldsymbol{x})  \end{aligned}$$


#### Finsher Linear Discriminant

- 有监督降维降维方法

- Assumptions: 
  - normally distributed classes
  - equal class covariances

- Project $\boldsymbol{x}$ down to K-dimension, and maximizes the class separation

  - Maximize the projected class means ( maximize the between-calss variance) and minimize the within-class variance
  - Fisher criterion: The ratio of between-calss variance and within-class variance

- Two class case:
  
  - Project $\boldsymbol{x}$ down to one dimension using:
    
    $$\begin{aligned} y = \boldsymbol{w}^T\boldsymbol{x} \end{aligned}$$

  - Fisher Criterion

    $$\begin{aligned} J(\boldsymbol{w}) &= \frac {[\boldsymbol{w}^T(\boldsymbol{m}_1-\boldsymbol{m}_2)]^2}{s_1^2 + s_2^2} \\\\ s_k^2 &= \sum_{n\in C_k} [\boldsymbol{w}^T(\boldsymbol{x}_n - \boldsymbol{m}_k)]^2  \end{aligned}$$

  - also, we can write:
  
    $$\begin{aligned} J(\boldsymbol{w}) &= \frac {\boldsymbol{w}^TS_B\boldsymbol{w}}{\boldsymbol{w}^TS_W\boldsymbol{w}} \\ S_B &= (\boldsymbol{m}_2-\boldsymbol{m}_1)(\boldsymbol{m}_2-\boldsymbol{m}_1) \\ S_W &= \sum_k \sum_{n\in C_K} (\boldsymbol{x}_n-\boldsymbol{m}_k) (\boldsymbol{x}_n-\boldsymbol{m}_k)^T \end{aligned}$$

  - Differentiation with respect to $\boldsymbol{w}$ and equate to zero, we can obtain:
  
    $$\begin{aligned} S_B\boldsymbol{w} &= \lambda S_W \boldsymbol{w} \\ \boldsymbol{w} &\propto S_W^{-1}(\boldsymbol{m}_2-\boldsymbol{m}_1) \end{aligned}$$

    - 通常只在乎$\boldsymbol{w}$的方向, 所以:

        $$\boldsymbol{w} = S_W^{-1}(\boldsymbol{m}_2-\boldsymbol{m}_1)$$

- Multiple class case

    - Projection Matrix $W$ which maps from $D$ to $L$ so as to maximize:
    
        $$\begin{aligned}  J(W) &= \text{Tr}\left\{ (WS_W W^T)^{-1} (WS_BW^T) \right\} \\\\ S_B &= \sum_k \frac {N_k}{N} (\boldsymbol{m}_k-\boldsymbol{m})(\boldsymbol{m}_k-\boldsymbol{m})^T \\ S_{k} &= \frac 1{N_k} \sum_{n\in C_k} (\boldsymbol{x}_n-\boldsymbol{m})(\boldsymbol{x}_n-\boldsymbol{m})^T \\ S_W &= \sum_k \frac {N_k}{N} S_{k}  \end{aligned}$$

    - Solution:

        $$\begin{aligned} W &= S_W^{-1/2}U \end{aligned}$$

        - $U$ are the $L$ leading eigenvactors of $S_W^{-1/2}S_BS_W^{-1/2}$, and assume $S_W$ is non-singular.


#### Perceptron Algorithm

$$\begin{aligned} y(\boldsymbol{x}) = f(\boldsymbol{w}^T\phi(\boldsymbol{x}))  \end{aligned}$$

- $f(a)$ is a step function, if $a\ge 0, f(a) = 1$, else $-1$

- Error Function: Perceptron Criterion
  
    $$\begin{aligned} E(\boldsymbol{w}) = -\sum_{n\in \mathcal{M}}\boldsymbol{w}^T\phi(\boldsymbol{x})t_n  \end{aligned}$$

  - Where $\mathcal{M}$ denotes the set of all misclassified patterns.

- Optimal: SGD

    $$\begin{aligned} \boldsymbol{w}^{(n+1)} = \boldsymbol{w}^{(n)} - \eta \nabla E = \boldsymbol{w}^{(n)} + \eta \phi_n t_n \end{aligned}$$

