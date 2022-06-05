---
title: Factor Analysis
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Machine Learning, PCA]
tags: [PCA, EM]
math: true
mermaid: true
---


## Factor Analysis

Factor analysis is a **linear-Gaussian latent variable model** that is closely related to **probabilistic PCA**.

- in probabilistic PCA: 

    $$\begin{aligned} \boldsymbol{x} &= \mathbf{W}\boldsymbol{z} + \boldsymbol{\mu} + \boldsymbol{\epsilon} \\ \boldsymbol{\epsilon} &\sim \mathcal{N}(\boldsymbol{\epsilon} \vert 0, \sigma^2 I) \\ \\ p(\boldsymbol{z}) &= \mathcal{N}(\boldsymbol{z} \vert 0, I) \\ p(\boldsymbol{x} \vert \boldsymbol{z}) &= \mathcal{N}(\boldsymbol{x} \vert \mathbf{W}\boldsymbol{z} + \boldsymbol{\mu}, \sigma^2 I) \end{aligned}$$ 

- but in Factor Analysis

    $$\begin{aligned} \boldsymbol{x} &= \mathbf{W}\boldsymbol{z} + \boldsymbol{\mu} + \boldsymbol{\epsilon} \\ \boldsymbol{\epsilon} &\sim \mathcal{N}(\boldsymbol{\epsilon} \vert 0, \mathbf{\Psi}) \\ \\ p(\boldsymbol{z}) &= \mathcal{N}(\boldsymbol{z} \vert 0, I) \\ p(\boldsymbol{x} \vert \boldsymbol{z}) &= \mathcal{N}(\boldsymbol{x} \vert \mathbf{W}\boldsymbol{z} + \boldsymbol{\mu}, \mathbf{\Psi}) \end{aligned}$$ 

    - Where $\mathbf{\Psi}$ is a diagonal matrix. 
    - Also this is again an example of naive Bayes, but each component variable of $\boldsymbol{x}$ has different variance.
      - given the latent variable $\boldsymbol{z}$, observed variables $\{\mathbf{x}_n\}$ are independent.


Note:The origins of factor analysis are as old as those of PCA. and discussions of factor analysis can be found in the books by Everitt (1984). Bartholomew (1987), and Basilevsky (1994).

- Links between factor analysis and PCA were investigated by Lilwley (1953) and Anderson (1963) who showed that at stationary points of the likelihood function. for a faclOr analysis model with $\mathbf{\Psi} = \sigma^2I$, the columns of $\mathbf{W}$ are scaled eigenvectors of the sample covariance matrix, and $\sigma^2$ is the average of the discarded eigenvalues.
- Later. Tipping and Bishop (1999b) showed that the maximum of the log likelihood function occurs when the eigenvectors comprising $\mathbf{W}$ are chosen to be the principal eigenvectors.

### Predictive Distribution 

$$\begin{aligned} p(\boldsymbol{x}) &= \int p(\boldsymbol{x}\vert \boldsymbol{z})p(\boldsymbol{z})d\boldsymbol{z} \\ &= \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, \mathbf{C}) \\\\ C &= \mathbf{W}\mathbf{W}^T + \mathbf{\Psi}  \end{aligned}$$

### 

### EM for Factor analysis

we also can determine the parameters by ML and again optimized by EM.

As the same discuss in the Probabilistic PCA, with wih some modified:
- E-step:
  
    $$\begin{aligned} \mathbb{E}[\ln p(\mathbf{X}, \mathbf{Z}\vert \boldsymbol{\mu}, \mathbf{W}, \mathbf{\Psi})] \space =& \mathbb{E}[\ln p(\mathbf{X}\vert \mathbf{Z}) + \ln p(\mathbf{Z})] \\ \space =& -\sum_{n=1}^N \{\frac 12 \text{Tr}(\mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n^T]) + \frac D2 \ln(2\pi) + \frac 12 \ln \vert \mathbf{\Psi} \vert  \\ & +\frac {1}{2}(\boldsymbol{x}_n-\boldsymbol{\mu})^T\mathbf{\Psi}^{-1}(\boldsymbol{x}_n-\boldsymbol{\mu}) -\mathbb{E}[\boldsymbol{z}_n]^T\mathbf{W}^T\mathbf{\Psi}^{-1}(\boldsymbol{x}_n-\boldsymbol{\mu}) \\ & + \frac {1}{2}\text{Tr}(\mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n]^T\mathbf{W}^T\mathbf{\Psi}^{-1}\mathbf{W}) \} \\ \\  \mathbf{G} =& (I + \mathbf{W}^T\mathbf{\Psi}^{-1}\mathbf{W})^{-1} \\ \\ \mathbb{E}[\boldsymbol{z}_n] \space =& \mathbf{G}\mathbf{W}^T\mathbf{\Psi}^{-1}(\boldsymbol{x}_n-\overline{\boldsymbol{x}}) \\  \mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n^T] \space =& \mathbf{G} + \mathbb{E}[\boldsymbol{z}_n]\mathbb{E}[\boldsymbol{z}_n]^T  \end{aligned}$$

- M-step

    $$\begin{aligned} \mathbf{W}_{new}&= \left[ \sum_{n=1}^N \mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n]  \right]^{-1} \left[ \sum_{n=1}^N (\boldsymbol{x}_n-\boldsymbol{\mu})\mathbb{E}[\boldsymbol{z}_n]^T  \right] \\ \mathbf{\Psi} &= \frac 1N \text{diag} \left\{ \sum_{n=1}^N (\boldsymbol{x}_n-\boldsymbol{\mu})(\boldsymbol{x}_n-\boldsymbol{\mu})^T - \mathbf{W}_{new}\sum_{n=1}^N\mathbb{E}[\boldsymbol{z}_n](\boldsymbol{x}_n - \boldsymbol{\mu})^T + N\mathbf{W}_{new}\mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n^T]\mathbf{W}_{new}^T \right\} \end{aligned}$$


Note: Another difference between probabilistic PCA and factor analysis concerns their different behaviour under transformations of the data set. For PCA and probabilistic PCA, if we rotate the coordinate system in data space, then we obtain exactly the same fit to the data but with the $\mathbf{W}$ matrix transformed by the corresponding rotation matrix. However, for factor analysis, the analogous property is that if we make a component-wise re-scaling of the data vectors, then this is absorbed into a orresponding re-scaling of the elements of $\mathbf{\Psi}$.
