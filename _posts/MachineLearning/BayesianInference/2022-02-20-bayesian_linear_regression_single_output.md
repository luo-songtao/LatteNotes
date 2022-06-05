---
title: Bayesian Linear Regression (Single Output)
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Bayesian Inference]
tags: [Linear Regression, Bayesian]
math: true
mermaid: true
---


## Bayesian Linear Regression (Single Output)

- The Linear Model of $f(\boldsymbol{x}, \boldsymbol{w}) = \boldsymbol{w}^T\phi(\boldsymbol{x})$, with Gaussian noise $p(\epsilon) = \mathcal{N}(\epsilon \vert 0, \beta^{-1})$ is given by:
    
    $$\begin{aligned} y &= \boldsymbol{w}^T\phi(\boldsymbol{x}) + \epsilon \\ p(y\vert \boldsymbol{x}, \boldsymbol{w}, \beta) &= \mathcal{N}(y\vert \boldsymbol{w}^T\phi(\boldsymbol{x}), \beta^{-1}) \end{aligned}$$

    - $\boldsymbol{w}$ is a $M$-dim parameter vector.

- Likelihood Function

    $$\begin{aligned} p(D \vert \boldsymbol{w}) = \prod_{i=1}^N \mathcal{N}(y_i \vert \boldsymbol{w}^T\phi(\mathbf{x}_i), \beta^{-1}) \end{aligned}$$

### Known Precision

- Assume the noise precision $\beta$ is known, then the conjugate prior and posterior both are Gaussian

#### Parameter Distribution

- The Conjugate Prior Distribution  (Gaussian)
    
    $$\begin{aligned} p(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \boldsymbol{S}_0) = \mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \boldsymbol{S}_0) \end{aligned}$$

- The Posterior Distribution  (Gaussian)
    
    $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &= \mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_N, \boldsymbol{S}_N) \\ \\ \boldsymbol{S}_N^{-1} &= \beta \mathbf{\Phi}^T\mathbf{\Phi} + \boldsymbol{S}_0^{-1} \\ \boldsymbol{\mu}_N &= \boldsymbol{S}_N(\beta \mathbf{\Phi}^T \mathbf{y} + \boldsymbol{S}_0^{-1} \boldsymbol{\mu}_0) \end{aligned}$$
    
    - where $\mathbf{X}$ and $\mathbf{y}$ are observations corresponding to the N input and output values.
    
    - where $\mathbf{\Phi}$ is a $N\times m$ matrix, if $\boldsymbol{w}$ is a $m$-dim vector, and its rows are $\phi(\mathbf{x}_i)^T,\space i=1,2\cdots,N$.

    - The Proof:
    
        $$\begin{aligned} p(\boldsymbol{w} \vert D) &\propto p(D\vert \boldsymbol{w})p(\boldsymbol{w}) \\ &= \left[ \prod_{i=1}^N \mathcal{N}(y_i \vert \boldsymbol{w}^T\phi(\mathbf{x}_i), \beta^{-1}) \right]\mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \boldsymbol{S}_0) \\ & \propto \exp\left(-\frac \beta 2 (\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})^T(\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})\right) \exp\left( -\frac 12 (\boldsymbol{w}-\boldsymbol{\mu}_0)^TS_0^{-1}(\boldsymbol{w}-\boldsymbol{\mu}_0) \right) \\ &= \exp\left(-\frac 12 \boldsymbol{w}^T(\beta\boldsymbol{\Phi}^T\boldsymbol{\Phi} + S_0^{-1})\boldsymbol{w} + \boldsymbol{w}^T(\beta\boldsymbol{\Phi}^T\boldsymbol{y} + S_0^{-1}\boldsymbol{\mu}_0) \right) + \text{const} \end{aligned}$$

- If we consider the prior is a zero-mean and isotropic Gaussian distribution, then 
    - The Prior Distribution (let $\alpha$ be its precision) can be written by:
        
        $$\begin{aligned} p(\boldsymbol{w} \vert 0, \alpha^{-1}I) \end{aligned}$$
    
    - The Posterior Distribution:
        
        $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &= \mathcal{N}(\boldsymbol{w} \vert \boldsymbol{\mu}_N, \boldsymbol{S}_N) \\ \\ \boldsymbol{S}_N^{-1} &= \beta \mathbf{\Phi}^T\mathbf{\Phi} + \alpha I \\ \boldsymbol{\mu}_N &= \beta\boldsymbol{S}_N\mathbf{\Phi}^T \mathbf{y}  \end{aligned}$$
        
        - Also, in this assumption:
            
            $$\begin{aligned} p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y}) &\propto \exp\left(-\frac \beta 2 (\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})^T(\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})\right) \exp\left( -\frac \alpha 2 \boldsymbol{w}^T\boldsymbol{w} \right) \\ \ln (p(\boldsymbol{w} \vert \mathbf{X}, \mathbf{y})) &= -\frac \beta 2 (\mathbf{y}-\mathbf{\Phi}\boldsymbol{w})^T(\mathbf{y}-\mathbf{\Phi}\boldsymbol{w}) -\frac \alpha 2 \boldsymbol{w}^T\boldsymbol{w} + \text{const} \end{aligned}$$
        
        - Then we can see, maximization of this posterior distribution with respect to $\boldsymbol{w}$ is therefore equivalent to the minimization of the sum-of-squares error function with the addition of a quadratic regularization term, corresponding $\lambda = \frac {\alpha}{\beta}$

