

## Bayesian Logistic Regression


#### Laplace Approximation

- Laplace Approximation, that aims to find a Gaussian approximation to a probability density defined over a set of continuous variables.

- Assume $p(\boldsymbol{x}) = \frac 1Z f(\boldsymbol{x})$ is a distribution defined over an $M$-dim space. At a stationary point $\boldsymbol{x}_0$ the gradient $\nabla f(\boldsymbol{x})$ will vanish.

    $$\begin{aligned} \ln f(\boldsymbol{x}) &\simeq \ln f(\boldsymbol{x}_0) - \frac 12 (\boldsymbol{x}-\boldsymbol{x}_0)^TH(\boldsymbol{x}-\boldsymbol{x}_0) \\ \\ H&= - \nabla\nabla \ln f(\boldsymbol{x})\vert_{\boldsymbol{x}=\boldsymbol{x}_0} \\ \\ f(\boldsymbol{x}) &\simeq f(\boldsymbol{x}_0)\exp\left(-\frac 12 (\boldsymbol{x}-\boldsymbol{x}_0)^TH(\boldsymbol{x}-\boldsymbol{x}_0) \right) \end{aligned}$$

    - Then:

        $$\begin{aligned} q(\boldsymbol{x}) &= (2\pi)^{-M/2}\vert H\vert^{1/2} \exp\left(-\frac 12 (\boldsymbol{x}-\boldsymbol{x}_0)^TH(\boldsymbol{x}-\boldsymbol{x}_0) \right) \\&= \mathcal{N}(\boldsymbol{x}\mid \boldsymbol{x}_0, H^{-1}) \end{aligned}$$ 

    - This Gaussian distribution will be well defined provided its precision matrix, given by $H$, is positive definite, which implies that the stationary point $\boldsymbol{x}_0$ must be a local maximum, not a minimum or a saddle point.

#### Bayesian Model Comparison and BIC
- Using Laplace approximation on normalization constant $Z$

    $$\begin{aligned} Z &= \int f(\boldsymbol{x})d\boldsymbol{x} \\ &\simeq f(\boldsymbol{x}) \int \exp\left(-\frac 12 (\boldsymbol{x}-\boldsymbol{x}_0)^TH(\boldsymbol{x}-\boldsymbol{x}_0) \right)d\boldsymbol{x} \\&= f(\boldsymbol{x})(2\pi)^{M/2}\vert H \vert^{-1/2}  \end{aligned}$$

- Approximation to the model evidence

    - Consider a data set $\mathcal{D}$  and a set of modes $\{\mathcal{M}_i\}$ having parameters $\{\theta_i\}$
      - likelihood: $p(\mathcal{D} \mid \theta_i, \mathcal{M}_i)$ 
      - prior: $p(\theta_i \mid \mathcal{M}_i)$
    
    $$\begin{aligned} p(\mathcal{D}\mid \mathcal{M}) &= \int p(\mathcal{D} \mid \theta, \mathcal{M}) p(\theta \mid \mathcal{M}) d\theta \\ &= \int f(\theta)d\theta \\ &\simeq p(\mathcal{D} \mid \theta_{MAP}, \mathcal{M}) p(\theta_{MAP} \mid \mathcal{M}) (2\pi)^{M/2}\vert H \vert^{-1/2} \\ \\ \ln p(\mathcal{D}\mid \mathcal{M}) &= \ln p(\mathcal{D} \mid \theta_{MAP}, \mathcal{M}) + \ln p(\theta_{MAP} \mid \mathcal{M}) + \frac M2 \ln(2\pi) -\frac 12 \ln\vert H\vert \\ \\ H &= -\nabla\nabla\ln p(\mathcal{D} \mid \theta_{MAP}, \mathcal{M})p(\theta_{MAP} \mid \mathcal{M}) = -\nabla\nabla \ln p(\theta_{MAP} \vert \mathcal{D})  \end{aligned}$$

- Bayesian Information Criterion

    $$\begin{aligned} \ln p(\mathcal{D}) \simeq \ln p(\mathcal{D} \vert \theta_{MAP}) - \frac 12 M\ln N \end{aligned}$$


#### Bayesian Logistic Regression (wighting for update)

- Exact Bayesian inference for logistic regression is intractable.
- Parameter distribution: Here we consider the Laplace approximation to the problem of Bayesian Logistic regression.
- 


