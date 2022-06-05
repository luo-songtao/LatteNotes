---
title: A Quick Look of Continuous Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Gaussian, Gamma, Beta, Dirichlet]
math: true
mermaid: true
---


### Uniform distribution

- $x\sim \mathcal{U}(x\vert a,b)$, $x\in [a,b]$

    $$\begin{aligned} p(x) = \mathcal{U}(x\vert a,b) = \frac {1}{b-a} \end{aligned}$$

### Univariate Gaussian distribution

- $x\sim \mathcal{N}(x\vert \mu, \sigma^2)$

    $$\begin{aligned} p(x) = \mathcal{N}(x\vert \mu, \sigma^2) = \frac {1}{\sqrt{2\pi\sigma^2}}\exp(-\frac{(x-\mu)^2}{2\sigma^2}) \end{aligned}$$

- Expectation: $\mu$
    - Proof

        $$\begin{aligned} \mathbb{E}[x] &= \int_{-\infty}^{+\infty}xp(x) \\&= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}x\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)dx \\&= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}(y+\mu)\exp\left(-\frac{y^2}{2\sigma^2}\right)dy \qquad \text{let \space} y=x-\mu \\&= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}y\exp\left(-\frac{y^2}{2\sigma^2}\right)dy + \frac {\mu}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}\exp\left(-\frac{y^2}{2\sigma^2}\right)dy \end{aligned}$$

        - The first term:

            $$\begin{aligned} \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}y\exp\left(-\frac{y^2}{2\sigma^2}\right)dy &= 0 \qquad \text{odd \space function} \end{aligned}$$
        
        - The second term:
             
             $$\begin{aligned} \text{let \space} I &= \int_{-\infty}^{+\infty}\exp\left(-\frac{y^2}{2\sigma^2}\right)dy \\ \text{then \space} I^2 &= \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} \exp\left(-\frac{y_1^2}{2\sigma^2}\right)\exp\left(-\frac{y_2^2}{2\sigma^2}\right)dy_1dy_2 \\ &= \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} \exp\left(-\frac{y_1^2+y_2^2}{2\sigma^2}\right)dy_1dy_2 \\ \text{let \space} y_1 &= r\cos(\theta) \\ y_2 &= r\sin(\theta) \\ I^2 &= \int_0^{2\pi}\int_0^{+\infty}\exp\left(-\frac{r^2}{2\sigma^2}\right)r dr d\theta \qquad \qquad  \left\vert \frac{\partial(x,y)}{\partial(r,\theta)}\right\vert = r \\&= 2\pi \int_0^{+\infty}\exp\left(-\frac{r^2}{2\sigma^2}\right)r dr \\&= 2\pi\sigma^2\int_0^{+\infty} \exp(-t)dt \qquad \qquad t= \frac {r^2}{2\sigma^2}、dt=\frac{r}{\sigma^2}dr \\ &= 2\pi\sigma^2 \end{aligned}$$
        -   Then:

            $$\begin{aligned} \mathbb{E}[x] = \frac {1}{\sqrt{2\pi\sigma^2}}(0 + \mu I) = \mu \end{aligned}$$

- Variance: $\sigma^2$

  $$\begin{aligned} \text{var}[x] &= \int_{-\infty}^{+\infty}(x-\mu)^2\frac {1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) \\ &= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty} y^2\exp\left(-\frac {y^2}{2\sigma^2}\right)dy \\ &= \frac {1}{\sqrt{2\pi\sigma^2}}\int_0^{+\infty} 2\sigma^2t \exp(-t)\frac{\sqrt{2\sigma^2}}{\sqrt{t}}dt \\ &= \frac {2\sigma^2}{\sqrt{\pi}}\int_0^{+\infty}\frac{t^{\frac12}}{\exp(t)}dt \\&= \frac {2\sigma^2}{\sqrt{\pi}} \Gamma(\frac 32) \\ &= \sigma^2 \qquad \qquad \because \Gamma(\frac 32)=\frac{\sqrt{\pi}}{2} \end{aligned}$$


