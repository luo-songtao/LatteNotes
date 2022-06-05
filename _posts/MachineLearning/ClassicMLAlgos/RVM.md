

## Relevance Vector Machines

The Relevance Vector Machine is a Bayesian sparse kernel technique for regression and classification that shares many of the characteristics of the SVM whilst avoiding its principal limitations.

Additionally, it typically leads to much sparser models resulting in correspondingly faster performance on test data whilst maintaining comparable generalization error.

### Relevance Vector Machines for Regression

The relevance vector machine for regression has a modified prior that results in sparse solutions

The model defines a conditional distribution for a real-valued target variable $t$

$$\begin{aligned} p(t\vert \boldsymbol{x}, \boldsymbol{w}, \beta) = \mathcal{N}(t\vert y(\boldsymbol{x}), \beta^{-1})) \end{aligned}$$

The relevance vector machine is a specific instance of this model, which is intended to mirror the structure of the support vector machine. In particular, the basis functions are given by kernels, with one kernel associated with each of the data points from the training set.

$$\begin{aligned} y(\boldsymbol{x}) &= \sum_{n=1}^N \boldsymbol{w}_n k(\boldsymbol{x}, \boldsymbol{x}_n) + b  \end{aligned}$$

RVM：可理解为对SVM和Bayesian Linear Model (Gaussian) 的一个结合
- Gaussian linear model的基函数直接替换成核函数
- 对参数也引入先验分布
- 使用emprical Bayes 积分掉模型参数，并推出超参数的解
- 从而等价于得到一个Gaussian Processes Model，但是又如同SVM一样，因此得到的是一个具有稀疏解的GP model

- 其中在emprical Bayes中计算超参数最优解时，有一个迭代解的形式来计算

- 

- Note: The number of parameters in this case is $N+1$

#### likelihood function

Suppose given a size $N$ data set $\mathbf{X}, \mathbf{t}$, then the likelihood function is given by:

$$\begin{aligned} p(\mathbf{t}\vert \mathbf{X}, \boldsymbol{w}, \beta) &= \prod_{n=1}^N p(t_n\vert \boldsymbol{x}_n, \boldsymbol{w}, \beta) \\ &= \prod_{n=1}^N \mathcal{N}(t_n\vert y(\boldsymbol{x}_n), \beta^{-1}) \end{aligned}$$

#### Prior

Next we introduce a prior distribution over the parameter vector

$$\begin{aligned} p(\boldsymbol{w}\vert \boldsymbol{\alpha}) = \prod_{n=1}^N (\mathcal{w_i\vert 0, \alpha^{-1}}) \end{aligned}$$

#### Posterior 

$$\begin{aligned} p(\boldsymbol{w} \vert \boldsymbol{\theta}) = \mathcal{N}( \vert \boldsymbol{m}, \Sigma) \end{aligned}$$

- Inference parameters: if we also write: $\prod y(\boldsymbol{x}_n) = \boldsymbol{w}_n k(\boldsymbol{x}, \boldsymbol{x}_n) + b = \boldsymbol{w}_n^T\phi_n$

    $$\begin{aligned} p(\boldsymbol{w} \vert \boldsymbol{\theta}) &\propto p(\mathbf{t}\vert \mathbf{X}, \boldsymbol{w}, \beta) p(\boldsymbol{w}\vert \boldsymbol{\alpha}) \\ &\propto \prod_{n=1}^N \mathcal{N}(t_n\vert y(\boldsymbol{x}_n), \beta^{-1}) \mathcal{N}( \vert \boldsymbol{m}, \Sigma) \\ \\ \boldsymbol{m} &=  \end{aligned}$$


$$\begin{aligned} \end{aligned}$$