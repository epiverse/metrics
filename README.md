# metrics
Experimenting with different distance metrics, coded as ES6 modules. Start with simples example with [Euclidean Distance](https://github.com/epiverse/metrics/wiki). Note not all distances will be true metrics, for example, [cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) does not satisfy triangular inequality, also demonstrated here:

```javascript
A=[1,0];
B=[0.6,0.8];
C=[-0.8,0.6];
```
Geeting the metrics module

```javacript
mod = (await import('https://epiverse.github.io/metrics/basic.mjs'))
```
show an example of triangular innequality not being satisfied by cosine distance:
```javascript
dAB = mod.cosine(A,B) = 0.4
dBC = mod.cosine(B,C) = 1
dAC = mod.cosine(A,C) = 1.8
dAC<=(dAB+dBC)
false
```
For more discussion of the metrics modules see the [metrics wiki](https://github.com/epiverse/metrics/wiki)
