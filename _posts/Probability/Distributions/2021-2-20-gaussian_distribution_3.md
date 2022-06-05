---
title: Gaussian Distribution (3)
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Probability, Distribution]
tags: [Gaussian Distribution]
math: true
mermaid: true
---

## Conditional Gaussian Distribution

- we partition $\boldsymbol{x}$ into disjoint subsets $\boldsymbol{x}_a, \boldsymbol{x}_b$

    $$\begin{aligned} \boldsymbol{x} &= \binom{\boldsymbol{x}_a}{\boldsymbol{x}_b} \\ \boldsymbol{\mu} &= \binom{\boldsymbol{\mu}_a}{\boldsymbol{\mu}_b} \\ \Sigma &= \binom{\Sigma_{aa} \space\space \Sigma_{ab}}{\Sigma_{ba} \space\space \Sigma_{bb}} \end{aligned}$$
     - Note, $\Sigma_{ab} = \Sigma_{ba}^T$, and $\Sigma_{aa},\Sigma_{bb}$ alse are symmetric matrix
     
     - Precision Matrix
         
        $$\begin{aligned} \Lambda = \Sigma^{-1} = \binom{\Lambda_{aa} \space\space \Lambda_{ab}}{\Lambda_{ba} \space\space \Lambda_{bb}} \end{aligned}$$


- The Quadratic Term
    - Firstly, the general quadratic term can be written by:

        $$\begin{aligned} -\frac 12(\boldsymbol{x} - \boldsymbol{\mu})^T\Sigma^{-1}(\boldsymbol{x} - \boldsymbol{\mu})  = -\frac 12\boldsymbol{x}^T\Sigma^{-1}\boldsymbol{x} + \boldsymbol{x}^T\Sigma^{-1}\boldsymbol{\mu} + \mathrm{const}  \end{aligned}$$
        
    - The term $\mu_{a\vert b}$, $\Sigma_{a\vert b}$ in the $p(\boldsymbol{x}_a\vert \boldsymbol{x}_b)$ can be obtained in the following:
    
        $$\begin{aligned} -\frac 12(\boldsymbol{x} - \boldsymbol{\mu})^T\Sigma^{-1}(\boldsymbol{x} - \boldsymbol{\mu}) &= -\frac 12(\boldsymbol{x} - \boldsymbol{\mu})^T\Lambda(\boldsymbol{x} - \boldsymbol{\mu}) \\&= -\frac 12(\boldsymbol{x}_a - \boldsymbol{\mu}_a)^T\Lambda_{aa}(\boldsymbol{x}_a - \boldsymbol{\mu}_a) \\ &\qquad -\frac 12(\boldsymbol{x}_a - \boldsymbol{\mu}_a)^T\Lambda_{ab}(\boldsymbol{x}_b - \boldsymbol{\mu}_b) \\ &\qquad -\frac 12(\boldsymbol{x}_b - \boldsymbol{\mu}_b)^T\Lambda_{ba}(\boldsymbol{x}_a - \boldsymbol{\mu}_a) \\ &\qquad -\frac 12(\boldsymbol{x}_b - \boldsymbol{\mu}_b)^T\Lambda_{bb}(\boldsymbol{x}_b - \boldsymbol{\mu}_b) \\ &= -\frac 12 \boldsymbol{x}_a^T\Lambda_{aa}\boldsymbol{x}_a + \boldsymbol{x}_a^T\Lambda_{aa}\boldsymbol{\mu}_a - \boldsymbol{x}_a^T\Lambda_{ab}(\boldsymbol{x}_b-\boldsymbol{\mu}_b) + \mathrm{const} \\ &= -\frac 12 \boldsymbol{x}_a^T\Lambda_{aa}\boldsymbol{x}_a + \boldsymbol{x}_a^T(\Lambda_{aa}\boldsymbol{\mu}_a - \Lambda_{ab}(\boldsymbol{x}_b-\boldsymbol{\mu}_b)) + \mathrm{const}   \end{aligned}$$
        
        - Then the result have been expressed in terms of partitioned precision matrix of the original joint distribution $p(\boldsymbol{x}_a, \boldsymbol{x}_b)$:
            
            $$\begin{aligned} \Sigma_{a\vert b} &= \Lambda_{aa}^{-1} \\ \mu_{a\vert b} &= \boldsymbol{\mu}_a - \Lambda_{aa}^{-1}\Lambda_{ab}(\boldsymbol{x}_b-\boldsymbol{\mu}_b) \end{aligned}$$

        - Using the inverse of a partitioned matrix equation, the result can be expressed in terms of covariance matrix.
            - The inverse of a partitioned matrix equation
                
                $$\begin{aligned} \binom{A \space\space B}{C \space\space D} &= \binom{M \space\space -MBD^{-1}}{-D^{-1}CM \space\space D^{-1}(I+CMBD^{-1})} \\ \\ M &= (A-BD^{-1}C)^{-1} \end{aligned}$$
                - Note, the $M^{-1}$ is known as the **Schur Complement**.
                
            - Then we have:
            
                $$\begin{aligned} \Lambda_{aa} &= (\Sigma_{aa} - \Sigma_{ab}\Sigma_{bb}^{-1}\Sigma_{ba})^{-1} \\ \Lambda_{ab} &= -(\Sigma_{aa} - \Sigma_{ab}\Sigma_{bb}^{-1}\Sigma_{ba})^{-1}\Sigma_{ab}\Sigma_{bb}^{-1} \end{aligned}$$
            - Thus we obtain:
            
                $$\begin{aligned} \Sigma_{a\vert b} &= \Sigma_{aa} - \Sigma_{ab}\Sigma_{bb}^{-1}\Sigma_{ba} \\ \mu_{a\vert b} &= \boldsymbol{\mu}_a + \Sigma_{ab}\Sigma_{bb}^{-1}(\boldsymbol{x}_b-\boldsymbol{\mu}_b) \end{aligned}$$
                
                - We can see that:
                    - $\Sigma_{a\vert b}$ is independent of $\boldsymbol{x}_a$;
                    - and $\boldsymbol{\mu}_{a\vert b}$ is a linear function of $\boldsymbol{\mu}_b$.


