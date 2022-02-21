---
title: Bayesian Linear Regression
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Bayesian]
tags: [Linear Regression, Bayesian]
math: true
mermaid: true
---


## Bayesian Linear Regression

- The Linear Model of $f(\boldsymbol{x}, \boldsymbol{w}) = \boldsymbol{w}^T\phi(\boldsymbol{x})$, with Gaussian noise $p(\epsilon) = \mathcal{N}(\epsilon \vert 0, \beta^{-1})$ is given by:
    
    $$\begin{aligned} y &= \boldsymbol{w}^T\phi(\boldsymbol{x}) + \epsilon \\ p(t\vert \boldsymbol{x}, \boldsymbol{w}, \beta) &= \mathcal{N}(y\vert \boldsymbol{w}^T\boldsymbol{x}, \beta^{-1}) \end{aligned}$$

- Likelihood Function

    $$\begin{aligned} p(\mathbf{y} \vert \mathbf{X}, \boldsymbol{w}) = \prod_{i=1}^N \mathcal{N}(y_i \vert \boldsymbol{w}^T\phi(\mathbf{x}_i), \beta^{-1}) \end{aligned}$$

### Known Variance

- Assume the noise precision $\beta$ is known, then the conjugate prior and posterior both are Gaussian

#### Parameter Distribution

- The Conjugate Prior Distribution  (Gaussian)
    
    $$\begin{aligned} p(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \boldsymbol{S}_0) = \mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \boldsymbol{S}_0) \end{aligned}$$

- The Posterior Distribution  (Gaussian)
    
    $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &= \mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_N, \boldsymbol{S}_N) \\ \\ \boldsymbol{S}_N^{-1} &= \beta \mathbf{\Phi}^T\mathbf{\Phi} + \boldsymbol{S}_0^{-1} \\ \boldsymbol{\mu}_N &= \boldsymbol{S}_N(\beta \mathbf{\Phi}^T \mathbf{y} + \boldsymbol{S}_0^{-1} \boldsymbol{\mu}_0) \end{aligned}$$
    
    - where $\mathbf{X}$ and $\mathbf{y}$ are observations corresponding to the N input and output values.
    
    - where $\mathbf{\Phi}$ is a $N\times m$ matrix, if $\boldsymbol{w}$ is a $m$-dim vector, and its rows are $\phi(\mathbf{x}_i)^T,\space i=1,2\cdots,N$.

    - The Proof:
    
        $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &\propto p(\mathbf{y}\vert \mathbf{X},\boldsymbol{w})p(\boldsymbol{w}) \\ &= \left[ \prod_{i=1}^N \mathcal{N}(y_i \vert \boldsymbol{w}^T\phi(\mathbf{x}_i), \beta^{-1}) \right]\mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \boldsymbol{S}_0) \\ & \propto \exp\left(-\frac \beta 2 (\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})^T(\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})\right) \exp\left( -\frac 12 (\boldsymbol{w}-\boldsymbol{\mu}_0)^TS_0^{-1}(\boldsymbol{w}-\boldsymbol{\mu}_0) \right) \\ &= \exp\left(-\frac 12 \boldsymbol{w}^T(\beta\boldsymbol{\Phi}^T\boldsymbol{\Phi} + S_0^{-1})\boldsymbol{w} + \boldsymbol{w}^T(\beta\boldsymbol{\Phi}^T\boldsymbol{y} + S_0^{-1}\boldsymbol{\mu}_0) \right) + \mathrm{const} \end{aligned}$$

