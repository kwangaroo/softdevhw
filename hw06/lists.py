# task 1 

strength = 0
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
lower = "abcdefghijklmnopqrstuvwxyz" 
num = "0123456789" 

def threshold(pw): 
    """
    Returns true if password contains a mix of upper and lowercase letters and at least one number. Returns false otherwise. 
    """
    thresh = [1 if x in upper else 
              2 if x in lower else 
              3 if x in num else 
              4 for x in pw]
    
    return 1 in thresh and 2 in thresh and 3 in thresh

print threshold("Ab123***")
print threshold("8392j")

# task 2 

def rating(pw): 
    """
    Returns password strength based on different kinds of things you mixed together in the password. 1 to 4 scale, 4 being strongest.
    """
    thresh = [1 if x in upper else 
              2 if x in lower else 
              3 if x in num else 
              4 for x in pw]
    return (1 in thresh) + (2 in thresh) + (3 in thresh) + (4 in thresh)

print "Google: " 
print rating("Google")
print "19Juice&: " 
print rating("19Juice&")
print "aaaaa: " 
print rating("aaaaa")
