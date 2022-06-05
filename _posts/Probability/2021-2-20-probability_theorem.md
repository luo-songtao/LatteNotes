---
title: Probaility Theory
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability]
tags: []
math: true
mermaid: true
---


## Probaility Theory
- **Sum Rule**
    $$p(X) = \sum_Y p(X,Y)$$

- **Product Rule**
    $$p(X,Y) = p(Y \vert X)p(X)$$

- **Bayes' Theorem**
    $$\begin{aligned} p(Y\vert X) = \frac {p(X \vert Y)p(Y)}{p(X)} = \frac {p(X \vert Y)p(Y)}{\sum_Y p(X \vert Y)p(Y)} \end{aligned}$$

- **Prior Probability**: For random variables $X$ (state variable) and $Y$ (target variable), it is the probability $P(Y)$ before we ovserve the identity of the state $X$.

- **Posterior Probability**: Once we are told that the identity of state $X$, we can then use Bayes' theorem to compute the probability $P(Y\vert X)$, which shall call the posterior probability because it is the probability obtained after we observed $X$.

- **Probability Densities**: If the probability of a real-valued variable $x$ falling in the interval $(x, x+\delta x)$ is given by $p(x)\delta x$ for $\delta x \rightarrow 0$, then $p(x)$ is called the probability density over $x$.
    - the probability that $x$ will lie in an interval $(a,b)$ is then given by
        $$p(x\in (a,b)) = \int_a^b p(x)dx$$
    - the probability density $p(x)$ satisfy two condition
        $$\begin{aligned} p(x) &\ge 0 \\ \int_{-\infty}^{\infty} p(x)dx &= 1 \end{aligned}$$
- **Probability Densities Transformation**: Consider a change of variables $x=g(y)$, then a function $f(x)$ becomes $\tilde{f}(y) = f(g(y))$. Then for the probability $p_x(x)$ and $p_y(y)$, observations falling in the range $(x, x+\delta x)$ will, for small values of $\delta x$, be transformaed in to the range $(y, y+\delta y)$ where $p_x(x)\delta x \simeq p_y(y)\delta y$ and hence
    $$\begin{aligned} p_y(y) &= p_x(x) \left \vert \frac {dx}{dy} \right\vert \\ &= p_x(g(y)) \left \vert g'(y) \right\vert \end{aligned}$$
    - One consequence of this property is that the concept of maximum of a probability density is dependent on the choice of variable.

- **cumulative distribution function**: it is the probability of $x$ lies in the interval $(-\infty, a)$
    $$P(x\le a) = \int_{-\infty}^a p(x) dx$$
    - which satisfies $P'(x) = p(x)$

- **Probability Mass Function**: Just like the probability density function, but the variable $x$ is a discrete variable.

- **Expectation**: The average value of some function $f(x)$ under a probability distribution $p(x)$ is called the expectation of $f(x)$ and will be denoted by $\mathbb{E}[f]$
    $$\begin{aligned} \mathbb{E}[f] &= \sum_x p(x)f(x) \\ \mathbb{E}[f] &= \int p(x)f(x)dx \end{aligned}$$
    - It can be approxmated as a finite sum over a finite number N of points drawn from the probability distribution or probability density
        $$\mathbb{E}[f] \simeq \frac 1N \sum_{n=1}^N f(x_n)$$
    - Note: $\mathbb{E}_x [f(x,y)]$ is a function of $y$
    - Conditional Expection:
        $$\begin{aligned} \mathbb{E}_x [f\vert y] &= \sum_x p(x\vert y) f(x) \\ \mathbb{E}_x [f\vert y] &= \int p(x\vert y) f(x)dx \end{aligned}$$

- **Variance and Covariance**
    $$\begin{aligned} var[f] &= \mathbb{E}\left[(f(x) - \mathbb{E}[f(x)])^2\right] \\ var[x] &= \mathbb{E}\left[(x-\mathbb{E}[x])^2\right] \\ &= \mathbb{E}[x^2] - \mathbb{E}[x]^2 \\ \\ cov[x,y] &= \mathbb{E}_{x,y}\left[ (x-\mathbb{E}[x])(y-\mathbb{E}[y]) \right] \\&= \mathbb{E}_{x,y}[xy] - \mathbb{E}[x]\mathbb{E}[y] \\ \\ cov[\mathbf{x}, \mathbf{y}] &= \mathbb{E}_{\mathbf{x}, \mathbf{y}}\left[(\mathbf{x}-\mathbb{E}[\mathbf{x}])(\mathbf{y}^T-\mathbb{E}[\mathbf{y}^T]) \right] \\ &= \mathbb{E}_{\mathbf{x},\mathbf{y}}[\mathbf{x}\mathbf{y}^T] - \mathbb{E}[\mathbf{x}]\mathbb{E}[\mathbf{y}^T]  \end{aligned}$$


- **Probabilities in Bayesian and Frequentist view**
    - In frequentist view: probabilities is viewed as in terms of the frequencies of random, repeatable events
    - In Bayesian view: probabilities provide a quantification of uncertainty.
    

- **Likelihood Function**: Given the observed data set $D$, $p(D\vert \mathbf{w})$ can be viewed as a function of the parameter vector $\mathbf{w}$, in which case it is called the likelihood function.
    - It expresses how probable the observed data set is for different settings of the parameter vector $\mathbf{w}$. But likelihood function is not a probability distribution.
    - Given this definition of likelihood, we can state the Bayes's theorem in words:
        $$\mathrm{posterior} \propto \mathrm{likelihood} \times \mathrm{prior} $$
        

- **The different meaning of likelihood in Bayesian and Frequentist paradigms**

    - In frequentist paradigms: $\mathbf{w}$ is considered to be a fixed parameter, whose value is determined by some form of 'estimator', and error bars on this estimate are obtained by considering the distribution of possible data sets $D$ (all possible data sets, not only the given observed data sets)
    
    - In Bayesian paradigms: $\mathbf{w}$ is considered to be a random variable.Furthermore there is only a single dataset $D$, the one that is actually observed, then the uncertainty in the parameters is expressed through a probability distribution on $\mathbf{w}$.


- **Maximum Likelihood**:  It is a widely used frequentist estimator, $\mathbf{w}_{ml} = \arg \max_\mathbf{w} p(D\vert \mathbf{w})$. This corresponds to choosing the value of $\mathbf{w}$ for which the probability of the observed data set is maximized.


- **Bootstrap**: This is a approach to determining frequentist error bars. The multiple data sets are created simply by drawing N points at random from $\mathbf{X}$, the given data sets with size N, and repeated L times to generate L data sets each of size N and each obtained by sampling from the original data set $\mathbf{X}$


- **Noninformative Prior**: Reducing teh dependence on the prior in Bayesian approach.


- **independent and identically distributed** or **i.i.d**: Data points that are drawn independently from the same distribution are said to be independent and identically distributed (i.i.d).


