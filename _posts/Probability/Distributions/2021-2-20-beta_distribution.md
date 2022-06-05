---
title: Beta Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Beta Distribution]
math: true
mermaid: true
---



## Beta Distribution

- New we introduce a prior distribution of $p(\mu)$ over the parameter $\mu$ in the Bernouli and Binomial distribution
    
    
- The beta distribution as the prior distribution will have a simple interpretation as well as some useful analytical properties. 

- **conjugacy**: In this case, if we let the posterior distribution is priportional to the product of the prior and the likelihood function, then it will have the same functional form as the prior. Then we will see the posterior distribution is also a beta distribution. This property is called **conjugacy**.

    $$\begin{aligned} \mathrm{Beta}(\mu \vert a, b) = \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)} \mu^{a-1}(1-\mu)^{b-1} \end{aligned}$$
    - where $\Gamma(x)$ is the Gamma function defined by:
    
        $$\begin{aligned}\Gamma(x) = \int_0^{\infty} u^{x-1}e^{-u}du \end{aligned}$$
        
        - $\Gamma(x+1) = x\Gamma(x)$, and then $\Gamma(x+1) = x!$ when $x$ is an integer.
            
            $$\begin{aligned} \Gamma(x+1) &= \int_0^{\infty} u^{x}e^{-u}du \\&= \int_0^{\infty} -u^{x}d(e^{-u}) \\&=-u^{x}e^{-u} - \int_0^\infty x u^{x-1} e^{-u} du \qquad\qquad (using: \space \int u(x)d[v(x)] = u(x)v(x) 
            
            - \int v(x)d[u(x)]) \\&= -u^{x}e^{-u} + x\Gamma(x)  \end{aligned}$$
            - according $u \in [0,+\infty)$, if $u=0$, $-u^x e^{-u}=0$; and if $u\rightarrow +\infty$:
                
                $$\lim_{u\rightarrow +\infty} -\frac {u^x}{e^u} = \lim_{u\rightarrow +\infty} -\frac {x!}{e^u} = 0 \qquad\qquad (using:\space \mathrm{L'Hôpital's \space rule})$$
            - then we have $\Gamma(x+1) = x\Gamma(x)$.
    
    - The coefficient ensures that the beta distribution is normalized.
    
        $$\begin{aligned} \int_0^1 \mathrm{Beta}(\mu \vert a, b) du = 1 \end{aligned}$$
    

- Mean

    $$\begin{aligned} \mathbb{E}[\mu] &= \int_0^1 \mu \mathrm{Beta}(\mu \vert a, b) d\mu \\&= \int_0^1 \mu \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)} \mu^{a-1}(1-\mu)^{b-1}d\mu \\&= \frac {a\Gamma(a+1+b)}{(a+b)\Gamma(a+1)\Gamma(b)} \int_0^1  \mu^{a}(1-\mu)^{b-1}d\mu \\ &= \frac {a}{a+b} \int_0^1 \frac {\Gamma(c+b)}{\Gamma(c)\Gamma(b)} \mu^{c-1}(1-\mu)^{b-1}d\mu \\ &= \frac {a}{a+b}\end{aligned}$$


- Variance

    $$\begin{aligned} \mathrm{var}[\mu]  &= \mathbb{E}[(\mu - \frac {a}{a+b})^2] \\&= \int_0^1 (\mu - \frac {a}{a+b})^2 \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)} \mu^{a-1}(1-\mu)^{b-1}  d\mu \\&= \frac {a}{a+b} \left(\int_0^1 \mu \frac {\Gamma(a+b+1)}{\Gamma(a+1)\Gamma(b)} \mu^{a}(1-\mu)^{b-1}\right) - 2\frac {a}{a+b} * \frac {a}{a+b} + \left(\frac {a}{a+b}\right)^2 \\&= \frac {a}{a+b} \frac {a+1}{a+b+1} - \left(\frac {a}{a+b}\right)^2 \\ &= \frac {ab}{(a+b)^2(a+b+1)} \end{aligned}$$


- The Posterior Distribution
    
    $$\begin{aligned} p(\mu \vert D) &\propto p(D\vert \mu)p(\mu) \\ p(\mu \vert m, N, a, b) &\propto \mu^{m+a-1}(1-\mu)^{N-m+b-1} \end{aligned}$$

    - Then we have:
        
        $$\begin{aligned} p(\mu \vert m, N, a, b) = \frac {\Gamma(N+a+b)}{\Gamma(m+a)\Gamma(N-m+b)} \mu^{m+a-1}(1-\mu)^{N-m+b-1} \end{aligned}$$
   

