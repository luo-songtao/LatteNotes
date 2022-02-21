---
title: Proximal Gradient Method
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-20 08:00:00 +0800
categories: [Optimization]
tags: [Optimization, Gradient Method]
math: true
mermaid: true

---


## Proximal Gradient Method

#### Proximal opeartor

- [Proximal Opeartor](https://en.wikipedia.org/wiki/Proximal_operator)

    $${\displaystyle \operatorname {prox}_{f}(v)=\arg \min _{x\in {\mathcal {X}}}\left(f(x)+{\frac {1}{2}}\|x-v\|_{2}^{2}\right).}$$
    
- Compute the Proximal Opeartor
    - Let
        
        $$g(x) = f(x) + {\frac {1}{2}}\|x-v\|_{2}^{2}$$

    - Because $f$ is a covex , and also ${\frac {1}{2}}\|x-v\|_{2}^{2}$, then this is true that $0\in \partial g(x)$, $\partial g(x)$ is the subgradient of $g(x)$. Then we have:

        $$\begin{aligned} 0 \in \partial g(x) &\Longleftrightarrow 0 \in \partial f(x) + x-v \end{aligned}$$
    
    - Then we need to find out what conditions $v$ must satisfy to make $\partial f(x) + x-v=0$, and what value should $x$ take.
        
    - Example:
         
        - if $f(x)$ is non-differentiable, for example $f(\boldsymbol{x}) = \sum_i \vert x_i\vert$
            
            $$\begin{aligned} \frac {\partial f(\boldsymbol{x})}{\partial x_i} = \left\{ \begin{aligned}&1,\qquad &\mathrm{if} \space x_i >0 \\ &-1, \qquad &\mathrm{if} \space x_i <0 \\ &[-1, +1],\qquad &\mathrm{if} \space x_i = 0 \end{aligned}\right. \end{aligned}$$
            
           - then let $\frac {\partial f(\boldsymbol{x})}{\partial x_i} + x_i-v_i = 0$, we have:
               
               $$\begin{aligned} x_i &= \left\{ \begin{aligned}&v_i - 1, \qquad &v_i > 1 \\ & v_i + 1, \qquad &v_i < -1 \\ & 0 ,\qquad &v_i\in [-1,1] \end{aligned}\right . \\ &= \mathrm{sgn}(v_i)*\max(0,|v_i|-1) \end{aligned}$$
        
        - if $f(x)$ is differentiable, for example $f(\boldsymbol{x}) =\boldsymbol{x}^T\boldsymbol{x}$, it is easy to find the result.


#### Proximal Gradient method

- $f: R^n \rightarrow R$ is a differentiable convex function , $h: R^n\rightarrow R$ is a convex function (maybe non-differentiable), $X$ is a closed convex set.
    
    $$\begin{aligned} \mathrm{minimize}& \space f(x) + h(x) \\ \mathrm{Subject\space to}&\space x \in X \end{aligned}$$

- Proximal Gradient Descent algorithm combines ideas from the gradient projection method and the proximal method. It replaces $f$ with a linear approximation in the proximal minimization, i.e.,
    
    $$\begin{aligned} x_{k+1} \in \arg \min_{x\in X} \left( \nabla f(x_k)^T(x-x_k) + h(x) + \frac {1}{2\alpha_k}\vert\vert x-x_k\vert\vert^2 \right) \end{aligned}$$

    - $\alpha_k > 0$ is a parameter, we will see that it can be seen as stepsize. And note that there is an alternative/equivalent way to write this algorithm in the form:
    
        $$\begin{aligned} z_k &= x_k - \alpha_k \nabla f(x_k) \\ x_{k+1} &\in \arg\min_{x\in X} \left( h(x)+\frac {1}{2\alpha_k}\vert\vert x-z_k\vert\vert^2 \right) \end{aligned}$$
        
        - This can be verified by expanding the quadratic:
            
            $$\begin{aligned} \| x-z_k\|_2 = \| x-x_k + \alpha_k\nabla f(x_k)\|^2 \end{aligned}$$

#### Lasso regression problem

- Using Proximal Gradient method to optimal (Note we write the $k$ at the top-right in this problem):
    
    $$\begin{aligned} \min \space \frac 12 \sum_{i=1}^N (y_i - \boldsymbol{w}^T\phi(\boldsymbol{x}_i))^2 + \eta \sum_{j=1}^M \vert w_j\vert \end{aligned}$$

    - Let 
        
        $$\begin{aligned} E(\boldsymbol{w}) &= \frac {1}{2} \sum_{i=1}^N (y_i - \boldsymbol{w}^T\phi(\boldsymbol{x}_i))^2 \\  p(\boldsymbol{w}) &= \eta \sum_{j=1}^M \vert w_j\vert \end{aligned} $$
    
    - So we can write this problem in this way:
        
        $$\begin{aligned} \boldsymbol{w}^{k+1} \in \arg \min_{\boldsymbol{w}} \left(E(\boldsymbol{w}) + p(\boldsymbol{w})  + \frac 1{2\alpha^k} \| \boldsymbol{w}-\boldsymbol{w}^k \|^2 \right) \end{aligned}$$
    
- Then according to Proximal Gradient method, we have:
    
    $$\begin{aligned} \boldsymbol{z}^k &= \boldsymbol{w}^k - \alpha^k \nabla E(\boldsymbol{w}^k) \\ \boldsymbol{w}^{k+1} &\in \arg \min_{\boldsymbol{w}} \left(p(\boldsymbol{w})  + \frac 1{2\alpha^k} \| \boldsymbol{w}-\boldsymbol{z}^k \|^2 \right) \\ w_j^{k+1} &= \left\{ \begin{aligned} &0\qquad &\vert z_j^k \vert \le \eta\alpha^k \\  &z_j^k - \mathrm{sgn}(z_j^k)\alpha^k \eta \qquad &\vert z_j^k \vert \gt \eta\alpha^k \end{aligned} \right. \\ &= \mathrm{sgn}(z_j^k) \max(0, \vert z_j^k \vert - \eta\alpha^k) \end{aligned}$$


#### Elastic Net Regression Problem

$$\begin{aligned} \min \space \frac 12 \sum_{i=1}^N (y_i - \boldsymbol{w}^T\phi(\boldsymbol{x}_i))^2 + \eta \left((1-\gamma)\| \boldsymbol{w} \|_1 + \gamma \| \boldsymbol{w} \|_2^2 \right)\end{aligned}$$

- For $0\le \gamma \le 1$ the penalty term $p(\boldsymbol{w}) = \eta \left((1-\gamma)\| \boldsymbol{w} \|_1 + \gamma \| \boldsymbol{w} \|_2^2 \right)$is now strictly convex, and hence the minimization problem now admits a unique solution. 

- Then also, according to Proximal Gradient method, we have:
    
    $$\begin{aligned} \boldsymbol{z}^k &= \boldsymbol{w}^k - \alpha^k \nabla E(\boldsymbol{w}^k) \\ \boldsymbol{w}^{k+1} &\in \arg \min_{\boldsymbol{w}} \left(p(\boldsymbol{w})  + \frac 1{2\alpha^k} \| \boldsymbol{w}-\boldsymbol{z}^k \|^2 \right) \end{aligned}$$
    
    - The result is:
        
        $$\begin{aligned}  w_j^{k+1} &= \left\{ \begin{aligned} &0 \qquad &\vert z_j^k \vert \le \eta\alpha^k(1-\gamma) \\  &\frac{z_j^k - \mathrm{sgn}(z_j^k)\eta\alpha^k(1-\gamma)}{1+\eta\alpha^k\gamma} \qquad &\vert z_j^k \vert \gt \eta\alpha^k(1-\gamma) \end{aligned} \right. \\ &= \mathrm{sgn}(z_j^k) \max\left(0, \frac{|z_j^k| - \eta\alpha^k(1-\gamma)}{1+\eta\alpha^k\gamma} \right)  \end{aligned}$$

    