---
title: Probabilistic Discriminative Models
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, Discriminant Analysis]
tags: [IRLS, Logit，Softmax]
math: true
mermaid: true
---

## Probabilistic Discriminative Models

- Explicitly to use the functional form of the generalized linear model and to determine its parameters by using ML
  - And in this direct approach, we are maximizing a likelihood function defined through the conditional distribution $p(C_k\mid \boldsymbol{x})$ ,( posterior distribution), which represents a form of **discriminative** training

### Logistic Regression

#### Definition

- Let $\phi = \phi(\boldsymbol{x})$ be the $M$-dim feature vector.

$$\begin{aligned} p(C_1\mid \phi) &= y(\phi) = \sigma(\boldsymbol{w}^T\phi) \\ p(C_2 \mid \phi) &= 1 - y(\phi) = 1 - p(C_1\mid \phi) \end{aligned}$$

- Then the number of adjustable parameters in this model would be $M$.

- Likelihood Function: For a data set $\{\boldsymbol{x}_n, t_n\}$, $t_n \in \{0,1\}$
    - Let $y_n = \sigma(\boldsymbol{w}^T\phi(\boldsymbol{x}_n))$
    
    $$\begin{aligned} p(\mathcal{D} \mid \boldsymbol{w}) &= \prod_{n=1}^N p(C_1\mid \phi_n)^{t_n} p(C_2\mid \phi)^{1-t_n} \\ &= \prod_{n=1}^N y_n^{t_n}(1-y_n)^{1-t_n} \end{aligned}$$

- Cross Entropy error : The Negative logrithm of this likelihood function

    $$\begin{aligned} E(\boldsymbol{w}) = -\ln p(\mathcal{D} \mid \boldsymbol{w}) = \sum_{i=1}^N [t_n\ln y_n + (1-t_n)\ln (1-y_n)] \end{aligned}$$

  - The Gradient:

    $$\begin{aligned} \nabla E(\boldsymbol{w}) &= \frac {dE}{d\boldsymbol{w}} \\ &= \frac {dE}{dy} \frac {dy}{d\sigma}\frac {d\sigma}{da}\frac {da}{d\boldsymbol{w}} \\ &= - \sum_{n=1}^N \frac {t_n}{y_n}y_n(1-y_n)\phi_n+\frac {1-t_n}{1-y_n}·-1·y_n(1-y_n)\phi_n \\ &= -\sum_{n=1}^N (t_n(1-y_n) - (1-t_n)y_n) \phi_n \\ &= \sum_{n=1}^N (y_n - t_n) \phi_n   \end{aligned}$$
- Note: Maximimum likelihood can exhibit server over-fitting for data sets that are linearly separable,. This arise because the maximum likelihood solution occurs when the hyperplane corresponding to $\sigma=0.5$, equivalent to $\boldsymbol{w}^T\phi = 0$, separates the two classes and the magnitude of $\boldsymbol{w}$  goes to infinity.


#### Iterative Reweighted Least Squares

- There is no longer a closed-form solution, due to the nonlinearity of the logistic sigmoid function.

- Newton-Raphson method
  
    $$\begin{aligned} \boldsymbol{w}^{(new)} = \boldsymbol{w}^{(old)} - H^{-1}\nabla E(\boldsymbol{w})  \end{aligned}$$

- Hessian

    $$\begin{aligned} H = \nabla \nabla E(\boldsymbol{w}) &= \sum_{n=1}^N y_n(1-y_n)\phi_n\phi_n^T \\ &= \Phi^T R \Phi \\ \\ R&= \text{diag}\{y_n(1-y_n)\} \end{aligned}$$

    - We can see the Hessian matrix is not a constant, but depends on $\boldsymbol{w}$ through the weighting matrix $R$
    - And using the property $0<y_n<1$, then $\boldsymbol{u}^TH\boldsymbol{u} > 0$. So the error function is a concave function of $\boldsymbol{w}$ and hence has a unique minimum.

- Iterative Reweighted Least Squares

    $$\begin{aligned} \boldsymbol{w}^{(new)} &= \boldsymbol{w}^{(old)} - H^{-1}\nabla E(\boldsymbol{w})\\ &= \boldsymbol{w}^{(old)} - (\Phi^T R \Phi)^{-1}\Phi^T(\mathbf{y} - \mathbf{t}) \\ &= (\Phi^T R \Phi)^{-1}(\Phi^T R \Phi\boldsymbol{w}^{(old)} - \Phi^T(\mathbf{y} - \mathbf{t})) \\ &= (\Phi^T R \Phi)^{-1}\Phi^T R \boldsymbol{z} \\ \\ \boldsymbol{z} &= \Phi\boldsymbol{w}^{(old)} - R^{-1}(\mathbf{y} - \mathbf{t})  \end{aligned}$$

    - Now, we see why this method be called "Reweighted Least Squares"

    - Further more, the $R$ can be interpreted as variances, just like the weighted Least Square method.
  
        $$\begin{aligned} t&\sim \text{Bern}(t \mid y) \\ \mathbb{E} &= y \\ \text{var}[t] &= y(1-y) \end{aligned}$$

