'''
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
'''

def tower_builder(n_floors):
    result = []
    # calculate the width of the base and subtract 1 to account for the middle star
    width = (n_floors * 2) - 1
    # loop through a range of numbers starting from 1 and ending at 2 * n_floors with a step of 2
    # This will iterate through all odd numbers from 1 to 2 * n_floors - 1. Each number in the range represents the number of stars in a single level of the tower.
    for i in range(1, 2 * n_floors, 2):
        stars = i * '*'
        # use the center string method to center the stars
        line = stars.center(width)
        result.append(line)
    return result