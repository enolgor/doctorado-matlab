A = [
0.32 0.96 1.28 -0.32 -1.92 1.28
-2.56 2.88 1.28 -0.32 0.64 0.96
3.84 -0.96 0.96 -1.6 0.32 0
0 0.64 -0.32 1.28 0 0.96
-0.32 0.96 1.60 -1.60 0 1.92
0.64 -0.96 1.60 -0.32 0 0.64
];

B = [12.5 3.125 18.75 -3.125 0 -12.50]';

X1=A\B;
disp(X1)
 
%Utilizando LU
[L,U,P]= lu(A);
X2=U\(L\(P*B));
%Si lo hacemos sin permutaci?n da un resultado negativo 
%por lo tanto si es necesaria la permutacion
X3=U\(L\B);
disp(X2);
disp(X3);