### Multivariate Gaussian distribution

- $\boldsymbol{x}\backsim \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, \boldsymbol{\Sigma})$

    $$\begin{aligned} \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu},\boldsymbol{\Sigma}) = \frac{1}{(2\pi)^{\frac{D}{2}}}\frac{1}{\vert\boldsymbol{\Sigma}\vert^{\frac 12}}e^{-\frac 12 (\boldsymbol{x}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\boldsymbol{x}-\boldsymbol{\mu})} \end{aligned}$$


### Student's t-distribution

- $x\sim \text{St}(x\vert \mu, \lambda, \nu)$
  
  $$\begin{aligned} p(x) = \text{St}(x\vert \mu, \lambda, \nu) = \frac {\Gamma(\nu/2+1/2)}{\Gamma(\nu /2)}\left(\frac \lambda {\pi\nu}\right)^{1/2} \left[1+\frac {\lambda(x-\mu)^2}{\nu} \right]^{-\frac {\nu + 1}{2}} \end{aligned}$$

- Student's t-distribution (or simply the t-distribution) is any member of a family of continuous probability distributions that arise when estimating the mean of a normally distributed population in situations where the sample size is small and the population's standard deviation is unknown
- The t-distribution plays a role in a number of widely used statistical analyses, including Student's t-test for assessing the statistical significance of the difference between two sample means, the construction of confidence intervals for the difference between two population means, and in linear regression analysis.
- If we take a sample of $n$ observations from a normal distribution, then the t-distribution with $\nu=n-1$ degrees of freedom can be defined as the distribution of the location of the sample mean relative to the true mean, divided by the sample standard deviation, after multiplying by the standardizing term $\sqrt {n}$. In this way, the t-distribution can be used to construct a confidence interval for the true mean.

- Multivariate Student's t-distribution

    $$\begin{aligned} \mathrm{St}(\boldsymbol{x}\vert \boldsymbol{\mu}, \boldsymbol{\Lambda}, \nu) &= \int_0^\infty \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, (\eta \boldsymbol{\Lambda})^{-1}) \mathrm{Gam}(\eta \vert \frac \nu 2, \frac \nu 2)d\eta \\ &= \frac {\Gamma((D+\nu)/2)}{\Gamma(\nu/2)} \frac {\vert \boldsymbol{\Lambda} \vert^{1/2}}{(\pi \nu)^{D/2}} \left[1+ \frac {(\boldsymbol{x}-\boldsymbol{\mu})^T\Lambda(\boldsymbol{x}-\boldsymbol{\mu})}{\nu}\right]^{-(D+\nu)/2} \end{aligned}$$

### Chi-squared distribution

- If $Z_1, ..., Z_k$ are independent, standard normal random variables, then the sum of their squares
    
    $$Q = \sum_{i=1}^k Z_i^2$$
    
    is distribution according to the chi-squared distribution with $k$ degrees of freedom. This is usually denoted as:

    $$ Q \sim \mathcal{X}^2(k) \text{\qquad or \qquad} Q \sim \mathcal{X}_k^2 $$

- The chi-squared distribution is used primarily in hypothesis testing, and to a lesser extent for confidence intervals for population variance when the underlying distribution is normal.
- The chi-squared distribution is not as often applied in the direct modeling of natural phenomena

