import random 
"""
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio'] 
    return random.choice(names)

#print get_name()

def dble(f): 
    name = f() 
    return name+name 

#print dble(get_name)

get_name = dble(get_name)

print get_name
"""

def doubler(f): 
    def inner(): 
        name = f() 
        return name+name
    return inner 

@doubler 
def get_name():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio'] 
    return random.choice(names)

print get_name()

'''
takeaway: you can write fns that transform fns 

a python decorator is shorthand for calling a wrapper-type function ike doubler 

a python decorator encapsulates a closure

a python decorator allows you to transparently wrap functionality 
''' 