- The Predictive Distribution
    
    $$\begin{aligned} p(x\vert D) &= \int_0^1 p(x\vert \mu) p(\mu\vert D)d\mu \\ &=\left\{\begin{aligned}&\int_0^1 \mu p(\mu\vert D)d\mu \qquad \qquad &x=1 \\ & \int_0^1 (1-\mu) p(\mu\vert D)d\mu \qquad \qquad &x=0 \end{aligned} \right. \\ &= \left\{\begin{aligned}&\mathbb{E}_{\mu}[\mu \vert D] \qquad \qquad &x=1 \\ & 1-\mathbb{E}_{\mu}[\mu \vert D] \qquad \qquad &x=0 \end{aligned} \right.  \end{aligned}$$

    - Using the posterior distribution result, we obtain:
        
        $$\begin{aligned} p(x=1 \vert D) &= \int_0^1 \mu \frac {\Gamma(N+a+b)}{\Gamma(m+a)\Gamma(N-m+b)} \mu^{m+a-1}(1-\mu)^{N-m+b-1} d\mu &= \frac {m+a}{N+a+b} \\ p(x=0\vert D) &= 1 - p(x=1 \vert D) &= \frac {N-m+b}{N+a+b}  \end{aligned}$$

    - Then we can see, in the limit of an infinitely large data set $m,N\rightarrow \infty$, this result reduces to the maximum likelihood result $\frac mN$. 
    
    - It is a very general property that the Bayesian and maximum likelihood results will agree in the limit of an infinitely large data set.
    
    - For a finite data set, the posterior distribution mean for $\mu$ always lie between prior mean and the maximum likelihood estimate for $\mu$ corresponding to the relative frequencies of events.

```python
# Beta Distributions
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import beta

parameters = [(0.1,0.3), (1,1), (8,4), (200,150)]
fig, axs = plt.subplots(1,4, figsize=(24,6))

for i in range(4):
    a, b = parameters[i]
    ax = axs[i]
    
    # mu = np.linspace(beta.ppf(0, a, b), beta.ppf(1, a, b), 100)
    mu = np.linspace(0,1, 100)
    ax.plot(mu, beta.pdf(mu, a, b),
           'r', lw=3, alpha=0.8, label='beta pdf')

    ax.set_xlim((0,1))
    ax.set_title("a={}, b={}".format(a,b))
    ax.set_xlabel("$\mu$")

plt.show()
```
![show_beta](/assets/images/probability/show_beta.png)

- We can see that as $a\rightarrow \infty$, $b\rightarrow \infty$, the beta distribution becomes more sharply peaked, because the variance goes to zero for $a\rightarrow \infty$ or $b\rightarrow \infty$.

- Also in the posterior distribution of $\mu$, as the number of observations increases, the posterior distribution becomes more sharply peaked. And the variance of posterior distribution decreases, that means the uncertainty represented by the posterior distribution will also decrease.


- But is that a general property of Bayesian learning, we can see in the following:
    - To address this, we can take a frequentist view of Bayesian learning and show that, on average, such a property does indeed hold.
    
    - Consider a gengeral Bayesian inference problem for a parameter $\theta$ for which we have observed a data set $D$, described by the joint distribution $p(\theta, D)$.
    - Firstly: we can see that the posterior mean of $\theta$, averaged over the distribution generation the data, is equal to the prior mean of $\theta$.
        
        $$\begin{aligned} \mathbb{E}_\theta[\theta] &= \mathbb{E}_D[\mathbb{E}_\theta[\theta\vert D]] \\ Proof: \qquad&  \\ \mathbb{E}_D[\mathbb{E}_\theta[\theta\vert D]] &= \int \left[ \int \theta p(\theta\vert D)d\theta \right]p(D) dD \\ &= \int \theta p(\theta) d\theta \\ &= \mathbb{E}_\theta[\theta] \end{aligned}$$
    
    - And then, we can see the prior variance of $\theta$ is equal to the average posterior variance of $\theta$ plus to the variance of posterior mean of $\theta$.
        
        $$\begin{aligned} \mathrm{var}_{\theta}[\theta] &= \mathbb{E}_{D}[\mathrm{var}_\theta[\theta\vert D]] + \mathrm{var}_{D}[\mathbb{E}_\theta[\theta\vert D]] \\ &\ge \mathbb{E}_{D}[\mathrm{var}_\theta[\theta\vert D]] \end{aligned}$$
        
    - It means that, on average, the variance of posterior distribution is smaller than the prior variance. And the reduction is greater if the variance in the posterior mean is greater.
    
    - Note, however, that this result only holds on average, and that for a particular observed data set it is possible for the posterior variance to be larger than the prior variance.
        

