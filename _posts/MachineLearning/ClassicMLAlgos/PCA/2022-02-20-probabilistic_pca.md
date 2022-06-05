---
title: Probabilistic PCA
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Machine Learning, PCA]
tags: [PCA, EM]
math: true
mermaid: true
---

## Probabilistic PCA

We now show that PCA can also be expressed as the maximum likelihood solution of a probabilistic latent variable model.

Note: the probabilistic PCA model can be expressed as a directed graph

### Several Advantages of Probabilistic PCA

- Probabilistic PCA represents a constrained form of the **Gaussian distribution** in which the number of free parameters can be restricted while still allowing the model to capture the dominant correlations in a data set.

- We can derive an EM algorithm for PCA that is computationally efficient in situations where only a few leading eigenvectors are required and that **avoids having to evaluate the data covariance matrix** as an intermediate step.

- The combination of a probabilistic model and EM allows us to **deal with missing values** in the data set.

- Mixtures of probabilistic PCA models can be formulated in a principled way and trained using the EM algorithm.

- Probabilistic PCA forms the basis for a Bayesian treatment of PCA in which **the dimensionality of the principal subspace can be found automatically** from the data.

- Probabilistic PCA can be used **to model class-conditional densities and hence be applied to classification problems.**

- The probabilistic PCA model **can be run generatively** to provide samples from the distribution.


### Definition

Probabilistic PCA is closely related to factor analysis.

Probabilistic PCA is a simple example of the **linear-Gaussian framework**, in which all of the marginal and conditional distributions are Gaussian.

We can formulate probabilistic PCA by 
- first introducing an explicit latent variable $z$ corresponding to the principal-component subspace. 
- Next we define a Gaussian prior distribution $p(z)$ over the latent variable, together with a Gaussian conditional distribution $p(x\vert z)$ for the observed variable $x$ conditioned on the value of the latent variable.

$$\begin{aligned} p(\boldsymbol{z}) &= \mathcal{N}(\boldsymbol{z} \vert 0, I) \\ p(\boldsymbol{x} \vert \boldsymbol{z}) &= \mathcal{N}(\boldsymbol{x} \vert \mathbf{W}\boldsymbol{z} + \boldsymbol{\mu}, \sigma^2 I) \end{aligned}$$ 

- because we set the covariance as $\sigma^2I$, then this is an example of native Bayes model.
- and we shall see that the columns of $\mathbf{W}$ span a linear subspace with the data space that corresponds to the principal subspace.

### Generative Viewpoint of Probabilistic PCA

- first, choosing a value of the latent variable $\boldsymbol{z}$ from $p(\boldsymbol{z})$
- and then sampling $\boldsymbol{x}$ from $p(\boldsymbol{x} \vert \boldsymbol{z})$

Specifically, the D-dimensional observed variable $\boldsymbol{x}$ is defined by a linear transformation of the M-dimensional latent variable latent variables $$ plus additive Gaussian `noise`, to that:

$$\begin{aligned} \boldsymbol{x} = \mathbf{W}\boldsymbol{z} + \boldsymbol{\mu} + \boldsymbol{\epsilon} \end{aligned}$$
- $\boldsymbol{\epsilon} \sim \mathcal{N}(\boldsymbol{\epsilon} \vert 0, \sigma^2 I)$

Note that this framework is based on a mapping from latent space to data space, in contrast to the more conventional view of PCA.

The Reverse mapping, from data space to the lantent space, will be obtained shortly using Bayes' theorem.


### Predictive Distribution 

$$\begin{aligned} p(\boldsymbol{x}) &= \int p(\boldsymbol{x}\vert \boldsymbol{z})p(\boldsymbol{z})d\boldsymbol{z} \\ &= \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, \mathbf{C}) \\\\ C &= \mathbf{W}\mathbf{W}^T + \sigma^2 I  \end{aligned}$$

Note: when we evaluate the predictive distributino, we require $\mathbf{C}^{-1}$, which involves the inversion of a $D\times D$ matrix. 

- But if we use the Woodbury matrix identity on $C$,

    $$\begin{aligned} \left(A+UCV\right)^{-1} &= A^{-1}-A^{-1}U\left(C^{-1}+VA^{-1}U\right)^{-1}VA^{-1} \end{aligned}$$

-  we have

    $$\begin{aligned} \mathbf C^{-1} &= (\mathbf{W}\mathbf{W}^T + \sigma^2)^{-1} \\&= \frac 1{\sigma^2} \left(I - \frac 1{\sigma^2} \mathbf{W}(I+\sigma^2\mathbf{W}^T\mathbf{W})^{-1}\mathbf{W}^T \right) \end{aligned}$$

    - then the cost of evaluating $\mathbf C^{-1}$ is reduced from $O(D^3)$ to $O(M^3)$ by $(I+\sigma^2W^TW)^{-1}$


