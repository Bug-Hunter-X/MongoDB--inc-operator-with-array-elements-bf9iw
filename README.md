# MongoDB $inc operator with array elements
This repository demonstrates a common error when using the `$inc` operator in MongoDB to update elements within an array. The incorrect usage can lead to unexpected results or errors.

## Bug
The provided code attempts to increment a specific element within an array using `$inc` and the positional operator `$[`. However, this approach doesn't work as intended.

## Solution
The correct solution involves using an array filter along with the positional operator to identify and update the specific element.