---
title: Some Calculus Concept
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Basic Concept]
tags: []
math: true
mermaid: true
---

#### 二重积分变量代换公式

  $$\begin{aligned} \int\int_D f(x,y)dxdy = \int\int_D f(x(u,v), y(u,v))\left\vert \frac{\partial(x,y)}{\partial(u,v)}\right\vert du,dv \end{aligned}$$

#### 斯特林公式

  $$\begin{aligned} n! \approx \sqrt{2\pi n}\, \left(\frac{n}{e}\right)^{n} \end{aligned}$$



#### Beta Function

- 第一类欧拉积分

  $$\begin{aligned} {\displaystyle \mathrm {\mathrm {B} } (x,y)=\int _{0}^{1}t^{x-1}(1-t)^{y-1}\,\mathrm {d} t\!} \end{aligned}$$

- 递推公式

  $$B(x,y) = \frac {y-1}{x+y-1}B(x,y-1), x>0, y>1$$

- Beta函数性质

  $$\begin{aligned} \mathrm{B} (x,y) &=\mathrm{B} (y,x) \\ \mathrm {B} (x,y) &= 2\int_{0}^{\frac {\pi }{2}}(\sin \theta )^{2x-1}(\cos \theta )^{2y-1}\,\mathrm {d} \theta ,\qquad {\textrm {Re}}(x)>0,\ {\textrm {Re}}(y)>0\! \\ \mathrm {B} (x,y) &= \int_{0}^{\infty }{\dfrac {t^{x-1}}{(1+t)^{x+y}}}\,\mathrm {d} t,\qquad {\textrm {Re}}(x)>0,\ {\textrm {Re}}(y)>0\! \\ \mathrm{B} (x,y)&=\sum_{n=0}^{\infty }\dfrac{n-y \choose n}{x+n}\! \\ \mathrm{B} (x,y)&=\prod_{n=0}^{\infty }\left(1+{\dfrac  {xy}{n(x+y+n)}}\right)^{-1} \! \\ \mathrm{B} (x,y)\cdot \mathrm{B} (x+y,1-y)&={\dfrac  {\pi }{x\sin(\pi y)}} \! \\ \mathrm{B}(x,y)&={\dfrac{1}{y}}\sum_{n=0}^{\infty }(-1)^{n}{\dfrac{y^{n+1}}{n!(x+n)}}\! \end{aligned}$$

#### Gamma Function

- 第二类欧拉积分

- 伽马函数是阶乘函数在实数与复数域上的扩展

  - 如果$n$为正整数：

    $$\Gamma(n) = (n-1)!$$

  - 如果$z$为实数部分为正的复数

    $$\begin{aligned} \Gamma(z)=\int_{0}^{\infty}\frac{t^{z-1}}{\mathrm{e}^t}\rm{d}t \end{aligned}$$

- Gamma函数的递推公式

  $$\Gamma(n+1) = n\Gamma(n)$$

#### Beta Function and Gamma Function
$$\mathrm{B} (x,y)={\frac  {\Gamma (x)\,\Gamma (y)}{\Gamma (x+y)}}$$

- 证明：

  $${\displaystyle \Gamma (x)\Gamma (y)=\int _{0}^{\infty }\ e^{-u}u^{x-1}\,\mathrm {d} u\int _{0}^{\infty }\ e^{-v}v^{y-1}\,\mathrm {d} v\!}$$

  令$u=a^2,v=b^2$

  $${\displaystyle {\begin{aligned}\Gamma (x)\Gamma (y)&{}=4\int _{0}^{\infty }\ e^{-a^{2}}a^{2x-1}\mathrm {d} a\int _{0}^{\infty }\ e^{-b^{2}}b^{2y-1}\,\mathrm {d} b\\&{}=\int _{-\infty }^{\infty }\ \int _{-\infty }^{\infty }\ e^{-(a^{2}+b^{2})}|a|^{2x-1}|b|^{2y-1}\,\mathrm {d} a\,\mathrm {d} b \end{aligned}}\!}$$

  转换为极坐标系变量

  $${\displaystyle {\begin{aligned}\Gamma (x)\Gamma (y)&{}=\int _{0}^{2\pi }\ \int _{0}^{\infty }\ e^{-r^{2}}|r\cos \theta |^{2x-1}|r\sin \theta |^{2y-1}r\,\mathrm {d} r\,\mathrm {d} \theta \\&{}=\int _{0}^{\infty }\ e^{-r^{2}}r^{2x+2y-2}r\,\mathrm {d} r\int _{0}^{2\pi }\ |(\cos \theta )^{2x-1}(\sin \theta )^{2y-1}|\,\mathrm {d} \theta \\&{}={\frac {1}{2}}{\color {red}{\int _{0}^{\infty }\ e^{-r^{2}}r^{2(x+y-1)}\,\mathrm {d} (r^{2})}}\,4\int _{0}^{\frac {\pi }{2}}\ (\cos \theta )^{2x-1}(\sin \theta )^{2y-1}\,\mathrm {d} \theta \\&{}={\color {red}{\Gamma (x+y)}}\,2\int _{0}^{\frac {\pi }{2}}\ (\cos \theta )^{2x-1}(\sin \theta )^{2y-1}\,\mathrm {d} \theta \\&{}=\Gamma (x+y)\mathrm {B} (x,y)\end{aligned}}}$$

- 多变量Beta函数

  $${\displaystyle \mathrm {B} (\alpha _{1},\alpha _{2},\ldots \alpha _{n})={\frac {\Gamma (\alpha _{1})\,\Gamma (\alpha _{2})\cdots \Gamma (\alpha _{n})}{\Gamma (\alpha _{1}+\alpha _{2}+\cdots +\alpha _{n})}}}$$

#### Jensen不等式

  $$\begin{aligned} \frac {\sum p_if(x_i)}{\sum p_i} \le f\left(\frac {\sum p_ix_i}{\sum p_i}\right) \end{aligned}$$

- $f(x)$在某区间上是凸函数，$x_i$是该区间上任意点、$p_i$是正数

#### 向量/矩阵常用求导公式

[维基百科](https://en.wikipedia.org/wiki/Matrix_calculus#Identities)









