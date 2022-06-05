---
title: Gaussian Distribution (2)
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Gaussian Distribution]
math: true
mermaid: true
---

## Maximum Likelihood for the Gaussian

- Given a data set $\mathbf{X} = \{\mathbf{x}_1,\mathbf{x}_2,\cdots, \mathbf{x}_N\}$ which are drawn independently from a multivariate Gaussian distribution, then we can estimate the parameters of the distribution by maximum likelihood.

    $$\begin{aligned} \ln p(\mathbf{X} \vert \boldsymbol{\mu}, \Sigma) = -\frac 12\left(ND\ln(2\pi) + N\ln(\vert\Sigma\vert) + \sum_{i=1}^N(\mathbf{x}_i-\boldsymbol{\mu})^T\Sigma^{-1}(\mathbf{x}_i-\boldsymbol{\mu}) \right) \end{aligned}$$

- We can see, the likelihood function depends on the data set only through the two quantities:

    $$\begin{aligned} \sum_{i=1}^N x_i, \qquad \sum_{i=1}^N x_ix_i^T  \end{aligned}$$

    - these are known as the sufficient statistics for the Gaussian distribution
    
- The Maximum Likelihood solutions:

$$\begin{aligned} \frac {\partial \ln p(\mathbf{X} \vert \mathbf{\mu}, \Sigma)}{\partial \boldsymbol{\mu}} &= \sum_{i=1}^N \Sigma^{-1}(\mathbf{x}_i - \boldsymbol{\mu}) \\ \\ \Rightarrow\qquad \boldsymbol{\mu}_{ml} &= \frac{1}{N} \sum_{i=1}^N \mathbf{x}_i \end{aligned}$$

