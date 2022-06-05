---
title: Gaussian Mixture Model
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 09:00:00 +0800
categories: [Machine Learning, Mixture Model]
tags: [GMM]
math: true
mermaid: true
---

## Gaussian Mixture Model

#### Definite

A simple linear superposition of multiple Gaussian would give a better characterization of multimodal data set.

General Form of GMM

$$\begin{aligned} p(\boldsymbol{x}) &= \sum_{k=1}^K \pi_k \mathcal{N}(\boldsymbol{x}\mid \boldsymbol{\mu}_k, \Sigma_k) \\ \\ \sum_{k=1}^K \pi_k &= 1 \end{aligned}$$

Or we can describe GMM as follows:
    
$$\begin{aligned} p(\boldsymbol{z}) &= \text{Cate}(\boldsymbol{z} \vert \boldsymbol{\pi}) = \prod_{k=1}^K \pi_k^{z_k} \qquad \qquad z_k \in \{0,1\} \\ p(\boldsymbol{x}\vert \boldsymbol{z}) &= \prod_{k=1}^K \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma_k)^{z_k} \end{aligned}$$

- Union distribution of $\boldsymbol{x}, \boldsymbol{z}$

    $$\begin{aligned} p(\boldsymbol{x}, \boldsymbol{z}) &= p(\boldsymbol{z})p(\boldsymbol{x}\vert \boldsymbol{z}) \\ &= \prod_{k=1}^K \left[\pi_k\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma_k)\right]^{z_k} \end{aligned}$$

- Marginal distribution of $\boldsymbol{x}$

    $$\begin{aligned} p(\boldsymbol{x}) &= \sum_{\boldsymbol{z}} p(\boldsymbol{z})p(\boldsymbol{x}\vert \boldsymbol{z}) \\ &= \sum_{\boldsymbol{z}} \prod_{k=1}^K \left[\pi_k\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma_k)\right]^{z_k} \\ &= \sum_{k=1}^K \pi_k\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma_k)  \end{aligned}$$

- Conditional distribution of $\boldsymbol{z} \mid \boldsymbol{x}$

    $$\begin{aligned} p(\boldsymbol{z} \vert \boldsymbol{x}) &= \frac {p(\boldsymbol{x}, \boldsymbol{z})}{p(\boldsymbol{x})} \\ &= \frac {\prod_{k=1}^K [\pi_k\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma_k)]^{z_{k}}}{\sum_{j=1}^K \pi_j\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_j, \Sigma_j)} \\ p(z_k=1 \vert \boldsymbol{x}) &= \frac {p(\boldsymbol{x}, z_k=1)}{p(\boldsymbol{x})} \\ &= \frac {\pi_k\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_k, \Sigma_k)}{\sum_{j=1}^K \pi_j\mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}_j, \Sigma_j)} \end{aligned}$$


#### Collapse Problem in GMM
- if the variance of someone component in GMM goes to zero, then the value of that term would goes to infinity


#### Likelihood Function

- Incomplete-data likelihood 

    $$\begin{aligned} p(\mathbf{X} \mid \boldsymbol{\pi}, \boldsymbol{\mu}, \Sigma) = \prod_{n=1}^N \sum_{k=1}^K \pi_k\mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Sigma_k) \end{aligned}$$

- Complete-data likelihood

    $$\begin{aligned} p(\mathbf{X}, \mathbf{Z} \mid \boldsymbol{\pi}, \boldsymbol{\mu}, \Sigma) &=  \prod_{n=1}^N\prod_{k=1}^K \left[\pi_k\mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Sigma_k)\right]^{z_{nk}} \end{aligned}$$

- If we directly work on maximum likelihood, we cannot get closed form solution. Then we can use gradient method, but EM method will be more effecient.


#### EM for GMM

- Posterior of Latent Variable:

    $$\begin{aligned} p(z_{nk} = 1\vert \boldsymbol{x}_{n}, \boldsymbol{\theta}^{old}) = \gamma_{nk} = \frac {\pi_k\mathcal{N}(\boldsymbol{x}_{n}\vert \boldsymbol{\mu}_k, \Sigma_k)}{\sum_{j=1}^K \pi_j\mathcal{N}(\boldsymbol{x}_{n}\vert \boldsymbol{\mu}_j, \Sigma_j)} \end{aligned}$$

- $\mathcal{Q}$ 函数

    $$\begin{aligned} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) &= \mathbb{E}_{\boldsymbol{z}}\left[\ln p(\mathbf{X}, \mathbf{Z} \mid \boldsymbol{\pi}, \boldsymbol{\mu}, \Sigma)  \right]\\&=\sum_{n=1}^N\sum_{k=1}^K \left[\ln \pi_k + \ln \mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Sigma_k)\right] \mathbb{E}_{\boldsymbol{z}}[z_{nk}] \\ &= \sum_{n=1}^N\sum_{k=1}^K \left[\ln \pi_k + \ln \mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Sigma_k)\right] p(z_{nk} = 1\vert \boldsymbol{x}, \boldsymbol{\theta}^{old}) \\ &= \sum_{n=1}^N\sum_{k=1}^K \left[\ln \pi_k + \ln \mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Sigma_k)\right]\gamma_{nk}  \end{aligned}$$

- then:

    $$\begin{aligned} \pi_k^{new} &= \arg\max_{\pi} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) + \lambda \left(\sum_{k=1}^K \pi_k-1\right) \\ \pi_k^{new} &= -\frac 1\lambda \sum_{n=1}^N \gamma_{nk} \\ \sum^K  \pi_k^{new} &= -\frac 1\lambda \sum_{n=1}^N \sum^K \gamma_{nk} = 1 \\ \lambda &= -N \\ \pi_k^{new} &= \frac 1N \sum_{n=1}^N \gamma_{nk} \\\\\\  \boldsymbol{\mu_k}^{new} &= \arg\max_{\boldsymbol{\mu_k}} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) \\ \boldsymbol{\mu_k}^{new} &=  \frac {\sum_{n=1}^N \gamma_{nk} \boldsymbol{x}_n}{\sum_{n=1}^N \gamma_{nk}} \\\\\\ \Sigma_k^{new} &= \arg\max_{\Sigma_k} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) \\ \Sigma_k^{new} &= \frac {\sum_{n=1}^N \gamma_{nk}(\boldsymbol{x}_n-\boldsymbol{\mu_k}^{new})(\boldsymbol{x}_n-\boldsymbol{\mu_k}^{new})^T}{\sum_{n=1}^N \gamma_{nk}} \end{aligned}$$

