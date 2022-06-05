---
title: Information Theorem
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Information Theory, Basic Concept]
tags: [Entropy]
math: true
mermaid: true
---

# Information Theory

- **Information Content** or **Self-Information**
    $$\begin{aligned} h(x) &= -\log_2 p(x) \\ h(x) &= -\ln p(x) \end{aligned}$$
    

- **information Entropy**: The average amount of information needed to specify the  state of a random variable. (The average amount of information that they transmit in the process)

    $$\begin{aligned} H[X] &=  \mathbb{E}_{X}[h(x)] = -\sum_{x\in X} p(x)\log_2 p(x) \qquad bits \\ H[X]&=  \mathbb{E}_{X}[h(x)] = -\sum_{x\in X} p(x)\ln p(x) \qquad nats \end{aligned}$$
    
    - Distributions $p(x)$ that are sharply peaked around a few values will have a relatively low entropy, where those that are speread more evenly across many values will have higher entropy.
    
    
- **Differential Entropy**

    $$H(X) = -\int p(x)\ln p(x)$$
    
    - To specify a continuous variable very precisely requires a large number of bits
    
    
- **Maximum Entropy**
    - Discrete variables: if $X$ is discrete variable, then $H(X)$ will have a maximum value when $p(x)$ is a uniform distribution. Proof with following:
    
        $$\begin{aligned} \max & \qquad -\sum_{x\in X} p(x) \ln p(x) \\ s.t. & \qquad \sum_{x} p(x) = 1, x\in X  \end{aligned}$$
        
        - To simplify notion, we assume $X = \{x_1, x_2, \cdots, x_K\}$, and let $p_i = p(x_i)$, $\mathbf{p} = \{p_1,p_2,\cdots,p_K\}$
        - Then introduce a Lagrange multiplier $\lambda \neq 0$, we obtained a Lagrange function:
            $$\begin{aligned} L(\mathbf{p}, \lambda) &= -\sum_{i=1}^K p_i \ln p_i + \lambda(\sum_{i=1}^K p_i - 1)\end{aligned}$$
        - and then:
           $$\begin{aligned} & \frac {\partial L}{\partial p_i} = -\ln p_i - 1 + \lambda = 0 \\ \Leftrightarrow & p_i = \exp(\lambda - 1) \end{aligned}$$

        - back substitution of this result into constraint equations, we have:

           $$\begin{aligned}\lambda = 1 + \ln \frac 1N \end{aligned}$$

        - finally, we have:

           $$\begin{aligned} p_i = \frac 1N, \qquad i=1,2,\cdots, K \end{aligned}$$
           
    - Continuous Variable: if $X$ is continuous variable, then $H(X)$ will have a maximum value when $p(x)$ is a gaussian distribution. Proof with following:
    
        $$\begin{aligned} \max &\qquad -\int p(x) \ln p(x) dx \\ s.t. &\qquad \int p(x)dx = 1 \\ &\qquad \int xp(x) dx = \mu \\ &\qquad \int (x-\mu)^2xp(x) = \sigma^2 \end{aligned}$$
        
        - Then introduce Lagrange multipliers $\lambda_1,\lambda_2,\lambda_3$, at least one of them not equal zero, we obtained a Lagrange function:
        
            $$\begin{aligned} L(p(x), \lambda_1,\lambda_2,\lambda_3) &= -\int p(x) \ln p(x) dx + \lambda_1(\int p(x)dx - 1) + \lambda_2 (\int xp(x) dx - \mu) + \lambda_3(\int (x-\mu)^2p(x) - \sigma^2) \\ &= -\int p(x) \left[ \ln p(x)-\lambda_1-\lambda_2 x - \lambda_3 (x-\mu)^2 \right] \end{aligned}$$
        
        - Using the calculus of variations::
        
            $$\begin{aligned} \frac {\delta L}{\delta p} = \ln p(x) - \lambda_1 -\lambda_2 x - \lambda_3 (x-\mu)^2 + 1 =0 \end{aligned}$$
            
        - Then we have:
        
            $$\begin{aligned} p(x) = \exp(\lambda_1 + \lambda_2 x + \lambda_3 (x-\mu)^2 - 1) \end{aligned}$$
        
        - So we can see $p(x)$ shall be a gaussian distribution, and 
        
            $$\begin{aligned} p(x) &= \exp(\lambda_1 + \lambda_2 x + \lambda_3 (x-\mu)^2 - 1)  = \frac {1}{\sqrt{2\pi \sigma^2}} \exp\left( \frac 1{2\sigma^2} (x-\mu)^2 \right) \end{aligned}$$
        