$$\begin{aligned} \frac {\partial \ln p(\mathbf{X} \vert \mathbf{\mu}, \Sigma)}{\partial \Sigma} &= -\frac 12\left(N\frac {\partial}{\partial \Sigma}\ln(\vert\Sigma\vert) + \frac {\partial}{\partial \Sigma}\sum_{i=1}^N(\mathbf{x}_i-\boldsymbol{\mu})^T\Sigma^{-1}(\mathbf{x}_i-\boldsymbol{\mu}) \right) \\&= -\frac 12\left(N\Sigma^{-1} + \sum_{i=1}^N -\Sigma^{-1}(\mathbf{x}_i-\boldsymbol{\mu})(\mathbf{x}_i-\boldsymbol{\mu})^T\Sigma^{-1}  \right) \\ &= -\frac 12 \left(NI - \Sigma^{-1}\sum_{i=1}^N(\mathbf{x}_i-\boldsymbol{\mu})(\mathbf{x}_i-\boldsymbol{\mu})^T\right)\Sigma^{-1} \\ \\  \Rightarrow\qquad \Sigma_{ml} &= \frac 1N \sum_{i=1}^N(\mathbf{x}_i-\boldsymbol{\mu}_{ml})(\mathbf{x}_i-\boldsymbol{\mu}_{ml})^T\end{aligned}$$
    
    
- The Expectation of Maximum Likelihood solutions:

    $$\begin{aligned} \mathbb{E}[\boldsymbol{\mu}_{ml}] &= \frac 1N \sum_{i=1}^N \mathbb{E}[\mathbf{x}_i] =\boldsymbol{\mu} \\ \mathbb{E}[\Sigma_{ml}] &= \frac 1N \sum_{i=1}^N \mathbb{E}[(\mathbf{x}_i-\boldsymbol{\mu}_{ml})(\mathbf{x}_i-\boldsymbol{\mu}_{ml})^T] = \frac {N-1}{N} \Sigma \end{aligned}$$
    
    - We the ml estimate of covariance has expeectation is less than the true value, and hence it is biased. But we can let $\tilde{\Sigma} = \frac {1}{N-1} \Sigma_{ml}$ to correct this bias.
        
        $$\begin{aligned} \mathbb{E}[\tilde{\Sigma}] = \frac {N}{N-1} \mathbb{E}[\Sigma_{ml}] = \Sigma \end{aligned}$$
    
    - Proof of the $\mathbb{E}[\Sigma_{ml}]$:
        
        $$\begin{aligned} \frac 1N \sum_{i=1}^N\mathbb{E}[(\mathbf{x}_i-\boldsymbol{\mu}_{ml})(\mathbf{x}_i-\boldsymbol{\mu}_{ml})^T] &=  \frac 1N \sum_{i=1}^N\left(\mathbb{E}[\mathbf{x}_i\mathbf{x}_i^T] -\mathbb{E}[\mathbf{x}_i\mathbf{\mu}_{ml}^T]-\mathbb{E}[\mathbf{\mu}_{ml}\mathbf{x}_i^T]+ \mathbb{E}[\mathbf{\mu}_{ml}\mathbf{\mu}_{ml}^T] \right) \end{aligned}$$
        
        - $\mathbb{E}[\mathbf{x}_i\mathbf{\mu}_{ml}^T]$, according to the iid property of the data set, (means: $\forall i\neq j,\mathbb{E}[\mathbf{x}_i\mathbf{x}_j^T]=\boldsymbol{\mu}\boldsymbol{\mu}^T; \forall i=j, \mathbb{E}[\mathbf{x}_i\mathbf{x}_j^T]=\mathbb{E}[\mathbf{x}_i\mathbf{x}_i^T]=\Sigma+\boldsymbol{\mu}\boldsymbol{\mu}^T$): 
            $$\begin{aligned} \mathbb{E}[\mathbf{x}_i\mathbf{\mu}_{ml}^T] = \frac 1N \sum_{j=1}^N \mathbb{E}[\mathbf{x}_i\mathbf{x}_j] = \frac 1N [(N-1)\boldsymbol{\mu}\boldsymbol{\mu}^T + \Sigma+\boldsymbol{\mu}\boldsymbol{\mu}^T] = \boldsymbol{\mu}\boldsymbol{\mu}^T+\frac 1N \Sigma \end{aligned}$$
            
        - With the same procdure:
            
            $$\begin{aligned} \mathbb{E}[\mathbf{\mu}_{ml}\mathbf{x}_i^T] = \mathbb{E}[\mathbf{\mu}_{ml}\mathbf{\mu}_{ml}^T] = \boldsymbol{\mu}\boldsymbol{\mu}^T+\frac 1N \Sigma  \end{aligned}$$
            
        - Thus:
        
            $$\begin{aligned} \frac 1N \sum_{i=1}^N\mathbb{E}[(\mathbf{x}_i-\boldsymbol{\mu}_{ml})(\mathbf{x}_i-\boldsymbol{\mu}_{ml})^T] = \frac 1N \sum_{i=1}^N (\Sigma + \boldsymbol{\mu}\boldsymbol{\mu}^T - (\boldsymbol{\mu}\boldsymbol{\mu}^T+\frac 1N \Sigma)) = \frac {N-1}{N} \Sigma \end{aligned}$$

### Sequential Estimation


- the sequential estimation of the Maximum Likelihood solution

    $$\begin{aligned} \boldsymbol{\mu}_{ml}^{(N)} &= \frac 1N \sum_{i=1}^N \mathbf{x}_i \\&= \frac 1N \mathbf{x}_N + \frac 1N \sum_{i=1}^{N-1} \mathbf{x}_i \\&= \frac 1N \mathbf{x}_N + \frac {N-1}{N}\boldsymbol{\mu}_{ml}^{(N-1)}  \\&= \boldsymbol{\mu}_{ml}^{(N-1)} + \frac 1N (\mathbf{x}_N-\boldsymbol{\mu}_{ml}^{(N-1)})\end{aligned}$$

    - But this is not always be able to derive a sequential algorithm by this route.


- Robbins-Monro Algorithm: this is a stochastic approximation.

    - Consider the function:
        
        $$\begin{aligned} f(\boldsymbol{\theta}) = \mathbb{E}_\boldsymbol{x}[\phi(\boldsymbol{\theta}, \boldsymbol{x})\vert \boldsymbol{\theta}] , \qquad \boldsymbol{\theta} \in R^D \end{aligned}$$
        
        - $\boldsymbol{x}$ is a random vector of unknown statistics.
        - the goal is to compute a root of $f(\boldsymbol{\theta})$
        
    - The Robbins-Monro Algorithm
    
        $$\begin{aligned} \boldsymbol{\theta}_{n} &= \boldsymbol{\theta}_{n-1}+ \alpha_{n-1} \phi(\boldsymbol{\theta}_{n-1}, \mathbf{x}_{n})  \end{aligned}$$
        
        - the convergence conditions
        $$\begin{aligned} \lim_{N \rightarrow \infty} \alpha_{N-1} &= 0 \\ \sum_{N=1}^\infty a_N &= \infty \\ \sum_{N=1}^\infty a_N^2 & \lt \infty \end{aligned}$$
        
        
