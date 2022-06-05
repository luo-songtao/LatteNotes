---
title: Gaussian Processes
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 09:00:00 +0800
categories: [Machine Learning, Stochastic Processes]
tags: [Gaussian Processes]
math: true
mermaid: true
---

## Gaussian Processes


In the Gaussian process viewpoint, we dispense with the parametric model and instead define a prior probability distribution over functions directly. 

- At first sight, it might seem difficult to work with a distribution over the uncountably infinite space of functions. 
- However, as we shall see, for a finite training set we only need to consider the values of the function at the discrete set of input values xn corresponding to the training set and test set data points, and so in practice we can work in a finite space.


### Definition

In general, a Gaussian process is defined as a probability distribution over functions $y(\boldsymbol{x})$ such that the set of values of $y(\boldsymbol{x})$ evaluated at an arbitrary set of points $\boldsymbol{x}_1, . . . , \boldsymbol{x}_N$ jointly have a Gaussian distribution.

- More generally, a stochastic process $y(\boldsymbol{x})$ is specified by giving the joint probability distribution for any finite set of values $y(\boldsymbol{x}_1), . . . , y(\boldsymbol{x}_N)$ in a consistent manner.

A key point about Gaussian stochastic processes is that the joint distribution over $N $ variables $y_1, . . . , y_N$ is specified completely by the second-order statistics, namely the mean and the covariance.

- Mean: 
  - In most applications, we will not have any prior knowledge about the mean of $y(\boldsymbol{x})$ and so by symmetry we take it to be zero. This is equivalent to choosing the mean of the prior over weight values $p(w|α)$ to
be zero in the basis function viewpoint.

