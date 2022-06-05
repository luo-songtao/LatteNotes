---
title: Bayesian Gaussian Mixture Model - Variational Inference
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-22 07:00:00 +0800
categories: [Machine Learning, Variational Inference]
tags: [Bayesian, GMM]
math: true
mermaid: true
---


## Bayesian Gaussian Mixture Model - Variational Inference

#### Likelihood Funcitons

$$\begin{aligned} p(\mathbf{Z}\vert \boldsymbol{\pi}) &= \prod_{n=1}^N\prod_{k=1}^K \pi_k^{z_{nk}} \\ \\ p(\mathbf{X}\vert \mathbf{Z}, \boldsymbol{\mu}, \Lambda) &= \prod_{n=1}^N\prod_{k=1}^K \mathcal{N}(\boldsymbol{x}_n \vert \boldsymbol{\mu}_k, \Lambda_k^{-1})^{z_{nk}} \end{aligned}$$


#### Conjugate Priors

$$\begin{aligned} p(\boldsymbol{\pi}) &= \text{Dir}(\boldsymbol{\pi} \vert \boldsymbol{\alpha}_0) = \frac {\Gamma(\sum_{k=1}^K \alpha_k)}{\prod_{k=1}^K \Gamma(\alpha_k)} \prod_{k=1}^K \pi_k^{\alpha_k - 1} \\ \\ p(\boldsymbol{\mu}, \Lambda) &= p(\boldsymbol{\mu} \vert \Lambda) p( \Lambda) \\ &= \prod_{k=1}^K \mathcal{N}(\boldsymbol{\mu}_k\vert \boldsymbol{m}_k, (\beta_k\Lambda_k)^{-1}) \mathcal{W}(\Lambda_k\vert W_k, \nu_k) \end{aligned}$$

- Where we have introduced an independent Gaussian-Wishart prior governing the mean and precision of each Gaussian component.
- $\boldsymbol{\alpha}_0 = [\alpha_1,\alpha_2,...,\alpha_K ]$

- The Joint distribution

    $$\begin{aligned} p(\mathbf{X}, \mathbf{Z}, \boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda) = p(\mathbf{X}\vert \mathbf{Z}, \boldsymbol{\mu}, \Lambda)p(\mathbf{Z}\vert \boldsymbol{\pi})p(\boldsymbol{\pi})p(\boldsymbol{\mu} \vert \Lambda) p( \Lambda)  \end{aligned}$$

#### Variational Distribution

##### $\mathbf{Z}$

- First, we consider $\mathbf{Z}$: factorizes between the latent variables and the parameters so that:

    $$\begin{aligned} q(\mathbf{Z}, \boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda) = q(\mathbf{Z}) q(\boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda) \end{aligned}$$

  - and then:  according to the Variational Approximation

    $$\begin{aligned} \ln \hat{q}(\mathbf{Z}) &= \mathbb{E}_{\boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda}[\ln p(\mathbf{X}, \mathbf{Z}, \boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda)] + \text{const} \\ \\ &= \mathbb{E}_{\boldsymbol{\pi}}[\ln p(\mathbf{Z}\vert \boldsymbol{\pi})] + \mathbb{E}_{\boldsymbol{\mu}, \Lambda}[\ln p(\mathbf{X}\vert \mathbf{Z}, \boldsymbol{\mu}, \Lambda)] + \text{const} \\ \\ &= \sum_{n=1}^N\sum_{k=1}^K z_{nk} \ln \rho_{nk} + \text{const} \\\\ \ln \rho_{nk} &= \mathbb{E}[\ln \pi_k] + \frac 12 \left\{ \mathbb{E}[\ln \vert \Lambda_k \vert] - D\ln (2\pi) - \mathbb{E}_{\boldsymbol{\mu}_k, \Lambda_k}[(\boldsymbol{x}_n - \boldsymbol{\mu}_k)^T\Lambda_k(\boldsymbol{x}_n - \boldsymbol{\mu}_k)] \right\} \end{aligned}$$
 
  - so we can obtain:

    $$\begin{aligned} \hat{q}(\mathbf{Z}) &\propto \prod_{n=1}^N \prod_{k=1}^K \rho_{nk}^{z_{nk}} \\\\ \hat{q}(\mathbf{Z}) &= \prod_{n=1}^N \prod_{k=1}^K \gamma_{nk}^{z_{nk}}  \\ \gamma_{nk} &= \frac {1}{\sum_{j=1}^K  \rho_{nj}}  \rho_{nk} \end{aligned}$$

  - we see, it has the same form as the prior $p(\mathbf{Z} \vert \boldsymbol{\pi})$, and 

    $$\begin{aligned} \mathbb{E}[z_{nk}] = \hat{q}(z_{nk} = 1) = \gamma_{nk} \end{aligned}$$

