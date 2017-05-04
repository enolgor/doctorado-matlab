*Estadística y Métodos Matemáticos para la Investigación: Métodos Numéricos con Matlab.
Curso 2016-17*

*Eneko Olivares Gorriti, 04/05/2017*



## Tareas de las unidades 4, 5 y 6

### Ejercicio 1

Tras el estudio de la función podemos acotar que la función
tiene las tres raíces más o menos en el intervalo que se muestra
en la imagen acontinuación (hemos representado inicialmente en el
intervalo `[1, 2]` y hemos hecho zoom hasta conseguir ver claramente
el corte en el eje 0).

---
```matlab
f = @(x) 816.*x.^3 - 3835.*x.^2 + 6000.*x - 3125;
>> fplot(f, [1, 2])
>> hold
Current plot held
>> plot([1:0.1:2],0.*[1:0.1:2])
```
---
![](fzero3.png?raw=true)
