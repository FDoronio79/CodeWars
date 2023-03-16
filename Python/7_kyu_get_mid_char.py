'''
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

'''

def get_middle(s):
    if len(s) == 1 or len(s) == 2:
        return s
    #if string length is even return the middle 2 chars
    elif len(s) % 2 == 0:
        #figure out how to get the two middle chars
        return s[(len(s)-1) //2 ] + s[len(s)//2]
    #return the middle character
    return s[len(s)//2]

#better solution
def get_middle(s):
    i = (len(s) - 1) // 2
    return s[i:-i] or s