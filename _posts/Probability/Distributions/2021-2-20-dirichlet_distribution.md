---
title: Dirichlet Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Dirichlet Distribution]
math: true
mermaid: true
---

## Dirichlet Distribution

- we now introduce a prior distribution  for the parameters $\boldsymbol{\mu} = \{\mu_1, \mu_2, \cdots, \mu_K\}$ of the multinomial distribution.

- By inspection of the form of the multinomial distribution, we see that the conjugate prior is given by

    $$\begin{aligned} p(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) \propto \prod_{k=1}^K \mu_{k}^{\alpha_k-1} \end{aligned}$$

    - Because of the summation constraint $\sum_{k}\mu_k = 1$, the distribution over the space of the $\{\mu_1, \mu_2, \cdots, \mu_K\}$ is confined to a simplex of dimensionality $K-1$.
    

- The normalized form fot this distribution is by
    
    $$\begin{aligned} \mathrm{Dir}(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) = \frac {\Gamma(\sum_k \alpha_k)}{\prod_k \Gamma(\alpha_k)} \prod_{k=1}^K \mu_{k}^{\alpha_k-1} \end{aligned}$$
    
    - so that:
        
        $$\begin{aligned} \int_0^1 \mathrm{Dir}(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) d\boldsymbol{\mu} = 1 \end{aligned}$$

- Mean

    $$\begin{aligned} \mathbb{E}[\mu_i] = \frac {\alpha_i}{\sum_k \alpha_k}  \end{aligned}$$

- Variance

    $$\begin{aligned} \mathrm{var}[\mu_i] &= \frac {\alpha_i((\sum_k \alpha^k) - \alpha_i)}{((\sum_k \alpha^k)+1)\left(\sum_k \alpha^k\right)^2} \\ &= \frac {\alpha_i(\alpha_0 - \alpha_i)}{\alpha_0^2(\alpha_0 + 1)} \end{aligned}$$
    - Here we have let $\alpha_0 = \sum_k \alpha_k$


- Covariance
    
    - $\forall \space i\neq j$

    $$\begin{aligned} \mathrm{Cov}[\mu_i, \mu_j] &= \mathbb{E}[(\mu_i - \frac {\alpha_i}{\alpha_0})(\mu_j - \frac {\alpha_j}{\alpha_0})] \\ &= \frac {\alpha_i\alpha_j}{\alpha_0(\alpha_0+1) - \frac {\alpha_i\alpha_j}{\alpha_0^2}} \\ &=  \frac {-\alpha_i\alpha_j}{\alpha_0^2(\alpha_0+1)} \end{aligned}$$


- The Posterior Distribution
    
    $$\begin{aligned} p(\boldsymbol{\mu} \vert D, \boldsymbol{\alpha}) \propto p(D\vert \boldsymbol{\mu}) p(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) \propto \prod_{k=1}^K \mu_k^{m_k+\alpha_k-1}  \end{aligned}$$

    - Then we see the posterior distribution again takes the form of dirichlet distribution, so it is indeed a conjugate prior for the multinomial.
        
        $$\begin{aligned} p(\boldsymbol{\mu} \vert D, \boldsymbol{\alpha}) &= \mathrm{Dir} (\boldsymbol{\mu} \vert \boldsymbol{\alpha} + \boldsymbol{m}) \\ &= \frac {\Gamma(\sum_k (\alpha_k +m_k))}{\prod_k \Gamma(\alpha_k+m_k)} \prod_{k=1}^K \mu_k^{m_k+\alpha_k-1} \\&= \frac {\Gamma(N + \sum_k \alpha_k )}{\prod_k \Gamma(\alpha_k+m_k)} \prod_{k=1}^K \mu_k^{m_k+\alpha_k-1} \end{aligned}$$


