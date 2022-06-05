---
title: Probabilistic Generative Model
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, Generative Model]
tags: [Logit，Softmax, Naive Bayes]
math: true
mermaid: true
---


## Probabilistic Generative Model

- Model the class-conditional densities $p(x\vert C_k )$, as well as the class priors $p(C_k)$

- The posterior probabilities: can obtained through Bayes' theorem

- $K = 2$
    
    $$\begin{aligned} p(C_1\vert x) &= \frac {p(x\vert C_1)p(C_1)}{p(x\vert C_1)p(C_1) + p(x\vert C_2)p(C_2)} \\ &= \frac {1}{1+\exp(-a)} \\&= \sigma(a) \\ \\ a &=\ln \frac {p(x\vert C_1)p(C_1)}{p(x\vert C_2)p(C_2)} = \ln \frac {p(C_1\vert x)}{p(C_2\vert x)} \end{aligned}$$

    - $a$ represents the log of the ratio of posterior probabilities for the two classes, also known as the **log oggs**
    - $\sigma$: **logistic sigmoid** function

- $K \ge 2$

    $$\begin{aligned} p(C_k\vert x) &= \frac {p(x\vert C_k)p(C_k)}{\sum_j p(x\vert C_j)p(C_j)} \\ &= \frac {\exp(a_k)}{\sum_j \exp(a_j)} \\ \\ a_k &= \ln p(x\vert C_k)p(C_k) \end{aligned}$$

### Application

#### Continuous inputs

- Under assumption:
  - share Covariance matrix
  - normally distributed classes
- we can obtain a probabilistic linear discriminant model 

    $$\begin{aligned} p(\boldsymbol{x} \vert C_k) = \mathcal{N} (\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma) \end{aligned}$$

    - Consider the case of two classes
        
        $$\begin{aligned} a =  \ln \frac {p(\boldsymbol{x} \vert C_1)p(C_1)}{p(\boldsymbol{x} \vert C_2)p(C_2)} &= \ln \frac {p(\boldsymbol{x} \vert C_1)}{p(\boldsymbol{x} \vert C_2)} + \ln \frac {p(C_1)}{p(C_2)} \\ &= -\frac 12 (\boldsymbol{x}-\boldsymbol{\mu}_1)^T\Sigma^{-1}(\boldsymbol{x}-\boldsymbol{\mu}_1) + \frac 12 (\boldsymbol{x}-\boldsymbol{\mu}_2)^T\Sigma^{-1}(\boldsymbol{x}-\boldsymbol{\mu}_2) + \ln \frac {p(C_1)}{p(C_2)} \\ &= (\boldsymbol{\mu}_1-\boldsymbol{\mu}_2)^T\Sigma^{-1}\boldsymbol{x} -\frac 12 \boldsymbol{\mu}_1\Sigma^{-1}\boldsymbol{\mu}_1 + \frac 12 \boldsymbol{\mu}_2\Sigma^{-1}\boldsymbol{\mu}_2 + \ln \frac {p(C_1)}{p(C_2)} \\ &= \boldsymbol{w}^T\boldsymbol{x} + b \\ \\ \\ \boldsymbol{w} &=  \Sigma^{-1}(\boldsymbol{\mu}_1-\boldsymbol{\mu}_2) \\ b &= -\frac 12 \boldsymbol{\mu}_1\Sigma^{-1}\boldsymbol{\mu}_1 + \frac 12 \boldsymbol{\mu}_2\Sigma^{-1}\boldsymbol{\mu}_2 + \ln \frac {p(C_1)}{p(C_2)} \end{aligned}$$

        - Then we have:

            $$\begin{aligned} p(C_1\vert \boldsymbol{x}) =\sigma(\boldsymbol{w}^T\boldsymbol{x} + b) \end{aligned}$$

        - The number of parameters is $2D + \frac {D^2-D}{2} + D + 1= \frac {D^2 + 5D}{2} + 1$
          - $\boldsymbol{\mu}_1$、$\boldsymbol{\mu}_2$、$\Sigma$
          - $p(C_1)$、$p(C_2)$

    - Consider the case of multiple classes

        $$\begin{aligned} p(C_k\vert \boldsymbol{x}) &=  \frac {p(x\vert C_k)p(C_k)}{\sum_j p(x\vert C_j)p(C_j)} \\ &= \frac {\exp(a_k)}{\sum_j \exp(a_j)} \\ \\ a_k &=\boldsymbol{w}_k^T\boldsymbol{x} + b_k \\ \\ \boldsymbol{w}_k &= \Sigma^{-1}\boldsymbol{\mu}_k \\ b_k &= -\boldsymbol{\mu}_k^T\Sigma^{-1}\boldsymbol{\mu}_k + \ln p(C_k) \end{aligned}$$

      - The number of parameters is $KD + \frac {D^2-D}{2} + D + K-1$
        - $\boldsymbol{\mu}_k$、$\Sigma$、$p(C_k)$