### Posterior Distribution

Let $\mathbf{M} = (I+\sigma^2\mathbf{W}^T\mathbf{W})^{-1}$

$$\begin{aligned} p(\boldsymbol{z} \vert \boldsymbol{x}) = \mathcal{N}(\boldsymbol{z} \vert \mathbf{M}^{-1} \mathbf{W}^T(\boldsymbol{x}-\boldsymbol{\mu}), \sigma^2 \mathbf{M}) \end{aligned}$$

- Proof:

    $$\begin{aligned} p(\boldsymbol{z} \vert \boldsymbol{x}) &= \frac {p( \boldsymbol{x} \vert \boldsymbol{z}) p(\boldsymbol{z})}{p(\boldsymbol{x})} \\&\propto \exp\left\{-\frac 12 \boldsymbol{z}^T\boldsymbol{z} - \frac {1}{2\sigma^2}\left( \boldsymbol{z}^T\mathbf{W}^T\mathbf{W}\boldsymbol{z} -2\boldsymbol{z}^T\mathbf{W}^T(\boldsymbol{x}-\boldsymbol{\mu}) \right) \right\} \\ &\propto \exp\left\{ -\frac {1}{2\sigma^2}(\boldsymbol{z}^TM^{-1}\boldsymbol{z} - 2\boldsymbol{z}^T\mathbf{W}^T(\boldsymbol{x}-\boldsymbol{\mu})) \right\} \\ \\ p(\boldsymbol{z} \vert \boldsymbol{x}) &= \mathcal{N}(\boldsymbol{z} \vert \mathbf{M}^{-1} \mathbf{W}^T(\boldsymbol{x}-\boldsymbol{\mu}), \sigma^2 \mathbf{M}) \end{aligned}$$

And we can see that poseterior covariance is independent of $\boldsymbol{x}$

### Inference - Maximum Likelihood

Using Maximum Likelihood

Given a data set $\mathbf{X}$, according to the prediction distribution $p(\boldsymbol{x}) \mathcal{N}(\boldsymbol{x}\vert \boldsymbol{\mu}, \mathbf{C})$, the log likelihood function is: 

$$\begin{aligned} \ln p(\mathbf{X} \vert \boldsymbol{\mu}, \mathbf{W}, \sigma^2) &= \sum_{n=1}^N \mathcal{N}(\boldsymbol{x}_n \vert \boldsymbol{\mu}, \mathbf{C}) \\ &= -\frac {ND}{2} \ln (2\pi) - \frac N2 \ln \vert \mathbf{C} \vert -\frac 12 \sum_{n=1}^N (\boldsymbol{x} - \boldsymbol{\mu})^T\mathbf{C}^{-1} (\boldsymbol{x} - \boldsymbol{\mu}) \end{aligned}$$

