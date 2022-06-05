---
title: Kernel PCA
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Machine Learning, PCA]
tags: [PCA, Kernel]
math: true
mermaid: true
---

## Kernel PCA

### Centered case analysis

- Let $\mathbf{S}$ be $D\times D$ sample covariance matrix, as discussed at conventional PCA: (assume $\mathbf{X}$ are Centered data set)

- Recall that the principal components are defined by the eigenvectors $\boldsymbol{\mu}_i$ of the covariance matrix

$$\begin{aligned} \mathbf{S}\boldsymbol{\mu}_i &= \lambda_i \boldsymbol{\mu}_i \\ \mathbf{S} &= \frac 1N \sum_{n=1}^N \boldsymbol{x}_n\boldsymbol{x}_n^T \\&= \frac 1N \mathbf{X}\mathbf{X}^T \end{aligned}$$

- In the $M\times M$ feature space, the sample covariance matrix is: (assume $\{\phi(\boldsymbol{x}_n)\}$ are also centred)

    $$\begin{aligned} \mathbf{C} = \frac 1N \sum_{n=1}^N \phi(\boldsymbol{x}_n)\phi(\boldsymbol{x}_n)^T \end{aligned}$$

    - eigenvector expansion:

        $$\begin{aligned} \mathbf{C}\boldsymbol{v}_i = \lambda_i \boldsymbol{v}_i \end{aligned}$$

    - Then out goal is to solve this eigenvalue problem without having to work explicitly in the feature space.

    $$\begin{aligned} \because \space\space& \mathbf{C}\boldsymbol{v}_i = \lambda_i \boldsymbol{v}_i \\ \therefore \space\space& \frac 1N \sum_{n=1}^N \phi(\boldsymbol{x}_n)[\phi(\boldsymbol{x}_n)^T \boldsymbol{v}_i] = \lambda_i \boldsymbol{v}_i \\ &\text{then we can assume: it can be seen a linear combination} \\ & \boldsymbol{v}_i = \sum_{n=1}^N a_{in}\phi(\boldsymbol{x}_n) \\ \therefore \space\space& \frac 1N \sum_{n=1}^N \phi(\boldsymbol{x}_n) \sum_{m=1}^N a_{im}\phi(\boldsymbol{x}_n)^T\phi(\boldsymbol{x}_m) = \lambda_i \sum_{n=1}^N a_{in}\phi(\boldsymbol{x}_n) \\ &\frac 1N \sum_{n=1}^N \phi(\boldsymbol{x}_l)^T\phi(\boldsymbol{x}_n) \sum_{m=1}^N a_{im}\phi(\boldsymbol{x}_n)^T\phi(\boldsymbol{x}_m) = \lambda_i \sum_{n=1}^N a_{in} \phi(\boldsymbol{x}_l)^T\phi(\boldsymbol{x}_n) \\ & \frac 1N \sum_{n=1}^N k(\boldsymbol{x}_l, \boldsymbol{x}_n) \sum_{m=1}^N a_{im}k(\boldsymbol{x}_n, \boldsymbol{x}_m) = \lambda_i \sum_{n=1}^N a_{in} k(\boldsymbol{x}_l, \boldsymbol{x}_n)  \end{aligned}$$

- Matrix Form:

    $$\begin{aligned} \mathbf{K}^2 \boldsymbol{a}_i = \lambda_i N  \mathbf{K} \boldsymbol{a}_i \end{aligned}$$

    - $$\boldsymbol{a}_i = \{a_{i1},...,a_{in}\}$$
    - We can find soulution for $\boldsymbol{a}_i$ by solving the following eigenvalue problem: (assume $\lambda_i\neq 0$)

        $$\begin{aligned} \mathbf{K}\boldsymbol{a}_i = \lambda_i N \boldsymbol{a}_i  \end{aligned}$$
  - Then 
    
    $$\begin{aligned} y_i(\boldsymbol{x}) &= \phi(\boldsymbol{x})^T\boldsymbol{v}_i \\&= \sum+{n=1}^N a_{in} \phi(\boldsymbol{x})^T\phi(\boldsymbol{x}) \\&= \sum_{n=1}^N k(\boldsymbol{x}, \boldsymbol{x}_n) \\&= \mathbf{k}^T(\boldsymbol{x})\boldsymbol{a}_i \end{aligned}$$

We can see in the fact that Kernel PCA involves the eigenvector expansion of the $N\times N$ matrix $\mathbf{K}$

#### using SVD to compute

$$\begin{aligned} & \mathbf{K} = \mathbf{\Phi}\mathbf{\Phi}^T \\ & \mathbf{K} = \mathbf{U}\mathbf{\Sigma}^2\mathbf{U}^T \end{aligned}$$

Then the Components is : $\mathbf{U}$

### Uncentered case analysis

根据前面的分析，已经知道，Kernel PCA 其实是先将 $D$-dim 数据根据 $\phi(\boldsymbol{x})$函数映射到$M\times M$ 维的特征空间，然后再在特征空间进行PCA，而且假设特征空间的数据已经中心化

但通常，我们并不希望直接在特征空间直接对数据中心化，因此现在假设 $\widetilde{\phi}(\boldsymbol{x})$ 是未中心化的特征数据

$$\begin{aligned} \phi(\boldsymbol{x}) &= \widetilde{\phi}(\boldsymbol{x}) - \frac 1N \sum_{l=1}^N \widetilde{\phi}(\boldsymbol{x}_l) \end{aligned}$$

Then the Gram matrix element is:

$$\begin{aligned} K_{nm} =&\space \phi(\boldsymbol{x}_n)^T\phi(\boldsymbol{x}_m) \\ &= \widetilde{\phi}(\boldsymbol{x}_n)\widetilde{\phi}(\boldsymbol{x}_m) - \frac 1N \sum_{l=1}^N \widetilde{\phi}(\boldsymbol{x}_l)^T\widetilde{\phi}(\boldsymbol{x}_n) - \frac 1N \sum_{l=1}^N \widetilde{\phi}(\boldsymbol{x}_l)^T\widetilde{\phi}(\boldsymbol{x}_m) \\ &\space  + \frac {1}{N^2} \sum_{j=1}^N\sum_{l=1} \widetilde{\phi}(\boldsymbol{x}_l)^T\widetilde{\phi}(\boldsymbol{x}_j) \end{aligned}$$

Then the matrix form is given by:

$$\begin{aligned} \mathbf{K} = \widetilde{\mathbf{K}} - \mathbf{1}_N\widetilde{\mathbf{K}} - \widetilde{\mathbf{K}}\mathbf{1}_N + \mathbf{1}_N \widetilde{\mathbf{K}} \mathbf{1}_N \end{aligned}$$

这样就又回到前面的问题中，对$\mathbf{K}$ 进行**特征向量特征值求解**，从而得到 Kernel Principal Component


Attention: 在Kernel PCA中，maximum number of Principal Component is $N$，but not $D$.