##### $\boldsymbol{\pi}$

- second, we consider the factor $q(\boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda)$

    $$\begin{aligned} \ln \hat{q}(\boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda) &= \mathbb{E}_{\mathbf{Z}}[\ln p(\mathbf{X}, \mathbf{Z}, \boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda)] + \text{const} \\ &= \ln p(\boldsymbol{\pi}) + \mathbb{E}_{\mathbf{Z}}[\ln p(\mathbf{Z}\vert \boldsymbol{\pi})] + \sum_{k=1}^K \ln p(\boldsymbol{\mu}_k, \Lambda_k) + \sum_{k=1}^K \sum_{n=1}^N \mathbb{E}[z_{nk}]\ln \mathcal{N}(\boldsymbol{x}_n \vert \boldsymbol{\mu}_k, \Lambda_k^{-1}) \end{aligned}$$

    - this leads to the further factorization:

        $$\begin{aligned} q(\boldsymbol{\pi}, \boldsymbol{\mu}, \Lambda) = q(\boldsymbol{\pi}) \sum_{k=1}^K q(\boldsymbol{\mu}_k, \Lambda_k) \end{aligned}$$

    - then:

        $$\begin{aligned} \ln \hat{q}(\boldsymbol{\pi}) &= \ln p(\boldsymbol{\pi}) + \mathbb{E}_{\mathbf{Z}}[\ln p(\mathbf{Z}\vert \boldsymbol{\pi})] + \text{const} \\&= \prod_{k=1}^K (a_k-1)\ln \pi_k + \sum_{k=1}^K\sum_{n=1}^N \gamma_{nk}\ln \pi_k + \text{const} \\ &= \sum_{k=1}^K \left\{a_k-1 + \sum_{n=1}^N \gamma_{nk} \right\} \ln\pi_k + \text{const} \\ \\ \hat{q}(\boldsymbol{\pi}) &= \text{Dir}(\boldsymbol{\pi}\vert \boldsymbol{\alpha}_N) \\ \alpha_{Nk} &= a_k + \sum_{n=1}^N \gamma_{nk}\end{aligned}$$

    - also, we see $\hat{q}(\boldsymbol{\pi})$ has same form as the prior $p(\boldsymbol{\pi})$
    - the mean of $\pi_k$:

      $$\begin{aligned} \mathbb{E}[\pi_k] = \frac {\alpha_{Nk}}{\sum_{k=1}^K \alpha_{Nk} } = \frac {a_k + \sum_{n=1}^N \gamma_{nk}}{N + \sum_k \alpha_k} \end{aligned}$$

##### $\boldsymbol{\mu}_k, \Lambda_k$

