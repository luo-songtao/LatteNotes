---
title: Gaussian Distribution (1)
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Gaussian Distribution]
math: true
mermaid: true
---

## Gaussian Distribution


### Univariate 

$$\begin{aligned} \mathcal{N}(x\vert \mu, \sigma^2) = \frac {1}{\sqrt{2\pi \sigma^2}} \exp\left(- \frac {1}{2\sigma^2} (x-\mu)^2 \right) \end{aligned}$$

- The integral of Gaussian distribution 

    $$\begin{aligned} \int_{-\infty}^{+\infty} \mathcal{N}(x\vert \mu, \sigma^2)  dx &=  \frac {1}{(2\pi \sigma^2)^{1/2}}  \int_{-\infty}^{+\infty}  \exp\left( -\frac {1}{2\sigma^2} (x-\mu)^2\right)dx \\ &= \frac {1}{(2\pi \sigma^2)^{1/2}}  \int_{-\infty}^{+\infty} \exp\left(-\left(\frac {x-\mu}{(2\sigma^2)^{1/2}}\right)^2\right)dx\qquad y=\frac {x-\mu}{(2\sigma^2)^{1/2}} \\ &= \frac {1}{(2\pi \sigma^2)^{1/2}}  \int_{-\infty}^{+\infty} \exp\left(-y^2\right) (2\sigma^2)^{1/2}dy \qquad \frac {dx}{dy} = (2\sigma^2)^{1/2} \\ &= \frac {1}{\sqrt{\pi}}\int_{-\infty}^{+\infty}  \exp\left(-y^2\right)dy \\ &= 1 \end{aligned}$$
    
    - we have uesed the property $\int_{-\infty}^{+\infty}  \exp(-x^2)dx =\sqrt{\pi} $, the proof is given by:
        
        - Firstly, if we let $I =\int_{-\infty}^{+\infty}  \exp(-x^2)dx $, then we have $\int_{-\infty}^{+\infty}  \exp(-x^2-y^2)dxdy = I^2$, and
        
            $$\begin{aligned} \mathrm{Let} \space I^2 &= \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty}  \exp(-x^2-y^2)dxdy \qquad x=r\cos \theta, y=r\sin \theta \\ &=  \int_{0}^{+\infty}\int_{0}^{2\pi} \exp(-r^2)\left\vert\frac {\partial(x,y)}{\partial(r,\theta)} \right\vert d\theta dr \\&=    \int_{0}^{+\infty}\int_{0}^{2\pi} \exp(-r^2)\left\vert\begin{matrix} \cos\theta & -r\sin\theta  \\\sin\theta & r\cos\theta  \end{matrix} \right\vert d\theta dr \\ &=  \int_{0}^{+\infty}\int_{0}^{2\pi} \exp(-r^2)r d\theta dr \\&=   2\pi \int_{0}^{+\infty} \exp(-r^2)r  dr \\ &= 2\pi \left.(-\frac {1}{2}\exp(-r^2)  \right\vert_{0}^{\infty} \\ &= 2\pi (0-(-\frac 12)) \\&= \pi \end{aligned}$$    
             
         - Then we have: $I = \sqrt{\pi}$
         
         
 - The Mean
 
     $$\begin{aligned} \mathbb{E}[x] &= \int_{-\infty}^{+\infty} x\mathcal{N}(x\vert \mu, \sigma^2)  dx \\ &=   \frac {1}{(2\pi \sigma^2)^{1/2}}\int_{-\infty}^{+\infty} x \exp\left( -\frac {1}{2\sigma^2} (x-\mu)^2 \right)  dx \\&= \frac {1}{(2\pi \sigma^2)^{1/2}}\int_{-\infty}^{+\infty}  \exp\left( -\frac {1}{2\sigma^2} y^2 \right)(y+\mu) dy \\&= \frac {1}{(2\pi \sigma^2)^{1/2}} \left(0 + \mu\int_{-\infty}^{+\infty}  \exp\left( -\frac {1}{2\sigma^2} y^2 \right) dy  \right)  \\&= \mu \end{aligned}$$   
     
     - This is given by $f(y) =  \exp\left( -\frac {1}{2\sigma^2} y^2 \right)y$ is an odd function on interval $(-\infty, \infty)$, and $\int_{-\infty}^{+\infty}  \exp\left( -\frac {1}{2\sigma^2} y^2 \right) dy = \sqrt{2\pi \sigma^2}$
 
 
 - The Variance
     
     $$\begin{aligned} \qquad& \frac {\partial \left(\int \mathcal{N}(x\vert \mu, \sigma^2) dx\right)} {\partial \sigma^2} = \frac {\partial 1}{\partial \sigma^2} \\ \Longrightarrow \qquad& \int (-\frac 1{2\sigma^2} + \frac {(x-\mu)^2}{2\sigma^4}) \mathcal{N}(x\vert \mu, \sigma^2) dx = 0 \\ \Longrightarrow \qquad& \int (x-\mu)^2 \mathcal{N}(x\vert \mu, \sigma^2) dx = \sigma^2 \\ \Longrightarrow \qquad& \mathrm{var}[x] = \int (x-\mathbb{E}[x])^2  \mathcal{N}(x\vert \mu, \sigma^2) dx = \sigma^2  \end{aligned}$$   
 
### Multivariate

$$\begin{aligned} \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, \Sigma) = \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \exp\left(-\frac 12 (\boldsymbol{x} - \boldsymbol{\mu})^T\Sigma^{-1}(\boldsymbol{x} - \boldsymbol{\mu}) \right) \end{aligned}$$