- $x\sim \text{Chi}(x\vert k)$: $k$ degrees of freedom

    $$p(x) = \text{Chi}(x\vert k) = \left\{\begin{aligned} &\frac {1}{2^{k/2}\Gamma(k/2)}x^{\frac k2 -1} e^{-\frac x2} \qquad &x>0 \\ &0 \qquad &\text{otherwise} \end{aligned} \right.$$

- Note: if $x>0$, Chi-squared distribution is a Gamma distribution
  
    $$\begin{aligned} \frac {1}{2^{k/2}\Gamma(k/2)}x^{\frac k2 -1} e^{-\frac x2} = \text{Gamma}\left(x\mid \frac k2, \frac 12\right) \end{aligned}$$

### Beta distribution

- $x\sim Beta(x\vert a,b), x \in [0,1], a>0, b>0$

    $$\begin{aligned} p(x) = Beta(x\vert a,b) &= \frac {x^{a-1}(1-x)^{b-1}}{\int_0^1 u^{a-1}(1-u)^{b-1}du} \\ &= \frac 1{B(a,b)}x^{a-1}(1-x)^{b-1} \qquad & \text{Beta \space function} \\ &= \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)}x^{a-1}(1-x)^{b-1} \qquad &\text{Gamma\space function} \end{aligned}$$

- Expectation: $\frac {a}{a+b}$

  $$\begin{aligned}  \mathbb{E}[x] &= \int_0^1 \frac {x}{B(a,b)}x^{a-1}(1-x)^{b-1} \\&= \frac {B(a+1,b)}{B(a,b)} \\&= \frac {\Gamma(a+1)\Gamma(b)}{\Gamma(a+b+1)}B(a,b)^{-1} \\&= \frac {a\Gamma(a)\Gamma(b)}{(a+b)\Gamma(a+b)}B(a,b)^{-1} \qquad \qquad \Gamma(n+1) = n\Gamma(n) \\&= \frac a{a+b} \end{aligned} $$

- Variance: $\frac {ab}{(a+b)^2(a+b+1)}$

    $$\begin{aligned}  \mathbb{E}[x^2] &= \int_0^1 \frac {x^2}{B(a,b)}x^{a-1}(1-x)^{b-1} \\&= \frac {B(a+2,b)}{B(a,b)} \\&= \frac {\Gamma(a+2)\Gamma(b)}{\Gamma(a+b+2)}B(a,b)^{-1} \\&= \frac {a(a+1)\Gamma(a)\Gamma(b)}{(a+b)(a+b+1)\Gamma(a+b)}B(a,b)^{-1} \qquad \qquad \Gamma(n+1) = n\Gamma(n) \\&= \frac {a(a+1)}{(a+b)(a+b+1)} \\ \\ \text{var}[x] &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ &= \frac {a(a+1)}{(a+b)(a+b+1)} - \frac {a^2}{(a+b)^2} \\ &= \frac {ab}{(a+b)^2(a+b+1)} \end{aligned} $$

### Dirichlet distribution

- Multivariate Beta distribution

- $\boldsymbol{x} \sim Dir(\boldsymbol{x}\vert \boldsymbol{a})$

    - $\boldsymbol{x}=[x_1,x_2,···,x_K]^T$

        $$\begin{aligned} &x_k \in [0,1], k=1,2,···,K \\ &\sum_{k=1}^K x_k = 1 \end{aligned}$$

    - $\boldsymbol{a}=[a_1, a_2,···,a_K]^K$
        
        $$\tilde{a} = \sum_{k=1}^K a_k$$

    $$\begin{aligned} p(\boldsymbol{x}) = Dir(\boldsymbol{x}\vert \boldsymbol{a}) = \frac {\Gamma(\tilde{a})}{\Gamma(a_1)\Gamma(a_2)···\Gamma(a_K)}\prod_{k=1}^Kx_k^{a_k-1} \end{aligned}$$

