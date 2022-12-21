"""
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
"""
def solution(s):
    '''Solution returns the formatted string'''
    return  ''.join(list(map(upper, list(s))))
    
def upper(letter):
    '''Converts capital letters to a space and the lower case letter'''
    return ' ' + letter if letter.isupper() else letter

print(solution('thisIsCamelCase'))
