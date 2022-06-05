

## Bernoulli Distributions

- Bernoulli Distributions is the discrete probability distribution of a random variable which takes the value 1 with probability $\mu$ and the value 0 with probability ${\displaystyle 1-\mu}$


- $x\in \{0, 1\}, \mu \in [0,1]$

    $$\begin{aligned} \mathrm{Bern}(x\vert \mu) &= \mu^x(1-\mu)^{1-x} \\ \\ \mathbb{E}[x] &= \sum_{x} xp(x) = \mu  \\ \mathrm{var}[x] &= \mathbb{E}[(x-\mu)^2] \\ &= \sum_{x} (x-\mu)^2p(x)\\&= \mu^2(1-\mu) + (1-\mu)^2\mu \\&= \mu(1-\mu) \end{aligned}$$


- **Likelihood Function**
    - Let $D = \{x_1, x_2, \cdots, x_N \}$ of observed data sets of $x$, and $m = \sum_{i=1}^N x_i$.
        
        $$\begin{aligned} p(D\vert \mu) &= \prod_{i=1}^N \mu^{x_i}(1-\mu)^{1-x_i} \\ &= \mu^m(1-\mu)^{N-m} \end{aligned}$$
    
    - Then we can see $m = \sum_{i=1}^N x_i$ is a sufficient statistic for the data under this distribution.
    - And using maximum likelihood approach, we obtain:
        
        $$\mu_{ml} = \frac mN$$

## Binomial Distributions

- The binomial distribution with parameters $N$ and $\mu$ is the discrete probability distribution of the number of successes $m$ in a sequence of $N$ independent experiments. It is the distribution of the number $m$ of  ovservations of $x=1$ in bernoulli distributions given that the data set has size $N$.

    $$\begin{aligned} \mathrm{Bin}(m\vert N,\mu) &= \left( \begin{matrix}N\\m\end{matrix} \right) \mu^m(1-\mu)^{N-m} \\ &= \frac {N!}{(N-m)!m!} \mu^m(1-\mu)^{N-m}  \end{aligned}$$

    - Mean
        
        $$\begin{aligned} \mathbb{E}[m] &= \sum_{m=0}^N m\mathrm{Bin}(m\vert N,\mu) \\&= \sum_{m=1}^N m\mathrm{Bin}(m\vert N,\mu) \\ &= \sum_{m=1}^N m \frac {N!}{(N-m)!m!} \mu^m(1-\mu)^{N-m} \\ &= N\mu \sum_{m=1}^N \frac {(N-1)!}{((N-1)-(m-1))!(m-1)!} \mu^{m-1}(1-\mu)^{(N-1)-(m-1)} \\ &= N\mu \sum_{k=0}^{N-1} \frac {(N-1)!}{((N-1)-k)!k!} \mu^{k}(1-\mu)^{(N-1)-k} \\ &= N\mu \sum_{k=0}^{N-1} \mathrm{Bin}(k\vert N-1, \mu) \\ &= N\mu  \end{aligned}$$
    
    - Variance
        
        $$\begin{aligned} \mathrm{var}[m] &= \mathbb{E}[(m-\mathbb{E}[m])^2] \\ &= \sum_{m=0}^N (m-\mathbb{E}[m])^2 \mathrm{Bin}(m\vert N,\mu) \\&= \sum_{m=0}^N (m-N\mu)^2 \mathrm{Bin}(m\vert N,\mu) \\ &= \sum_{m=0}^N m^2\mathrm{Bin}(m\vert N,\mu) -2N\mu \sum_{m=0}^N m\mathrm{Bin}(m\vert N,\mu) + N^2\mu^2 \sum_{m=0}^N  \\ &= \left[\sum_{m=1}^N m^2\frac {N!}{(N-m)!m!} \mu^m(1-\mu)^{N-m} \right]  -2N\mu N\mu + N^2 \mu^2 \\ &= -N^2\mu^2 + N\mu \sum_{m=1}^N m \frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} \\&= -N^2\mu^2 + N\mu \sum_{m=1}^N (1+m-1) \frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} \\ &=  -N^2\mu^2 + N\mu\left( \sum_{m=1}^N\frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} +  \sum_{m=1}^N (m-1) \frac {(N-1)!}{(N-m)!(m-1)!}\mu^{m-1}(1-\mu)^{N-m} \right) \\ &= -N^2\mu^2 + N\mu\left(1+\sum_{m=2}^N \frac {(N-1)!}{(N-m)!(m-2)!}\mu^{m-1}(1-\mu)^{N-m} \right)  \\ &= -N^2\mu^2 + N\mu \left(1+(N-1)\mu \sum_{m=2}^N \frac {(N-2)!}{((N-2)-(m-2))!(m-2)!}\mu^{m-2}(1-\mu)^{(N-2)-(m-2)} \right) \\&= -N^2\mu^2 + N\mu\left(1+ (N-1)\mu\sum_{k=0}^{N-2} \mathrm{Bin}(k\vert N-2, \mu) \right) \\&= -N^2\mu^2 + N\mu(1+N\mu-\mu) \\&= N\mu(1-\mu)\end{aligned}$$
        

