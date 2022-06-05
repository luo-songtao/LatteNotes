---
title: Gamma Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Gamma Distribution]
math: true
mermaid: true
---


## Gamma Distribution

$$\begin{aligned} \mathrm{Gam}(\lambda \vert a,b) &= \frac {1}{\Gamma(a)} b^a \lambda^{a-1}\exp(-b\lambda) \end{aligned}$$
    
- To verity the integral over $\lambda$ is 1

    $$\begin{aligned} \int_0^\infty \mathrm{Gam}(\lambda \vert a,b) &= \int_0^\infty \frac {1}{\Gamma(a)} b^a \lambda^{a-1}\exp(-b\lambda)d\lambda \\&= \frac {1}{\Gamma(a)}b^a  \int_0^\infty (\frac tb)^{a-1}\exp(-t)d(\frac tb) \\&= \frac {1}{\Gamma(a)} \int_0^\infty t^{a-1}\exp(-t)dt \\ &= \frac {1}{\Gamma(a)} \Gamma(a)  \\&= 1 \end{aligned}$$

- The Mean and Variance of Gamma distribution

    $$\begin{aligned} \mathbb{E}[\lambda] &= \int_0^\infty \lambda  \mathrm{Gam}(\lambda \vert a,b) d\lambda \\&= \int_0^\infty \lambda  \frac {1}{\Gamma(a)} b^a \lambda^{a-1}\exp(-b\lambda) d\lambda  \\&=    \frac {1}{\Gamma(a)} b^a  \int_0^\infty (\frac tb)^{a}\exp(-t)d(\frac tb) \\ &=  \frac {1}{\Gamma(a)} b^a \frac {1}{b^{a+1}} \Gamma(a+1) \\ &= \frac ab  \end{aligned}$$
    
    $$\begin{aligned}  \mathrm{var}[\lambda] &=  \int_0^\infty (\lambda - \frac ab)^2  \mathrm{Gam}(\lambda \vert a,b) d\lambda \\&=  \frac {1}{\Gamma(a)} b^a  \left( \frac {1}{b^{a+2}} \Gamma(a+2) - \frac {a^2}{b^2}   \right) \\ &= \frac {a} {b^2}   \end{aligned}$$


- Gamma distribution can be parameterized with just one parameter

    - Let $\lambda = \frac xb$, we can obtain:

        $$\begin{aligned}  \mathrm{Gam}(\frac xb \vert a,b)  &=  \frac {1}{\Gamma(a)} b^a (\frac xb)^{a-1}\exp(-b\frac xb)  \\&=  b \frac {1}{\Gamma(a)} x^{a-1}\exp(-x)  \end{aligned}$$

        - Define $ \tilde{\mathrm{Gam}}(x \vert a) = \frac {1}{\Gamma(a)} x^{a-1}\exp(-x)$, then we have
            $$\begin{aligned} \tilde{\mathrm{Gam}}(x \vert a) = \frac 1b \mathrm{Gam}(\frac xb \vert a,b)  \end{aligned}$$
            
            - equally, we have:
                $$\begin{aligned} \mathrm{Gam}(x \vert a,b) = b\tilde{\mathrm{Gam}}(bx \vert a)  \end{aligned}$$
            
        - Then we can see, the one parameter form $\tilde{\mathrm{Gam}}(x \vert a)$  is a scaled verison of the two parameter form $\mathrm{Gam}(\lambda \vert a,b)$ with a scaler $\frac 1b$
        
```python
# Gamma Distributions
import numpy as np
import matplotlib.pyplot as plt
from scipy.special import gamma as gam_fn
from scipy.stats import gamma

def gamma1(x, a, b):
    """Gamma distribution:  parameterized with two parameter"""
    return 1/gam_fn(a) * b**a * x**(a-1) *np.exp(-b*x)

def gamma2(x,a):
    """Gamma distribution:  parameterized with one parameter"""
    return 1/gam_fn(a) * x**(a-1) *np.exp(-x)

parameters = [(0.1,0.1), (1,1), (4,6),  (10,15)]

fig, axs = plt.subplots(1,4, figsize=(24,6))

for i in range(4):
    a, b = parameters[i]
    ax = axs[i]
    
    x = np.linspace(gamma.ppf(0.0001, a), gamma.ppf(0.9999, a), 10000)/b
#     x = np.linspace(0.01, 1.99, 100)
#     ax.plot(x, gamma.pdf(x, a, scale=1/b), 'r', lw=3, alpha=0.8)
#     ax.plot(x, gamma1(x,a,b), 'r', lw=3, alpha=0.8)
    ax.plot(x, gamma2(b*x,a)*b, 'r', lw=3, alpha=0.8)
    ax.set_xlim((0,2))
    ax.set_ylim((0,2))
    ax.set_title("a={}, b={}".format(a,b))
    ax.set_xlabel("$\lambda$")

plt.show()
```

![show_gamma](/assets/images/probability/show_gamma.png)
