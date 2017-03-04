x = linspace(-2*pi,2*pi,400);
y = x;
[X,Y] = meshgrid(x,y);
F = sin(abs(X)+abs(Y));
mesh(X,Y,F);
figure
surf(X,Y,F);
figure
contour(X,Y,F);