---
title: Bayesian PCA
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Machine Learning, PCA]
tags: [PCA]
math: true
mermaid: true
---


## Bayesian PCA

**Given that we have a probabilistic formulation of PCA, it seems natural to seek a Bayesian approach to model selection**.

But to do this, we need to **marginalize out the model parameters** $\boldsymbol{\mu}$, $\mathbf{W}$, and $\sigma^2$ with respect to appropriate prior distributions.

### Variational Approximation

This can be down by using Variational framework to approximation the analytically intractable marginalizations.

The marginal likelihood values, given by the Variational lower bound, can then be compared for a range of different values of $M$ and the value giving the largest marginal likelihood selected.

### Evidence Approximation

But here we consider a simpler approach **"Evidence Approximation"**, it is appropriate when the number of  data points is relatively large and the corresponding posterior distribution is tightly peaked.

It involves a specific choice of prior over $\mathbf{W}$ that allows surplus dimensions in the principal subspace to be pruned out of the model. (Just like a Sparisty Solution of $\mathbf{W}$)

- This corresponds to an example of automatic relevance determination.

#### Independent Gaussian prior over $\mathbf{W}$

- We define an **independent Gaussian Prior** over **each column** of $\mathbf{W}$, which represent the vectors defing the principal subspace.

- Each such Gaussian has an independent variance giverned by a precision hyperparameter $\alpha_i$ so that

    $$\begin{aligned} p(\mathbf{W}\vert \boldsymbol{\alpha}) = \prod_{i=1}^M \left (\frac {\alpha_i}{2}\right)^{D/2} \exp\left\{-\frac 12 \alpha_i \mathbf{w}_i^T\mathbf{w}_i \right\} \end{aligned}$$

- As a result of this optimization, some of the $\alpha_i$ may be driven to infinty, with the corresponding parameters vector $\mathbf{w}_i$ being driven to zero given a spare solution.
- Then the effective dimensionality of the principal subspace is the determined by the number of finite $\alpha_i$ values, and the corresponding vectors $\mathbf{w}_i$ can be thought of as 'Relevant' for modelling the data distribution.

In this way, the Bayesian approach is automatically making the trade-off between
- improving the fit to the data, by using a larger number of vectors $\mathbf{w}_i$ with their corresponding eigenvalues $\alpha_i$ each tuned to the data,
- reducing the complexity of the model by suppressing some of the $\mathbf{w}_i$ vectors.

The origins of this sparsity were discussed earlier in the context of **relevance vector machines**.

#### Re-Estimation the value of $\alpha_i$

Maximizing the log marginal likelihood

$$\begin{aligned} p(\mathbf{X} \vert \boldsymbol{\alpha}, \boldsymbol{\mu}, \sigma^2 ) = \int p(\mathbf{X} \vert \mathbf{W}, \boldsymbol{\mu}, \sigma^2) p(\mathbf{W} \vert \boldsymbol{\alpha}) d\mathbf{W} \end{aligned}$$

Because this integration is intractable, we make use of the Laplace approximation. 
- If we assume that the posterior distribution is sharply peaked, as will occur for sufficiently large data sets, then the re-estimation equations obtained by maximizing the marginal likelihood with respect to $\alpha_i$ take the simple form:

    $$\begin{aligned} \alpha_i^{new} = \frac {D}{\mathbf{w}_i^T\mathbf{w}_i^T} \end{aligned}$$

Then in the E-step in EM for probability PCA, we can easily see:

$$\begin{aligned} \mathbf{W}_{new}&= \left[ \sum_{n=1}^N \mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n] + \sigma^2 \text{diag}[\boldsymbol{\alpha}]  \right]^{-1} \left[ \sum_{n=1}^N (\boldsymbol{x}_n-\boldsymbol{\mu})\mathbb{E}[\boldsymbol{z}_n]^T  \right] \end{aligned}$$


Note: The model described here involves a prior only over the matrix $\mathbf{W}$, and this is not a full Bayesian, which can be solved usign variational methods.

