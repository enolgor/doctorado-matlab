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

A continuación utilizaremos la función `fzero` en cada intervalo donde
observemos que existe una raiz. El primer intervalo que contiene una raiz
podemos acotarla, por ejemplo, entre `[1.464 1.472]` como podemos observar
en la siguiente imagen:

![](fzero1_3.png?raw=true)

Para obtener la raiz ejecutaremos el siguiente comando:

---
```matlab
>> fzero(f, [1.464 1.472])

ans =

   1.470588235294055
```
---

Lo mismo para la segunda raiz en el intervalo `[1.54 1.58]`:

![](fzero2_3.png?raw=true)

---
```matlab
>> fzero(f, [1.54 1.58])

ans =

   1.562500000000050
```
---

Y para la tercer raiz en el intervalo `[1.65 1.68]`:

![](fzero3_3.png?raw=true)

---
```matlab
>> fzero(f, [1.65 1.68])

ans =

   1.666666666666668
```
---

### Ejercicio 2

En el ejercicio se pide que dados unos datos muestreados se realicen
diferentes ajustes minimo-cuadráticos y de interpolación.

La muestra de datos se puede observar en la siguiente imagen:

---
```matlab
t = (0:.1:2)';
y = [5.8955 3.5639 2.5173 1.9790 1.8990 1.3938 1.1359 ...
1.0096 1.0343 0.8435 0.6856 0.6100 0.5392 0.3946 ...
0.3903 0.5474 0.3459 0.1370 0.2211 0.1704 0.2636];
plot(t, y, 'o');
```
---

![](data.png?raw=true)

#### Interpolación lineal

---
```matlab
xq = (0:0.01:2)';
yq = interp1(t,y,x,'linear');
plot(t, y, 'o', xq, yq);
```
---
**CAMBIAR ESTÁ MAL**

![](linear.png?raw=true)

#### Interpolación a trozos con polinomios cúbicos de Hermite

---
```matlab
xq = (0:0.01:2)';
yq = interp1(t,y,x,'pchip');
plot(t, y, 'o', xq, yq);
```
---

![](pchip.png?raw=true)

#### Interpolación a trozos con polinomios splines cúbicos

---
```matlab
xq = (0:0.01:2)';
yq = interp1(t,y,x,'spline');
plot(t, y, 'o', xq, yq);
```
---

![](spline.png?raw=true)

#### Interpolación polinómica

Como hay 21 valores de y, vamos a necesitar un polinomio de grado 20. Vamos
a realizar primero un ajuste del eje `X` para que al evaluar sobre un polinomio
de grado tan alto no ocurran problemas. El valor de `t` ajustado es la variable
`tq = t - 1` y el valor de `xq` ajustado es `sq = xq - 1`, en la variable `P`
guardaremos los coeficientes del polinomio.

---
```matlab
xq = (0:0.01:2)';
tq = t - 1;
sq = xq - 1;
P = polyfit(tq', y, 20);
yq = polyval(P, sq);
plot(t, y, 'o', xq, yq);
```
---

![](polynomic.png?raw=true)

#### Ajuste lineal de los datos

Realizaremos un ajusto mínimo-cuadrático para encontrar los coeficientes (variable `b`)
del polinomio de grado 1 que minimiza el error cuadrático entre los valores reales
y aproximados.

---
```matlab
xq = (0:0.01:2)';
X = [t.^0 t.^1];
b = X\y;
yq=(b'*[xq.^0 xq.^1]')';
plot(t, y, 'o', xq, yq);
```
---

![](regresion.png?raw=true)

#### Ajuste cuadrático de los datos

Lo mismo que en el ajuste lineal pero esta vez con un polinomio de grado 2.

---
```matlab
xq = (0:0.01:2)';
X=[t.^0 t.^1 t.^2];
b=X\y;
yq=(b'*[x.^0 x.^1 x.^2]')';
plot(t, y, 'o', xq, yq);
```
---

![](cuadratico.png?raw=true)

#### Ajuste log-lineal de los datos

---
```matlab
```
---

![](loglineal.png?raw=true)

### Ejercicio 3