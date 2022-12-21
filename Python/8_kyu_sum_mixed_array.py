"""
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
"""
# map() returns a list of the results after
# applying the given function to each item of a given iterable

def sum_mix(arr):
    # in this int is the function and arr is the iterable it is being applied to
    return sum(map(int, arr))