- If we consider the prior is a zero-mean and isotropic Gaussian distribution, then 
    - The Prior Distribution (let $\alpha$ be its precision) can be written by:
        
        $$\begin{aligned} p(\boldsymbol{w} \vert 0, \alpha^{-1}I) \end{aligned}$$
    
    - The Posterior Distribution:
        
        $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &= \mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_N, \boldsymbol{S}_N) \\ \\ \boldsymbol{S}_N^{-1} &= \beta \mathbf{\Phi}^T\mathbf{\Phi} + \alpha I \\ \boldsymbol{\mu}_N &= \beta\boldsymbol{S}_N\mathbf{\Phi}^T \mathbf{y}  \end{aligned}$$
        
        - Also, in this assumption:
            
            $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &\propto \exp\left(-\frac \beta 2 (\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})^T(\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})\right) \exp\left( -\frac \alpha 2 \boldsymbol{w}^T\boldsymbol{w} \right) \\ \ln (p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y})) &= -\frac \beta 2 (\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})^T(\mathbf{y}-\mathbf{\Phi}\boldsymbol{w}) -\frac \alpha 2 \boldsymbol{w}^T\boldsymbol{w} + \mathrm{const} \end{aligned}$$
        
        - Then we can see, maximization of this posterior distribution with respect to $\boldsymbol{w}$ is therefore equivalent to the minimization of the sum-of-squares error function with the addition of a quadratic regularization term, corresponding $\lambda = \frac {\alpha}{\beta}$

#### Predictive Distribution

- In practice, we are not usually interested in the value of $\boldsymbol{w}$ itself but rather to making predictions of $t$ for new values of $\mathbf{x}$.

- Then we can batained a predictive dsitribution by
    
    $$\begin{aligned} p(y \vert \boldsymbol{x}, \mathbf{X}, \mathbf{y}) = \int p(y\vert \boldsymbol{x}, \boldsymbol{w}) p(\boldsymbol{w}\vert \mathbf{X}, \mathbf{y}) d\boldsymbol{w} \end{aligned}$$

- And we have already know:
    
    - if the condition distribution $p(\boldsymbol{x})$ is $\mathcal{N}(\boldsymbol{x} \vert \boldsymbol{\mu}, \Lambda^{-1})$ and the marginal distribution $p(\boldsymbol{y} \vert \boldsymbol{x})$ is $\mathcal{N}(\boldsymbol{y} \vert A\boldsymbol{x} + b, L^{-1})$
    
    - then the marginal distribution $p(y)$ is $\mathcal{N}(y\vert A\boldsymbol{\mu} +b, L^{-1}+A\Lambda^{-1}A^T)$

- Thus in this case, (Linear Model with zero-mean Gaussian noise):

    $$\begin{aligned} p(y\vert \boldsymbol{x}, \mathbf{X}, \mathbf{y}, \alpha, \beta) &= \int p(y\vert \boldsymbol{x}, \boldsymbol{w}, \beta) p(\boldsymbol{w}\vert \mathbf{X}, \mathbf{y}, \alpha^{-1}I) \boldsymbol{w} \\ &= \int \mathcal{N}(y \vert \boldsymbol{w}^T\phi(\boldsymbol{x}), \beta^{-1}) \mathcal{N}(\boldsymbol{w}\vert \boldsymbol{\mu}_N, \boldsymbol{S}_N) d\boldsymbol{w} \\ &= \mathcal{N}(y\vert \boldsymbol{\mu}, \boldsymbol{S}) \\ \\ \boldsymbol{\mu} &= \boldsymbol{\mu}_N^T\phi(\boldsymbol{x}) \\ \boldsymbol{S} &=  \beta^{-1}+\phi(\boldsymbol{x})^T \boldsymbol{S}_N \phi(\boldsymbol{x}) \\\\  \end{aligned}$$
    
    
- Note: 
    - if we use localized basis functions such as Gaussian, then in regions away from the basis function centres, the contribution from the second term in the predictive variance will go to zero, leaving only the noise contribution $\beta^{-1}$. Thus the model becomes very confident in its predictions when extrapolation outside the region occuiped by the basis functions, which is generaly an undersirable behaviour.


### Unknown Variance

- If both $w$ and $\beta$ are treated as unknown, then the conjugate prior will be a **Gaussian-Gamma** distribution. In this case, the predictive distribution is a **Student's** distribution.           