#### Predictive Distribution

- In practice, we are not usually interested in the value of $\boldsymbol{w}$ itself but rather to making predictions of $t$ for new values of $\mathbf{x}$.

- Then we can batained a predictive dsitribution by
    
    $$\begin{aligned} p(y \vert \boldsymbol{x}, D, \alpha, \beta) = \int p(y\vert \boldsymbol{x}, \boldsymbol{w}, \beta) p(\boldsymbol{w}\vert D, \alpha, \beta) d\boldsymbol{w} \end{aligned}$$

- And we have already know:
    
    - if the condition distribution $p(\boldsymbol{x})$ is $\mathcal{N}(\boldsymbol{x} \vert \boldsymbol{\mu}, \Lambda^{-1})$ and the marginal distribution $p(\boldsymbol{y} \vert \boldsymbol{x})$ is $\mathcal{N}(\boldsymbol{y} \vert A\boldsymbol{x} + b, L^{-1})$
    
    - then the marginal distribution $p(y)$ is $\mathcal{N}(y\vert A\boldsymbol{\mu} +b, L^{-1}+A\Lambda^{-1}A^T)$

- Thus in this case, (Linear Model with zero-mean Gaussian noise):

    $$\begin{aligned} p(y\vert \boldsymbol{x}, D, \alpha, \beta) &= \int p(y\vert \boldsymbol{x}, \boldsymbol{w}, \beta) p(\boldsymbol{w}\vert D, \alpha, \beta) \boldsymbol{w} \\ &= \int \mathcal{N}(y \vert \boldsymbol{w}^T\phi(\boldsymbol{x}), \beta^{-1}) \mathcal{N}(\boldsymbol{w}\vert \boldsymbol{\mu}_N, \boldsymbol{S}_N) d\boldsymbol{w} \\ &= \mathcal{N}(y\vert \mu, \sigma^2) \\ \\ \mu &= \boldsymbol{\mu}_N^T\phi(\boldsymbol{x}) \\ \sigma^2 &=  \beta^{-1}+\phi(\boldsymbol{x})^T \boldsymbol{S}_N \phi(\boldsymbol{x}) \\\\  \end{aligned}$$
    
    
- Note: 
    - if we use localized basis functions such as Gaussian, then in regions away from the basis function centres, the contribution from the second term in the predictive variance will go to zero, leaving only the noise contribution $\beta^{-1}$. Thus the model becomes very confident in its predictions when extrapolation outside the region occuiped by the basis functions, which is generaly an undersirable behaviour.


### Unknown Precision

- If both $w$ and $\beta$ are treated as unknown, then the conjugate prior will be a **Gaussian--Gamma** distribution, because $\beta$ is the precision. In this case, the predictive distribution is a **Student's** t-distribution.           

#### Parameter Distribution

- Conjugate Prior Distribution (Gaussian Gamma)

    $$\begin{aligned} p(\boldsymbol{w}, \beta \vert \boldsymbol{\mu}_0, V_0^{-1}, a_0, b_0) &= \mathcal{N}\left(\boldsymbol{w} \vert \boldsymbol{\mu}_0, \frac 1\beta V_0\right)\text{Gamma}(\beta\vert a_0, b_0) \end{aligned}$$

    - $V_0$ is a $M\times M$ symmetric definite matrix.