- Expectation: $\frac {a_i}{\tilde{a}}$

  $$\begin{aligned} \mathbb{E}[x_i] &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k=1}^{K}\Gamma(a_k)}x_i\prod_{k=1}^Kx_k^{a_k-1}  dx_1dx_2d_3···dx_K \\ &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k\neq i}^{K}\Gamma(a_k)}x_ix_i^{a_i-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1dx_2d_3···dx_K \\&= \int_0^1···\int_0^1 \frac {a_i\Gamma(\tilde{a})}{\Gamma(a_i+1)\prod_{k\neq i}^{K}\Gamma(a_k)}x_i^{a_i+1-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1dx_2d_3···dx_K \\&= \int_0^1···\int_0^1 \frac {a_i\Gamma(\tilde{a}+1)}{\tilde{a}\Gamma(a_i+1)\prod_{k\neq i}^{K}\Gamma(a_k)}x_i^{a_i+1-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1dx_2d_3···dx_K \\ &= \frac {a_i}{\tilde{a}} \end{aligned}$$

- Variance: $\frac {a_i(\tilde{a}-a_i)}{\tilde{a}^2(\tilde{a}+1)}$

    $$\begin{aligned} \mathbb{E}[x_i^2] &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k=1}^{K}\Gamma(a_k)}x_i^2\prod_{k=1}^Kx_k^{a_k-1}  dx_1···dx_K \\&= \int_0^1···\int_0^1 \frac {a_i(a_i+1)\Gamma(\tilde{a}+2)}{\tilde{a}(\tilde{a}+1)\Gamma(a_i+2)\prod_{k\neq i}^{K}\Gamma(a_k)}x_i^{a_i+2-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1···dx_K  \\ &= \frac {a_i(a_i+1)}{\tilde{a}(\tilde{a}+1)} \\ \\ \text{var}[x_i] &= \frac {a_i(a_i+1)}{\tilde{a}(\tilde{a}+1)} - \frac {a_i^2}{\tilde{a}^2} = \frac {a_i(\tilde{a}-a_i)}{\tilde{a}^2(\tilde{a}+1)} \end{aligned}$$

- Covariance: $\frac {-a_ia_j}{\tilde{a}^2(\tilde{a}+1)}$

  $$\begin{aligned} \begin{aligned} \mathbb{E}[x_ix_j] &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k=1}^{K}\Gamma(a_k)}x_ix_j\prod_{k=1}^Kx_k^{a_k-1}  dx_1···dx_K \\&= \int_0^1···\int_0^1 \frac {a_ia_j\Gamma(\tilde{a}+2)}{\tilde{a}(\tilde{a}+1)\Gamma(a_i+1)\Gamma(a_j+1)\prod_{k\neq i,j}^{K}\Gamma(a_k)}x_i^{a_i+1-1}x_j^{a_j+1-1}  \prod_{k\neq i,j}^{K}x_k^{a_k-1} dx_1···dx_K  \\ &= \frac {a_ia_j}{\tilde{a}(\tilde{a}+1)} \\ \\ \text{var}[x_i, x_j] &= \mathbb{E}[x_ix_j] - \mathbb{E}[x_i]\mathbb{E}[x_j] \\&= \frac {a_ia_j}{\tilde{a}(\tilde{a}+1)} - \frac {a_ia_j}{\tilde{a}^2} \\&= \frac {-a_ia_j}{\tilde{a}^2(\tilde{a}+1)} \end{aligned} \end{aligned}$$


### Gamma distribution

- $x\sim \text{Gamma}(x\vert a,b), x>0, a>0,b>0$

    $$\begin{aligned} p(x) = \text{Gamma}(x\vert a,b) &= \frac {1}{\Gamma(a)}b^ax^{a-1}e^{-bx} \end{aligned}$$

- Expectation: $\frac ab$

  $$\begin{aligned}  \mathbb{E}[x] &= \int_0^{+\infty}\frac {x}{\Gamma(a)}b^ax^{a-1}e^{-bx}dx \\&= \frac {1}{\Gamma(a)}\int_0^{+\infty}(bx)^ae^{-bx}dx \\&= \frac {1}{\Gamma(a)}\int_0^{+\infty}\frac {t^a}{e^t}\frac 1bdt \\&= \frac {\Gamma(a+1)}{b\Gamma(a)} \\&= \frac ab \end{aligned} $$

