---
title: Inner Product Space (3) Orthogonal Complement
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Orthogonal Complement]
math: true
mermaid: true
---


## 正交补

**正交补（orthogonal complement）**	设$U$是$V$的子集，则$U$的正交补是由$V$中与$U$的每个向量都正交的那些向量组成的集合：

$$U^{\perp} = \{v\in V \space \vert \space \forall u\in U, \langle u,v \rangle = 0 \}$$

**正交补的性质**

- 若$U$是$V$的子集
  - 则$U^{\perp}$必定是$V$的子空间
  - $U\cap U^{\perp} = \{0\}$
- 若$U、W$都是$V$的子集，且$U\sub W$，则$W^{\perp} \sub U^{\perp}$
- 若$U$是$V$的子空间
  - 则必有：$V = U \oplus U^{\perp}$，假设$V$是有限维的
  - $(U^{\perp})^{\perp} = U$
  - $\dim U^{\perp} = \dim V - \dim U$
- $\{0\}^{\perp} = V$、$\{V\}^{\perp} = \{0\}$



**正交投影（orthogonal projection）**	设$U$是$V$的有限维子空间，对于$v\in V、u\in U、w\in U^{\perp}$，且满足$v=u+w$。那么定义$V$到$U$的正交投影为算子$P_U \in \mathcal{L}(V)$：

$$P_Uv= u$$

**正交投影的性质**	设$U$是$V$的有限维子空间且$v\in V$，则：

- $\forall u \in U,P_Uu = u$
- $\forall w\in U^{\perp},P_Uw = 0$
- $\mathrm{range} \space P_U = U、\mathrm{null} \space P_U = U^{\perp} $
- $v - P_Uv\in U^{\perp}$
- $P_U^2 = P_U$
  - 令$v\in V、u\in U、w\in U^{\perp}$，且$v = u+w$，$(P_U^2)v = P_Uu = u = P_Uv$
- $\vert\vert P_Uv \vert\vert \le \vert\vert v \vert\vert$
- 对$U$的每个规范正交基$e_1,\cdots,e_m$，均有：$P_Uv = \langle v, e_1 \rangle e_1 + \cdots + \langle v,e_m \rangle e_m $



**极小化问题**	设$U$是$V$的有限维子空间，$v\in V$且$u\in U$，则：

$$\vert\vert v - P_Uv \vert\vert \le \vert\vert v - u \vert\vert$$

- 当且仅当$u = P_Uv$时等号成立

应用：求一个次数不超过5的实系数多项式$p(x)$，使其在区间$[-\pi,\pi]$上尽量好地逼近$\sin x$，即使得：

$$\begin{aligned} \min \int_{-\pi}^\pi \vert \sin x - p(x) \vert ^2dx \end{aligned}$$

- 解：

  $$\begin{aligned} &设V_R[-\pi,\pi]表示由[-\pi,\pi]上的实值连续函数构成的内积空间，并定义内积为：\\ & \qquad  \lang f,g \rang = \int_{-\pi}^\pi f(x)g(x)dx \\ & 设v\in V_R[-\pi,\pi],v(x)=\sin x，并令U表示次数不超过5的实系数多项式构成的V_R[-\pi,\pi]的子空间  \\ &那么求解原问题，等价于：\\ &\qquad u_0 = \min_u \vert\vert v-u \vert\vert,\qquad u\in U \\ &u_0(x)就是最优解 \\ &根据正交投影原理，u_0 = P_Uv \\ &而P_Uv = \langle v, e_1 \rangle e_1 + \cdots + \langle v,e_m \rangle e_m \\ & 因此只要得到U的规范正交基，再根据定义的内积函数，那么就能准确得出u_0 \end{aligned}$$

- `julia` 代码实现：

  ```julia
  using SymPy
  """
  格拉姆-施密特正交方法计算规范正交基
  """
  function gram_schmidt_method(basis::Array, var)
      n = length(basis)
      
      e_1 = basis[1] / sqrt(inner_product(basis[1],basis[1],var))
      orth_basis = [e_1]
      for j =2:n
          v_j = basis[j]
          temp =  deepcopy(v_j)
          for i =1:j-1
              temp -= inner_product(v_j,orth_basis[i], var) * orth_basis[i]
          end
          e_j = temp/sqrt(inner_product(temp,temp,var))
          orth_basis = [orth_basis;e_j]
      end
      return orth_basis
  end
  
  """
  定义[-π,π]上的内积函数
  """
  function inner_product(fx,gx,var)
      # 注意：如果代入无理数pi，那么计算时间将无穷长，因此这里截取近似
      the_pi = 3.1415926535897
      F = integrate(fx*gx,var)    # 计算不定积分
      return F(the_pi) - F(-the_pi)
  end
  
  @vars x
  the_basis = [1,x,x^2,x^3,x^4,x^5]
  # 1. 计算出预设空间U的规范正交基
  the_orth_basis = gram_schmidt_method(the_basis, x)
  println(the_orth_basis)
  
  # 2. 计算v=sin(x)在U上的正交投影u
  v = sin(x)
  temp = [0*x]
  for i =1:length(the_orth_basis)
      temp[1] += inner_product(v, the_orth_basis[i], x)*the_orth_basis[i]
  end
  u = temp[1]    # 因为pi取了近似值，因此这里u(x)是一个非常优的近似结果
  println(u)    # 0.00564311797634702*x^5 - 0.155271410633431*x^3 + 0.98786213557468*x
  ```

- 对比`sin(x)`与上面求解的`u(x)`，可以看到在$[-\pi,\pi]$上都非常接近：

  ![image-20201206211643326](/assets/images/sinx最优5次多项式逼近.png)

- 对比$\sin(x)$在$x=0$的5次泰勒多项式$x-\frac {1}{3!}x^3 + \frac {1}{5!}x^5$：

  ![image-20201207090441302](/assets/images/sinx的5次泰勒多项式逼近.png)



