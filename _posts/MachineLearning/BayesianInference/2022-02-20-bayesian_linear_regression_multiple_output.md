---
title: Bayesian Linear Regression (Multiple Outputs)
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Bayesian Inference]
tags: [Linear Regression, Bayesian]
math: true
mermaid: true
---

## Bayesian Linear Regression (Multiple Output)

- The Linear Model of $f(\boldsymbol{x}, W) = W\phi(\boldsymbol{x})$, with Gaussian noise $p(\boldsymbol{\epsilon}) = \mathcal{N}(\boldsymbol{\epsilon} \vert 0, \Lambda_{\varepsilon}^{-1})$ is given by:
    
    $$\begin{aligned} \boldsymbol{y} &= W^T\phi(\boldsymbol{x}) + \boldsymbol{\epsilon} \\ p( \boldsymbol{y}\mid \boldsymbol{x}, W, \Lambda_{\varepsilon}) &= \mathcal{N}(\boldsymbol{y} \mid W^T\phi(\boldsymbol{x}), \Lambda_{\varepsilon}^{-1}) \end{aligned}$$

    - $W$ is a $M\times K$ parameter matrix
    - $\Lambda_{\varepsilon}$ is a $K\times K$ percision matrix of a gaussian white noisy

- Likelihood Function

    $$\begin{aligned} p(D \vert W) = \prod_{i=1}^N \mathcal{N}(\boldsymbol{y}_i \vert W^T\phi(\mathbf{x}_i), \Lambda_{\varepsilon}^{-1}) \end{aligned}$$