- Variance: $\frac {a}{b^2}$

    $$\begin{aligned} \mathbb{E}[x^2] &= \int_0^{+\infty}\frac {x^2}{\Gamma(a)}b^ax^{a-1}e^{-bx}dx \\&= \frac {1}{b\Gamma(a)}\int_0^{+\infty}(bx)^{a+1}e^{-bx}dx \\&= \frac {1}{b\Gamma(a)}\int_0^{+\infty}\frac {t^{a+1}}{e^t}\frac 1bdt \\&= \frac {\Gamma(a+2)}{b^2\Gamma(a)} \\&= \frac {a(a+1)}{b^2} \\ \\ \text{var}[x] &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ &= \frac {a(a+1)}{b^2} - \frac {a^2}{b^2} \\ &= \frac {a}{b^2} \end{aligned} $$

### Inverse Gamma distribution

- $x\sim \text{Gamma}(x\vert a,b), x>0, a>0,b>0$
    
    $$\begin{aligned} p(x) &= \text{Gamma}(x\vert a,b)  \\ &= \frac {1}{\Gamma(a)}b^a\left(\frac 1x\right)^{a+1}e^{-\frac bx} \end{aligned}$$

    - Derivation from Gamma distribution
    - Let $Y = g(X) = \frac 1X$, then $g^{-1}(Y) = \frac 1Y$, the pdf of $Y$ is:
        
        $$\begin{aligned} f_Y(y) &= f_X(g^{-1}(y))\left\vert \frac {d}{dy}g^{-1}(y) \right\vert \\ &= \frac {1}{\Gamma(a)}b^a(1/y)^{a-1}e^{-b/y} \frac {1}{y^2} \\&= \frac {1}{\Gamma(a)}b^a(1/y)^{a+1}e^{-b/y}   \end{aligned}$$ 

- Expection: $\mathbb{E}[x] = 1/\mathbb{E}[1/x] = \frac ba$

- Variance: $\frac {-b^2}{a^2(a+1)}$
    
    $$\begin{aligned} \mathbb{E}[x^2] &=  1/\mathbb{E}[1/x^2] \\ &= \frac {b^2}{a(a+1)} \\ \\ \text{var}[x] &=  \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ &= \frac {-b^2}{a^2(a+1)} \end{aligned}$$

### Wishart distribution

- Let $X$ be a $p × p$ symmetric matrix of random variables that is positive definite. Let $V$ be a (fixed) symmetric positive definite matrix of size $p × p$.

- Then, if $n ≥ p$, $X$ has a Wishart distribution with $n$ degrees of freedom if it has the probability density function:

- $X \sim \mathcal{W}(X\vert V, n)$
 
  $$\begin{aligned} f_\mathcal{\boldsymbol{X}}(X) = \frac {1}{2^{np/2}\vert V \vert^{n/2} \Gamma_p(n/2) } \vert X \vert^{(n-p-1)/2}e^{-\frac 12 \text{tr}(V^{-1}X)} \end{aligned}$$

  - The positive integer $n$ is the number of degrees of freedom. Sometimes this is written $\mathcal{W}(V, p, n)$. For $n ≥ p$ the matrix $S\sim \mathcal{W}(V, p)$ is invertible with probability 1 if $V$ is invertible.
  - Where $\Gamma_p$ is the multivariate gamma function:
    
    $$\Gamma_p\left(\frac n2\right) = \pi^{p(p-1)/4}\prod_{j=1}^p \Gamma\left(\frac n2 - \frac {j-1}{2}) \right)$$

- Note:
  - The density above is not the joint density of all the $p^{2}$ elements of the random matrix X (such $p^{2}$-dimensional density does not exist because of the symmetry constrains $X_{ij}=X_{ji})$, it is rather the joint density of $p(p+1)/2$ elements $X_{ij}$ for $i<j$.
  - Also, the density formula above applies only to positive definite matrices $X$ for other matrices the density is equal to zero.
  - If $p=V=1$, then this distribution is a Chi-squared distribution with $n$ degrees of freedom, also because $x>0$, it is also a Gamma distribution.

