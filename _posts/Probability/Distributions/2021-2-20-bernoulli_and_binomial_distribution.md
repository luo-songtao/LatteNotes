---
title: Bernoulli and Binomial Distribution
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Bernoulli, Binomial]
math: true
mermaid: true
---

## Bernoulli Distributions

- Bernoulli Distributions is the discrete probability distribution of a random variable which takes the value 1 with probability $\mu$ and the value 0 with probability ${\displaystyle 1-\mu}$


- $x\in \{0, 1\}, \mu \in [0,1]$

    $$\begin{aligned} \mathrm{Bern}(x\vert \mu) &= \mu^x(1-\mu)^{1-x} \\ \\ \mathbb{E}[x] &= \sum_{x} xp(x) = \mu  \\ \mathrm{var}[x] &= \mathbb{E}[(x-\mu)^2] \\ &= \sum_{x} (x-\mu)^2p(x)\\&= \mu^2(1-\mu) + (1-\mu)^2\mu \\&= \mu(1-\mu) \end{aligned}$$


- **Likelihood Function**
    - Let $D = \{x_1, x_2, \cdots, x_N \}$ of observed data sets of $x$, and $m = \sum_{i=1}^N x_i$.
        
        $$\begin{aligned} p(D\vert \mu) &= \prod_{i=1}^N \mu^{x_i}(1-\mu)^{1-x_i} \\ &= \mu^m(1-\mu)^{N-m} \end{aligned}$$
    
    - Then we can see $m = \sum_{i=1}^N x_i$ is a sufficient statistic for the data under this distribution.
    - And using maximum likelihood approach, we obtain:
        
        $$\mu_{ml} = \frac mN$$

## Binomial Distributions

- The binomial distribution with parameters $N$ and $\mu$ is the discrete probability distribution of the number of successes $m$ in a sequence of $N$ independent experiments. It is the distribution of the number $m$ of  ovservations of $x=1$ in bernoulli distributions given that the data set has size $N$.

    $$\begin{aligned} \mathrm{Bin}(m\vert N,\mu) &= \left( \begin{matrix}N\\m\end{matrix} \right) \mu^m(1-\mu)^{N-m} \\ &= \frac {N!}{(N-m)!m!} \mu^m(1-\mu)^{N-m}  \end{aligned}$$

    - Mean
        
        $$\begin{aligned} \mathbb{E}[m] &= \sum_{m=0}^N m\mathrm{Bin}(m\vert N,\mu) \\&= \sum_{m=1}^N m\mathrm{Bin}(m\vert N,\mu) \\ &= \sum_{m=1}^N m \frac {N!}{(N-m)!m!} \mu^m(1-\mu)^{N-m} \\ &= N\mu \sum_{m=1}^N \frac {(N-1)!}{((N-1)-(m-1))!(m-1)!} \mu^{m-1}(1-\mu)^{(N-1)-(m-1)} \\ &= N\mu \sum_{k=0}^{N-1} \frac {(N-1)!}{((N-1)-k)!k!} \mu^{k}(1-\mu)^{(N-1)-k} \\ &= N\mu \sum_{k=0}^{N-1} \mathrm{Bin}(k\vert N-1, \mu) \\ &= N\mu  \end{aligned}$$
    
    - Variance
        
        $$\begin{aligned} \mathrm{var}[m] &= \mathbb{E}[(m-\mathbb{E}[m])^2] \\ &= \sum_{m=0}^N (m-\mathbb{E}[m])^2 \mathrm{Bin}(m\vert N,\mu) \\&= \sum_{m=0}^N (m-N\mu)^2 \mathrm{Bin}(m\vert N,\mu) \\ &= \sum_{m=0}^N m^2\mathrm{Bin}(m\vert N,\mu) -2N\mu \sum_{m=0}^N m\mathrm{Bin}(m\vert N,\mu) + N^2\mu^2 \sum_{m=0}^N  \\ &= \left[\sum_{m=1}^N m^2\frac {N!}{(N-m)!m!} \mu^m(1-\mu)^{N-m} \right]  -2N\mu N\mu + N^2 \mu^2 \\ &= -N^2\mu^2 + N\mu \sum_{m=1}^N m \frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} \\&= -N^2\mu^2 + N\mu \sum_{m=1}^N (1+m-1) \frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} \\ &=  -N^2\mu^2 + N\mu\left( \sum_{m=1}^N\frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} +  \sum_{m=1}^N (m-1) \frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} \right) \\ &= -N^2\mu^2 + N\mu\left(1+\sum_{m=2}^N \frac {(N-1)!}{(N-m)!(m-2)!}\mu^{m-1}(1-\mu)^{N-m} \right)  \\ &= -N^2\mu^2 + N\mu \left(1+(N-1)\mu \sum_{m=2}^N \frac {(N-2)!}{((N-2)-(m-2))!(m-2)!}\mu^{m-2}(1-\mu)^{(N-2)-(m-2)} \right) \\&= -N^2\mu^2 + N\mu\left(1+ (N-1)\mu\sum_{k=0}^{N-2} \mathrm{Bin}(k\vert N-2, \mu) \right) \\&= -N^2\mu^2 + N\mu(1+N\mu-\mu) \\&= N\mu(1-\mu)\end{aligned}$$
