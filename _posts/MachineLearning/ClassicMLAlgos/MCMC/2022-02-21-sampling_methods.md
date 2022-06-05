---
title: Sampling Methods
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 08:00:00 +0800
categories: [Machine Learning, Sampling Methods]
tags: [Monte Carlo]
math: true
mermaid: true
---

## Sampling Methods

### Ancestral Sampling Approach

Directed Graph

$$\begin{aligned} p(\boldsymbol{z}) = \prod_{i}^M p(\boldsymbol{z} \vert pa_i) \end{aligned}$$

make one pass through the set of variables in the order $z_1, . . . , z_M$ sampling from the conditional distributions $p(\boldsymbol{z}_i|pa_i)$

if some of the nodes are instantiated with observed values:
- logic sampling approach: which can be seen as a special case of importance sampling
  - At each step, when a sampled value is obtained for a variable zi whose value is observed, the sampled value is compared to the observed value, and if they agree then the sample value is retained and the algorithm proceeds to the next variable in turn. However, if the sampled value and the observed value disagree, then the whole sample so far is discarded and the algorithm starts again with the first node in the graph.

UDG: Gibbs sampling

For marginonal: If we already have a strategy for sampling from a joint distribution $p(u, v)$, then it is straightforward to obtain samples from the marginal distribution $p(u)$ simply by ignoring the values for $v$ in each sample.


### Inverse function

通过分布函数逆函数的解析形式，使用均匀分布随机数求解。同时利用：

$$p(y) = p(z) \left \vert \frac {dz}{dy} \right\vert $$

- exponential distribution
- Cauchy distribution

### Sampling from Gaussian

使用专属抽样算法
- Box-muller 
- Marsaglia Polar method

###  Rejection Sampling

$$\begin{aligned} p(z) = \frac {1}{Z_p} \tilde{p}(z) \end{aligned}$$

- proposal distribution $q(z)$
- $kq(z) \ge p(z)$

$$\begin{aligned} &q(z) \rightarrow z_0 \\ & u_0 = \text{random}(0,kq(z_0)) \\ & \text{if } u_0 > \tilde p(z_0), \text{then accept} \\\\ p(\text{accept}) &= \int \frac {\tilde p(z)}{kq(z)} q(z) dz = \frac 1k \int \tilde p(z) dz \end{aligned}$$

the fraction of points that are rejected by this method depends on the ratio of the area under the unnormalized distribution $p(z)$ to the area under the curve $kq(z)$.

### Adaptive Rejection Sampling

when difficult to determine a suitable analytic form for the envelope distribution $q(z)$

Construction of an envelope function is particularly straightforward for cases in which p(z) is log concave
(梯度持续下降的类型)

The function $ln p(z)$ and its gradient are evaluated at some initial set of grid points, and the intersections of the resulting tangent lines are used to construct the envelope function.

其他变种，用于处理梯度不是持续下降的类型

Rejection Sampling 对高维采样的困难：高维下，拒绝率将会非常高 （直观解释：因为高维中一个球的体积主要集中在离球面近的区域，相对于近球心的区域，是指数级差距） 从而导致拒绝率可能接近1


### Importance Sampling

The technique of importance sampling provides a framework for approximating expectations directly but does not itself provide a mechanism for drawing samples from distribution

also using proposal distribution $q(z)$

- Importance Weights

    $$\begin{aligned} \mathbb{E}[f] &= \int f(z)p(z)dz \\  &= \int f(z) \frac {p(z)}{q(z)}q(z) dz \\ &\simeq \frac 1L \sum_{l=1}^L \frac {p(z^{(l)})}{q(z^{(l)})} f(z^{(l)}) \end{aligned}$$

    $r_l = \frac {p(z^{(l)})}{q(z^{(l)})}$ are known as **Importance Weights**

