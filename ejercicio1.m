n = input('Número de términos?: ');
a = [];
for k=0:n
    if k == 0
        anterior = 0;
    else
        anterior = a(k);
    end
    a(k+1) = anterior + ((-1).^k)/(2.*k + 1);
end
disp('Términos:');
disp(a);

tolerancia = abs(input('Tolerancia?: '));
k = 0;
err = tolerancia+1;
a = 0;
while tolerancia < err
    a = a + ((-1).^k)/(2.*k + 1);
    err = abs(a - pi/4);
    k = k + 1;
end
disp(['Número de términos: ',num2str(k),', Error: ',num2str(err),', Valor: ',num2str(a)]);