- **Mahalanobis Distance**

    $$\begin{aligned} D_{x,y} = \sqrt{(x-y)^TS^{-1}(x-y)} \end{aligned}$$

- The Gaussian distribution will be constant on surfaces in $x$-space for which this quadratic form is constant.

    $$\begin{aligned} \Delta^2 = (\boldsymbol{x} - \boldsymbol{\mu})^T\Sigma^{-1}(\boldsymbol{x} - \boldsymbol{\mu}) \end{aligned}$$


- The **Covariance Matrix** $\Sigma$

    - Firstly, the matrix $\Sigma$ can be taken to be symmetric, without loss of generality, because any antisymmetric component would disappear from the exponent.

        - Suppose an arbitrary percision matrix $\Lambda$ can be written as $\Lambda^S + \Lambda^A$, where they statify:

            $$\begin{aligned} \Lambda^S = \frac {\Lambda_{ij}+\Lambda_{ji}}{2}, \qquad \Lambda^A = \frac {\Lambda_{ij}-\Lambda_{ji}}{2} \end{aligned}$$

            - Then $\Lambda^S = (\Lambda^S)^T$, $\Lambda^A = -(\Lambda^A)^T$
            - So in the quadratic form, the value of $(\boldsymbol{x} - \boldsymbol{\mu})^T\Lambda^A(\boldsymbol{x} - \boldsymbol{\mu})$ is zero, and then only the symmetric matrix $\Lambda^S$ left.

    - Then because $\Sigma$ is rela, symmetric matrix, its eigenvalues will be real, and its eigenvectors can be chosen to form an orthonormal set, so that:

        $$\begin{aligned} \boldsymbol{u}_i^T\boldsymbol{u}_j = \left\{\begin{aligned}1\qquad &i=j \\ 0 \qquad &i\neq j \end{aligned} \right. \end{aligned}$$
    
    - And then, we have:
        
        $$\begin{aligned} \Sigma &= \sum_{i=1}^D \lambda_i \boldsymbol{u}_i\boldsymbol{u}_i^T \\ \Sigma^{-1} &= \sum_{i=1}^D \frac 1 \lambda_i \boldsymbol{u}_i\boldsymbol{u}_i^T \\ \vert \Sigma \vert &= \prod_{i=1}^D \lambda_i  \end{aligned}$$

    - Substituting this reuslt into the quadratic form, we obtain:
        
        $$\begin{aligned} \Delta^2 &= (\boldsymbol{x} - \boldsymbol{\mu})^T \left(\sum_{i=1}^D \frac 1 \lambda_i \boldsymbol{u}_i\boldsymbol{u}_j^T \right)(\boldsymbol{x} - \boldsymbol{\mu}) \\&= \sum_{i=1}^D \frac {y_i^2} {\lambda_i} \qquad let \space y_i = \boldsymbol{u}^T(\boldsymbol{x} - \boldsymbol{\mu}) \end{aligned}$$

    - Interpreting $\{y_i\}$ as a new corrdinate system defined by the otthonormal vectors $\boldsymbol{u}_i$ that are shifted and rotated with respect to the original $x_i$ coordinates. 
        - Forming the vector $\boldsymbol{y}=(y_1,y_2,\cdots,y_D)^T$, we have
             
            $$\boldsymbol{y} = U(\boldsymbol{x} - \boldsymbol{\mu})$$
             
            - where the row of $U$ is $\boldsymbol{u}_i^T$, moreover $U$ is an orthogonal matrix, $UU^T = U^TU=I$

    - For the Gaussian distribution to be well defined, it is necessary for all of the eigenvalues $\lambda_i$ of the covariance matrix to be strictly positive, oterwise the distribution cannot be properly normalized.
    
    - In going from $\boldsymbol{x}$ to the $\boldsymbol{y}$ corrdinate system, we have a Jacobian matrix $\boldsymbol{J}$, and :
    
    $$\begin{aligned} \frac {\partial y_i}{\partial x_j} = mu_ij = U_{ij} = J_{ij} \end{aligned}$$
    
    - Then we can see $\boldsymbol{J} = U$, and $\vert J \vert = \vert U \vert = 1$
        
        $$\begin{aligned} p(\boldsymbol{y}) = p(\boldsymbol{x})\vert J \vert &= \frac {1}{(2\pi)^{D/2}}  \frac {1}{\prod_{i=1}^D \lambda_i^{1/2}} \exp(-\frac 12 \sum_{i=1}^D\frac {y_i^2}{\lambda_i}) \\&= \prod_{i=1}^D \frac 1{(2\pi\lambda_i)^{1/2}} \exp(-\frac {y_i^2}{2\lambda_i}) \end{aligned}$$

        - this is the product of $D$ independent univariate Gaussian distribution.


- The Moments of Gaussian distribution

    - First Order Moments

        $$\begin{aligned} \mathbb{E}[\boldsymbol{x}] &= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 (\boldsymbol{x} - \boldsymbol{\mu})^T\Sigma^{-1}(\boldsymbol{x} - \boldsymbol{\mu}) \right)\boldsymbol{x} d\boldsymbol{x} \\ &= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 \boldsymbol{z}^T\Sigma^{-1}\boldsymbol{z} \right)(\boldsymbol{z}+\boldsymbol{\mu}) d\boldsymbol{z} \end{aligned}$$

        - and because $f(\boldsymbol{z}) = \exp\left(-\frac 12 \boldsymbol{z}^T\Sigma^{-1}\boldsymbol{z} \right)\boldsymbol{z}$ is an odd function, then the integrals over the range $(-\infty, \infty)$ will be zero. Thus:

        $$\begin{aligned}  \mathbb{E}[\boldsymbol{x}] = \boldsymbol{\mu} \end{aligned}$$
    
    - Second Order Moments
    
        $$\begin{aligned} \mathbb{E}[\boldsymbol{x}\boldsymbol{x}^T] &= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 (\boldsymbol{x} - \boldsymbol{\mu})^T\Sigma^{-1}(\boldsymbol{x} - \boldsymbol{\mu}) \right)\boldsymbol{x}\boldsymbol{x}^T d\boldsymbol{x} \\ &= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 \boldsymbol{z}^T\Sigma^{-1}\boldsymbol{z} \right)(\boldsymbol{z}+\boldsymbol{\mu})(\boldsymbol{z}+\boldsymbol{\mu})^T d\boldsymbol{z} \\ &= \boldsymbol{\mu}\boldsymbol{\mu}^T + \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 \boldsymbol{z}^T\Sigma^{-1}\boldsymbol{z} \right)\boldsymbol{z}\boldsymbol{z}^T d\boldsymbol{z} \end{aligned}$$
        
        - and because $\boldsymbol{z} = (\boldsymbol{x}-\boldsymbol{\mu}) = U\boldsymbol{y} = \sum_{j=1}^D y_j \boldsymbol{u}_j$. Thus:
            
            $$\begin{aligned} \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 \boldsymbol{z}^T\Sigma^{-1}\boldsymbol{z} \right)\boldsymbol{z}\boldsymbol{z}^T d\boldsymbol{z} &= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \int \exp\left(-\frac 12 \sum_{j=1}^D y_j \boldsymbol{u}_j^T \left( \sum_{i=1}^D\frac {1}{\lambda_i}\boldsymbol{u}_i\boldsymbol{u}_i^T \right)\sum_{k=1}^D y_k \boldsymbol{u}_k \right)\sum_{m=1}^D y_m \boldsymbol{u}_m \sum_{n=1}^D y_n \boldsymbol{u}_n^T d\boldsymbol{y} \\ &= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \sum_{m=1}^D\sum_{n=1}^D \boldsymbol{u}_m\boldsymbol{u}_n^T\int \exp\left(-\frac 12 \left( \sum_{i=1}^D\frac {y_i}{\lambda_i} \boldsymbol{u}_i^T \right)\sum_{k=1}^D y_k \boldsymbol{u}_k \right) y_m y_n d\boldsymbol{y} \\&= \frac {1}{(2\pi)^{D/2}} \frac {1}{\vert\Sigma\vert^{1/2}} \sum_{m=1}^D\sum_{n=1}^D \boldsymbol{u}_m\boldsymbol{u}_n^T\int \exp\left(-\frac 12 \sum_{i=1}^D\frac {y_i^2}{\lambda_i} \right) y_m y_n d\boldsymbol{y} \\ &= \sum_{m=1}^D\sum_{n=1}^D \boldsymbol{u}_m\boldsymbol{u}_n^T \prod_{i=1}^D \int \frac {1}{(2\pi \lambda_i)^{1/2}}\exp(-\frac {y_i^2}{2\lambda_i})y_my_n d\boldsymbol{y}\end{aligned}$$
            
            - The integrals $\forall i\neq m$, and $i\neq n$ will be 1,so: 
                
                $$\begin{aligned} & \left\{\begin{aligned} &\sum_{m=1}^D\sum_{n=1}^D \boldsymbol{u}_m\boldsymbol{u}_n^T \int \frac {1}{(2\pi \lambda_m)^{1/2}}\exp(-\frac {y_m^2}{2\lambda_m})y_m dy_m y_ndy_n \qquad m\neq n, i = m \\ &\sum_{m=1}^D\sum_{n=1}^D \boldsymbol{u}_m\boldsymbol{u}_n^T \int \frac {1}{(2\pi \lambda_n)^{1/2}}\exp(-\frac {y_n^2}{2\lambda_n})y_ndy_n y_m dy_m \qquad m\neq n, i=n \\ &\sum_{i=1}^D \boldsymbol{u}_i\boldsymbol{u}_i^T \int \frac {1}{(2\pi \lambda_i)^{1/2}}\exp(-\frac {y_i^2}{2\lambda_i})y_i^2 dy_i \qquad i=m=n \end{aligned}\right. \\ =& \left\{\begin{aligned} &0 \qquad m\neq n, i = m \\ &0 \qquad m\neq n, i = n \\ &\sum_{i=1}^D \boldsymbol{u}_i\boldsymbol{u}_i^T (0+\lambda_i) \qquad i=m=n \end{aligned}\right. \end{aligned}$$
            
            - The final step, we have use the $\mathbb{E}[x^2] = \mu^2 + \sigma^2$, thus:
                
                $$\begin{aligned} \mathbb{E}[\boldsymbol{x}\boldsymbol{x}^T] &= \boldsymbol{\mu}\boldsymbol{\mu}^T + 0 + 0 + \sum_{i=1}^D \boldsymbol{u}_i\boldsymbol{u}_i^T \lambda_i \\ &= \boldsymbol{\mu}\boldsymbol{\mu}^T+ \Sigma\end{aligned}$$
    - And then :
        
        $$\begin{aligned} \mathrm{cov}[\boldsymbol{x}] = \mathbb{E}[\boldsymbol{x}\boldsymbol{x}^T] - \mathbb{E}[\boldsymbol{x}]\mathbb{E}[\boldsymbol{x}]^T = \Sigma \end{aligned}$$


- The number of free parameters in the Gaussian distribution:
    - A general symmetric covariance matrix $\Sigma$ will have $\frac {D^2-D}{2} + D = \frac {D(D+1)}{2}$ independent parameters, and there  another $D$ independent parameters in $\boldsymbol{\mu}$, then giving $\frac {D(D+3)}{2}$ parameters in total. Thus we can see, it is grows quadratically with $D$
    
    - If the covariance matrix $\Sigma$ is diagonal, then the number of parameters will be $2D$ in total.
    
    - Especially, if we consider the covariance matrix $\Sigma$ with $\Sigma = \sigma^2 I$, isotropic covariance, then the number of parameters will be $D+1$ in total.
    