- Covariance
  - The specification of the Gaussian process is then completed by giving the covariance of $y(\boldsymbol{x})$ evaluated at any two values of $\boldsymbol{x}$, which is given by the **kernel function**.

    $$\begin{aligned} \text{cov} = \mathbb{E}[y(\boldsymbol{x}_n)y(\boldsymbol{x}_m)] = k(y(\boldsymbol{x}_n, y(\boldsymbol{x}_m)) \end{aligned}$$

### Gaussian Processes for Regression

Let the prior on the regression function be a Gaussian Processes, denoted by:

$$\begin{aligned} f(\boldsymbol{x}) \sim \text{GP}(\mu(\boldsymbol{x}), k(\boldsymbol{x}, \boldsymbol{x}')) \end{aligned}$$
- where $\mu(\boldsymbol{x})$ is the mean function and $k(\boldsymbol{x}, \boldsymbol{x}')$ is the kernel or covariance function, i.e.,

  $$\begin{aligned} \mu(\boldsymbol{x}) &= \mathbb{E}[f(\boldsymbol{x})] \\ k(\boldsymbol{x}, \boldsymbol{x}') &= \mathbb{E}\left[(f(\boldsymbol{x})-\mu(\boldsymbol{x}))(f(\boldsymbol{x}')-\mu(\boldsymbol{x}'))^T \right] \end{aligned}$$

 - Note: We obviously require that $k()$ be a positive definite kernel.


And then for any finite set of points, this process defines a joint Gaussian:

$$\begin{aligned} p(\mathbf{f} \vert \mathbf{X}) = \mathcal{N}(\mathbf{f} \vert \boldsymbol{\mu}, \mathbf{K}) \end{aligned}$$


- where $\mathbf{K}_{ij} = k(\boldsymbol{x}_i, \boldsymbol{x}_j)$ and $\boldsymbol{\mu} = (\mu(\boldsymbol{x}_1), . . . , \mu(\boldsymbol{x}_N))$.

- Note that it is common to use a mean function of $\mu(\boldsymbol{x})$ = 0, since the GP is flexible enough to model the mean arbitrarily well.

#### Predictions using noise-free observations

- Suppose we observe a training set $\mathbf{X}_N = \{\boldsymbol{x}_1, ...,\boldsymbol{x}_N \}$, $\mathbf{t}_N = \{f(\boldsymbol{x}_1),...,f(\boldsymbol{x}_N)\}$, and this is the noise-free observation of the function evaluated at $\boldsymbol{x}_n$

$$\begin{aligned} p(\boldsymbol{t}) &= p(\boldsymbol{f}) \sim \mathcal{N}(\boldsymbol{\mu}, \mathbf{K}) \end{aligned}$$

The predictino problem

$$\begin{aligned} \binom{\mathbf{t}_N}{t_{N+1}} \sim \mathcal{N}\left(\binom{\boldsymbol{\mu}_N}{\mu_{N+1}}, \binom{\mathbf{K}_N\qquad \mathbf{a}}{\mathbf{a}^T \qquad k_{N+1}} \right) \end{aligned}$$
- where we have defined:
  
    $$\begin{aligned} \boldsymbol{\mu}_N &= [\mu_1,...,\mu_N]^T \\ \mu_{N+1} &= \mu(\boldsymbol{x}_{N+1}) = \mathbb{E}[f(\boldsymbol{x}_{N+1})] \\ \mathbf{a} &= [k(\boldsymbol{x}_1,\boldsymbol{x}_{N+1}),...,k(\boldsymbol{x}_N,\boldsymbol{x}_{N+1})]^T \\ k_{N+1} &= k(\boldsymbol{x}_{N+1}, \boldsymbol{x}_{N+1}) \end{aligned}$$

then the posterior distribution:

$$\begin{aligned} p(t_{N+1} \vert \mathbf{t}_N) &= \mathcal{N}(t_{N+1} \vert m, \sigma^2) \\ \\ m &= \mu_{N+1} + \mathbf{a}^T \mathbf{K}_N^{-1}(\mathbf{t}_N - \boldsymbol{\mu}_N) \\ \sigma^2 &= k_{N+1} - \mathbf{a}^T\mathbf{K}_N^{-1}\mathbf{a} \end{aligned}$$


#### Predictions using noise observations

$$\begin{aligned} t_{n} = f(\boldsymbol{x}_n) + \varepsilon_n \end{aligned}$$

- here $\varepsilon_n$ is a random noisy variable, and we this is a noisy processes that have a Gaussian distribution $\varepsilon_n \sim \mathcal{N}(0, \beta^{-1}))$.

then:

$$\begin{aligned} p(\boldsymbol{f}) &= \mathcal{N}(\boldsymbol{f}\vert 0, \mathbf{K}) \\ p(\boldsymbol{t} \vert \boldsymbol{f}) &= \mathcal{N}(\boldsymbol{t} \vert \boldsymbol{f}, \beta^{-1}I) \\ \\ p(\boldsymbol{t}) &= \mathcal{N}(\boldsymbol{t} \vert 0, \mathbf{K}+\beta^{-1}I) \end{aligned}$$

then the posterior distribution:

$$\begin{aligned} \mathbf{K}_N &= \mathbf{K}_N + \beta^{-1}I\\ \\ p(t_{N+1} \vert \mathbf{t}_N) &= \mathcal{N}(t_{N+1} \vert m, \sigma^2) \\ \\ m &= \mathbf{a}^T \mathbf{K}_N^{-1}\mathbf{t}_N \\ \sigma^2 &= k_{N+1} - \mathbf{a}^T\mathbf{K}_N^{-1}\mathbf{a} \end{aligned}$$

#### Some typical Kernel Functions used for Gaussian Processes

- Linear kernel

  $$\begin{aligned} k(x,x') = x^Tx' \end{aligned}$$

  - Note this kernel does not correspond to a stationary process

- Gaussian Kernel or Squared Exponential Kernel

  $$\begin{aligned} k(x,x') = \exp\left( -\frac {1}{2h^2}\|x-x'\|^2 \right) \end{aligned}$$

  - where $h$ determines the length scale of process. The smaller the value of $h$, the larger the "statistical" similarity (stronger correlation) of two points having a distance $d=\|x-x'\|^2$ apart

- Ornstein-Uhlenbeck Kernel

  $$\begin{aligned} k(x,x') = \exp\left( -\frac {1}{h}\|x-x'\| \right) \end{aligned}$$

- Rational Quadratic Kernel

  $$\begin{aligned} k(x,x') = ( 1+\|x-x'\|^2)^{-\alpha}, \qquad \alpha \ge 0 \end{aligned}$$

- Parameterized Kernel Functions

  $$\begin{aligned} k(x,x';\boldsymbol{\theta}) &= \theta_1 \exp\left( -\frac {\theta_2}{2}\|x-x'\|^2 \right) \\ k(x,x';\boldsymbol{\theta}) &= \theta_1 \exp\left( -\frac {\theta_2}{2}\|x-x'\|^2 \right) + \theta_3 \\ k(x,x';\boldsymbol{\theta}) &= \theta_1 \exp\left( -\frac {\theta_2}{2}\|x-x'\|^2 \right) + \theta_3 + \theta_4 x^Tx' \\ k(x,x';\boldsymbol{\theta}) &= \theta_1 \exp\left( -\frac {1}{2}(x-x')^TM(x-x') \right) \\ &\space\space\vdots \end{aligned}$$

For Parameterized Kernel Functions, we can use MLE to find the parameters given a data set. Also Bayesian inference can be used to find the posterior distribution of parameters, and then MAP estimation.

#### Another topics

- Multiple kernel learning
- Semi-parametric
- Computational and numerical issues
......

### Gaussian Processes for Classification

#### Binary Classification

Assume $t_n \in (0,1)$, and let $a_n = f(\boldsymbol{x}_n)$

- then we define:

  $$\begin{aligned} p(t_n\vert a_n) = \sigma(a)^t(1-\sigma)^{1-t} \end{aligned}$$

- $a_n$ is a Gaussian Processes

  $$\begin{aligned} p(\boldsymbol{a}) = \mathcal{N}(\boldsymbol{a}\vert \boldsymbol{\mu}, \mathbf{K}) \end{aligned}$$

  - But note that $\{t_n\}$ is not a gaussian processes
  - And we can introduce a noise-like term by a parameter $\nu$ that ensures that the covariance matrix $\mathbf{K}$  is positive definite.

    $$\begin{aligned} K_{nm} = k(\boldsymbol{x_n}, \boldsymbol{x}_m) + \nu\delta_{nm} \end{aligned}$$

- Unnormalized posterior:
  
  $$\begin{aligned} \tilde{p}(\boldsymbol{t}, \boldsymbol{a}) = \mathcal{N}(\boldsymbol{a}\vert \boldsymbol{\mu}, \mathbf{K})\prod_{n=1}^N p(t_n\vert a_n) \end{aligned}$$


wighting for update...

