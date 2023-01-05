```
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
```

function minMax(arr){
    let result = []
    let minimum = arr[0]
    let maximum = 0
    for (let i of arr) {
        if (i < minimum) {
            minimum = i
        }
        else if (i > maximum) {
            maximum = i
        }
    }
    result.push(minimum, maximum)
    return result
  }

// Alternate
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

```
The Math.min() function returns the smallest number in a given array. The Math.max() function returns the largest number in a given array. The ... before arr is the spread operator, which allows the array to be passed as separate arguments to the Math.min() and Math.max() functions.
```