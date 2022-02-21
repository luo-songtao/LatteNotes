---
title: Basic Continuous Distribution
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

        $$\begin{aligned} \mathbb{E}[x] &= \int_{-\infty}^{+\infty}xp(x) \\&= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}x\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)dx \\&= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}(y+\mu)\exp\left(-\frac{y^2}{2\sigma^2}\right)dy \qquad \mathrm{let \space} y=x-\mu \\&= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}y\exp\left(-\frac{y^2}{2\sigma^2}\right)dy + \frac {\mu}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}\exp\left(-\frac{y^2}{2\sigma^2}\right)dy \end{aligned}$$

        - The first term:

            $$\begin{aligned} \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty}y\exp\left(-\frac{y^2}{2\sigma^2}\right)dy &= 0 \qquad \mathrm{odd \space function} \end{aligned}$$
        
        - The second term:
             
             $$\begin{aligned} \mathrm{let \space} I &= \int_{-\infty}^{+\infty}\exp\left(-\frac{y^2}{2\sigma^2}\right)dy \\ \mathrm{then \space} I^2 &= \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} \exp\left(-\frac{y_1^2}{2\sigma^2}\right)\exp\left(-\frac{y_2^2}{2\sigma^2}\right)dy_1dy_2 \\ &= \int_{-\infty}^{+\infty}\int_{-\infty}^{+\infty} \exp\left(-\frac{y_1^2+y_2^2}{2\sigma^2}\right)dy_1dy_2 \\ \mathrm{let \space} y_1 &= r\cos(\theta) \\ y_2 &= r\sin(\theta) \\ I^2 &= \int_0^{2\pi}\int_0^{+\infty}\exp\left(-\frac{r^2}{2\sigma^2}\right)r dr d\theta \qquad \qquad  \left\vert \frac{\partial(x,y)}{\partial(r,\theta)}\right\vert = r \\&= 2\pi \int_0^{+\infty}\exp\left(-\frac{r^2}{2\sigma^2}\right)r dr \\&= 2\pi\sigma^2\int_0^{+\infty} \exp(-t)dt \qquad \qquad t= \frac {r^2}{2\sigma^2}、dt=\frac{r}{\sigma^2}dr \\ &= 2\pi\sigma^2 \end{aligned}$$
        -   Then:

            $$\begin{aligned} \mathbb{E}[x] = \frac {1}{\sqrt{2\pi\sigma^2}}(0 + \mu I) = \mu \end{aligned}$$

- Variance: $\sigma^2$

  $$\begin{aligned} \mathrm{var}[x] &= \int_{-\infty}^{+\infty}(x-\mu)^2\frac {1}{\sqrt{2\pi\sigma^2}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right) \\ &= \frac {1}{\sqrt{2\pi\sigma^2}} \int_{-\infty}^{+\infty} y^2\exp\left(-\frac {y^2}{2\sigma^2}\right)dy \\ &= \frac {1}{\sqrt{2\pi\sigma^2}}\int_0^{+\infty} 2\sigma^2t \exp(-t)\frac{\sqrt{2\sigma^2}}{\sqrt{t}}dt \\ &= \frac {2\sigma^2}{\sqrt{\pi}}\int_0^{+\infty}\frac{t^{\frac12}}{\exp(t)}dt \\&= \frac {2\sigma^2}{\sqrt{\pi}} \Gamma(\frac 32) \\ &= \sigma^2 \qquad \qquad \because \Gamma(\frac 32)=\frac{\sqrt{\pi}}{2} \end{aligned}$$


### Multivariate Gaussian distribution

- $\boldsymbol{x}\backsim \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, \boldsymbol{\Sigma})$

    $$\begin{aligned} \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu},\boldsymbol{\Sigma}) = \frac{1}{(2\pi)^{\frac{D}{2}}}\frac{1}{\vert\boldsymbol{\Sigma}\vert^{\frac 12}}e^{-\frac 12 (\boldsymbol{x}-\boldsymbol{\mu})^T\boldsymbol{\Sigma}^{-1}(\boldsymbol{x}-\boldsymbol{\mu})} \end{aligned}$$


### Beta distribution

