```
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
```

function validatePIN(pin) {
    if (pin.length == 4 || pin.length == 6) {
        if (/^[0-9]+$/.test(pin)) {
            return true
        }
    }
    return false
}

``` 
/^[0-9]+$ - Tis is a Regex that checks for a string of ne or more digits 0-9
The ^ character indicates the start of the string, and the $ character indicates the nd of the string.
The [] indicates a character set, in this case, any digit from 0-9.
The + character indicates that one or more of the preceding elements must be present.
```