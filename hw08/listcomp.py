def union(a,b): 
    return [x for x in a if x not in b] + [x for x in b]

print union([1,2,3],[3,5,6])
print "expected: [1,2,3,5,6]"

def intersection(a,b): 
    return [x for x in a if x in b] 

print intersection([2,3,4],[3,2,5])
print "expected: [2,3]"

def setdiff(a,b): 
    return [x for x in a if x not in b]

print setdiff([2,4,6,8],[2,5,8])
print "expected: [4,6]"

def symdiff(a,b): 
    return setdiff( union(a,b), intersection(a,b) )

print symdiff([2,4,5,6,7], [4,3,6,9])
print "expected: [2,3,7,9] i think lol"

def cart(a,b): 
    return [(x,y) for x in a for y in b]

print cart([2,3,4],[5,6,7])
print "exp: [(2,3), (2,5), (2,7), and so on and so onnnn..." 
