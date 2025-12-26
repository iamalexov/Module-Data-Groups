

# <span style="color:red"> element: </span>
## is another name for an item inside an array.

# Array:
### is an ordered list of data


# <span style="color:fuchsia"> ➕ Summation: </span>

### function sumValues(list) {
###  let total = 0;
 ### total += list[0]; // access a list element and add to total
 ### total += list[1];
 ### total += list[2];
 ### total += list[3];
 ### total += list[4];
 ### return total;
### }

### sumValues([1, 2, 3, 4, 5]);

### This solution is bad because it only works for a fixed number of items and breaks when the array size changes


# <span style="color:fuchsia"> Iteration: </span>
### We can configure the debugger in different ways so it starts when we run our code. This helps us pause execution and understand how the program works step by step.


# for invoked the Debugger within VScode
## command pallet(cmd shift p) ---> Debug: Toggle Auto Attach and select: Only With Flag 

## terminal: node mean.js --> node --inspect mean.js

### and get down to debug panel to set breakpoints

# Iteration is the process of repeating an action. We use iteration here to go through each number in the array and add it to the total.

# Iteration is needed because we must process every element in the array, and we don’t know how many elements there will be
# We use iteration to handle every element in the array, no matter how many there are


# how the debugger shows iteration step by step:
## The debugger pauses the loop each time it runs, so we can watch the values change one step at a time


# Calculating the median

### Prototype is an object that JavaScript uses as a fallback when a property or method is not found on the object itself.