- Addition: Logistic regression measures the relationship between the categorical dependent variable and one or more independent variables by estimating probabilities using a logistic function, which is the cumulative distribution function of logistic distribution.
    - [Latent Variable Interpretation](https://en.wikipedia.org/wiki/Logistic_regression#Latent_variable_interpretation)

    - latent variable $y' = wx + w_0 + \varepsilon$
        
        $$\begin{aligned} y = \left\{ \begin{aligned} &1\qquad &wx+w_0+\varepsilon >0 \\ &0\qquad &\text{else} \end{aligned} \right. \end{aligned}$$

    - where $\varepsilon$ is an error distributed by the standard [logistic distribution](https://en.wikipedia.org/wiki/Logistic_distribution).

### Multiclass Logistic Regression (Softmax Regression)

- Definition

    $$\begin{aligned} p(C_k\mid \phi) &= y_k(\phi) = \frac {\exp(a_k)}{\sum_j \exp(a_j)} \\ a_k &= \boldsymbol{w}^T_k\phi(\boldsymbol{x}) \end{aligned}$$

- Likelihood Funciton

    $$\begin{aligned} p(\mathcal{D} \mid \boldsymbol{w}_1, ..., \boldsymbol{w}_K) &= \prod_{n=1}^N\prod_{k=1}^K p(C_k\mid \phi_n)^{t_{nk}} = \prod_{n=1}^N\prod_{k=1}^K y_{nk}^{t_{nk}} \end{aligned}$$

- Cross Entropy error

    $$\begin{aligned} E(\boldsymbol{w}_1, ..., \boldsymbol{w}_K) &= -\ln p(\mathcal{D} \mid \boldsymbol{w}_1, ..., \boldsymbol{w}_K) \\&= -\sum_{n=1}^N\sum_{k=1}^K t_{nk}\ln y_{nk} \end{aligned}$$

- Partial Derivative

  - $\frac {\partial y_{nk}}{\partial a_j}$

    - if $k\neq j$
    
        $$\begin{aligned} \frac {\partial y_{nk}}{\partial a_j} &= \frac {-\exp(a_j)\exp(a_k)}{(\sum_i \exp(a_i))^2} \\ &= -y_{nj}y_{nk}   \end{aligned}$$

    - if $k == j$:
        
        $$\begin{aligned} \frac {\partial y_{nk}}{\partial a_j} &= \frac {\exp(a_j)}{\sum_i \exp(a_i)} - \frac {\exp(a_j)^2}{(\sum_i \exp(a_i))^2} \\ &= y_{nj}(1-y_{nj})   \end{aligned}$$
    - Then $\frac {\partial y_{nk}}{\partial a_j} = y_{nk}(I_{jk} - y_{nj})$
    
    - $\frac {\partial \ln y_{nk}}{\partial \boldsymbol{w}_j}$
    
        $$\begin{aligned} \frac {\partial \ln y_{nk}}{\partial \boldsymbol{w}_j} &= \frac {\partial \ln y_{nk}}{\partial y_{nk}}\frac {\partial y_{nk}}{\partial a_j}\frac {\partial a_j}{\partial \boldsymbol{w}_j} \\ &= \frac {1}{y_{nk}} y_{nk}(I_{jk} - y_{nj})\phi_n \\ &= (I_{jk} - y_{nj})\phi_n  \end{aligned}$$
    
   - $\nabla_{\boldsymbol{w}_j} E$

        $$\begin{aligned} \nabla_{\boldsymbol{w}_j} E(\boldsymbol{w}_1, ..., \boldsymbol{w}_K) &= -\sum_{n=1}^N\sum_{k=1}^K t_{nk}\frac {\partial \ln y_{nk}}{\partial \boldsymbol{w}_j} \\ &= -\sum_{n=1}^N\sum_{k=1}^K t_{nk}(I_{jk} - y_{nj})\phi_n \\ &= \sum_{n=1}^N\sum_{k=1}^K t_{nk} y_{nj}\phi_n - \sum_{n=1}^N t_{nj}\phi_n \\ &= \sum_{n=1}^N (y_{nk}-t_{nk})\phi_n \end{aligned}$$

- Hessian Matrix:

    $$\begin{aligned} \nabla_{\boldsymbol{w}_k}\nabla_{\boldsymbol{w}_j} E(\boldsymbol{w}_1, ..., \boldsymbol{w}_K) &= \sum_{n=1}^N y_{nk}(I_{jk} - y_{nj})\phi_n\phi_n^T  \end{aligned}$$

### Probit Regression

- The latent variable interpretation:

    $$\begin{aligned} y = \left\{ \begin{aligned} &1\qquad &wx+w_0+\varepsilon >0 \\ &0\qquad &\text{else} \end{aligned} \right. \end{aligned}$$

    - where $\varepsilon$ is an error distributed by the standard normal distribution.

- In general, let $a_n = \boldsymbol{w}^T\phi_n$

    $$\begin{aligned} t_n = \left\{ \begin{aligned} &1\qquad &a_n >\theta \\ &0\qquad &\text{else} \end{aligned} \right. \end{aligned}$$

    - If the value of $theta$ is drawn from a probability density $p(\theta)$, then the corresponding activation function will be given by the cumulative distributoin function.

        $$\begin{aligned} f(a) = \int_{-\infty}^a p(\theta) d\theta \end{aligned}$$

- As the specific case:
  - If $p(\theta)$ is logistic distribution, then $f(a)$ would be logistic sigmoid function.
  - If $p(\theta)$ is standard normal distribution, then $f(a)$ would be probit function

    $$\begin{aligned} \Phi(a) = \int_{-\infty}^a \mathcal{N}(\theta\mid 0,1)d\theta \end{aligned}$$

- erf function:
  
    $$\begin{aligned} \text{erf}(a) = \frac {2}{\sqrt{\pi}} \int_0^a \exp(-\theta^2/2)d\theta \\ \\ \Phi(a) = \frac 12 \left(1+\frac {1}{\sqrt{2}}\text{erf}(a)\right) \end{aligned}$$

- The generalized linear model based on a probit activation function is known as probit regression.