- $x\sim Beta(x\vert a,b), x \in [0,1], a>0, b>0$

    $$\begin{aligned} Beta(x\vert a,b) &= p(x) \\ &= \frac {x^{a-1}(1-x)^{b-1}}{\int_0^1 u^{a-1}(1-u)^{b-1}du} \\ &= \frac 1{B(a,b)}x^{a-1}(1-x)^{b-1} \qquad & \mathrm{Beta \space function} \\ &= \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)}x^{a-1}(1-x)^{b-1} \qquad &\mathrm{Gamma\space function} \end{aligned}$$

- Expectation: $\frac {a}{a+b}$

  $$\begin{aligned}  \mathbb{E}[x] &= \int_0^1 \frac {x}{B(a,b)}x^{a-1}(1-x)^{b-1} \\&= \frac {B(a+1,b)}{B(a,b)} \\&= \frac {\Gamma(a+1)\Gamma(b)}{\Gamma(a+b+1)}B(a,b)^{-1} \\&= \frac {a\Gamma(a)\Gamma(b)}{(a+b)\Gamma(a+b)}B(a,b)^{-1} \qquad \qquad \Gamma(n+1) = n\Gamma(n) \\&= \frac a{a+b} \end{aligned} $$

- Variance: $\frac {ab}{(a+b)^2(a+b+1)}$

    $$\begin{aligned}  \mathbb{E}[x^2] &= \int_0^1 \frac {x^2}{B(a,b)}x^{a-1}(1-x)^{b-1} \\&= \frac {B(a+2,b)}{B(a,b)} \\&= \frac {\Gamma(a+2)\Gamma(b)}{\Gamma(a+b+2)}B(a,b)^{-1} \\&= \frac {a(a+1)\Gamma(a)\Gamma(b)}{(a+b)(a+b+1)\Gamma(a+b)}B(a,b)^{-1} \qquad \qquad \Gamma(n+1) = n\Gamma(n) \\&= \frac {a(a+1)}{(a+b)(a+b+1)} \\ \\ \mathrm{var}[x] &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ &= \frac {a(a+1)}{(a+b)(a+b+1)} - \frac {a^2}{(a+b)^2} \\ &= \frac {ab}{(a+b)^2(a+b+1)} \end{aligned} $$


### Gamma distribution

- $x\sim Gamma(x\vert a,b), x>0, a>0,b>0$

    $$\begin{aligned} Gamma(x\vert a,b) &= p(x) \\ &= \frac {1}{\Gamma(a)}b^ax^{a-1}e^{-bx} \end{aligned}$$

- Expectation: $\frac ab$

  $$\begin{aligned}  \mathbb{E}[x] &= \int_0^{+\infty}\frac {x}{\Gamma(a)}b^ax^{a-1}e^{-bx}dx \\&= \frac {1}{\Gamma(a)}\int_0^{+\infty}(bx)^ae^{-bx}dx \\&= \frac {1}{\Gamma(a)}\int_0^{+\infty}\frac {t^a}{e^t}\frac 1bdt \\&= \frac {\Gamma(a+1)}{b\Gamma(a)} \\&= \frac ab \end{aligned} $$

- Variance: $\frac {a}{b^2}$

    $$\begin{aligned} \mathbb{E}[x^2] &= \int_0^{+\infty}\frac {x^2}{\Gamma(a)}b^ax^{a-1}e^{-bx}dx \\&= \frac {1}{b\Gamma(a)}\int_0^{+\infty}(bx)^{a+1}e^{-bx}dx \\&= \frac {1}{b\Gamma(a)}\int_0^{+\infty}\frac {t^{a+1}}{e^t}\frac 1bdt \\&= \frac {\Gamma(a+2)}{b^2\Gamma(a)} \\&= \frac {a(a+1)}{b^2} \\ \\ \mathrm{var}[x] &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ &= \frac {a(a+1)}{b^2} - \frac {a^2}{b^2} \\ &= \frac {a}{b^2} \end{aligned} $$

### Dirichlet distribution

- Multivariate Beta distribution

