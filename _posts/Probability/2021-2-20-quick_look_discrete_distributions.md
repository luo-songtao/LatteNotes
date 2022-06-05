---
title: A Quick Look of Discrete Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Bernoulli, Binomial, Multinomial]
math: true
mermaid: true
---


### Bernoulli distribution

- $x\sim Bern(x\vert \mu)$

  $$\begin{aligned}  p(x) = Bern(x\vert \mu) &= \mu^x(1-\mu)^{1-x} \\ &= \mu^{\mathbb{I}(x=1)}(1-\mu)^{\mathbb{I}(x=0)} \\ \\ \mathbb{E}[x] &= 1*\mu + 0*(1-\mu) = \mu \\ var[x] &= \mathbb{E}[x^2]-\mathbb{E}[x]^2 = \mu-\mu^2 = \mu(1-\mu) \end{aligned} $$

- Likelihood Function:

  $$\begin{aligned} L(D) = p(D\vert \mu) &= \prod_{n=1}^N p(x_n) \\ &= \prod_{n=1}^N \mu^{x_n}(1-\mu)^{x_n} \end{aligned}$$

- Log-Likelihood
 
    $$\begin{aligned} LL(D) = \ln p(D\vert \mu)  &= \sum_{n=1}^N \ln p(x_n) \\ &= \sum_{n=1}^N \{x_n\ln\mu+ (1-x_n)\ln(1-\mu)\} \end{aligned}$$


### Binomial distribution

- $x \sim Bin(x\vert n, \mu)$
    $$\begin{aligned} p(x=k) = Bin(k \vert n, \mu) &= \left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{n-k} \\ \left(\begin{matrix} n \\ k \end{matrix}\right) &\equiv \frac {n!}{(n-k)!k!} \end{aligned}$$

- Expection
    
    $$\begin{aligned} \mathbb{E}[x] &= \sum_{k=0}^n k \left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{n-k} \\ &= \sum_{k=1}^n k \left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{(n-1)-(k-1)} \\ &= n\mu \sum_{k=1}^n \left(\begin{matrix} n-1 \\ k-1 \end{matrix}\right) \mu^{k-1}(1-\mu)^{(n-1)-(k-1)} \\ &= n\mu(\mu + 1-\mu)^{n-1} \\ &= n\mu \end{aligned}$$

- Variance

    $$\begin{aligned} var[x] &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ &= \sum_{k=0}^n k^2 \left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{n-k} - n^2\mu^2 \\&= \sum_{k=0}^n (k(k-1)+k) \left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{n-k} - n^2\mu^2 \\ &= \sum_{k=2}^n k(k-1) \left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{n-k} + \sum_{k=1}^n k\left(\begin{matrix} n \\ k \end{matrix}\right) \mu^k(1-\mu)^{n-k} - n^2\mu^2  \\ &= n(n-1)\mu^2\sum_{k=2}^n \left(\begin{matrix} n-2 \\ k-2 \end{matrix}\right) \mu^{k-2}(1-\mu)^{(n-2)-(k-2)} + n\mu - n^2\mu^2 \\&= n\mu - n\mu^2 \\&= n\mu(1-\mu) \end{aligned}$$


### Categorical distribution (Multinoulli distributions)

- $\mathcal{X}=\{1,2,...,K \}, x\in X$

- $\boldsymbol{x} \sim Cate(\boldsymbol{x}\vert \boldsymbol{\mu})$, and where $\boldsymbol{\mu}: \{\mu_1, \mu_2,...,\mu_K \}$

    $$\begin{aligned} p(\boldsymbol{x}) = Cate(\boldsymbol{x}\vert \boldsymbol{\mu}) &= \prod_{k}^K \mu_k^{x_k} \end{aligned}$$

- If using one-hot encoding of $k$

    $$\begin{aligned} p(\boldsymbol{x}) = Cate(\boldsymbol{x}\vert \boldsymbol{\mu}) &= \sum_{k=1}^K \mu_k^\mathbb{I}(x_k=1) \\ \sum_{k=1}^k \mu_k &= 1 \end{aligned}$$

- Expectation: $\mu_k$

  $$\begin{aligned}  \mathbb{E}[x_k] &= \sum_k^K x_k\prod_k^K \mu_k^{x_k} \\&= \mu_k \\ \mathbb{E}[\boldsymbol{x}] &= \sum^K \boldsymbol{x}\prod_k^K \mu_k^{x_k} \\ &= \boldsymbol{\mu} \end{aligned} $$

- Variance:  $\mu_k(1-\mu_k)$

  $$\begin{aligned} var[x_k] &= \mathbb{E}[x_k^2] - \mathbb{E}[x_k]^2 \\ &= \mu_k - \mu_k^2 \\&= \mu_k(1-\mu_k) \end{aligned} $$

- Covariance: $-\mu_j\mu_k$

  $$\begin{aligned} cov[x_j, x_k] &= \mathbb{E}[x_jx_k] - \mathbb{E}[x_j]\mathbb{E}[x_k] \\ &= \mathbb{E}[0]-\mu_j\mu_k \\&= -\mu_j\mu_k\end{aligned}$$


### Multinomial distribution

- $\mathcal{X}=\{0,1,2,...,n \}, x_i\in X, \boldsymbol{x}=[x_1, x_2,...,x_K]$