## Beta Distribution

- New we introduce a prior distribution of $p(\mu)$ over the parameter $\mu$ in the Bernouli and Binomial distribution
    
    
- The beta distribution as the prior distribution will have a simple interpretation as well as some useful analytical properties. 

- **conjugacy**: In this case, if we let the posterior distribution is priportional to the product of the prior and the likelihood function, then it will have the same functional form as the prior. Then we will see the posterior distribution is also a beta distribution. This property is called **conjugacy**.

    $$\begin{aligned} \mathrm{Beta}(\mu \vert a, b) = \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)} \mu^{a-1}(1-\mu)^{b-1} \end{aligned}$$
    
    - where $\Gamma(x)$ is the Gamma function defined by:
    
        $$\begin{aligned}\Gamma(x) = \int_0^{\infty} u^{x-1}e^{-u}du \end{aligned}$$
        
        - $\Gamma(x+1) = x\Gamma(x)$, and then $\Gamma(x+1) = x!$ when $x$ is an integer.
            
            $$\begin{aligned} \Gamma(x+1) &= \int_0^{\infty} u^{x}e^{-u}du \\&= \int_0^{\infty} -u^{x}d(e^{-u}) \\&=-u^{x}e^{-u} - \int_0^\infty x u^{x-1} e^{-u} du \qquad\qquad (using: \space \int u(x)d[v(x)] = u(x)v(x) - \int v(x)d[u(x)]) \\&= -u^{x}e^{-u} + x\Gamma(x)  \end{aligned}$$
            
            - according $u \in [0,+\infty)$, if $u=0$, $-u^x e^{-u}=0$; and if $u\rightarrow +\infty$:
                
                $$\lim_{u\rightarrow +\infty} -\frac {u^x}{e^u} = \lim_{u\rightarrow +\infty} -\frac {x!}{e^u} = 0 \qquad\qquad (using:\space \mathrm{L'Hôpital's \space rule})$$
            
            - then we have $\Gamma(x+1) = x\Gamma(x)$.
    
    - The coefficient ensures that the beta distribution is normalized.
    
        $$\begin{aligned} \int_0^1 \mathrm{Beta}(\mu \vert a, b) du = 1 \end{aligned}$$
    

- Mean

    $$\begin{aligned} \mathbb{E}[\mu] &= \int_0^1 \mu \mathrm{Beta}(\mu \vert a, b) d\mu \\&= \int_0^1 \mu \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)} \mu^{a-1}(1-\mu)^{b-1}d\mu \\&= \frac {a\Gamma(a+1+b)}{(a+b)\Gamma(a+1)\Gamma(b)} \int_0^1  \mu^{a}(1-\mu)^{b-1}d\mu \\ &= \frac {a}{a+b} \int_0^1 \frac {\Gamma(c+b)}{\Gamma(c)\Gamma(b)} \mu^{c-1}(1-\mu)^{b-1}d\mu \\ &= \frac {a}{a+b}\end{aligned}$$