### Inverse Wishart distribution

- $X \sim \mathcal{W}^{-1}(X\vert V, n)$
 
  $$\begin{aligned} f_\mathcal{\boldsymbol{X}}(X) = \frac {\vert V \vert^{n/2}}{2^{np/2} \Gamma_p(n/2) } \vert X \vert^{-(n+p+1)/2}e^{-\frac 12 \text{tr}(VX^{-1})} \end{aligned}$$

  - Where $\Gamma_p$ is the multivariate gamma function:
    
    $$\Gamma_p\left(\frac n2\right) = \pi^{p(p-1)/4}\prod_{j=1}^p \Gamma\left(\frac n2 - \frac {j-1}{2}) \right)$$

- we see if $A = X^{-1}$, then $A \sim \mathcal{W}(V^{-1}, n)$

### Gauss-Gamma distribution

- For a pair of random variables, $(x,t)$, suppose that the conditional distribution of $X$ given $T$ is given by

    $$p(x\vert \tau) \sim \mathcal{N}\left(x\vert \mu, (\lambda \tau)^{-1}\right)$$
- And suppose also that the marginal distribution of $t$ is given by:

    $$p(\tau) \sim \text{Gamma}(\tau \vert a,b)$$

- Then $(x,\tau)$ has a Gauss-Gamma distribution: $(x,\tau) \sim \text{Gauss-Gamma}(\mu, \lambda, a, b)$

    $$\begin{aligned}p(x,\tau) &= \text{Gauss-Gamma}(\mu, \lambda, a, b) \\&= \mathcal{N}\left(x\vert \mu, (\lambda \tau)^{-1}\right)\text{Gamma}(a,b) \\&= \sqrt{\frac{\lambda \tau}{2\pi}}\exp\left( -\frac 12 \lambda \tau (x-\mu)^2 \right) \frac {b^a}{\Gamma(a)}\tau^{a-1}\exp(-b\tau) \end{aligned}$$


- In the multivariate form:
    
    $$\begin{aligned} p(\boldsymbol{x},\tau) &= \text{Gauss-Gamma}(\boldsymbol{\mu}, V^{-1}, a, b) \\&= \mathcal{N}\left(x\vert \boldsymbol{\mu}, \frac 1\tau V \right)\text{Gamma}(\tau \vert a,b) \\ &= \vert V\vert^{-\frac 12}\left(\frac{\tau}{2\pi}\right)^{k/2} \exp\left( -\frac \tau 2  (\boldsymbol{x}-\boldsymbol{\mu})^TV^{-1}(\boldsymbol{x}-\boldsymbol{\mu}) \right) \frac {b^a}{\Gamma(a)}\tau^{a-1}\exp(-b\tau) \end{aligned}$$
    
    - Where $V$ is the $k\times k$ covariance matrix for the Gaussian prior on $\boldsymbol{\mu}$
- Note:
  - The marginal distribution of $\tau$ is a gamma distribution
  - The conditional distribution of $x$ given $\tau$ is a gaussian distribution
  - The marginal distribution of $x$ is a Student's t-distribution.

### Gauss-inverse-Gamma distribution

- $(x,\sigma^2) \sim \text{Gauss-Gamma}^{-1}(\mu, \lambda, a, b)$

    $$\begin{aligned} p(x, \sigma^2) = \text{Gauss-Gamma}^{-1}(\mu, \lambda, a, b) &= \mathcal{N}(x\vert \mu, \sigma^2/\lambda)\text{Gamma}^{-1}(\sigma^2\vert a,b) \\ &= \sqrt{\frac {\lambda}{2\pi\sigma^2}}\exp\left( -\frac {\lambda}{2\sigma^2}  (x-\mu)^2 \right) \frac {b^a}{\Gamma(a)}\left(\frac 1{\sigma^2} \right)^{a+1}\exp\left(-\frac{b}{\sigma^2}\right)  \end{aligned}$$

