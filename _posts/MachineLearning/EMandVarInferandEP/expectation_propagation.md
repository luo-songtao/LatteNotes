

## Expectation Propagation

expectation propagation is also a deterministic approximate inference mehtod

Consider for a moment the problem of minimizing $KL(p\|q)$ with respect to $q(z)$ hen $p(z)$ is a fixed distribution and $q(z)$ is a member of the exponential family.

$$\begin{aligned} q(\boldsymbol{z}) = h(\boldsymbol{z})g(\boldsymbol{\eta})\exp(\boldsymbol{eta}^T u(\boldsymbol{z})) \end{aligned}$$

As a function of $\boldsymbol{\eta}$, then

$$\begin{aligned} \text{KL}(p\|q) = -\ln g(\boldsymbol{\eta}) - \boldsymbol{eta}^T \mathbb{E}[u(\boldsymbol{z})] + \text{const} \end{aligned}$$

according to :

- The Exponential distribution
$$\begin{aligned} p(\boldsymbol{x} \vert \boldsymbol{\eta}) = h(\boldsymbol{x}) g(\boldsymbol{\eta}) \exp \left(\boldsymbol{\eta}^Tu(\boldsymbol{x})\right) \end{aligned}$$

$$\begin{aligned} g(\boldsymbol{\eta}) \int h(\boldsymbol{x})  \exp\left(\boldsymbol{\eta}^Tu(\boldsymbol{x})\right)d \boldsymbol{x} = 1  \end{aligned}$$

- Taking the gradient of both sides of previous integral equation with respect to $\boldsymbol{\eta}$

$$\begin{aligned}  &\frac {\partial} {\partial (\boldsymbol{\eta})}   g(\boldsymbol{\eta}) \int h(\boldsymbol{x})  \exp\left(\boldsymbol{\eta}^Tu(\boldsymbol{x})\right)d \boldsymbol{x} = \frac {\partial} {\partial (\boldsymbol{\eta})}1 \\ \Longrightarrow   \qquad & \nabla g(\boldsymbol{\eta}) \int h(\boldsymbol{x})  \exp\left(\boldsymbol{\eta}^Tu(\boldsymbol{x})\right)d \boldsymbol{x} + g(\boldsymbol{\eta}) \int h(\boldsymbol{x})  \exp\left(\boldsymbol{\eta}^Tu(\boldsymbol{x})\right) u(\boldsymbol{x}) d \boldsymbol{x} = 0 \\ \Longrightarrow \qquad & - \frac {\nabla  g(\boldsymbol{\eta})}{ g(\boldsymbol{\eta})} =  g(\boldsymbol{\eta}) \int h(\boldsymbol{x})  \exp\left(\boldsymbol{\eta}^Tu(\boldsymbol{x})\right) u(\boldsymbol{x})d \boldsymbol{x} = \mathbb{E}[u(\boldsymbol{x})] \\ \Longrightarrow \qquad & -\nabla \ln g(\boldsymbol{\eta} ) =   \mathbb{E}[u(\boldsymbol{x})] \end{aligned}$$

then we have

$$\begin{aligned} \mathbb{E}_{q({\boldsymbol{z})}} [u(\boldsymbol{z})] = \mathbb{E}_{p({\boldsymbol{z})}} [u(\boldsymbol{z})]  \end{aligned}$$

the optimum solution simply corresponds to matching the expected sufficient statistics. This is sometimes called **moment matching**

For many probabilistic models, the joint distribution of data $D$ and hidden variables (including parameters) $\theta$ comprises a product of factors in the form

$$\begin{aligned} p(D,\theta) = \prod_i f_i(\theta) \end{aligned}$$

- posterior

    $$\begin{aligned} p(\theta \vert D) &= \frac {1}{p(D)} \prod_i f_i(\theta) \\ p(D) &= \int \prod_i f_i(\theta) d\theta \qquad \text{model evidence} \end{aligned}$$


Expectation propagation is based on an approximation to the posterior distribution which is also given by a product of factors

$$\begin{aligned} q(\theta) = \frac 1Z \prod_i \widetilde f_i(\theta) \end{aligned}$$

- each $\widetilde f_i(\theta)$ corresponds to $f_i(\theta)$

The Expectation Propagation

- ensure this product

    $$\begin{aligned} q^{new}(\theta) \propto \widetilde{f}_j(\theta) \prod_{i\neq j} \widetilde{f}_i(\theta) \end{aligned}$$

- is close as possible to 

    $$\begin{aligned} f_j(\theta) \prod_{i\neq j} \widetilde f_i{\theta} \end{aligned}$$


In particular, if EP is applied to mixtures the results are not sensible because the approximation tries to capture all of the modes of the posterior distribution. Conversely, in logistic-type models, EP often out-performs both local variational methods and the Laplace approximation


