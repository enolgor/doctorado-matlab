A=[-8, 5, 7, -3;
    9, 2, 9, -9;
    5, 6, -3, -7;
    -6, 3, 3, 5];
B = [-90, -7, 15, -30]';
X = A\B;
[L,U,P]=lu(A);
X2 = U\(L\(P*B));
