---
title: Markov Chain Monte Carlo
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 08:00:00 +0800
categories: [Machine Learning, Markov Chain]
tags: [Markov Chain, Monte Carlo]
math: true
mermaid: true
---

## Markov Chain Monte Carlo


As with rejection and importance sampling, we again sample from a proposal distribution.

This time, however, we maintain a record of the current state $z(\tau)$, and the proposal distribution $q(z|z(\tau))$depends on this current state, and so the sequence of samples $z^(1), z^(2), . . .$ forms a Markov Section chain.


### Basic Metropolis Algorithm

Assume that the proposal distribution is symmetric, that is $q(z_A\vert z_B) = q(z_B\vert z_A)$ for all values of $z_A$ and $z_B$

Firstly, we generate a candidate sample $z^*$ from the proposal distribution, and then it is accepted with probability:

$$\begin{aligned} \boldsymbol{A}(z^*, z^{(\tau)}) = \min \left(1, \frac {\tilde p(z^*)}{\tilde p(z^{(\tau)}} \right) \end{aligned}$$

- $u = \text{random}(0,1)$, if $\boldsymbol{A}(z^*, z^{(\tau)}) > u$, then accept
- if accepted, then $z^{(\tau+1)} = z^*$, else $z^{(\tau+1)}=z^{(\tau)}$
- A new candidate sample is drawn from the distribution $q(z\vert z^{(\tau+1)})$

Note: In the Metropolis algorithm when a candidate point is rejected, **the previous sample is included instead** in the final list of samples, leading to multiple copies of samples.

To obtain i.i.d samples:
- we can discard most of the sequence and just retain every $M^{th}$ sample
- or run multiple algorithm at same time.


#### Random Walk Behaviour

Consider a state space $z$ consisting of the integers, with probabilities:

$$\begin{aligned} p(z^{\tau + 1} = z^{\tau})  &= 0.5 \\ p(z^{\tau + 1} = z^{\tau} + 1) &= 0.25 \\ p(z^{\tau + 1} = z^{\tau} - 1) &= 0.25 \end{aligned}$$    

- Assume if $z^{1} = 0$, then $\mathbb{E}[z^{\tau}] = 0$ and $\mathbb{E}[(z^{\tau})^2] = \tau / 2$
- Thus after $\tau$ steps, the random walk has only travelled a distance that on average is proportional to the square root of $\tau$.
- This square root dependence is typical of random walk behaviour and shows that random walks are very inefficient in exploring the state space.

Note: a central goal in designing Markov chain Monte Carlo methods is to avoid random walk behaviour.


### The Metropolis-Hastings Algorithm

Here the proposal distribution is no longer a symmetric function of its arguments.

At step $\tau$, draw a sample $z^*$ from the distribution $q_k(z\vert z^{(\tau)})$, and then accept it with probability $A_k(z^*, z^{(\tau)})$ where

$$\begin{aligned} A_k(z^*, z^{(\tau)}) \min \left(1, \frac {\tilde p(z^*)q_k(z^{(\tau)}\vert z^*)}{\tilde p(z^{(\tau)})q_k(z^*\vert z^{(\tau)})} \right) \end{aligned}$$

The specific choice of proposal distribution can have a marked effect on the performance of the algorithm.

For continuous state spaces, a common choice is a Gaussian centred on the current state, leading to an important trade-off in determining the variance parameter of this distribution.
- If the variance is small, then the proportion of accepted transitions will be high, but progress through the state space takes the form of a slow random walk leading to long correlation times.
- However, if the variance parameter is large, then the rejection rate will be high because, in the kind of complex problems we are considering, many of the proposed steps will be to states for which the probability $p(z)$ is low

### Gibbs Sampling

Gibbs sampling is appropriate for drawing samples from multidimensional distributions.

- Initialize $[z_1^{(0)},...,z_m^{(0)}]$
- For $\tau$ in $1,2,...,\Tau$:
  - $z_1^{(\tau + 1)} \sim p(z_1\vert z_2^{(\tau)}, z_3^{(\tau)},...,z_M^{(\tau)})$
  - $z_2^{(\tau + 1)} \sim p(z_1\vert z_1^{(\tau+1)}, z_3^{(\tau)},...,z_M^{(\tau)})$
  - $\cdots$
  - $z_M^{(\tau + 1)} \sim p(z_1\vert z_1^{(\tau+1)}, z_2^{(\tau+1)},...,z_{M-1}^{(\tau+1)})$



The Gibbs scheme can be viewed as a realization of a Markov chain, where the transition matrix/pdf is sequentially constructed from $l$ base transitions, this is:

$$\begin{aligned} T = B_1\cdots B_M \end{aligned}$$


- Blocking Gibbs Sampling
- Collapsed Gibbs Sampling


