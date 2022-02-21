---
title: Fourier_Series_and_Fourier_Transform
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics]
tags: [Fourier Series, Fourier Transform]
math: true
mermaid: true
---


### 正交函数列

**（正交函数列）**	设$g_n(x)$是定义在$[a,b]$上的一列函数$(n=0,1,2,\cdots)$，若对任意的$m$, $n$，有$g_m(x)g_n(x)$在$[a,b]$上可积，且有：

$$\begin{aligned} \int_a^b g_m(x)g_n(x) dx = \left\{ \begin{matrix} &0, \qquad &m\neq n \\ &\int_a^b g_n^2(x)dx >0, \qquad &m=n \end{matrix} \right. \end{aligned}$$

则称$\{g_n(x)\}$是区间$[a,b]$上的**正交函数列**

特别地，当${g_n(x)}$是$n$次多项式时，则称$\{g_n(x)\}$是区间$[a,b]$上的**正交多项式列**



证明：函数$\{1,\sin x, \cos x, \sin 2x, \cos 2x, \cdots, \sin nx, \cos nx, \cdots \}$是任意一个长度为$2\pi$的区间上的正交函数列

$$\begin{aligned} 证：& 考虑区间[-\pi,\pi]上的积分 \\ & 记1 = \cos 0x，则对任何m=1,2,\cdots和n=0,1,2,\cdots，由于\sin mx \cos nx 是奇函数，则有：\\ & \int_{-\pi}^\pi \sin mx \cos nx dx = 0  \\ & 其次，对任何m=1,2,\cdots和n=1,2,\cdots，由于\sin mx \sin nx 是偶函数，则有：\\ & \begin{aligned}\int_{-\pi}^\pi \sin mx \sin nx dx &= 2\int_0^\pi \sin mx \sin nx dx \\ &= \int_0^\pi[\cos(m-n)x-\cos(m+n)x]dx  \\&= \left\{ \begin{aligned}&\left.\left[\frac{\sin(m-n)x}{m-n}-\frac {\sin(m+n)x}{m+n}\right]\right\vert_0^\pi , &m\neq n \\ & \left.(x-\frac{\sin 2mx}{2m})\right\vert_0^\pi, &m=n\end{aligned} \right. \\&= \left\{ \begin{aligned}&0 , &m\neq n \\ & \pi, &m=n\end{aligned} \right. \end{aligned} \\ &同理，可证，对任何m=0,1,2,\cdots和n=0,1,2,\cdots：\\ & \int_{-\pi}^\pi \cos mx \cos nx dx = \left\{ \begin{aligned}&0 , &m\neq n \\ & \pi, &m=n\neq0 \\ & 2\pi, & m=n=0 \end{aligned} \right. \\ \\ & 则根据定义，这组函数的确是区间[-\pi,\pi]上的正交函数列 \\&且由于它们有公共周期2\pi, 因此这组函数是任意一个长度为2\pi的区间上的正交函数列 \end{aligned}$$



### 傅里叶级数

函数$f(x)$的傅里叶级数展开，是形如：

$$\begin{aligned} f(x) \sim  \frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nx + b_n \sin nx) \end{aligned}$$

- 其中$a_0、a_n、b_n,(n=1,2,3,\cdots)$为常数

对比Taylor级数展开：

$$\begin{aligned} f(x) = \sum_{i=0}^{\infty} \frac {f^(n)(x_0)}{n!}(x-x_0)^n \end{aligned}$$

Taylor级数展开仅在点$x_0$附近与$f(x)$吻合比较理想，只有局部性质，且通常使用Taylor级数的部分和来近似，此时还要求函数有至少$n$阶导数；而傅里叶级数展开在整个区间上对$f(x)$吻合都比较理想，并且其部分和近似不需要Taylor级数那样严苛的条件



### 周期为$2\pi$的函数的Fourier展开

Fourier展开的基础是三角函数的正交性，即前面正面的正交函数列：$\{1,\sin x, \cos x, \sin 2x, \cos 2x, \cdots, \sin nx, \cos nx, \cdots \}$

令函数$f(x)$是定义在整个实数范围上的以$2\pi$为周期的周期函数

首先，若假定$f(x)$可以表示为：

$$\begin{aligned} f(x) = \frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nx + b_n \sin nx) \end{aligned}$$

- 确定系数$a_n$，对上式两边同时乘以$\cos mx,(m=0,1,2,3,\cdots)$，然后对等是两边分别在$[-\pi, \pi]$上积分，假定右边的三角级数可以逐项积分，得：

  $$\begin{aligned} \int_{-\pi}^\pi f(x)\cos mx dx &= \int_{-\pi}^\pi\left[\frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nx + b_n \sin nx)\right] \cos mx dx \\ &=  \frac {a_0}{2}\int_{-\pi}^\pi \cos mx \cos 0x dx + \sum_{n=1}^\infty a_n \int_{-\pi}^\pi \cos mx \cos nx dx + \sum_{n=1}^\infty b_n \int_{-\pi}^\pi \cos mx \sin nx dx \\ &=  \left\{ \begin{aligned}&a_0\pi , \qquad m=0 \\ & a_n\pi, \qquad m>0 ,n=1,2,3,\cdots \end{aligned} \right. \\ &= a_m \pi, \qquad m=0,1,2,\cdots \\ \Longrightarrow  a_n &= \frac 1{\pi}\int_{-\pi}^\pi f(x)\cos nx dx, \qquad n=0,1,2,\cdots \end{aligned} $$

- 同理，同时乘以$\sin mx,(m=1,2,3,\cdots)$，然后对等是两边分别在$[-\pi, \pi]$上积分，若可确定系数$b_n$：

  $$\begin{aligned} b_n = \frac 1{\pi}\int_{-\pi}^\pi f(x)\sin nx dx, \qquad n=1,2,3,\cdots \end{aligned}$$



**Euler-Fourier公式**	上面结论所得的$a_n、b_n$的等式，称为**Euler-Fourier公式**，即：

$$\begin{aligned} a_n &= \frac 1{\pi}\int_{-\pi}^\pi f(x)\cos nx dx, \qquad n=0,1,2,\cdots \\  b_n &= \frac 1{\pi}\int_{-\pi}^\pi f(x)\sin nx dx, \qquad n=1,2,3,\cdots\end{aligned}$$

则定义在整个实数范围上的以$2\pi$为周期的周期函数$f(x)$，的傅里叶级数为：

$$\begin{aligned} f(x) \sim \frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nx + b_n \sin nx) \end{aligned}$$

- $a_n、b_n$称为$f(x)$的傅里叶系数



**正弦级数**	若$f(x)$同时还是奇函数，那么显然可知$a_n=0$，则：

$$\begin{aligned} f(x) \sim \sum_{n=1}^{\infty} b_n \sin nx \end{aligned}$$

形如该形式的三角级数，被称为正弦级数

**余弦级数**	若$f(x)$同时还是偶函数，那么显然可知$b_n=0$，则：

$$\begin{aligned} f(x) \sim \frac {a_0}{2} + \sum_{n=1}^{\infty} a_n\cos nx \end{aligned}$$

形如该形式的三角级数，被称为余弦级数



### 任意周期的函数的Fourier展开

若函数$f(x)$的周期为$2T$，那么作变换$x = \frac {T}{\pi}t$，则：

$$\varphi(t) = f(\frac {T}{\pi}t)=f(x)$$

是定义在实数域上的周期为$2\pi$的函数，则有：

$$\begin{aligned} \varphi(t) \sim \frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos nt + b_n \sin nt) \end{aligned}$$