- **Joint Entropy**
    $$\begin{aligned} H(X,Y) = \mathbb{E}_{X,Y} [-\ln p(x,y)] = \left\{\begin{aligned} &-\sum_{x}\sum_{y} p(x,y)\ln p(x,y) \\ &-\int\int p(x,y)\ln p(x,y)dxdy \end{aligned}\right.  \end{aligned}$$


- **Conditional Entropy**
    $$\begin{aligned} H(Y\vert X) = \mathbb{E}_{X,Y} [-\ln p(y\vert x)] = \left\{\begin{aligned} &-\sum_{x}\sum_{y} p(x,y)\ln p(y\vert x) \\ &-\int\int p(x,y)\ln p(y\vert x)dxdy \end{aligned}\right.  \end{aligned}$$

    - $H(Y\vert X) = H(X, Y) - H(X)$
        $$\begin{aligned} H(X,Y) &= -\int\int p(x,y)\ln p(x,y)dxdy \\ &= -\int\int p(x,y)\ln p(y\vert x)dxdy  - \int\int p(x,y)\ln p(x)dxdy \\&= H(Y\vert X) + H(X)  \end{aligned}$$


- **Mutual Information**: Mutual information measures the amount of information that can be obtained about one random variable by observing another.

    $$\begin{aligned} I(X,Y) &= I(Y,X) \\&= H(X) + H(Y) - H(X,Y) \\&= H(Y) - H(Y\vert X) \\&= H(X) - H(X\vert Y) \\&= \left\{\begin{aligned} &-\sum_{x}\sum_{y} p(x,y)\ln \left(\frac {p(x)p(y)}{p(x,y)}\right) \\ &-\int\int p(x,y)\ln \left(\frac {p(x)p(y)}{p(x,y)}\right)dxdy \end{aligned}\right. \end{aligned}$$


- **Cross Entropy**: It describes the difficulty of expressing probability distribution p through probability distribution q.

    - Consider two distribution $p(X), q(X)$: i.e. consider some unknown distribution $p(X)$, and suppose that we have modelled this using an approximating distribution $q(X)$.

    $$\begin{aligned} H(p,q) = -\mathbb{E}_{p}[\log q] = \left\{\begin{aligned} &-\sum_{x}p(x)\ln q(x) \\ &-\int p(x)\ln q(x)dx \end{aligned}\right.  \end{aligned}$$


- **Relative Entropy** or **KL divergence (Kullback-Leibler divergence)** or **Information Gain**: KL divergence is a way of comparing two distributions
    
    $$\begin{aligned} KL(p\vert\vert q) = H(p,q) - H(p) = \left\{\begin{aligned} & -\sum_{x}p(x)\ln \left(\frac {q(x)}{p(x)}\right) \\ &-\int p(x)\ln \left(\frac {q(x)}{p(x)}\right)dx \end{aligned}\right. \end{aligned}$$
    - realtion with mutual information:
        $$\begin{aligned} I(X,Y) = KL\left( p(x,y) \vert\vert p(x)p(y) \right) \end{aligned}$$
    - Attention:
        $$H(p,q) - H(p) = KL(p\vert\vert q) \neq KL(q\vert\vert p) = H(q,p) - H(q)$$



