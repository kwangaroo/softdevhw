def pt(n): 
    retL = [] 
    for a in range(1,n): 
        for b in range(1,a): 
            for c in range(1,b):
                if(c**2 + b**2 ==  a**2): 
                    retL.append([c,b,a])
    return retL

print pt(6) 

def pt2(n): 
    return [(a,b,c) 
            for a in range(1,n) 
            for b in range(a,n)
            for c in range(b,n) 
            if a*a + b*b == c*c]

print pt2(6)



