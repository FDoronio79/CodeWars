'''
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
'''

def sort_array(source_array):
    #sort the odd numbers
    sorted_odd = sorted([num for num in source_array if num % 2 != 0])
    #create an idx counter for the odd array
    odd_idx = 0
    #loop over the source array
    for i in range(len(source_array)):
        #check if the current item is odd
        if source_array[i] % 2 != 0:
            #if odd set the current item to the item at current idx in odd array
            source_array[i] = sorted_odd[odd_idx]
            #incrament idx counter by 1 because we've added it to the source_array
            odd_idx += 1
    #return source_array
    return source_array