- Note: now, the gaussian prior distribution of paramater matrix $W$ is **Matrix Gaussian distribution** $\mathcal{N}(W \mid \mu_{W_0},V_0, U_0)$.

    $$\begin{aligned} p(W\mid M_0, U_0, V_0) = \frac {1}{(2\pi)^{\frac {KM}{2}} \vert V_0\vert^{\frac K2} \vert U_0\vert^{\frac M2}} \exp\left( -\frac 12 \mathrm{Tr}\left[ V_0^{-1}(W-M_0)^TU_0^{-1}(W-M_0) \right] \right) \end{aligned}$$

    - $M_0$ is $M\times K$
    - $V_0$ is $K \times K$
    - $U_0$ is $M \times M$

    - and this can be writen as vectorize $\boldsymbol{w} = \text{vec}(W)$, which is a $MK$-dim vector.

        $$\boldsymbol{w} \sim \mathcal{N}(\boldsymbol{w} \mid \text{vec}(M_0), V_0 \otimes U_0)$$

        - where $\otimes$ denotes the Kronecker product [wiki](https://en.wikipedia.org/wiki/Kronecker_product).


### Known Precision Matrix

- Let $\boldsymbol{w} = \text{vec}(W)$

#### Parameter Distribution

- Prior distribution: a Matrix Gaussian distribution

    $$\begin{aligned} p(\boldsymbol{w} \mid \boldsymbol{m}_0, V_0\otimes U_0) = \mathcal{N}(\boldsymbol{w} \mid \text{vec}(M_0), V_0 \otimes U_0) \end{aligned}$$

- Posterior distribution: a Matrix Gaussian distribution

    $$\begin{aligned} p(\boldsymbol{w} \mid \boldsymbol{m}_N, V_N\otimes U_N) &\propto p(D \vert W) p(\boldsymbol{w} \mid \boldsymbol{m}_0, V_0\otimes U_0) \end{aligned}$$

    - the terms in the $exp$:

        $$\begin{aligned} &\left(\sum_{i=1}^N -\frac 12 [\boldsymbol{y}_i - W^T\phi(\boldsymbol{x}_i)]^T\Lambda_{\varepsilon}[\boldsymbol{y}_i - W^T\phi(\boldsymbol{x}_i)] \right) - \frac 12 (\boldsymbol{w}-\boldsymbol{m}_0)^T(V_0 \otimes U_0)^{-1}(\boldsymbol{w}-\boldsymbol{m}_0) \\ =& -\frac 12 \text{Tr}[(Y-\Phi W)^T(Y-\Phi W)\Lambda_{\varepsilon}]- \frac 12 (\boldsymbol{w}-\boldsymbol{m}_0)^T(V_0 \otimes U_0)^{-1}(\boldsymbol{w}-\boldsymbol{m}_0) \\=& -\frac 12 \text{vec}(W)^T\text{vec}(\Phi^T\Phi W \Lambda_{\varepsilon}) -\frac 12 \boldsymbol{w}^T(V_0 \otimes U_0)^{-1}\boldsymbol{w} \\ &+ \text{vec}(W)^T\text{vec}(\Phi^TY\Lambda_{\varepsilon}) + \boldsymbol{w}^T(V_0 \otimes U_0)^{-1}\boldsymbol{m}_0 + \text{const}  \\ =& -\frac 12 \boldsymbol{w}^T(\Lambda_{\varepsilon}\otimes \Phi^T\Phi) \boldsymbol{w} -\frac 12 \boldsymbol{w}^T(V_0 \otimes U_0)^{-1}\boldsymbol{w} \\ &+ \boldsymbol{w}^T\text{vec}(\Phi^TY\Lambda_{\varepsilon}) + \boldsymbol{w}^T(V_0 \otimes U_0)^{-1}\boldsymbol{m}_0 + \text{const} \\=& -\frac 12 \boldsymbol{w}^T(\Lambda_{\varepsilon}\otimes \Phi^T\Phi+(V_0 \otimes U_0)^{-1}) \boldsymbol{w} + \boldsymbol{w}^T(\text{vec}(\Phi^TY\Lambda_{\varepsilon}) + (V_0 \otimes U_0)^{-1}\boldsymbol{m}_0) + \text{const} \end{aligned}$$

    - Then we have:

        $$\begin{aligned} V_N \otimes U_N &= (\Lambda_{\varepsilon}\otimes \Phi^T\Phi+(V_0 \otimes U_0)^{-1})^{-1} \\ \boldsymbol{m}_N &= (V_N \otimes U_N)(\text{vec}(\Phi^TY\Lambda_{\varepsilon})+(V_0 \otimes U_0)^{-1}\boldsymbol{m}_0)  \end{aligned}$$ 

- **Note**: in the prior if we let $V_0 = \Lambda_{\varepsilon}^{-1}$, we can obtain:

    $$\begin{aligned} V_N \otimes U_N &= (\Lambda_{\varepsilon}\otimes \Phi^T\Phi+(\Lambda_{\varepsilon}^{-1} \otimes U_0)^{-1})^{-1} \\ &= \Lambda_{\varepsilon}^{-1} \otimes (\Phi^T\Phi+U_0^{-1})^{-1} \\ \boldsymbol{m}_N &= (V_N \otimes U_N)(\text{vec}(\Phi^TY\Lambda_{\varepsilon})+(\Lambda_{\varepsilon}^{-1} \otimes U_0)^{-1}\boldsymbol{m}_0) \\ &= (V_N \otimes U_N)\text{vec}[(\Phi^TY+U_0^{-1}M_0)\Lambda_{\varepsilon}] \\ &= \text{vec}[(\Phi^T\Phi+U_0^{-1})^{-1}(\Phi^TY+U_0^{-1}M_0)] \\ M_N&= (\Phi^T\Phi+U_0^{-1})^{-1}(\Phi^TY+U_0^{-1}M_0) \end{aligned}$$ 

    - it also means: $V_N = \Lambda_{\varepsilon}^{-1}$ and $U_N = (\Phi^T\Phi+U_0^{-1})^{-1}$, we see now, the mean of posterior do not depend on the $\Lambda_{\varepsilon}^{-1}$. 


### Unknown Precision Matrix

- Also let $\boldsymbol{w} = \text{vec}(W)$

#### Parameter distribution

- Prior distribution: Matrix-Gaussian--Wishart distribution

    $$\begin{aligned} p(\boldsymbol{w}\mid \boldsymbol{m}_0, \Lambda_{\varepsilon}, \Lambda_0 ) &= \mathcal{N}( \boldsymbol{w}\mid \boldsymbol{m}_0, \Lambda_{\varepsilon} \otimes \Lambda_0) \\ p(\Lambda_{\varepsilon}  \mid V_0, \nu_0) &= \mathcal{W}(\Lambda_{\varepsilon} \mid V_0, \nu_0) \end{aligned}$$

- Posterior distribution: Matrix-Gaussian--Wishart distribution

    $$\begin{aligned} p(\boldsymbol{w}\mid \boldsymbol{m}_N, \Lambda_{\varepsilon}, \Lambda_N ) &= \mathcal{N}( \boldsymbol{w}\mid \boldsymbol{m}_N, \Lambda_{\varepsilon} \otimes \Lambda_N) \\ p(\Lambda_{\varepsilon}  \mid V_N, \nu_N) &= \mathcal{W}(\Lambda_{\varepsilon} \mid V_N, \nu_N) \\ \\ p(\boldsymbol{w}, \Lambda_{\varepsilon}) &= \mathcal{N}( \boldsymbol{w}\mid \boldsymbol{m}_N, \Lambda_{\varepsilon} \otimes \Lambda_N)\mathcal{W}(\Lambda_{\varepsilon} \mid V_N, \nu_N) \end{aligned}$$

    - Inference:

        $$\begin{aligned} p(\boldsymbol{w}, \Lambda_{\varepsilon}) \propto& p(D \vert W) \mathcal{N}( \boldsymbol{w}\mid \boldsymbol{m}_0, \Lambda_{\varepsilon} \otimes \Lambda_0)\mathcal{W}(\Lambda_{\varepsilon} \mid V_0, \nu_0) \end{aligned}$$
    
    - We can get:

        $$\begin{aligned} \Lambda_N &= \Lambda_0 + (Y-\Phi M_N)^T(Y-\Phi W M_N) + (M_N - M_0)^T\Lambda_0(M_N-M_0) \\ \nu_n &= \nu_0 + n \\ \Lambda_N &= \Phi^T\Phi + \Lambda_0 \\ M_N &= (\Phi^T\Phi+\Lambda_0)^{-1}(\Phi^TY + \Lambda_0M_0) \end{aligned}$$
        