- In the multivariate form:

    $$\begin{aligned} p(\boldsymbol{x}, \sigma^2) &= \text{Gauss-Gamma}^{-1}(\boldsymbol{\mu}, V^{-1}, a, b) \\&= \mathcal{N}\left(x\vert \boldsymbol{\mu}, \sigma^2 V \right)\text{Gamma}^{-1}(\sigma^2 \vert a,b)  \\ &= \vert V\vert^{-\frac 12}(2\pi\sigma^2)^{-k/2}\exp\left( -\frac {1}{2\sigma^2}  (\boldsymbol{x}-\boldsymbol{\mu})^TV^{-1}(\boldsymbol{x}-\boldsymbol{\mu}) \right) \frac {b^a}{\Gamma(a)}\left(\frac 1{\sigma^2} \right)^{a+1}\exp\left(-\frac{b}{\sigma^2}\right) \end{aligned}$$
    
    - Where $V$ is the $k\times k$ covariance matrix for the Gaussian prior on $\boldsymbol{\mu}$

### Gauss-Wishart distribution

- Suppose
    
    $$\begin{aligned} p(\boldsymbol{\mu}\vert \boldsymbol{\mu}_0, V^{-1}, \Lambda) \sim \mathcal{N}(\boldsymbol{\mu}\vert \boldsymbol{\mu}_0, V\Lambda^{-1}) \end{aligned}$$

  and:

    $$\begin{aligned} p(\Lambda \vert A, \nu) \sim \mathcal{W}(\Lambda \vert A, \nu) \end{aligned}$$

- Then
    
    $$\begin{aligned} p(\boldsymbol{\mu}, \Lambda) &\sim \mathcal{NW}(\boldsymbol{\mu}, \Lambda \vert \boldsymbol{\mu}_0, V^{-1}, W, nu) \\ &= \mathcal{N}(\boldsymbol{\mu}\vert \boldsymbol{\mu}_0, V\Lambda^{-1})\mathcal{W}(\Lambda \vert W, \nu) \end{aligned}$$

    - Where $V$ is the $k\times k$ covariance matrix for the Gaussian prior on $\boldsymbol{\mu}$

### Gauss-inverse-Wishart distribution

- Suppose
    
    $$\begin{aligned} p(\boldsymbol{\mu}\vert \boldsymbol{\mu}_0, V^{-1}, \Sigma) \sim \mathcal{N}\left(\boldsymbol{\mu}\vert \boldsymbol{\mu}_0, V\Sigma \right) \end{aligned}$$

  and:

    $$\begin{aligned} p(\Sigma \vert A, \nu) \sim \mathcal{W}^{-1}(\Sigma \vert W, \nu) \end{aligned}$$

- Then
    
    $$\begin{aligned} p(\boldsymbol{\mu}, \Sigma) &\sim \mathcal{NW}^{-1}(\boldsymbol{\mu}, \Sigma \vert \boldsymbol{\mu}_0, V^{-1}, W, \nu) \\ &= \mathcal{N}\left(\boldsymbol{\mu}\vert \boldsymbol{\mu}_0, V \Sigma \right)\mathcal{W}^{-1}(\Sigma \vert W, \nu) \end{aligned}$$

    - Where $V$ is the $k\times k$ covariance matrix for the Gaussian prior on $\boldsymbol{\mu}$



### Matrix Gaussian Distribution

$$\begin{aligned} p(X\mid M, U, V) = \frac {1}{(2\pi)^{\frac {np}{2}} \vert V\vert^{\frac n2} \vert U\vert^{\frac p2}} \exp\left( -\frac 12 \mathrm{Tr}\left[ V^{-1}(X-M)^TU^{-1}(X-M) \right] \right) \end{aligned}$$

- $M$ is $n\times p$
- $U$ is $p \times p$
- $V$ is $n \times n$