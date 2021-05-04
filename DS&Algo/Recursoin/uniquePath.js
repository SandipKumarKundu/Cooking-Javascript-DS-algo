/*
This problem is known as the “Unique Paths” problem: Let’s say you have a grid of rows and columns. Write a function that accepts a number of rows and a number of columns, and calculates the number of possible “shortest” paths from the upper-leftmost square to the lower-rightmost square.

For example, here’s what the grid looks like with three rows and seven columns. You want to get from the “S” (Start) to the “F” (Finish).

images/learning_to_write_in_recursive/unique_paths_setup.png
By “shortest” path, I mean that at every step, you’re moving either one step to the right:

images/learning_to_write_in_recursive/unique_paths_move_right.png
or one step downward:

images/learning_to_write_in_recursive/unique_paths_move_down.png
Again, your function should calculate the number of shortest paths.
*/

// -------------------------solution------------------------------------

/*
This exercise is similar to the “Staircase Problem.” Let’s break this down:

From the starting position, we have only two choices of movement. We can either move one space to the right or one space downward.

What this means is that the total number of unique shortest paths will be the umber of paths from space to the right of S + the number of paths from space below S.

The number of paths from the space to the right of S is the same as calculating the paths in a grid of six columns and three rows, as you can see here:

images/learning_to_write_in_recursive/unique_paths_move_right_shaded.png
The number of paths from the space below the S is the equivalent of the paths in a grid of seven columns and two rows:

images/learning_to_write_in_recursive/unique_paths_move_down_shaded.png
Recursion allows us to express this beautifully:

​ 	​return​ unique_paths(rows - 1, columns) + unique_paths(rows, columns - 1)
All we need to do now is add the base case. Possible base cases include when we have just one row or one column, since in such cases, there’s only one path available to us.

Here’s the complete function:

​ 	​def​ ​unique_paths​(rows, columns)
​ 	  ​return​ 1 ​if​ rows == 1 || columns == 1
​ 	  ​return​ unique_paths(rows - 1, columns) + unique_paths(rows, columns - 1)
​ 	​end
*/