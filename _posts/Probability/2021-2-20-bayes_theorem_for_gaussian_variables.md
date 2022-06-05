---
title: Bayes' Theorem for Gaussian Variables
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability]
tags: [Gaussian Distribution]
math: true
mermaid: true
---


## Bayes' Theorem for Gaussian Variables

- Given the distribution of $p(\boldsymbol{x})$ and $p(\boldsymbol{y} \vert \boldsymbol{x})$, they both are gaussian distribution, like this:
    
    $$\begin{aligned} p(\boldsymbol{x}) &= \mathcal{N}(\boldsymbol{x} \vert \boldsymbol{\mu}, \Lambda^{-1}) \\p(\boldsymbol{y} \vert \boldsymbol{x}) &= \mathcal{N}(\boldsymbol{y} \vert A\boldsymbol{x} + b, L^{-1}) \end{aligned}$$
    
    - This is a example of a linear gaussian model.

### Problem 1: Find the joint distribution $p(\boldsymbol{x}, \boldsymbol{y})$

- We have know the distribution of $\boldsymbol{x,y}$ must be gaussian distribution, so let:
    
    $$\begin{aligned} \boldsymbol{z} = \binom{\boldsymbol{x}}{\boldsymbol{y}} = \mathcal{N}(\boldsymbol{z} \vert \boldsymbol{\mu}_z, \Sigma_z) \end{aligned}$$

- Just need consider the quadratic form of those distribution:

    $$\begin{aligned} p(\boldsymbol{z}) \propto p(\boldsymbol{y} \vert \boldsymbol{x})p(\boldsymbol{x}) \end{aligned}$$
    
    - Then:
    
        $$\begin{aligned} -\frac 12 (\boldsymbol{z}-\boldsymbol{\mu}_z)^T\Sigma_z^{-1}(\boldsymbol{z}-\boldsymbol{\mu}_z) &= -\frac 12 \boldsymbol{z}^T\Sigma_z^{-1}\boldsymbol{z} +\boldsymbol{z}^T\Sigma_z^{-1}\boldsymbol{\mu}_z + \mathrm{const}_0   \\ &= -\frac 12 (\boldsymbol{x}-\boldsymbol{\mu})^T\Lambda(\boldsymbol{x}-\boldsymbol{\mu}) -\frac 12 (\boldsymbol{y}-A\boldsymbol{x}-b)^T L((\boldsymbol{y}-A\boldsymbol{x}-b)) + \mathrm{const}_1 \\ &= -\frac 12 \boldsymbol{x}^T(\Lambda+A^T L A)\boldsymbol{x} -\frac 12 \boldsymbol{y}^TL\boldsymbol{y} +\frac 12\boldsymbol{x}^T A^TL \boldsymbol{y}^T + \frac 12\boldsymbol{y}^TLA\boldsymbol{x} \\ & + \boldsymbol{x}^T(\Lambda\boldsymbol{\mu}-A^TLb) + \boldsymbol{y}^TLb \\&+ \mathrm{const}_2 \\ &= -\frac 12 \binom{\boldsymbol{x}}{\boldsymbol{y}}^T \binom{\Lambda+A^T L A \qquad -A^TL}{-LA \qquad L} \binom{\boldsymbol{x}}{\boldsymbol{y}} + \binom{\boldsymbol{x}}{\boldsymbol{y}}^T \binom{\Lambda\boldsymbol{\mu}-A^TLb}{Lb} + \mathrm{const}_2 \end{aligned}$$
        
    - Thus:
        
        $$\begin{aligned} \mathrm{cov}[\boldsymbol{z}] = \Sigma_z &= \binom{\Lambda+A^T L A \qquad -A^TL}{-LA \qquad L}^{-1} \\ \\ \mathbb{E}[\boldsymbol{z}] = \boldsymbol{\mu}_z &= \Sigma_z\binom{\Lambda\boldsymbol{\mu}-A^TLb}{Lb} = \binom{\Lambda+A^T L A \qquad -A^TL}{-LA \qquad L}^{-1} \binom{\Lambda\boldsymbol{\mu}-A^TLb}{Lb} \\\\ \end{aligned}$$
        
    - Using the inverse of the partitioned matrix equation, we have:
        
        $$\begin{aligned} \mathrm{cov}[\boldsymbol{z}] =  \Sigma_z &= \left(\begin{matrix}\Lambda^{-1}& \space \Lambda^{-1}A^T \\ A\Lambda^{-1}& \space L^{-1}+A\Lambda^{-1}A^T \end{matrix} \right) \\ \\  \mathbb{E}[\boldsymbol{z}] = \boldsymbol{\mu}_z &= \left(\begin{matrix} \boldsymbol{\mu}\\ A\boldsymbol{\mu}+b \end{matrix} \right) \\\\  \end{aligned}$$

### Problem 2: Find the marginal distribution $p(\boldsymbol{y})$

$$\begin{aligned} p(\boldsymbol{y}) = \int p(\boldsymbol{x}, \boldsymbol{y}) d\boldsymbol{x} \end{aligned}$$

- According to the marginal gaussian distribution results ,we have:

    $$\begin{aligned} \mathrm{cov}[\boldsymbol{y}] &= L^{-1}+A\Lambda^{-1}A^T \\ \\ \mathbb{E}[\boldsymbol{y}] &= A\boldsymbol{\mu} +b \\\\ \end{aligned}$$

### Problem 3: Find the conditional distribution $p(\boldsymbol{x} \vert \boldsymbol{y})$

- According to the conditional gaussian distribution results ,we have:

    $$\begin{aligned} \mathrm{cov}[\boldsymbol{x}] &= (\Lambda+A^T L )^{-1} \\ \\ \mathbb{E}[\boldsymbol{x}] &= \boldsymbol{\mu} + (\Lambda+A^T L )^{-1}A^TL(y-A\boldsymbol{\mu} -b)\\&= \boldsymbol{\mu} - (\Lambda+A^T L )^{-1}A^TLA\boldsymbol{\mu} + (\Lambda+A^T L )^{-1}A^TL(y-b) \\ &= (I - (\Lambda+A^T L )^{-1}A^TLA)\boldsymbol{\mu} + (\Lambda+A^T L )^{-1}A^TL(y-b) \\ &= (\Lambda+A^T L )^{-1}\Lambda\boldsymbol{\mu} + (\Lambda+A^T L )^{-1}A^TL(y-b) \\ &= (\Lambda+A^T L )^{-1}\left(A^TL(y-b)+\Lambda \boldsymbol{\mu}\right) \\\\  \end{aligned}$$