- setting the derivative with respect to $\boldsymbol{\mu}$ equal to zero, we can obtain $\boldsymbol{\mu} = \overline{\boldsymbol{x}}$, and then we have:

    $$\begin{aligned} \ln p(\mathbf{X} \vert \boldsymbol{\mu}, \mathbf{W}, \sigma^2) &= -\frac {N}{2} (\ln (2\pi) + \ln \vert \mathbf{C} \vert + \text{Tr}(C^{-1}X^TX) \end{aligned}$$

- Maximization with respect to $\mathbf{W}$ and $\sigma^2$ is more complex but nonetheless has an exact closed-form solution It was shown by Tipping and Bishop (1999b) that all of the stationary points of the log likelihood function can be written as:

    $$\begin{aligned} \mathbf{W}_{ML} = U_M(L_M - \sigma^2I)^{1/2} R \end{aligned}$$

    - $U_M$ is a $D\times M$ matrix whose columns are given by any subset of size $M$ of the eigenvectors of data covariance matrix $X^TX$
    - $L_M$ is the $M\times M$ diagonal matrix with eigenvalues $\lambda_i$
    - $R$ is an arbitrary $M\times M$ orthogonal matrix.

Furthermore, Tipping and Bishop (1999b) showed that the maximum of the likelihood function is obtained when the M eigenvectors are chosen to be those whose eigenvalues are the M largest (all other solutions being saddle points).

assume that the eigenvectors have been arranged in order of decreasing values of the corresponding eigenvalues, so that the M principal eigenvectors are $\boldsymbol{\mu}_1, ...,\boldsymbol{\mu}_M$. In this case, the columns of W define the principal subspace of standard PCA, and :

$$\begin{aligned} \sigma^2_{ML} = \frac 1{D-M} \sum_{i=M+1}^D \lambda_i \end{aligned}$$

so that $\sigma^2_{ML}$ is the average variance associated with the discarded dimensions.

### Rotation Invarianty

If we set a new $\widetilde{\mathbf W} = \mathbf{WR}$, then:

$$\widetilde{\mathbf W}\widetilde{\mathbf W}^T = \mathbf{WR}\mathbf{R^T} \mathbf{W^T} = \mathbf{W}\mathbf{W^T}$$

then we can see $\mathbf{C}$ is independent of $\mathbf{R}$

**This simply says that the predictive density is unchanged by rotations in the latent space**

and for the particular case of $\mathbf{R} = I$, we see that the columns of $\mathbf W$ are the principal component eigenvectors scaled by the variance parameters $\lambda_i - \sigma^2$

### ML Solution Analysis

It is worth taking a moment to study the form of the covariance matrix given by

(待更)

### EM algorithm for PCA

#### Complete-Data log likelihood function


$$\begin{aligned} \ln p(\mathbf{X}, \mathbf{Z}\vert \boldsymbol{\mu}, \mathbf{W}, \sigma^2) = \sum_{n=1}^N \{\ln p(\boldsymbol{x}_n \vert \boldsymbol{z}_n) + \ln p(\boldsymbol{z}_n)\} \end{aligned}$$

we already know that the exact maximum likelihood solution for $\boldsymbol{\mu}$ is given by the sample mean $\overline{\boldsymbol{x}}$, and it is convenient to substitute for $\boldsymbol{\mu}$ at this stage.


#### Expectation step of Complete-Data LL

taking the expectation with respect to the posterior distribution over the latent variables, we obtain

$$\begin{aligned} \mathbb{E}[\ln p(\mathbf{X}, \mathbf{Z}\vert \boldsymbol{\mu}, \mathbf{W}, \sigma^2)] \space =& -\sum_{n=1}^N \{\frac 12 \text{Tr}(\mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n^T]) + \frac D2 \ln(2\pi\sigma^2) +   \\ & +\frac {1}{2\sigma^2}\|\boldsymbol{x}_n-\boldsymbol{\mu}\|^2 -\frac {1}{\sigma^2}\mathbb{E}[\boldsymbol{z}_n]^T\mathbf{W}^T(\boldsymbol{x}_n-\boldsymbol{\mu}) \\ & + \frac {1}{2\sigma^2}\text{Tr}(\mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n]^T\mathbf{W}^T\mathbf{W}) \}  \\ \\ \mathbb{E}[\boldsymbol{z}_n] \space =& \mathbf{M^{-1}}\mathbf{W}^T(\boldsymbol{x}_n-\overline{\boldsymbol{x}}) \\  \mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n^T] \space =& \sigma^2\mathbf{M^{-1}} + \mathbb{E}[\boldsymbol{z}_n]\mathbb{E}[\boldsymbol{z}_n]^T \end{aligned}$$


#### Maximization step

maximize with respect to 
- $\mathbf{W}_{new}$
- $\sigma_{new}^2$

$$\begin{aligned} \mathbf{W}_{new}&= \left[ \sum_{n=1}^N \mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n]  \right]^{-1} \left[ \sum_{n=1}^N (\boldsymbol{x}_n-\boldsymbol{\mu})\mathbb{E}[\boldsymbol{z}_n]^T  \right] \\ \sigma_{new}^2 &= \frac {1}{ND}\sum_{n=1}^N \left\{ \|\boldsymbol{x}_n-\boldsymbol{\mu}\|^2 -2\mathbb{E}[\boldsymbol{z}_n]^T\mathbf{W}_{new}^T(\boldsymbol{x}_n-\boldsymbol{\mu}) + \text{Tr}(\mathbb{E}[\boldsymbol{z}_n\boldsymbol{z}_n]^T\mathbf{W}_{new}^T\mathbf{W}_{new}) \right\} \end{aligned}$$


#### Advantages of EM in PCA

- One of the benefits of the EM algorithm for PCA is computational efficiency for large-scale applications
- Note that this EM algorithm can be implemented in an on-line form in which each D-dimensional data point is read in and processed and then discarded before the next data point is considered.
- Because we now have a fully probabilistic model for PCA, we can deal with missing data, provided that it is missing at random, by marginalizing over the distribution of the unobserved variables.


#### EM for standard PCA

- Another elegant feature ofthe EM approach is that we can take the limit $\sigma^2 \rightarrow 0$, corresponding to standard PCA, and still obtain a valid EM-like algorithm

$$\begin{aligned} \mathbf{M} &= \mathbf{W}^T\mathbf{W}  \\ \mathbf{\Omega} &= (\mathbf{W}_{old}^T\mathbf{W}_{old})^{-1}\mathbf{W}_{old}^T\widetilde{X} \\ \mathbf{W}_{new}&= \widetilde{X}\mathbf{\Omega}^T(\mathbf{\Omega}\mathbf{\Omega}^T)^{-1} \end{aligned}$$

Again these can be implemented in an on-line form.


$$\begin{aligned} \end{aligned}$$