- Using Robbins-Monro Algorithm to solve a general maximum likelihood problem sequentially

    $$\begin{aligned} \frac {\partial}{\partial \boldsymbol{\theta}} \left.\left( \frac 1N \sum_{i=1}^N \ln p(\mathbf{x}_i\vert \boldsymbol{\theta}) \right)\right\vert_{\boldsymbol{\theta}_{ml}} &= 0 \\ \\  \lim_{N\rightarrow \infty} \frac 1N \sum_{i=1}^N \frac {\partial}{\partial \boldsymbol{\theta}} \ln p(\boldsymbol{x}_i\vert \boldsymbol{\theta}) &= \mathbb{E}_{\boldsymbol{x}}[\frac {\partial}{\partial \boldsymbol{\theta}}\ln p(\boldsymbol{x}\vert \boldsymbol{\theta})] \end{aligned}$$
    
    - Then:
        
        $$\begin{aligned} \boldsymbol{\theta}_{n} &= \boldsymbol{\theta}_{n-1} + \alpha_{n-1}\frac {\partial}{\partial \boldsymbol{\theta}}\ln p(\boldsymbol{x}_n\vert \boldsymbol{\theta}) \end{aligned}$$
        
        
- the sequential estimation of the mean of a gaussian distribution

    $$\begin{aligned}  \frac {\partial}{\partial \boldsymbol{\mu}_{ml}}\ln p(\boldsymbol{x}_n\vert \boldsymbol{\mu}_{ml}, \Sigma) = \Sigma^{-1}(\mathbf{x}_i - \boldsymbol{\mu})  \end{aligned}$$
    - then, we let $\alpha_{n-1}=\frac \Sigma N$, we can also obtain the sequential estimation of the Maximum Likelihood solution.


### Parameter Estimate of Gaussian Distribution

$$p(x) = \mathcal{N}(x\vert \mu, \sigma^2) = \frac {1}{(2\pi \sigma^2)^{1/2}} \exp\left( -\frac {1}{2\sigma^2} (x-\mu)^2\right)$$

- Suppose we have an **i.i.d** data set of observation $\mathbf{X} = \{x_1, x_2, \cdots, x_N \}$, we shall determine values from the unknown parameters $\mu$ and $\sigma^2$ in Gaussian by maximizing the likelihood function.


- Likelihood function:
    
    $$L(\mu, \sigma^2) = p(\mathbf{X} \vert \mu, \sigma^2) = \prod_{i=1}^N \mathcal{N}(x_i\vert \mu, \sigma^2) $$
    
    
- The log likelihood funciton:
    
    $$ LL(\mu, \sigma^2) = \ln p(\mathbf{X} \vert \mu, \sigma^2)  = -\frac {1}{2\sigma^2} \sum_{i=1}^N (x_i - \mu)^2 - \frac N2 \ln \sigma^2 - \frac N2 \ln (2\pi)$$
    
    
- The partial derivative
    
    $$\begin{aligned} \frac {\partial LL}{\partial \mu} &= \frac {1}{\sigma^2} \sum_{i=1}^N (x_i -\mu) \\ \frac {\partial LL}{\partial \sigma^2} &= \frac {1}{2\sigma^2}( \frac {1}{\sigma^2}\sum_{i=1}^N (x_i - \mu)^2  - N)\end{aligned}$$
    
    
- Then we have:
    
    $$\begin{aligned} \mu_{ml} &= \arg \max_{\mu} LL(\mu, \sigma^2) = \frac 1N \sum_{i=1}^N x_i \\ \sigma^2_{ml} &= \arg \max_{\sigma^2} LL(\mu, \sigma^2) = \frac 1N \sum_{i=1}^N (x_i - \mu)^2 = \frac 1N \sum_{i=1}^N (x_i - \mu_{ml})^2 \end{aligned}$$
    
    - They are respectively the sample mean and sample variance.
    

