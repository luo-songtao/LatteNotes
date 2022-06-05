---
title: Principal Component Analysis
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Machine Learning, PCA]
tags: [PCA]
math: true
mermaid: true
---

## Principal Component Analysis


### Maximum Variance formulation

PCA can be defined as the Orthogonal projection of the data into a lower dimensional linear space, known as the principal subspace, such that the variance of the projected data is maximized.


- for $M = 1$, suppose the direction of this space is $\boldsymbol{u}_1$, and $\|\boldsymbol{u}_1\|^2=1$

     $$\begin{aligned} &\overline{\boldsymbol{x}} = \frac 1N\sum_{n=1}^N x_n \\ &\frac 1N \sum_{n=1}^N \{ \boldsymbol{u}_1^T\boldsymbol{x}_n - \boldsymbol{u}_1^T\overline{\boldsymbol{x}}\} = \boldsymbol{u}_1^T S\boldsymbol{u}_1 \\ & S = \frac 1N \sum_{n=1}^N (\boldsymbol{x_n}-\overline{\boldsymbol{x}})(\boldsymbol{x_n}-\overline{\boldsymbol{x}})^T \end{aligned}$$

- Note: the term $\boldsymbol{u}_1^T S\boldsymbol{u}_1$ is the variance of the projected data, to maximize it we need to introduce a Lagrange multiplier:

    $$\begin{aligned} \max \qquad \boldsymbol{u}_1^T + \lambda S\boldsymbol{u}_1 + \lambda_1(1-\boldsymbol{u}_1^T\boldsymbol{u}_1) \end{aligned}$$
  - By setting the derivative with respect $\boldsymbol{u}_1$ to zero, we have:
  
    $$\begin{aligned} S\boldsymbol{u}_1 = \lambda_1 \boldsymbol{u}_1 \end{aligned}$$

  - this means that firstly the $\boldsymbol{u}_1$ must be an eigenvector of $S$

  - and further more, we also can see:

    $$\begin{aligned} \boldsymbol{u}_1^TS\boldsymbol{u}_1 = \lambda_1 \end{aligned}$$

  - this means that $\lambda_1$ is the largest eigenvalue of $S$ and it corresponds to the eigenvector $\boldsymbol{u}_1$

- Then we can easily draw the conclusion that orthogonal projection of the data into a lower $M$-dimensional linear space, from the viewpoint of maximizing the variance of the projected data, and this problem equals to find the $M$-largest eigenvalues and the corresponding eigenvectors.


### Minimum-error formulation

We now discuss an alternative formulation of PCA based on projection error minimization.

We define: 
- $X$: $N\times D$ **certered** data set matrix
- $Z$: $(D-M)\times D$ linear transform matrix 

and if we also denote:
- $\mathcal{Y}$ represents the $M$-dimension Orthogonal Projection Subspace, i.e. principal subspace.
- $\boldsymbol{z}_n = Z\boldsymbol{x}_n, \boldsymbol{z}_n \in \mathcal{Y}^{\perp}$

in PCA, the best orthogonal projection problem can be writen as minimizing the distortion measure $J$:

$$\begin{aligned} \min &\qquad J(Z) = \frac 1N \sum_{n=1}^N \|Z\boldsymbol{x}_n\|^2 = \text{Tr}(XZ^TZX^T) \\ &\qquad \|z_i\|^2 = 1, i=M+1,...,D \end{aligned}$$

- Introduce Lagrange multiplier, this is equals to 

    $$\begin{aligned} \min_{Z,\boldsymbol{\lambda}} \qquad \text{Tr}(XZ^TZX^T) + \boldsymbol{\lambda}^T(ZZ^T - I) \end{aligned}$$

  - $\lambda$ is a $D-M$-dim vector