- Maximum Likelihood Estimatation

  - Dataset $\mathcal{D}$ and $\mathbf{t}$, $t_n\in \{0,1\}$

  - For case of two classes with gaussian and shared covariance assumption
    - Let $p(C_1) = \pi \in [0,1]$, then $p(C_2) = 1-\pi$
    
    $$\begin{aligned} p(\mathcal{D} \vert \boldsymbol{\theta}) &= \prod_{n=1}^N p(\boldsymbol{x}_n, C_1)^{t_n}p(\boldsymbol{x}_n, C_2)^{1-t_n} \\ &= \prod_{i=1}^N [\pi \mathcal{N}(\boldsymbol{x}_n\mid \boldsymbol{\mu}_1, \Sigma)]^{t_n} [(1-\pi) \mathcal{N}(\boldsymbol{x}_n\mid \boldsymbol{\mu}_2, \Sigma)]^{1-t_n} \end{aligned}$$

    - $\boldsymbol{\theta}$ denotes the parameters set $\{ \pi,\boldsymbol{\mu}_1 ,\boldsymbol{\mu}_2 ,\Sigma \}$

  - For case of multiple classes with gaussian and shared covariance assumption
    - Let $p(C_k) = \pi_k$, and $\pi_K = 1- \sum_{k=1}^{K-1} \pi_k$
    - Let $\mathbf{t}_n = (0,...,1,...,0)$, if $C_k = k$, then $t_{nk} = t_{n}[k]=1$ else $0$

        $$\begin{aligned} p(\mathcal{D}\vert \boldsymbol{\theta}) &= \prod_{n=1}^N\prod_{k}^K [\pi_k p(\boldsymbol{x}_n\vert C_k)]^{t_{nk}}   \end{aligned}$$

- Note: if without the assumption of shared covariance matrix, then this would lead to a quadratic discriminant. And the number of covariance matrix will be $\frac {K(D^2+D)}{2}$


#### Discrete inputs

- Without any assumption:

    $$\begin{aligned} p(x_1,...,x_D) = p(x_1)p(x_2\mid x_1) p(x_3\mid x_1,x_2)...... p(x_D\mid x_1,...,x_{D-1})  \end{aligned}$$
    - if all features are binary, then in a general distribution, there could be $2^D-1$ parameters for each class

- **Naive Bayes assumption**: the feature values are treated as independed, conditioned on the class $C_k$
 
    $$\begin{aligned} p(x_1,...,x_D \vert C_k) = \prod_{i=1}^D p(x_i\vert C_k) \end{aligned}$$

    - then number of parameter could be $D$ for binary features.

- Note: if using naive bayes assumption in continuous inputs with gaussian distribution, this will lead to the covariance matrix to be diagonal, then number of covariance matrix would be $D$ (if also shared), but not $\frac {D^2+D}{2}$ anymore.

