def wrapper(f): 
    def inner(*arg):
        return f(*arg) 
    return inner 

closure = wrapper(foo) 
closure(-2, 3,'hello')