将变量$x$代回，则有：

$$\begin{aligned} f(x) \sim \frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos \frac {n\pi}{T}x + b_n \sin \frac {n\pi}{T}x) \end{aligned}$$

对应的傅里叶系数分别为：

$$\begin{aligned} a_n &= \frac 1{\pi}\int_{-\pi}^\pi \varphi(t)\cos nt dt=\frac 1{T}\int_{-T}^T f(x)\cos \frac {n\pi}{T}x dx, \qquad n=0,1,2,\cdots \\  b_n &= \frac 1{\pi}\int_{-\pi}^\pi \varphi(t)\sin nt dt=\frac 1{T}\int_{-T}^T f(x)\sin \frac {n\pi}{T}x dx, \qquad n=1,2,3,\cdots\end{aligned}$$



### Fourier变换

**欧拉公式**	

$$\begin{aligned} e^{i\theta} = \cos \theta + i\sin \theta \end{aligned}$$

欧拉公式可以用来表示复数，如$z=e^{i\theta}$表示模为1的复数，代表着复平面上的单位圆上的点

根据欧拉公式可得：

$$\begin{aligned} \cos \theta &= \frac {e^{i\theta}+e^{-i\theta}}{2} \\ \sin\theta &= \frac {e^{i\theta}-e^{-i\theta}}{2i} = -\frac {i}{2}(e^{i\theta}-e^{-i\theta}) \end{aligned}$$

