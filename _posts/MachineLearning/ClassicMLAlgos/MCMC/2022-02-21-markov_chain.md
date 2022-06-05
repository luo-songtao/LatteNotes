---
title: Markov Chain
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 08:00:00 +0800
categories: [Machine Learning, Markov Chain]
tags: [Markov Chain]
math: true
mermaid: true
---

## Markov Chain

### A first-Order Markov Chain

$$\begin{aligned} p(z^{(m+1)}\vert z^{(m)}, ...,z^{(1)} )  = p(z^{(m+1)}\vert z^{(m)})\end{aligned}$$

then given
- initial variable: $p(z^{(0)})$
- transition probabilities: $T_m(z^{(m)}, z^{(m+1)})$

we can obtain a specify Markov Chain

### Homogeneous Markov Chain

Transition probabilities are the same for all $m$.

### Stationary or Invariant Markov Chain

Each step in the chain leaves that distribution invariant.

For a homogeneous Markov chain with transition probabilities $T(z',z)$, the distribution $p^*(z)$ is invariant:

$$\begin{aligned} p^*(z) = \sum_{z'} T(z',z)p^*(z') \end{aligned}$$

Note: a given Markov chain may have more than one invariant distribution. For instance: an identity transformation

### Detailed Balance property

A sufficient but not necessary condition for ensuring that the required distribution $p(z)$ is invariant is to choose the transition probability to satisfy the property of detailed balance for the particular distribution $p^*(z)$

$$\begin{aligned} p^*(z')T(z',z) = p^*(z)T(z,z')  \end{aligned}$$


$\text{Detailed Balance} \Longrightarrow \text{Stationary}$

$$\begin{aligned} \sum_{z'} p^*(z')T(z',z) &= \sum_{z'} p^*(z)T(z,z') \\ &= p^*(z)\sum_{z'} T(z,z') \\ &= p^*(z)  \end{aligned}$$

### Reversible Markov Chain

A Markov chain that respects detailed balance is said to be reversible.

### Ergodicity Markov Chain

For a stationary Markov Chain, if for $m\rightarrow \infty$, $p(z^{(m)}$ converges to a required invariant distribution $p^*(z)$, irrespective of the choice of initial distribution $p(z^{(0)}$. 

This property is called ergodicity.

And the invariant distribution is then called the equilibrium distribution.

Note: an ergodic Markov chain can have only one equilibrium distribution.

A homogeneous Markov chain will be ergodic, subject only to weak restrictions on the invariant distribution and the transition probabilities.

### Base Transitions

In practice we often construct the transition probabilities from a set of 'base' transitions $B_1,...,B_K$. This can be achieved through a mixture distribution of the form

$$\begin{aligned} T(z',z) = \sum_{k=1}^K \alpha_k B_k(z',z) \\ \sum\alpha_k &= 1 \end{aligned}$$



