---
title: Variational Inference
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-22 07:00:00 +0800
categories: [Machine Learning, Variational Inference]
tags: []
math: true
mermaid: true
---



## Variational Inference

In Bayesian Learning, when the involved integrations  are no longer computationally tractable. Then Variational Approximation can be used.

Although there is nothing intrinsically approximate about variational methods, they do naturally lend themselves to finding approximate solutions. 
- This is done by restricting the range of functions over which the optimization is performed, forinstance by considering only quadratic functions or by considering functions composed of a linear combination of fixed basis functions in which only the coefficients of the linear combination can vary. 
- In the case of applications to probabilistic inference, the restriction may for example take the form of factorization assumptions

#### Lower Bound of Variational Approximation 

Just like the Lower bound analysis of EM, but now $Z$ contains all latent variables and paramaters, because now all parameters are stochastic variables.

$$\begin{aligned} \ln p(\mathbf{X}) = \mathcal{L}(q) + \text{KL}(q\| p) \end{aligned}$$

- where we have defined:

    $$\begin{aligned} \mathcal{L}(q) &= \sum_{\mathbf{Z}} q(\mathbf{Z}) \ln \left\{ \frac {p(\mathbf{X},\mathbf{Z} )}{q(\mathbf{Z})} \right\} \\ \text{KL}(q\|p) &= -\sum_{\mathbf{Z}} q(\mathbf{Z}) \ln \left\{ \frac {p(\mathbf{Z} \mid \mathbf{X})}{q(\mathbf{Z})} \right\}  \end{aligned}$$

- As before, we can maximize the lower bound $\mathcal{L}(q)$ by optimization with respect to the distribution $q(\mathbf{Z})$, which is equivalent to minimizing the KL divergence. 
- If we allow any possible choice for $q(\mathbf{Z})$, then the maximum of the lower bound occurs when the KL divergence vanishes, which occurs when $q(\mathbf{Z})$ equals the posterior distribution $p(\mathbf{Z} \mid \mathbf{X})$.
- However, we shall suppose the model is such that working with the true posterior distribution is intractable.
- We therefore consider instead a restricted family of distributions $q(\mathbf{Z})$ and then seek the member of this family for which the KL divergence is minimized.
  - Our goal is to restrict the family sufficiently that they comprise only tractable distributions, while at the same time allowing the family to be sufficiently rich and flexible that it can provide a good approximation to the true posterior distribution. 
  - It is important to emphasize that the restriction is imposed purely to achieve tractability, and that subject to this requirement we should use as rich a family of approximating distributions as possible. 
  - In particular, there is no ‘over-fitting’ associated with highly flexible distributions. 
  - Using more flexible approximations simply allows us to approach the true posterior distribution more closely.

One way to restrict the family of approximating distributions is to use a parametric distribution q(Z|ω) governed by a set of parameters ω. The lower bound L(q) then becomes a function of ω, and we can exploit standard nonlinear optimization techniques to determine the optimal values for the parameters.

#### Factorized distributions (Mean Field Approximation)

- Suppose we partition the elements of $Z$ into disjoint groups that we denote by $Z_i$ where $i = 1, . . . , M$.

$$\begin{aligned} q(\boldsymbol{Z}) = \prod_{i=1}^M q_i(\boldsymbol{Z}_i) \end{aligned}$$

Amongst all distributions $q(\boldsymbol{Z})$ having this form ,we now seek that distribution for which the lower bound $\mathcal{L}(q)$ is largest.

- First, in the lower bound, we first dissect out the dependence on one of the factors $q_j(\boldsymbol{Z}_j)$

    $$\begin{aligned} \mathcal{L}(q) &= \int q(\mathbf{Z}) \ln \left\{ \frac {p(\mathbf{X},\mathbf{Z} )}{q(\mathbf{Z})} \right\} d\mathbf{Z} \\ &= \int \prod_i q_i\left\{ \ln p(\mathbf{X},\mathbf{Z} ) - \sum_i \ln q_i \right\}d\mathbf{Z} \qquad \text{assume} \space \int q_jdZ_j = 1  \\&= \int q_j\left\{ \int \ln p(\mathbf{X},\mathbf{Z} ) \prod_{i\neq j}q_i d\boldsymbol{Z}_i \right\}d\boldsymbol{Z}_j - \int q_j\ln q_j d\boldsymbol{Z}_j + \text{const} \\ &= \int q_j \ln \tilde{p}(\boldsymbol{X},\boldsymbol{Z}_j)d\boldsymbol{Z}_j - \int q_j \ln q_j d\boldsymbol{Z}_j + \text{const} \\&= -\text{KL}(q_j\| \tilde{p}) + \text{const} \\ \\  \ln \tilde{p}(\boldsymbol{X},\boldsymbol{Z}_j) &= \mathbb{E}_{i\neq j} [\ln p(\boldsymbol{X},\boldsymbol{Z})] +\text{const} \\ &= \int \ln p(\mathbf{X},\mathbf{Z} ) \prod_{i\neq j}q_i d\boldsymbol{Z}_i + \text{const} \end{aligned}$$

  - thus maximizing $\mathcal{L}(q)$ is equivalent to minimizing $\text{KL}(q_j\| \tilde{p})$, this leads to:

    $$\begin{aligned} \ln \hat{q}_j(\boldsymbol{Z}_j) =  \mathbb{E}_{i\neq j} [\ln p(\boldsymbol{X},\boldsymbol{Z})] +\text{const} \\ \\ \hat{q}_j(\boldsymbol{Z}_j) = \frac {\exp(\mathbb{E}_{i\neq j} [\ln p(\boldsymbol{X},\boldsymbol{Z})])}{\int \exp(\mathbb{E}_{i\neq j} [\ln p(\boldsymbol{X},\boldsymbol{Z})])d\boldsymbol{Z}_j} \end{aligned}$$     

#### Difference of Minimizing $\text{KL}(q\|p)$ and $\text{KL}(p\|q)$

- Minimizing $\text{KL}(q\|p)$ leads to distributions q(Z) that avoid regions in which $p(Z)$ is small.

- Conversely, the Kullback-Leibler divergence $\text{KL}(p\|q)$ is minimized by distributions $q(Z)$ that are nonzero in regions where $p(Z)$ is nonzero.

By contrast, if we were to minimize $\text{KL}(p\|q)$, the resulting approximations would average across all of the modes and, in the context of the mixture model, would lead to poor predictive distributions (because the average of two good parameter values is typically itself not a good parameter value).