**Fourier级数的复数形式**	设$F_T(x)$是周期为$2T$的函数，令$w_n = \frac {n\pi}{T}$，并将上式代入$F_T(x)$的Fourier级数，可得：

$$\begin{aligned} f_T(x) \sim \frac {a_0}{2} + \sum_{n=1}^{\infty} (a_n\cos w_n x + b_n \sin w_n x) =\frac {a_0}{2} + \sum_{n=1}^{\infty}\left( \frac {a_n-ib_n}{2}e^{iw_nx} + \frac {a_n+ib_n}{2}e^{-iw_nx} \right) \end{aligned}$$

令$c_n = a_n-ib_n、c_{-n}=a_n+ib_n、(n=1,2,\cdots)$，$c_0=a_0$，即：

$$\begin{aligned} c_n = \frac {1}{T}\int_{-T}^Tf_T(t)\cos w_n t dt- \frac {1}{T}\int_{-T}^Tf_T(t)i\sin w_n t dt = \frac {1}{T}\int_{-T}^Tf_T(t)e^{-iw_nt}dt \qquad n=1,2,\cdots \end{aligned}$$

则得到：

$$\begin{aligned} f_T(x) \sim \frac {c_0}{2} + \frac 12\sum_{n=1}^{\infty}(c_ne^{iw_nx}+c_{-n}e^{-iw_nx}) = \frac 12\sum_{n=-\infty}^{+\infty}c_ne^{iw_nx} \end{aligned}$$

这被称为**Fourier级数的复数形式**，即：



现在将$c_n$的表达式代入，则$f_{T}(x)$的Fourier级数：

$$\begin{aligned} f_T(x) \sim \frac {1}{2T}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iw_nt}dt\right]e^{iw_nx} \end{aligned}$$

若记$\Delta w=w_n-w_{n-1} = \frac {\pi}{T}$，于是当$T\rightarrow +\infty$时，$\Delta w \rightarrow 0$，则有：

$$\begin{aligned} f(x) = \lim_{T\rightarrow +\infty} f_T(x) &\sim \lim_{T\rightarrow +\infty} \frac {1}{2T}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iw_nt}dt\right]e^{iw_nx} \\ &= \lim_{T\rightarrow +\infty} \frac {1}{2\pi}\frac{\pi}{T}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iw_nt}dt\right]e^{iw_nx} \\&= \lim_{\Delta w \rightarrow 0} \frac {1}{2\pi}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iw_nt}dt\right]e^{iw_nx}\Delta w \end{aligned}$$



因此，若把$\frac {1}{2\pi}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iw_nt}dt\right]e^{iw_nx}$看作关于$w$的函数，即：

$$\begin{aligned} \varphi_T(w) = \frac {1}{2\pi}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iwt}dt\right]e^{iwx}  \end{aligned}$$

那么前面定义的$f(x)$的公式，非常像Riemann和的形式，虽然它并不是，因为当$T\rightarrow +\infty$时：

