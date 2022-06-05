---
title: Graphical Models
author:
  name: luo-songtao
  link: https://github.com/luo-songtao
date: 2022-02-21 07:00:00 +0800
categories: [Machine Learning, Graphical Models]
tags: [DAG]
math: true
mermaid: true
---

# Graphical Models

## Directed Graphical Model

Also known as `Bayesian Networks`.

`Directed Acyclic Graphs (DAG)`: The directed graphs that we are considering are subject to an important restriction namely that there must be no directed cycles.

**D-Separation**: 

- We consider all posible paths from any Node in $B$ o any node in $B$. 

    Any such path is said to be `blocked` if it includes a node such that either 

    - The arrows on the path meet eigher `head-to-tail` or `tail-to-tail` at the node, and the node is in the set $C$
    - The arrows meet `head-to-head` at the node, and neither the node, nor any of its descendants, is in the set $C$.

- then we can have:

    $$A \perp\!\!\!\perp B \mid C$$

**Markov Blanket**:
- The set of nodes comprising the parents, the children and the co-parents is called the `Markov Blanket`. 
- We can think of the Markov Blanket of a node $x$ as being the minimal set of nodes that isolates $x$ from the rest of the Graph.


## Undirected Graphical Model

Also known as `Markov Network` or `Markov Random Field`.

### Conditional Independence Properties

If all paths pass through one or mode nodes in set $C$, the nall such paths are 'blocked' and so the conditional independence property holds.

$$A \perp\!\!\!\perp B \mid C$$

`Markov Blanket`: for an undirected graph, the Markov Blacket of a node $x$ consists of the neighbouring nodes.

### Factorization Properties

$$\begin{aligned} p(\boldsymbol{x}) = \frac 1Z \prod_{C} \psi_C(\boldsymbol{x}_C) \end{aligned}$$

- $C$ denotes a `clique`
- $\boldsymbol{x}_C$ denotes the set of variables in clique $C$.
- $\psi_C$: called the `potential functions`, it should be strictly positive.
- $Z$: called the `partition function`

    $$\begin{aligned} Z = \sum_{\boldsymbol{x}} \prod_{C} \psi_C(\boldsymbol{x}_C) \end{aligned}$$

We can use `Hammersley-Clifford` theorem to proof this.

Because we restricted to potential functions which are strictly positive it is convenient to express them as exponentials, so that:
    
$$\begin{aligned} \psi_C(\boldsymbol{x}_C) = \exp(-E(\boldsymbol{x}_C)) \end{aligned}$$

- where $E(\boldsymbol{x}_C)$ is called an `energy function`, and the exponential representation is called the `Boltzmann distribution`.

The join distributino is defined as the product of potentials, and so the total energy is obtained by adding the erergies of each of the `maximal cliques`.

### Moralization

`"Moralization"`: to covert a directed graph into an undirected graph
    - add additional undirected links between all pairs of parents of each node in the graph
    - and then drop the arrows on the original links to give the `moral graph`.

### D-map、I-map and Perfect map

`D-map` (dependence):  A graph is said to be a D map of a distribution if every conditional independence statement satisfied by the distribution is reflected in the graph.

`I-map` (independence)：A graph is said to be an I map of a distribution if every conditional independence statement implied by a graph is satisfied by that specific distribution.

`Perfect Map`: It is both an I map and D map.


# Inference in Graphical Models

Inference on chains, trees

trees:
- Undirected tree
- Directed tree
- Polytree

Factor graph

## Sum-Product algorithm

For any graph which has tree structure, we can use sum-product algorithm to sufficient compute `exact` marginal or joint probabilities of nodes.

This is an `exact` inference method, and also known as `belief propagatino` on directed graphs without loops.

### Marginals

$$\begin{aligned} p(x) = \sum_{\boldsymbol{x}\smallsetminus x} p(\boldsymbol{x}) \end{aligned}$$

Using factor graph:

$$\begin{aligned} p(x) &= \sum_{\boldsymbol{x}\smallsetminus x} p(\boldsymbol{x}) \\ &= \sum_{\boldsymbol{x}\smallsetminus x} \prod_{s\in \text{ne}(x)} F_s(x, \mathbf{X}_s) \\ &= \prod_{s\in \text{ne}(x)}\sum_{\mathbf{X}_s} F_s(x, \mathbf{X}_s) \end{aligned}$$

> Note: here the graph must be a tree structure graph, and then we can interchange the sums and products.
{: .prompt-warning }

Then we defined:

-  `message` from factor node $f_s$ to variables node $x$:

    $$\begin{aligned} p(x) &= \sum_{\boldsymbol{x}\smallsetminus x} \prod_{s\in \text{ne}(x)} F_s(x, \mathbf{X}_s) \\ &= \prod_{s\in \text{ne}(x)} \left[\sum_{\mathbf{X}_s} F_s(x, \mathbf{X}_s)\right] \\ &= \prod_{s\in \text{ne}(x)} \mu_{f_s\rightarrow x} (x) \end{aligned}$$

- `message` from variables node $x_m$ to factor node $f_s$:

    $$\begin{aligned} \mu_{x_m \rightarrow f_s}(x_m) &= \sum_{\mathbf{X}_{sm}} G_m(x_m, \mathbf{X}_{sm}) \\ \\ G_m(x_m, \mathbf{X}_{sm}) &= \prod_{l\in \text{ne}(x_m)\smallsetminus f_s} F_l(x_m, \mathbf{X}_{ml}) \\\\ \mu_{x_m \rightarrow f_s}(x_m) &=  \prod_{l\in \text{ne}(x_m)\smallsetminus f_s} \sum_{\mathbf{X}_{sm}} F_l(x_m, \mathbf{X}_{ml}) \\&= \prod_{l\in \text{ne}(x_m)\smallsetminus f_s} \mu_{f_l \rightarrow x_m}(x_m) \end{aligned}$$


- Leaf Node:

    $$\begin{aligned} \mu_{x\rightarrow f}(x) &= 1 \\ \mu_{f\rightarrow x} &= f(x) \end{aligned}$$

### Joint distribution in factors

$$\begin{aligned} p(\boldsymbol{x}_s) = f_s(\boldsymbol{x}_s) \prod_{i\in \text{ne}(f_s)} \mu_{x_i \rightarrow f_s}(x_i) \end{aligned}$$


## Max-Sum algorithm

Purpose: To find a setting of the variables that has the largest probability and to find the value of that probability

$$\begin{aligned} \boldsymbol{x}^{max} =  \arg \max_{\boldsymbol{x}} p(\boldsymbol{x}) \end{aligned}$$


we can write:

$$\begin{aligned} \max_{\boldsymbol{x}} p(\boldsymbol{x}) &= \max_{x_1}...\max_{x_N} p(\boldsymbol{x}_N) \\&= \max_{x_1}...\max_{x_N} \prod_{C} \psi_C({\boldsymbol{x}_C}) \\ \\ \ln( \max_{\boldsymbol{x}} p(\boldsymbol{x})) &= \max_{\boldsymbol{x}} \ln p(\boldsymbol{x})) \\ &= \max_{x_1}...\max_{x_N} p(\boldsymbol{x}) \\&= \max_{x_1}...\max_{x_N} \sum_{C} \psi_C({\boldsymbol{x}_C}) \end{aligned}$$

then at the roor node:

$$\begin{aligned} \max p(\boldsymbol{x}) &= \max \left(\sum_{s\in \text{ne}(x_{root})} \mu_{f_s\rightarrow x_{root}}(x_{root})\right) \end{aligned}$$