- Finally, the variational posterior distribution $\hat{q}(\boldsymbol{\mu}_k, \Lambda_k)$ doen not factorize into the product of the marginals, then

    $$\begin{aligned} \ln \hat{q}(\boldsymbol{\mu}_k, \Lambda_k) &= \ln p(\boldsymbol{\mu}_k, \Lambda_k) + \sum_{n=1}^N \gamma_{nk} \ln \mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Lambda_k^{-1}) +\text{const} \\&= \ln \mathcal{N}(\boldsymbol{\mu}_k\vert \boldsymbol{m}_k, (\beta_k\Lambda_k)^{-1}) + \ln \mathcal{W}(\Lambda_k\vert W_k, \nu_k) + \sum_{n=1}^N \gamma_{nk} \ln \mathcal{N}(\boldsymbol{x}_n\vert \boldsymbol{\mu}_k, \Lambda_k^{-1}) +\text{const} \end{aligned}$$

  - We Know:

    $$\begin{aligned} \hat{q}(\boldsymbol{\mu}_k, \Lambda_k) &= \hat{q}(\boldsymbol{\mu}_k \vert \Lambda_k)  \hat{q}(\Lambda_k) \\  &= \mathcal{N}(\boldsymbol{\mu}_{Nk}\vert \boldsymbol{m}_{Nk}, (\beta_{Nk}\Lambda_{Nk})^{-1}) \mathcal{W}(\Lambda_{Nk}\vert W_{Nk}, \nu_{Nk})  \end{aligned}$$

    - then we have:

        $$\begin{aligned} \beta_{Nk} &= \beta_k + N_k\\ \boldsymbol{\mu}_{Nk} &= \frac {1}{\beta_{Nk}} (\beta_k \boldsymbol{m}_k + N_k \overline\boldsymbol{x}_k) \\ W_{Nk}^{-1} &= W_k^{-1} + N_kS_k + \frac {\beta_kN_k}{beta_k + N_k}(\overline\boldsymbol{x}_k-\boldsymbol{m}_k)(\overline\boldsymbol{x}_k-\boldsymbol{m}_k)^T \\ \nu_{Nk} &= \nu_k + N_k \end{aligned}$$

    - where we have defined:

        $$\begin{aligned} N_k &= \sum_{n=1}^N \gamma_{nk} \\ \overline\boldsymbol{x}_k &= \frac 1{N_k} \sum_{n=1}^N \gamma_{nk} \boldsymbol{x}_n \\ S_k &= \frac 1{N_k} \sum_{n=1}^N \gamma_{nk}(\boldsymbol{x}_n-\overline\boldsymbol{x}_k)(\boldsymbol{x}_n-\overline\boldsymbol{x}_k)^T \end{aligned}$$
    
##### Evaluate $\ln \rho_{nk}$

$$\begin{aligned} \ln \rho_{nk} &= \mathbb{E}[\ln \pi_k] + \frac 12 \left\{ \mathbb{E}[\ln \vert \Lambda_k \vert] - D\ln (2\pi) - \mathbb{E}_{\boldsymbol{\mu}_k, \Lambda_k}[(\boldsymbol{x}_n - \boldsymbol{\mu}_k)^T\Lambda_k(\boldsymbol{x}_n - \boldsymbol{\mu}_k)] \right\} \end{aligned}$$

- $\mathbb{E}[\ln \pi_k]$

    $$\begin{aligned} \mathbb{E}[\ln \pi_k] &= \psi(\alpha_{Nk}) - \psi\left(\sum_{k=1}^K \alpha_{Nk}\right) \\ \mathbb{E}[\vert \Lambda_k \vert ] &= \sum_{i=1}^D\psi\left(\frac {\nu_{Nk} + 1 -i }{2} + D\ln 2 + \ln \vert W_{Nk} \vert \right) \\ \mathbb{E}_{\boldsymbol{\mu}_k, \Lambda_k}[(\boldsymbol{x}_n& - \boldsymbol{\mu}_k)^T\Lambda_k(\boldsymbol{x}_n - \boldsymbol{\mu}_k)] \\ &=  D\beta_{Nk}^{-1} + \nu_{Nk}(\boldsymbol{x}_n - \boldsymbol{m}_{Nk})^TW_{Nk}(\boldsymbol{x}_n - \boldsymbol{m}_{Nk})   \end{aligned}$$

  - Where $\psi$ is the digamma function

#### Variational Lower Bound

to be continue