- Variance

    $$\begin{aligned} \mathrm{var}[\mu]  &= \mathbb{E}[(\mu - \frac {a}{a+b})^2] \\&= \int_0^1 (\mu - \frac {a}{a+b})^2 \frac {\Gamma(a+b)}{\Gamma(a)\Gamma(b)} \mu^{a-1}(1-\mu)^{b-1}  d\mu \\&= \frac {a}{a+b} \left(\int_0^1 \mu \frac {\Gamma(a+b+1)}{\Gamma(a+1)\Gamma(b)} \mu^{a}(1-\mu)^{b-1}\right) - 2\frac {a}{a+b} * \frac {a}{a+b} + \left(\frac {a}{a+b}\right)^2 \\&= \frac {a}{a+b} \frac {a+1}{a+b+1} - \left(\frac {a}{a+b}\right)^2 \\ &= \frac {ab}{(a+b)^2(a+b+1)} \end{aligned}$$


- The Posterior Distribution
    
    $$\begin{aligned} p(\mu \vert D) &\propto p(D\vert \mu)p(\mu) \\ p(\mu \vert m, N, a, b) &\propto \mu^{m+a-1}(1-\mu)^{N-m+b-1} \end{aligned}$$

    - Then we have:
        
        $$\begin{aligned} p(\mu \vert m, N, a, b) = \frac {\Gamma(N+a+b)}{\Gamma(m+a)\Gamma(N-m+b)} \mu^{m+a-1}(1-\mu)^{N-m+b-1} \end{aligned}$$
   