- $\boldsymbol{x} \sim Dir(\boldsymbol{x}\vert \boldsymbol{a})$

    - $\boldsymbol{x}=[x_1,x_2,···,x_K]^T$

        $$\begin{aligned} &x_k \in [0,1], k=1,2,···,K \\ &\sum_{k=1}^K x_k = 1 \end{aligned}$$

    - $\boldsymbol{a}=[a_1, a_2,···,a_K]^K$
        
        $$\tilde{a} = \sum_{k=1}^K a_k$$

    $$\begin{aligned} Dir(\boldsymbol{x}\vert \boldsymbol{a}) = p(\boldsymbol{x}) = \frac {\Gamma(\tilde{a})}{\Gamma(a_1)\Gamma(a_2)···\Gamma(a_K)}\prod_{k=1}^Kx_k^{a_k-1} \end{aligned}$$

- Expectation: $\frac {a_i}{\tilde{a}}$

  $$\begin{aligned} \mathbb{E}[x_i] &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k=1}^{K}\Gamma(a_k)}x_i\prod_{k=1}^Kx_k^{a_k-1}  dx_1dx_2d_3···dx_K \\ &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k\neq i}^{K}\Gamma(a_k)}x_ix_i^{a_i-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1dx_2d_3···dx_K \\&= \int_0^1···\int_0^1 \frac {a_i\Gamma(\tilde{a})}{\Gamma(a_i+1)\prod_{k\neq i}^{K}\Gamma(a_k)}x_i^{a_i+1-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1dx_2d_3···dx_K \\&= \int_0^1···\int_0^1 \frac {a_i\Gamma(\tilde{a}+1)}{\tilde{a}\Gamma(a_i+1)\prod_{k\neq i}^{K}\Gamma(a_k)}x_i^{a_i+1-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1dx_2d_3···dx_K \\ &= \frac {a_i}{\tilde{a}} \end{aligned}$$

- Variance: $\frac {a_i(\tilde{a}-a_i)}{\tilde{a}^2(\tilde{a}+1)}$

    $$\begin{aligned} \mathbb{E}[x_i^2] &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k=1}^{K}\Gamma(a_k)}x_i^2\prod_{k=1}^Kx_k^{a_k-1}  dx_1···dx_K \\&= \int_0^1···\int_0^1 \frac {a_i(a_i+1)\Gamma(\tilde{a}+2)}{\tilde{a}(\tilde{a}+1)\Gamma(a_i+2)\prod_{k\neq i}^{K}\Gamma(a_k)}x_i^{a_i+2-1} \prod_{k\neq i}^{K}x_k^{a_k-1} dx_1···dx_K  \\ &= \frac {a_i(a_i+1)}{\tilde{a}(\tilde{a}+1)} \\ \\ \mathrm{var}[x_i] &= \frac {a_i(a_i+1)}{\tilde{a}(\tilde{a}+1)} - \frac {a_i^2}{\tilde{a}^2} = \frac {a_i(\tilde{a}-a_i)}{\tilde{a}^2(\tilde{a}+1)} \end{aligned}$$

- Covariance: $\frac {-a_ia_j}{\tilde{a}^2(\tilde{a}+1)}$

  $$\begin{aligned} \begin{aligned} \mathbb{E}[x_ix_j] &= \int_0^1···\int_0^1 \frac {\Gamma(\tilde{a})}{\prod_{k=1}^{K}\Gamma(a_k)}x_ix_j\prod_{k=1}^Kx_k^{a_k-1}  dx_1···dx_K \\&= \int_0^1···\int_0^1 \frac {a_ia_j\Gamma(\tilde{a}+2)}{\tilde{a}(\tilde{a}+1)\Gamma(a_i+1)\Gamma(a_j+1)\prod_{k\neq i,j}^{K}\Gamma(a_k)}x_i^{a_i+1-1}x_j^{a_j+1-1}  \prod_{k\neq i,j}^{K}x_k^{a_k-1} dx_1···dx_K  \\ &= \frac {a_ia_j}{\tilde{a}(\tilde{a}+1)} \\ \\ \mathrm{var}[x_i, x_j] &= \mathbb{E}[x_ix_j] - \mathbb{E}[x_i]\mathbb{E}[x_j] \\&= \frac {a_ia_j}{\tilde{a}(\tilde{a}+1)} - \frac {a_ia_j}{\tilde{a}^2} \\&= \frac {-a_ia_j}{\tilde{a}^2(\tilde{a}+1)} \end{aligned} \end{aligned}$$

