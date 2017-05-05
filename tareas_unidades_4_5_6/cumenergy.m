function [ y ] = cumenergy( x )
%CUMENERGY Summary of this function goes here
%   Detailed explanation goes here

y = cumsum(x.^2)/(norm(x)^2);

end

