---
title: Inner Product Space (2) Orthogonal  Basis
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2021-02-20 08:00:00 +0800
categories: [Mathematics, Algebra, Inner Product Space]
tags: [Orthogonal Basis]
math: true
mermaid: true
---

## 规范正交基 (canonical orthonormal basis)

**规范正交基**	$V$上的规范正交基$e_1,\cdots,e_n$，是满足两两正交，且范数为1的线性无关向量组

$$\forall v \in V,均有：\qquad v = \langle v,e_1 \rangle e_1 + \cdots +\langle v,e_n \rangle e_n$$

**格拉姆-施密特过程**	设$v_1,\cdots,v_m$是$V$中的线性无关向量组。设$e_1 = v_1/\vert\vert v_1 \vert\vert$，那么对于$i=1,2,\cdots,m$，定义$e_j$为：

$$\begin{aligned} e_j = \frac {v_j- \langle v_1,e_1 \rangle e_1 - \cdots - \langle v_j,e_{j-1} \rangle e_{j-1}}{\vert\vert v_j- \langle v_1,e_1 \rangle e_1 - \cdots - \langle v_j,e_{j-1} \rangle e_{j-1}\vert \vert} \end{aligned}$$

则$e_1,e_2,\cdots,e_m$是$V$中的规范正交向量组，且对$j=1,2,\cdots,j$：

$$\mathrm{span} \space (v_1,\cdots,v_j) = \mathrm{span} \space (e_1,\cdots,e_j)$$

- 应用：在$\mathcal{P}_2(R)$上定义内积$\langle p,q\rangle=\int_{-1}^1 p(x)q(x)dx$，那么根据基$1,x,x^2$计算规范正交基

  $$\begin{aligned} e_1 &= \frac {1}{\vert\vert1 \vert\vert } = \frac {1}{\sqrt{\int_{-1}^1 1^2dx }}=\sqrt{\frac 12} \\ e_2&=\frac {x-\langle x,e_1\rangle e_1}{\vert\vert x-\langle x,e_1\rangle e_1 \vert \vert} = \frac {x-\sqrt{\frac 12}(\int_{-1}^1x\sqrt{\frac 12}dx)}{\vert\vert ... \vert\vert} = \frac {x}{\vert\vert x\vert\vert} = \frac {x}{\sqrt{\int_{-1}^1x^2dx}} = \sqrt{\frac 32}x \\ e_3 &= \frac {x^2-\langle x^2,e_2\rangle - \langle x^2, e_1 \rangle}{\vert\vert ... \vert\vert} =  ... = \sqrt{\frac {45}{8}}(x^2 -\frac 13) \end{aligned}$$

- `julia`代码实现：

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
  定义内积函数
  """
  function inner_product(fx,gx,var)
      F = integrate(fx*gx,var)    # 计算不定积分
      return F(1) - F(-1)
  end
  
  @vars x
  the_basis = [1,x,x^2]
  the_orth_basis = gram_schmidt_method(the_basis, x)
  println(the_orth_basis)
  # 执行结果：Sym[sqrt(2)/2, sqrt(6)*x/2, 3*sqrt(10)*(x^2 - 1/3)/4]
  
  println(inner_product(the_orth_basis[1],the_orth_basis[2],x))    # result: 0
  println(inner_product(the_orth_basis[2],the_orth_basis[3],x))    # result: 0
  println(inner_product(the_orth_basis[3],the_orth_basis[3],x))    # result: 1
  
  ```

  

**规范正交基的上三角矩阵**	设$T\in \mathcal{L}(V)$，如果$T$关于$V$的某个基具有上三角矩阵，那么$T$关于$V$的某个规范正交基也具有上三角矩阵

**舒尔定理**	设$V$是有限维的复向量空间且$T\in \mathcal{L}(V)$，则$T$关于$V$的某个鬼反正交集具有上三角矩阵

**里斯表示定理**	设$V$是有限维的且$\varphi$是$V$上的线性泛函，则存在唯一的向量$u\in V$使得对每个$v\in V$都有$\varphi(v)=\langle v,u \rangle$

- 证明：

  $$\begin{aligned} 存在性：&设e_1,\cdots,e_n是V的规范正交基，那么\forall v\in V \\ &\qquad \begin{aligned} \varphi(v) &= \varphi(\langle v,e_1 \rangle e_1 + \cdots +\langle v,e_n \rangle e_n) \\ &= \langle v,e_1 \rangle \varphi(e_1) + \cdots +\langle v,e_n \rangle \varphi(e_n) \\&= \langle v,\overline{ \varphi(e_1)}e_1 \rangle  + \cdots +\langle v,\overline{ \varphi(e_n)}e_n \rangle \\ &= \langle v,\overline{ \varphi(e_1)}e_1   + \cdots +\overline{ \varphi(e_n)}e_n \rangle \end{aligned} \\ &所以令u = \overline{ \varphi(e_1)}e_1   + \cdots +\overline{ \varphi(e_n)}e_n，则\forall v\in V，都有\varphi(v) = \langle v,u \rangle，得证存在性 \\ \\ 唯一性：& 设u_1,u_2\in V，且\forall v\in V都有\\ &\qquad \varphi(v) = \langle v,u_1 \rangle =\langle v,u_2 \rangle \\ &则有：\\ &\qquad 0 = \langle v,u_1 \rangle - \langle v,u_2 \rangle = \langle v,u_1-u_2  \rangle\\ &因为对所有v\in V都成立，那么令v=u_1 - u_2，可知u_1=u_2，得证唯一性  \end{aligned}$$

- 且注意结合证明过程，唯一存在的$u$是由$\varphi$唯一确定的，与规范正交基的选取是无关的