- $\boldsymbol{x} \backsim Mult(\boldsymbol{x}\vert n, \boldsymbol{\mu})$, and where $\boldsymbol{\mu}: \{\mu_1, \mu_2,...,\mu_K \}$

    $$\begin{aligned} p(\boldsymbol{x}) = Mult(\boldsymbol{x}\vert n, \boldsymbol{\mu}) &=  \left(\begin{matrix} n \\ x_1,x_2,...,x_K \end{matrix}\right) \prod_{k=1}^K\mu_k^{x_k} \\ \left(\begin{matrix} n \\ x_1,x_2,...,x_K \end{matrix}\right) &\equiv \frac {n!}{x_1!x_2!···x_K!} \end{aligned}$$

- Expectation: $n\mu_k$
    - the marginonal distribution of $\boldsymbol{x}$ is binomial distribution, then

        $$\mathbb{E}[x_k] = n\mu_k$$
    
    - Proof:
        
        $$\begin{aligned} p(x_k) = \sum_{j\neq k}^K p(x_1, x_2,\cdots,x_K) &= \binom{n}{x_k} \mu_k^{x_k} \binom{n-x_k}{x_{j\neq k}}\prod_{j\neq k} \mu_j^{x^j} \end{aligned}$$

        - The second term:
            $$\binom{n-x_k}{x_{j\neq k}}\prod_{j\neq k} \mu_j^{x^j}$$ 
            
        - It can be seen as the probability that none of the $n-x_k$ trials is state $k$, so we have:
            
            $$(1-\mu_k)^{n-x_k} = \binom{n-x_k}{x_{j\neq k}}\prod_{j\neq k} \mu_j^{x^j}$$
        
        - then:
            $$p(x_k) = \binom{n}{x_k} \mu_k^{x_k} (1-\mu_k)^{n-x_k}$$ 

    - Vector form:
        $$\mathbb{E}[\boldsymbol{x}] = n\boldsymbol{\mu}$$ 

- Variance: $n\mu_k(1-\mu_k)$

    $$\text{var}[x_k] = n\mu_k(1-\mu_k)$$

- Covariance: $-n\mu_j\mu_k$

    - Proof:
      - $\mathbb{E}[x_j\vert x_k]$:

        $$\begin{aligned} p(x_j\vert x_k) &= \binom{n-x_k}{x_1,\cdots,x_{k-1}, x_{k+1},\cdots,x_K} \prod_{j\neq k}^K \left(\frac {\mu_j}{1-\mu_k}\right)^{x_j} = \text{Mult}(\boldsymbol{x_{j\neq k}}\vert n-x_k, \mu_{j\neq k}/(1-\mu_k)) \\ \mathbb{E}[x_j\vert x_k] &= (n-x_k)\frac {\mu_j}{1-\mu_k} \end{aligned}$$
      
      - $\mathbb{E}[x_jx_k]$
        
        $$\begin{aligned} \mathbb{E}[x_jx_k] = \mathbb{E}[x_k \mathbb{E}[x_j\vert x_k]] &= n\frac {\mu_j}{1-\mu_k} \mathbb{E}[x_k] - \frac {\mu_j}{1-\mu_k} \mathbb{E}[x_k^2] \\&= n^2\frac {\mu_j\mu_k}{1-\mu_k} - \frac {\mu_j}{1-\mu_k} (n^2\mu_k^2+n\mu_k(1-\mu_k)) \\&= n(n-1)\mu_j\mu_k  \end{aligned}$$ 
      
      - $\text{cov}[x_j,x_k]$

        $$\begin{aligned} \text{cov}[x_j,x_k] &= \mathbb{E}[x_jx_k] - \mathbb{E}[x_j] \mathbb{E}[x_k] \\&= n(n-1)\mu_j\mu_k - n^2 \mu_j\mu_k \\&= -n\mu_j\mu_k \end{aligned}$$

- Variance-Covariance Matrix:

    $$\text{var}[\boldsymbol{x}] = n\{\text{diag}(\boldsymbol{\mu}) - \boldsymbol{\mu}\boldsymbol{\mu}^T\}$$ 


### Poission Distribution

- $x\sim \text{Poi}(x\vert \lambda)$, $x\in \mathbb{Z}, \lambda > 0$

  $$\begin{aligned} p(x) = \text{Poi}(x\vert \lambda) = e^{-\lambda} \frac{\lambda^x}{x!} \end{aligned}$$

- The Poisson distribution can be applied to systems with a large number of possible events, each of which is rare. The number of such events that occur during a fixed time interval is, under the right circumstances, a random number with a Poisson distribution
  - The number of meteorites greater than 1 meter diameter that strike Earth in a year
  - The number of patients arriving in an emergency room between 10 and 11 pm
  - The number of laser photons hitting a detector in a particular time interval

- The Poisson distribution is an appropriate model if the following assumptions are true
  - $x$ is the number of times an event occurs in an interval and $x$ can take values 0, 1, 2, ….
  - The occurrence of one event does not affect the probability that a second event will occur. That is, events occur independently.
  - The average rate at which events occur is independent of any occurrences. For simplicity, this is usually assumed to be constant, but may in practice vary with time.
  - Two events cannot occur at exactly the same instant; instead, at each very small sub-interval, either exactly one event occurs, or no event occurs.

  If these conditions are true, then k is a Poisson random variable, and the distribution of k is a Poisson distribution.

  The Poisson distribution is also the limit of a binomial distribution, for which the probability of success for each trial equals λ divided by the number of trials, as the number of trials approaches infinity 

- See more - [Wikipedia - Poission Distribution](https://en.wikipedia.org/wiki/Poisson_distribution)