- work on unnormoalized distribution

    $$\begin{aligned} \mathbb{E}[f] &= \int f(z)p(z)dz \\  &= \frac{Z_p}{Z_q}  \int f(z) \frac {\tilde p(z)}{\tilde q(z)} q(z) dz \\ &\simeq \frac{Z_q}{Z_p} \frac 1L \sum_{l=1}^L \frac {\tilde p(z)}{\tilde q(z)} f(z^{(l)}) \\\\ \frac{Z_q}{Z_p} &= \frac {1}{Z_q} \int \tilde p(z) dz \\ &= \int \frac {\tilde p(z)}{\tilde q(z)}q(z) dz \\ &\simeq \frac 1L \sum_{l=1}^L \frac {\tilde p(z)}{\tilde q(z)} \\ \\ \mathbb{E}[f] &\simeq \frac {1}{\sum_{l=1}^L \frac {\tilde p(z^{(l)})}{\tilde q(z^{(l)})}}\sum_{l=1}^L \frac {\tilde p(z^{(l)})}{\tilde q(z^{(l)})} f(z^{(l)}) \end{aligned}$$ 

注意：
- 如果通常情况下，在$p(z)f(z)$ 变化很大并且在$z$空间的相对较小区域上具有显着的集中的值存在，则重要性权重 ${rl}$ 的集合可能由一些具有较大值的权重控制，其余权重相对无关紧要
- 也可能存在着在$p(z)f(z)$很大时，但却没有样本对应此区间

Hence a major drawback of the importance sampling method is the potential to produce results that are arbitrarily in error and with no diagnostic indication.

因此需要保证$p(z)$可能取值较大时，$q(z)$不能很小或者为0，否则将使抽样结果与真实值存在很大差异

In Graphical Model: 
- Likelihood Weighted Sampling
  - This is based on ancestral sampling of the variables. - Each sample from the joint distribution is obtained by first setting those variables zi that are in the evidence set equal to their observed values.
  - For each variable in turn, if that variable is in the evidence set, then it is just set to its instantiated value. If it is not in the evidence set, then it is sampled from the conditional distribution $p(z_i|pa_i)$ in which the conditioning variables are set to their currently sampled values. The weighting associated with the resulting sample $z$ is then given by

    $$\begin{aligned} r(z) = \prod_{z_i\in e} p(z_i\vert pa_i) \end{aligned}$$

  - self-importance sampling

### Sampling-Importance-resampling

- Step 1: Use proposal distribution generate $L$ samples $z^{(1)},...,z^{(L)}$
- Step 2: A second set of $L$ samples is drawn from the discrete distribution $z^{(1)},...,z^{(L)}$ with probabilities 

    $$\begin{aligned} \frac {\frac {\tilde p(z^{(l)})}{\tilde q(z^{(l)})}}{\sum_{l=1}^L \frac {\tilde p(z^{(l)})}{\tilde q(z^{(l)})}} \end{aligned}$$

Note: the discrete distribution $z^{(1)},...,z^{(L)}$ are only approximately distributed according to $p(z)$, but the distribution becomes correct in the limit $L \rightarrow \infty$


### Monte Carlo EM algorithm

In particular, sampling methods can be used to approximate the E step of the EM algorithm for models in which the E step cannot be performed analytically.

$$\begin{aligned} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) = \sum_{\mathbf{Z}} p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})  \ln p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta}) \end{aligned}$$  

- using sampling methods to generate ${\mathbf{Z}^{(L)}}$ and then:

    $$\begin{aligned} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) \simeq \frac 1L \sum_{l=1}^L \ln p(\mathbf{X},\mathbf{Z}^{(L)} \mid \boldsymbol{\theta}) \end{aligned}$$

A particular instance of the Monte Carlo EM algorithm, called stochastic EM, arises if we consider a finite mixture model, and draw just one sample at each E step

### Imputation-Posterior Algorithm

This inspires the data augmentation algorithm, which alternates between two steps known as the I-step (imputation step, analogous to an E step) and the P-step (posterior step, analogous to an M step).

$Z$ hidden variables, $\theta$ parameter (random variables)

- I-step:
  - wish to sample from $p(Z\vert X)$ but we cannot do this disectly

    $$\begin{aligned} p(Z\vert X) = \int p(Z\vert \theta, X)p(\theta \vert X) d\theta \end{aligned}$$

  - and hence for $1,...,L$, $p(\theta\vert X) \rightarrow \theta^{(l)}$, and then $p(Z\vert \theta^{(l)}, X)\rightarrow Z^{(l)}$
- P-step
  - Given the relation

    $$\begin{aligned} p(\theta \vert X) = \int p(\theta\vert Z, X) p(Z\vert X) dZ \end{aligned}$$
  - then 

    $$\begin{aligned} p(\theta\vert X) \simeq p(\theta\vert Z^{(l)}, X) \end{aligned}$$