## Marginal Gaussian Distribution

$$\begin{aligned} p(\boldsymbol{x}_a) = \int p(\boldsymbol{x}_a, \boldsymbol{x}_b) d\boldsymbol{x}_b \end{aligned}$$


- According the partition form of the joint distribution $p(\boldsymbol{x}_a, \boldsymbol{x}_b)$, we can see:
    
    - The terms about $\boldsymbol{x}_b$:
    
        $$\begin{aligned}  -\frac 12 \boldsymbol{x}_b^T\Lambda_{bb}\boldsymbol{x}_b + \boldsymbol{x}_b^T(\Lambda_{bb}\boldsymbol{\mu}_b - \Lambda_{ba}(\boldsymbol{x}_a-\boldsymbol{\mu}_a))   \end{aligned}$$
        
        - because:
            
            $$\begin{aligned} -\frac 12 (\boldsymbol{x}_b - \tilde{\boldsymbol{\mu}}_b)^T\Lambda_{bb}(\boldsymbol{x}_b - \tilde{\boldsymbol{\mu}}_b) = -\frac 12 \boldsymbol{x}_b^T\Lambda_{bb}\boldsymbol{x}_b + \boldsymbol{x}_b^T\Lambda_{bb}\tilde{\boldsymbol{\mu}}_b -\frac 12 \tilde{\boldsymbol{\mu}}_b^T\Lambda_{bb} \tilde{\boldsymbol{\mu}}_b\end{aligned}$$
            
        - so to let the integrating be easily performed, we need the addtional term $-\frac 12 \tilde{\boldsymbol{\mu}}_b^T\Lambda_{bb}$, and $\tilde{\boldsymbol{\mu}}_b$ can be obtained by:
        
            $$\begin{aligned} \tilde{\boldsymbol{\mu}}_b &= \Lambda_{bb}^{-1}(\Lambda_{bb}\boldsymbol{\mu}_b - \Lambda_{ba}(\boldsymbol{x}_a-\boldsymbol{\mu}_a)) \end{aligned}$$
        
        - then:
            
            $$\begin{aligned} -\frac 12 \tilde{\boldsymbol{\mu}}_b^T\Lambda_{bb}\tilde{\boldsymbol{\mu}}_b = - \frac 12 (\Lambda_{bb}\boldsymbol{\mu}_b - \Lambda_{ba}(\boldsymbol{x}_a-\boldsymbol{\mu}_a))^T\Lambda_{bb}^{-1}(\Lambda_{bb}\boldsymbol{\mu}_b - \Lambda_{ba}(\boldsymbol{x}_a-\boldsymbol{\mu}_a))  \end{aligned}$$
            
    - Then the $p(\boldsymbol{x}_a)$ can be obtained by :
        
        $$\begin{aligned} -\frac 12 \boldsymbol{x}_a^T\Lambda_{aa}\boldsymbol{x}_a + \boldsymbol{x}_a^T(\Lambda_{aa}\boldsymbol{\mu}_a + \Lambda_{ab}\boldsymbol{\mu}_b)) + \frac 12 (\Lambda_{bb}\boldsymbol{\mu}_b - \Lambda_{ba}(\boldsymbol{x}_a-\boldsymbol{\mu}_a))^T\Lambda_{bb}^{-1}(\Lambda_{bb}\boldsymbol{\mu}_b - \Lambda_{ba}(\boldsymbol{x}_a-\boldsymbol{\mu}_a)) \\ = -\frac 12 \boldsymbol{x}_a^T(\Lambda_{aa} - \Lambda_{ab}\Lambda_{bb}^{-1}\Lambda_{ba})\boldsymbol{x}_a + \boldsymbol{x}_a^T(\Lambda_{aa}-\Lambda_{ab}\Lambda_{bb}^{-1}\Lambda_{ba})\boldsymbol{\mu}_a \end{aligned}$$

    - Thus,
        - The covariance matrix of $p(\boldsymbol{x}_a)$ is given by
            
            $$\begin{aligned} \mathrm{cov}[\boldsymbol{x}_a] &= (\Lambda_{aa}-\Lambda_{ab}\Lambda_{bb}^{-1}\Lambda_{ba})^{-1} \\ &= \Sigma_{aa} \end{aligned}$$
            
        - The mean of the $p(\boldsymbol{x}_a)$ is still $\boldsymbol{\mu}_a$
            
            $$\begin{aligned} \mathbb{E}[\boldsymbol{x}_a] = \boldsymbol{\mu}_a \end{aligned}$$

