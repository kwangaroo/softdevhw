def repeat(word):
    return lambda n: n * word 

r1 = repeat("hello")
r2 = repeat("goodbye") 

print r1(2)
print r2(2)
print repeat('cool')(3)


## quicksort 

def qs(s): 
    if s == []: 
        return []
    return qs([x for x in s[1:] if x < s[0]]) + [s[0]] + qs([x for x in s[1:] if x > s[0]])  

#HOW YALL DOING THIS IN ONE LINE W/O STACK OVERFLOWING
           
print qs([3,7,4,8,5,6,2,1])
