---
title: Expectation Maximization
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-22 07:00:00 +0800
categories: [Machine Learning, Expectation Maximization]
tags: [EM]
math: true
mermaid: true
---


## Expectation Maximization

#### EM Lower Bound analysis

- The expectation Maximization algorithm, or EM aoglrithm, is a general technique for finding maximum likelihood solutoins for probabilistic models having latent variables.

- Consider a probabilistic model in which we collectively denote:
  - all of the observed variables by $\mathbf{X}$
  - all of the hidden variables by $\mathbf{Z}$
  - the joint distribution $p(\mathbf{X}, \mathbf{Z}\mid \boldsymbol{\theta})$ is governed by a set of parameters denoted $\boldsymbol{\theta}$.
  
  then our goal is  to maximize the likelihood function that is given by:

  $$\begin{aligned} p(\mathbf{X} \mid \boldsymbol{\theta}) =\sum_{\mathbf{Z}} p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta}) \end{aligned}$$
  
  - here we are assuming $\mathbf{Z}$ is discrete, although the discussion is identical if $\mathbf{Z}$ comprises continuous variables or a combination of discrete and continuous variables, with summation replaced by integration as appropriate

- We shall suppose that direct optimization of $p(\mathbf{X} \mid \boldsymbol{\theta})$ is difficult, but that optimization of the complete-data likelihood function $p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta})$ is significantly easier

- Next we introduce a distribution $q(\mathbf{Z})$ defined over the latent variables, and we observe that, for any choice of $q(\mathbf{Z})$, the following decomposition holds.
    
    $$\begin{aligned} \ln p(\mathbf{X} \mid \boldsymbol{\theta}) = \mathcal{L}(q, \boldsymbol{\theta}) + \text{KL}(q\|p) \end{aligned}$$

  - where we have defined:

    $$\begin{aligned} \mathcal{L}(q, \boldsymbol{\theta}) &= \sum_{\mathbf{Z}} q(\mathbf{Z}) \ln \left\{ \frac {p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta})}{q(\mathbf{Z})} \right\} \\ \text{KL}(q\|p) &= -\sum_{\mathbf{Z}} q(\mathbf{Z}) \ln \left\{ \frac {p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta})}{q(\mathbf{Z})} \right\}  \end{aligned}$$

  - Proof:
  
    $$\begin{aligned} p(\mathbf{X}, \mathbf{Z} \mid \boldsymbol{\theta}) &= p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta})p(\mathbf{X}\mid \boldsymbol{\theta}) \\ \ln p(\mathbf{X}\mid \boldsymbol{\theta}) &= \ln p(\mathbf{X}, \mathbf{Z} \mid \boldsymbol{\theta}) -  \ln p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}) \\ \ln p(\mathbf{X}\mid \boldsymbol{\theta})\sum_{\mathbf{Z}} q(\mathbf{Z}) &= \sum_{\mathbf{Z}} q(\mathbf{Z})\ln p(\mathbf{X}, \mathbf{Z} \mid \boldsymbol{\theta}) -  \sum_{\mathbf{Z}} q(\mathbf{Z})\ln p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}) \\ .&..... \end{aligned}$$


- And we can see that $\mathcal{L}(q, \boldsymbol{\theta})$ is a lower bound on $\ln p(\mathbf{X} \mid \boldsymbol{\theta})$
    
    $$\begin{aligned} \because \space& \text{KL}(q\|p) \ge 0 \\ \therefore \space & \ln p(\mathbf{X} \mid \boldsymbol{\theta}) \ge \mathcal{L}(q, \boldsymbol{\theta}) \\ & \text{if} \space q(\mathbf{Z}) = p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}) \\ & \text{then}\space \ln p(\mathbf{X} \mid \boldsymbol{\theta}) = \mathcal{L}(q, \boldsymbol{\theta})  \end{aligned}$$

- Step 1 (E step): fix $\boldsymbol{\theta}=\boldsymbol{\theta}^{old}$ , update $q(\mathbf{Z})$
  - then $\ln p(\mathbf{X} \mid \boldsymbol{\theta}^{old})$ is fixed.
  - but if $q(\mathbf{Z}) = p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})$, then $\text{KL}(q\| p)$ vanishes, then this leads to maximize the lower bound to $\mathcal{L}(q, \boldsymbol{\theta}^{old})$.
  - Then we have $\mathcal{L}(q, \boldsymbol{\theta}^{old}) = \ln p(\mathbf{X} \mid \boldsymbol{\theta}^{old})$.
- Step 2 (M step): fix $q(\mathbf{Z})=p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})$, update $\boldsymbol{\theta}$
  - let $\boldsymbol{\theta}^{new} = \arg\max_{\boldsymbol{\theta}} \mathcal{L}(q, \boldsymbol{\theta})$
  - if $\boldsymbol{\theta}^{new} \neq \boldsymbol{\theta}^{old}$, then $\text{KL}(q\| p)>0$ and $\mathcal{L}(q, \boldsymbol{\theta}^{new})\ge \mathcal{L}(q, \boldsymbol{\theta}^{old})$
  - then we have $\ln p(\mathbf{X} \mid \boldsymbol{\theta}^{new}) > \ln p(\mathbf{X} \mid \boldsymbol{\theta}^{old})$


- Note: at the $E$ step: we have set $q(\mathbf{Z}) = p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})$, then

  $$\begin{aligned} \mathcal{L}(q, \boldsymbol{\theta} ) &= \sum_{\mathbf{Z}} q(\mathbf{Z}) \ln \left\{ \frac {p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta})}{q(\mathbf{Z})} \right\} \\ &= \sum_{\mathbf{Z}} p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})  \ln \left\{ \frac {p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta})}{p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old}) } \right\} \\ &=  \sum_{\mathbf{Z}} p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})  \ln p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta}) +\text{const} \\ &= \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) + \text{const} \end{aligned}$$


#### EM in General Describe

- So EM algorithm can be described as:
  - In the E step: 
    - we firstly use the current parameter values $\boldsymbol{\theta}^{old}$ to find the posterior distribution of the latent variables given by $p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})$
    - and then use this posterior to find the expectation of the complete-data log likelihood evaluated for some general parameter value $\boldsymbol{\theta}$
    
        $$\begin{aligned} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) = \sum_{\mathbf{Z}} p(\mathbf{Z} \mid \mathbf{X}, \boldsymbol{\theta}^{old})  \ln p(\mathbf{X},\mathbf{Z} \mid \boldsymbol{\theta}) \end{aligned}$$   

  - In the M step:
    - we determine the revised parameter estimate $\boldsymbol{\theta}^{new}$ by maximizing this function

         $$\begin{aligned} \boldsymbol{\theta}^{new} = \arg \max_{\boldsymbol{\theta}} \mathcal{Q}(\boldsymbol{\theta}, \boldsymbol{\theta}^{old}) \end{aligned}$$

- Now, we have seen why each cycle of EM will increase the incomplete-data log likelihood $\ln p(\mathbf{X} \mid \boldsymbol{\theta})$, unless it is already at a local maximum.