- The Predictive Distribution
    
    $$\begin{aligned} p(x\vert D) &= \int_0^1 p(x\vert \mu) p(\mu\vert D)d\mu \\ &=\left\{\begin{aligned}&\int_0^1 \mu p(\mu\vert D)d\mu \qquad \qquad &x=1 \\ & \int_0^1 (1-\mu) p(\mu\vert D)d\mu \qquad \qquad &x=0 \end{aligned} \right. \\ &= \left\{\begin{aligned}&\mathbb{E}_{\mu}[\mu \vert D] \qquad \qquad &x=1 \\ & 1-\mathbb{E}_{\mu}[\mu \vert D] \qquad \qquad &x=0 \end{aligned} \right.  \end{aligned}$$

    - Using the posterior distribution result, we obtain:
        
        $$\begin{aligned} p(x=1 \vert D) &= \int_0^1 \mu \frac {\Gamma(N+a+b)}{\Gamma(m+a)\Gamma(N-m+b)} \mu^{m+a-1}(1-\mu)^{N-m+b-1} d\mu &= \frac {m+a}{N+a+b} \\ p(x=0\vert D) &= 1 - p(x=1 \vert D) &= \frac {N-m+b}{N+a+b}  \end{aligned}$$

    - Then we can see, in the limit of an infinitely large data set $m,N\rightarrow \infty$, this result reduces to the maximum likelihood result $\frac mN$. 
    
    - It is a very general property that the Bayesian and maximum likelihood results will agree in the limit of an infinitely large data set.
    
    - For a finite data set, the posterior distribution mean for $\mu$ always lie between prior mean and the maximum likelihood estimate for $\mu$ corresponding to the relative frequencies of events.

```python
# Beta Distributions
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import beta

parameters = [(0.1,0.3), (1,1), (8,4), (200,150)]
fig, axs = plt.subplots(1,4, figsize=(24,6))

for i in range(4):
    a, b = parameters[i]
    ax = axs[i]
    
    # mu = np.linspace(beta.ppf(0, a, b), beta.ppf(1, a, b), 100)
    mu = np.linspace(0,1, 100)
    ax.plot(mu, beta.pdf(mu, a, b),
           'r', lw=3, alpha=0.8, label='beta pdf')

    ax.set_xlim((0,1))
    ax.set_title("a={}, b={}".format(a,b))
    ax.set_xlabel("$\mu$")

plt.show()
```

- We can see that as $a\rightarrow \infty$, $b\rightarrow \infty$, the beta distribution becomes more sharply peaked, because the variance goes to zero for $a\rightarrow \infty$ or $b\rightarrow \infty$.


- Also in the posterior distribution of $\mu$, as the number of observations increases, the posterior distribution becomes more sharply peaked. And the variance of posterior distribution decreases, that means the uncertainty represented by the posterior distribution will also decrease.


- But is that a general property of Bayesian learning, we can see in the following:
    - To address this, we can take a frequentist view of Bayesian learning and show that, on average, such a property does indeed hold.
    
    - Consider a gengeral Bayesian inference problem for a parameter $\theta$ for which we have observed a data set $D$, described by the joint distribution $p(\theta, D)$.
    - Firstly: we can see that the posterior mean of $\theta$, averaged over the distribution generation the data, is equal to the prior mean of $\theta$.
        
        $$\begin{aligned} \mathbb{E}_\theta[\theta] &= \mathbb{E}_D[\mathbb{E}_\theta[\theta\vert D]] \\ Proof: \qquad&  \\ \mathbb{E}_D[\mathbb{E}_\theta[\theta\vert D]] &= \int \left[ \int \theta p(\theta\vert D)d\theta \right]p(D) dD \\ &= \int \theta p(\theta) d\theta \\ &= \mathbb{E}_\theta[\theta] \end{aligned}$$
    
    - And then, we can see the prior variance of $\theta$ is equal to the average posterior variance of $\theta$ plus to the variance of posterior mean of $\theta$.
        
        $$\begin{aligned} \mathrm{var}_{\theta}[\theta] &= \mathbb{E}_{D}[\mathrm{var}_\theta[\theta\vert D]] + \mathrm{var}_{D}[\mathbb{E}_\theta[\theta\vert D]] \\ &\ge \mathbb{E}_{D}[\mathrm{var}_\theta[\theta\vert D]] \end{aligned}$$
        
    - It means that, on average, the variance of posterior distribution is smaller than the prior variance. And the reduction is greater if the variance in the posterior mean is greater.
    
    - Note, however, that this result only holds on average, and that for a particular observed data set it is possible for the posterior variance to be larger than the prior variance.
        
## The generalization of the Bernouli distribution to multinomial Variables

- For the discrete variables that can take on one of $K$ possible mutually exclusive state.

- Using 1-of-K scheme to represent the $\boldsymbol{x}$ by a K-dimensional vector.

- Then we can write the distribution of $\boldsymbol{x}$ by:
    
    $$\begin{aligned} p(\boldsymbol{x}\vert \boldsymbol{\mu}) &= \prod_{k=1}^K \mu_i^{x_k} \\ \sum_k^K x_k &= 1 \\ \sum_k^K \mu_i &= 1 \end{aligned}$$

- The likelihood function of the distribution of $\boldsymbol{x}$ with a data set $D$ of $N$ independent observations $D = \{\mathbf{x}_1, \mathbf{x}_2, \cdots, \mathbf{x}_N\}$:
    
    $$\begin{aligned} p(D\vert \boldsymbol{\mu} ) = \prod_i^N\prod_k^K \mu_k^{x_{ik}} = \prod_k^K \mu_k^{\sum_i x_{ik}} =  \prod_k^K \mu_k^{m_k} \end{aligned}$$


- The Maximum likelihood solution of the $\boldsymbol{\mu}$ can be found by using the Lagrange multiplier $\lambda$ and maximizing
    
    $$\begin{aligned} L = \sum_{k=1}^K m_k \ln \mu_k + \lambda(\sum_{k=1}^K \mu_k - 1) \end{aligned}$$

    - then
        
        $$\begin{aligned} \frac {\partial L}{\partial \mu_k} &= \frac {m_k}{\mu_k} + \lambda = 0 \\ \mu_k &= -\frac {m_k}{\lambda} \\ \\ \Rightarrow \space \sum_{k=1}^K -\frac {m_k}{\lambda} &= 1 \\ \Rightarrow \space \lambda &= -N \\ \\ \Rightarrow \space \mu_k &= \frac {m_k}{N} \end{aligned}$$



## Multinomial Distribution

- The joint distribution of $m_1m_2\cdots m_K$ is given by:
    
    $$\begin{aligned} \mathrm{Mult}(m_1m_2\cdots m_K \vert N, \boldsymbol{\mu}) = \binom{N}{m_1m_2\cdots m_K} \prod_{k=1}^K \mu_k^{m_k} \end{aligned}$$
    - This is called multinomial distribution.


## Dirichlet Distribution

- we now introduce a prior distribution  for the parameters $\boldsymbol{\mu} = \{\mu_1, \mu_2, \cdots, \mu_K\}$ of the multinomial distribution.

- By inspection of the form of the multinomial distribution, we see that the conjugate prior is given by

    $$\begin{aligned} p(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) \propto \prod_{k=1}^K \mu_{k}^{\alpha_k-1} \end{aligned}$$

    - Because of the summation constraint $\sum_{k}\mu_k = 1$, the distribution over the space of the $\{\mu_1, \mu_2, \cdots, \mu_K\}$ is confined to a simplex of dimensionality $K-1$.
    

- The normalized form fot this distribution is by
    
    $$\begin{aligned} \mathrm{Dir}(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) = \frac {\Gamma(\sum_k \alpha_k)}{\prod_k \Gamma(\alpha_k)} \prod_{k=1}^K \mu_{k}^{\alpha_k-1} \end{aligned}$$
    
    - so that:
        
        $$\begin{aligned} \int_0^1 \mathrm{Dir}(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) d\boldsymbol{\mu} = 1 \end{aligned}$$

- Mean

    $$\begin{aligned} \mathbb{E}[\mu_i] = \frac {\alpha_i}{\sum_k \alpha_k}  \end{aligned}$$

- Variance

    $$\begin{aligned} \mathrm{var}[\mu_i] &= \frac {\alpha_i((\sum_k \alpha^k) - \alpha_i)}{((\sum_k \alpha^k)+1)\left(\sum_k \alpha^k\right)^2} \\ &= \frac {\alpha_i(\alpha_0 - \alpha_i)}{\alpha_0^2(\alpha_0 + 1)} \end{aligned}$$
    - Here we have let $\alpha_0 = \sum_k \alpha_k$


- Covariance
    
    - $\forall \space i\neq j$

    $$\begin{aligned} \mathrm{Cov}[\mu_i, \mu_j] &= \mathbb{E}[(\mu_i - \frac {\alpha_i}{\alpha_0})(\mu_j - \frac {\alpha_j}{\alpha_0})] \\ &= \frac {\alpha_i\alpha_j}{\alpha_0(\alpha_0+1) - \frac {\alpha_i\alpha_j}{\alpha_0^2}} \\ &=  \frac {-\alpha_i\alpha_j}{\alpha_0^2(\alpha_0+1)} \end{aligned}$$


- The Posterior Distribution
    
    $$\begin{aligned} p(\boldsymbol{\mu} \vert D, \boldsymbol{\alpha}) \propto p(D\vert \boldsymbol{\mu}) p(\boldsymbol{\mu} \vert \boldsymbol{\alpha}) \propto \prod_{k=1}^K \mu_k^{m_k+\alpha_k-1}  \end{aligned}$$

    - Then we see the posterior distribution again takes the form of dirichlet distribution, so it is indeed a conjugate prior for the multinomial.
        
        $$\begin{aligned} p(\boldsymbol{\mu} \vert D, \boldsymbol{\alpha}) &= \mathrm{Dir} (\boldsymbol{\mu} \vert \boldsymbol{\alpha} + \boldsymbol{m}) \\ &= \frac {\Gamma(\sum_k (\alpha_k +m_k))}{\prod_k \Gamma(\alpha_k+m_k)} \prod_{k=1}^K \mu_k^{m_k+\alpha_k-1} \\&= \frac {\Gamma(N + \sum_k \alpha_k )}{\prod_k \Gamma(\alpha_k+m_k)} \prod_{k=1}^K \mu_k^{m_k+\alpha_k-1} \end{aligned}$$



