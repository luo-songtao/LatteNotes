---
title: Gaussian-Gamma Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Gaussian Distribution, Gamma Distribution]
math: true
mermaid: true
---

## Gaussian-Gamma distribution

$$\begin{aligned} \mathrm{GausGam}(\mu, \lambda  \vert \mu_0, \tau , a, b) &= \mathcal{N}(\mu \vert \mu_0, (\tau\lambda)^{-1}) \mathrm{Gam}(\lambda \vert a,b)  \\ &= \left(\frac {\lambda\tau}{2\pi}\right)^{1/2}\exp\left(-\frac {\lambda\tau}{2} (\mu -\mu_0)^2\right)  \frac {1}{\Gamma(a)} b^a\lambda^{a-1}\exp(-b\lambda) \end{aligned}$$

- The integral

    $$\begin{aligned} \int_0^{+\infty} \int_{-\infty}^{+\infty}  \mathrm{GausGam}(\mu, \lambda  \vert \mu_0, \tau , a, b) d\mu d\lambda &=  \int_0^{+\infty} \int_{-\infty}^{+\infty}  \left(\frac {\lambda\tau}{2\pi}\right)^{1/2}\exp\left(-\frac {\lambda\tau}{2} (\mu -\mu_0)^2\right)  \frac {1}{\Gamma(a)} b^a\lambda^{a-1}\exp(-b\lambda) d\mu d\lambda \\&= \int_0^{+\infty}  \frac {1}{\Gamma(a)} b^a\lambda^{a-1}\exp(-b\lambda) \left[ \int_{-\infty}^{+\infty}  \left(\frac {\lambda\tau}{2\pi}\right)^{1/2}\exp\left(-\frac {\lambda\tau}{2} (\mu -\mu_0)^2\right)  d\mu \right]d\lambda \\&=  \int_0^{+\infty}  \frac {1}{\Gamma(a)} b^a\lambda^{a-1}\exp(-b\lambda) d\lambda \\&= 1  \end{aligned}$$
    

- The Moments:

    $$\begin{aligned} \mathbb{E}_{\mu,\lambda}[\mu] &= \mu_0  \\   \mathbb{E}_{\mu,\lambda}[\lambda] &= \frac ab \\  \mathbb{E}_{\mu,\lambda}[\mu\lambda] &= \mu_0\frac ab \\  \mathbb{E}_{\mu,\lambda}[\mu^2] &= \mu_0^2 + \frac {b}{(a-1)\tau} \\  \mathbb{E}_{\mu,\lambda}[\lambda \mu^2] &= \mu_0^2\frac ab + \frac 1\tau      \end{aligned}$$
    
- The Variance:

    $$\begin{aligned} \mathrm{var}[\mu] &=  \frac {b}{(a-1)\tau} \\   \mathrm{var}[\lambda] &=  \frac {a}{b^2}  \end{aligned}$$

```python

# Gaussian-Gamma distribution
import numpy as np
import matplotlib.pyplot as plt
from matplotlib import cm
from scipy.stats import gamma, multivariate_normal


def gaussian_gamma(x,y, mu, tau, a,b):
    """the pdf of Gaussian Gamma distribution"""
    return multivariate_normal.pdf(x, mean=mu, cov=1/(y*tau) ) * gamma.pdf(y, a=a, scale=1/b)


mu, tau, a,b = 0,2,5,6

m = 100
n=50
x = np.linspace(mu-2,mu+2, m)
y = np.linspace(0.01, 2.01, n)
x1, x2 = np.meshgrid(x,y)
points = np.dstack([x1,x2]).reshape(m*n, 2)  

fig1, ax1 = plt.subplots(subplot_kw={"projection": "3d"}, figsize=(8,8))

z = []
for x,y in points:
    z.append(gaussian_gamma(x,y, mu, tau, a,b))
z = np.asarray(z)

ax1.plot_surface(x1, x2, z.reshape(n, m), cmap=cm.turbo)

fig2, ax2 = plt.subplots(figsize=(8,8))
ax2.contour(x1, x2, z.reshape(n, m), cmap=cm.turbo)

plt.show()
```

<img src="/assets/images/probability/show_gaussian_gamma.png" width = "400" height = "800" alt="show_gauss_gamma" align=center />