- setting derivative respect to $Z$ equals to zero, we have:

    $$\begin{aligned} X^TXZ^T &= Z^T\boldsymbol{\lambda}\\ \Longrightarrow X^TX \boldsymbol{z}_i &= \lambda_i \boldsymbol{z}_i, \qquad i=M+1,...,D \end{aligned}$$
    - we can see that the set of $\{\lambda_i\}$ are the eigenvaues of $X^TX$ and corresponding to eigenvectors  $\{\boldsymbol{z}_i\}$

- then we can obtain the minimum value of $J$ is :

    $$\begin{aligned} J^* =  \text{Tr}(XZ^TZX^T) = \text{Tr}(\boldsymbol{\lambda}I) = \sum_{i=M+1}^D \lambda_i \end{aligned}$$

- that means $\{\lambda_i\}$ are the $D-M$ smallest eigenvalues of $X^TX$

hence the eigenvectors defining the principal subspace are those corresponding to the $M$ largest eigenvalues.

### SVD for PCA

$$\begin{aligned} \mathbf{X} = \mathbf{U}\mathbf{D}\mathbf{V}^T \end{aligned}$$

- $\mathbf{X}: N\times D$: Center data set matrix

then the $M$-larget principal components are first $M$ columns of $\mathbf{V}$



### Application of PCA

- Data Compression
- Data Pre-processing
  - in the general, the standardizing is made by a separate linear re-scaling of the individual variables such that each variable had zero mean and unit variance, and the correlation matrix(covariance matrix) is
    $$\begin{aligned} \rho_{ij} = \frac 1N \sum_{n=1}^N \frac {x_{ni}-\overline{x}_i}{\sigma_i}\frac {x_{nj}-\overline{x}_j}{\sigma_j}  \end{aligned}$$
  - but if using PCA we can make a more substantial normalization of the data to give it zero mean and unit covariance, and different variables become decorrelated
    - Eigenvector equation
        
        $$\begin{aligned} SU = UL \end{aligned}$$

    - $L$ is a $D\times D$ diagonal matrix with elements $\lambda_i$, and $U$ is a $D\times D$ orthogonal matrix with columns given by $\boldsymbol{u}_i$
    - next, we defined a transform on data given by:

        $$\begin{aligned} \boldsymbol{y}_n = L^{-1/2}U^T(\boldsymbol{x}_n -\overline{\boldsymbol{x}}) \end{aligned}$$
    - then its covariance is given by identity matrix:

        $$\begin{aligned} \boldsymbol{y}_n\boldsymbol{y}_n^T = L^{-1/2}U^T(\boldsymbol{x}_n -\overline{\boldsymbol{x}}) (\boldsymbol{x}_n -\overline{\boldsymbol{x}})^TUL^{-1/2} \end{aligned}$$

    - This operation is known as **whitening** or **sphereing**
- Data Visualization
  - Here each data point is projected onto a  two-dimensional $(M = 2)$ principal subspace


### PCA for high-dimensional data

if $N< D$, then the linear subspace whise dimensionality is at most $N-1$, and there is little point in applying PCA for values of $M$ that are greater than $N-1$

Let $X$ be $N\times D$ centred data matrix, then

$$\begin{aligned} \frac 1N X^TX\boldsymbol{u}_i &= \lambda_i \boldsymbol{u}_i \\ \frac 1N XX^T(X\boldsymbol{u}_i) &= \lambda_iX\boldsymbol{u}_i \\ \text{Let: }\boldsymbol{v_i} &= X\boldsymbol{u}_i \\ \frac 1N XX^T \boldsymbol{v}_i &= \boldsymbol{v}_i \\ \\ \frac 1N XX^T X^T\boldsymbol{v}_i &= \lambda_i X^T\boldsymbol{v}_i \\ \boldsymbol{u}_i &=  \frac 1{(N\lambda_i)^{1/2}}X^T\boldsymbol{v}_i \end{aligned}$$

- so we can firstly work on $R^N$ to find the $N$-dim eigenvectors of $XX^T$ and then compute the $D$-dim eigenvectors of $X^TX$

