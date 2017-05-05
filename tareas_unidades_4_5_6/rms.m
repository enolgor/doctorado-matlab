function [e] = rms(x,y)
  %Calcula el error RMS entre dos señales.
 
  e = sqrt(norm(x-y)^2/length(x));
end
