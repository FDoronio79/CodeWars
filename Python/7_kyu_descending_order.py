"""
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
"""

#Attempt to use Selection Sort
def descending_order1(num):
    temp = [int(x) for x in str(num)]
    for i in range(len(temp)):
        max_val_idx = i
        for j in range(i + 1, len(temp)):
            if temp[max_val_idx] < temp[j]:
                max_val_idx = j
            temp[i], temp[max_val_idx] = temp[max_val_idx], temp[i]
    result = int("".join(map(str,temp)))
    return result

num = 6769955332

print(descending_order1(num))

#First Working Attempt
def descending_order(num):
    temp = [int(x) for x in str(num)]
    bruh = sorted(temp, reverse=True)
    return int("".join(map(str,bruh)))

print(descending_order(num))

#Refactored
def descending_order2(num):
    return int("".join(sorted(str(num), reverse=True)))