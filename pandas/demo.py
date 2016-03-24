import pandas 
import numpy 

s = pandas.Series([1, "cats", 'A', -327.93]) 

s.index=["Small Number", "Cute Animal", 2, "Big Negative"] 

print s * 2 