- Posterior Distribution (Gaussian Gamma)

    $$\begin{aligned} p(\boldsymbol{w}, \beta \vert \boldsymbol{\mu}, V^{-1}, a, b) = \mathcal{N}\left(\boldsymbol{w} \vert \boldsymbol{\mu}, \frac 1\beta V\right)\text{Gamma}(\beta\vert a, b)\end{aligned}$$

    - Proof:
        
        $$\begin{aligned} p(\boldsymbol{w}, \beta) \propto& p(D \vert \boldsymbol{w})p(\boldsymbol{w}, \beta \vert \boldsymbol{\mu}_0, V_0^{-1}, a_0, b_0) \\\propto& \beta^{\frac {MN}{2}} \exp\left(\sum_{i=1}^N -\frac {\beta}{2}(y_i-\boldsymbol{w}^T\phi_i)^2 \right) \exp\left(-\frac \beta 2 (\boldsymbol{w}-\boldsymbol{\mu}_0)^TV_0^{-1}(\boldsymbol{w}-\boldsymbol{\mu}_0)\right) \beta^{a_0-1}\exp(-b_0\beta) \\ \propto& \exp\left( -\frac \beta 2 \boldsymbol{w}^T(\Phi^T\Phi + V_0^{-1})\boldsymbol{w} + \beta  (\Phi^T\boldsymbol{y} + V_0^{-1}\boldsymbol{\mu}_0)^T\boldsymbol{w} \right) \cdot \\ &\beta^{\frac {MN}{2}+a_0-1}\exp\left( -\beta\left(b_0+\frac 12 (\boldsymbol{y}^T\boldsymbol{y} + \boldsymbol{\mu}_0^TV_0^{-1}\boldsymbol{\mu}_0) \right) \right) \end{aligned}$$

      - Then we have:
            
        $$\begin{aligned} V^{-1} &= \Phi^T\Phi + V_0^{-1} \\ \boldsymbol{\mu} &= V(\Phi^T\boldsymbol{y} + V_0^{-1}\boldsymbol{\mu}_0) \\ a&= \frac {MN}{2}+a_0 \\ b&= b_0+\frac 12 (\boldsymbol{y}^T\boldsymbol{y} + \boldsymbol{\mu}_0^TV_0^{-1}\boldsymbol{\mu}_0) \end{aligned}$$ 

#### Predictive Distribution

$$\begin{aligned} p(y\mid \boldsymbol{x}) &= \int_0^\infty\int p(y\mid \boldsymbol{x}, \boldsymbol{w}, \beta) p(\boldsymbol{w}, \beta \mid \boldsymbol{\mu}, V^{-1}, a, b) d\boldsymbol{w}d\beta  \\&= \int_0^\infty\int \mathcal{N}(y \mid \boldsymbol{w}^T\phi(\boldsymbol{x}), \beta^{-1})\mathcal{N}\left(\boldsymbol{w} \mid \boldsymbol{\mu}, \frac 1\beta V\right)\text{Gamma}(\beta\mid a, b) d\boldsymbol{w} d\beta \\ &= \int_0^\infty \mathcal{N}\left(y \mid \boldsymbol{\mu}^T\phi(\boldsymbol{x}), \frac {\sigma^2}{\beta}\right)\text{Gamma}(\beta\mid a, b)d\beta \\ &= (2\pi\sigma^2)^{-1/2}\frac {b^a}{\Gamma(a)} \int_0^\infty \beta^{1/2}\exp\left( -\frac {\beta z^2} {2\sigma^2} \right)\beta^{a-1}\exp(-b\beta)  d\beta \\ &= (2\pi\sigma^2)^{-1/2} \frac {b^a}{\Gamma(a)} \Gamma(a+1/2) \left[b+ \frac {z^2}{2\sigma^2}\right]^{-a-1/2} \\ &= (2\pi\sigma^2 b)^{-1/2} \frac {\Gamma(a+1/2)}{\Gamma(a)}  \left[1+ \frac {z^2}{2b\sigma^2}\right]^{-a-1/2}  \end{aligned}$$

  - where we have let:
    
    $$\begin{aligned} z &= y - \boldsymbol{\mu}^T\phi(\boldsymbol{x}) \\ \sigma^2 &= 1+\phi(\boldsymbol{x})^TV\phi(\boldsymbol{x}) \end{aligned}$$
  
  - if we have let:

    $$\begin{aligned} \mu_s &= \boldsymbol{\mu}^T\phi(\boldsymbol{x}) \\ \lambda_s &= \frac {a}{b\sigma^2} \\ \nu_s &= 2a \end{aligned}$$

  - finally, we have:
    
    $$\begin{aligned} p(y\mid \boldsymbol{x}) &= \left( \frac {\lambda_s}{\pi\nu_s}\right)^{1/2} \frac {\Gamma(\nu_s/2+1/2)}{\Gamma(\nu_s/2)}  \left[1+ \frac {\lambda_s(y-\mu_s)^2}{\nu_s}\right]^{-\nu_s/2-1/2}  \\ &= \text{S.t} \space (y\mid \mu_s, \lambda_s, \nu_s) \end{aligned}$$

    - and:

        $$\begin{aligned} \mathbb{E}[y] &= \mu_s  \\&= \boldsymbol{\mu}^T\phi(\boldsymbol{x}) \\&= \phi(\boldsymbol{x})^T(\Phi^T\Phi + V_0^{-1})^{-1}(\Phi^T\boldsymbol{y} + V_0^{-1}\boldsymbol{\mu}_0) \\ \text{cov}[y] &= \frac {\nu_s}{\nu_s - 2} \lambda_s^{-1} \\&= \frac {b\sigma^2}{a-1} \\ \text{mode}[y] &= \mu_s \end{aligned}$$ 