$$\begin{aligned} \varphi_T(w) = \frac {1}{2\pi}\sum_{n=-\infty}^{+\infty}\left[\int_{-T}^Tf_T(t)e^{-iwt}dt\right]e^{iwx} \longrightarrow \frac {1}{2\pi}\sum_{n=-\infty}^{+\infty}\left[\int_{-\infty}^{+\infty}f(t)e^{-iwt}dt\right]e^{iwx} =\varphi(w) \end{aligned}$$

但是，如果将之看作一个极限近似形式，那么，则有：

$$\begin{aligned} f(x) \sim \frac {1}{2\pi}\int_{-\infty}^{+\infty}\left[\int_{-\infty}^{+\infty}f(t)e^{-iwt}dt\right]e^{iwx}dw \qquad w表示频率 \end{aligned}$$

其中的函数：

$$\begin{aligned} F(w) = \int_{-\infty}^{+\infty}f(x)e^{-iwx}dx \end{aligned}$$

即函数$f$的**Fourier变换**，是一个频域的曲线函数

**Fourier逆变换**	函数$f$的Fourier逆变换，为：

$$\begin{aligned} f(x) = \frac 1{2\pi} \int_{-\infty}^{+\infty}F(w)e^{iwx}dw \end{aligned}$$

可见$f(x)$和$F(w)$可以相互转换，代表着时域与频域的转换



### Fourier变换的性质

**线性性质**	设$c_1、c_2$是常数，若$f、g$的Fourier变换存在，则：

$$\begin{aligned} F[c_1f+c_2g] = c_1F[f]+c_2F[g] \end{aligned}$$

逆变换也是如此

**位移性质**	若函数$f$的Fourier变换存在，则：

$$F[f(x\pm x_0)](w) = F[f](w)e^{\pm iwx_0}$$

反之，若其$\hat f = F[f]$的Fourier逆变换存在，则：

$$F^{-1}[\hat f(w\pm w_0)](x) = F^{-1}[\hat f](x)e^{\mp iw_0x}$$

**时间尺度性**	

$$F[f(ax)]=\frac {1}{\vert a\vert}\hat f \left(\frac wa\right)$$

**频率尺度性**

$$F\left[\frac 1a f(\frac {x}{a})\right] = \hat f (aw)$$

**微分性质**

- 若函数$f(x)$在$(-\infty, \infty)$上有连续的导数，且$f(x)$与$f'(x)$在$(-\infty, \infty)$上绝对可积，若$\lim_{x\rightarrow \infty}f(x)=0$，则有：

  $$F[f'] = iw\cdot F(f)$$

- 若函数$f(x)$和$xf(x)$在$(-\infty, \infty)$上绝对可积，则：

  $$F[-ix\cdot f] = (F[f])'$$

**积分性质**	设函数$f(x)$和$\int_{-\infty}^xf(t)dt$在$(-\infty, \infty)$上绝对可积，则：

$$\begin{aligned}F\left[\int_{-\infty}^xf(t)dt \right] = \frac {1}{iw}F[f]\end{aligned}$$

**阅读**：[如何理解傅里叶变换公式？](https://www.zhihu.com/question/19714540)，[苗华栋](https://www.zhihu.com/people/miao-hua-dong-54)

### 卷积

设函数$f$和$g$在$(-\infty, +\infty)$上定义，且积分：

$$\begin{aligned} (f* g)(x) = \int_{-\infty}^{+\infty} f(t)g(x-t)dt \end{aligned}$$

存在，则称函数$(f*g)$为$f$和$g$的卷积（Convolution）

**阅读**：[如何通俗易懂地解释卷积？](https://www.zhihu.com/question/22298352)，知乎用户[palet](https://www.zhihu.com/people/dqw1973)的回答



**卷积定理（Convolution theorem/卷积的Fourier变换）**	设函数$f$和$g$在$(-\infty, +\infty)$上绝对可积，则有：

$$F[f*g] = F[f]\cdot F[g]$$