- The expectation of $\mu_{ml}$ and $\sigma^2_{ml}$.
    
    $$\begin{aligned} \mathbb{E}[\mu_{ml}] &= \frac 1N \sum_{i=1}^N \mathbb{E}[x_i] \\ &= \frac 1N N\mu  \\ &= \mu \\ \mathbb{E}[\sigma^2_{ml}] &= \frac 1N \sum_{i=1}^N \mathbb{E}[(x_i-\mu_{ml})^2]  \\& = \frac 1N \sum_{i=1}^N \mathbb{E}[x_i^2] - \frac 2N \sum_{i=1}^N \mathbb{E}[x_i\mu_{ml}] + \frac 1N \sum_{i=1}^N\mathbb{E}[\mu_{ml}^2] \\&= \sigma^2 + \mu^2 - \frac 2N \mathbb{E}[\sum_{i=1}^Nx_i \mu_{ml}] + \mathbb{E}[\mu_{ml}^2] \\&= \sigma^2 + \mu^2 - \frac 2N \mathbb{E}[N\mu_{ml}^2] + \mathbb{E}[\mu_{ml}^2] \\&= \sigma^2 + \mu^2 - \mathbb{E}[\mu_{ml}^2] \\&= \sigma^2 + \mu^2 - \mathbb{E}[(\frac 1N \sum_{i=1}^N x_i)^2] \\ &= \sigma^2 + \mu^2 - \frac {1}{N^2} [(N^2-N)\mu^2 + N(\mu^2+\sigma^2)] \\ &= \sigma^2 - \frac 1N \sigma^2 \\&= \frac {N-1}{N} \sigma^2 \end{aligned}$$
    
    - The result is attained according to the i.i.d assuming of the data set. 
    - Then we see that the estimate for mean is unbiased, but for variance is not. The maximum likelihood approach systematically underestimates the variance of the distribution. On average the maximum likelihood estiamte will obtain the correct mean but will underestimate the true variance by a factor $\frac {N-1}{N}$.
        
        - But if let the estiamte for the variance be 
            
            $$\tilde{\sigma}^2 = \frac {N}{N-1} \sigma_{ml}^2 = \frac 1{N-1} \sum_{i=1}^N (x_i -\mu_{ml})^2$$
          
          then it will be unbiased.
        
        - Actually we also can see, in the limit $N\rightarrow \infty$ the maximum likelihhod solution for the variance equals the true variance of the distribution that generated the data.

```python
# Parameter Estimate
import numpy as np


class GaussianParameterEstimator(object):
    
    def __init__(self):
        pass
    
    def estimate_mean_by_ml(self, x):
        """estimate mean by maximum likehood: obtained by simple mean"""
        return np.mean(x, axis=0)
    
    def estimate_variance_by_ml(self, x, mu):
        """estiamte variance by maximum likelihood: obtained by simple variance"""
        return np.mean((x-mu)**2, axis=0)


true_mean = 1
true_sigma = 10

estimator = GaussianParameterEstimator()

print("True mean: {} and True variance: {}".format(true_mean, true_sigma**2))
for N in [10, 100, 1e4, 1e6, 1e8]:
    iid_data = np.random.normal(true_mean, true_sigma, int(N)) # generate data
    mean = estimator.estimate_mean_by_ml(iid_data)
    variance = estimator.estimate_variance_by_ml(iid_data, mean)
    print("mean_error: {}, variance_error: {}, N: {}, ".format(round(abs(mean-true_mean), 4), round(abs(variance-true_sigma**2), 4), N))

# Output
"""
True mean: 1 and True variance: 100
mean_error: 4.166, variance_error: 41.0061, N: 10, 
mean_error: 1.2388, variance_error: 15.1728, N: 100, 
mean_error: 0.0142, variance_error: 0.7322, N: 10000.0, 
mean_error: 0.0045, variance_error: 0.1071, N: 1000000.0, 
mean_error: 0.0003, variance_error: 0.0037, N: 100000000.0, 
"""
```

- Then we can see as $N\rightarrow \infty$, the maximum solution of mean and variance getting closer the mean and variance of the distribution that generated the data.


