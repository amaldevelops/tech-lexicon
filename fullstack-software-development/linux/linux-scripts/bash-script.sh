# Full Guide https://www.freecodecamp.org/news/shell-scripting-crash-course-how-to-write-bash-scripts-in-linux/

# touch hello_world.sh` : Create a file named hello_world.sh, By naming conventions, bash scripts end with a .sh

# Scripts start with a bash bang. Shebang is a combination of bash # and bang ! followed the the bash shell path. This is the first line of the script. Shebang tells the shell to execute it via bash shell. Shebang is simply an absolute path to the bash interpreter.

# `which bash` : Find the path to bash shell

#! /bin/bash

# echo "Hello World"

# Provide execution rights to your user.Modify the file permissions and allow execution of the script by using the command below:

# `chmod u+x hello_world.sh` 

# Make the Bash script executable, chmod modifies the existing rights of a file for a particular user. We are adding +x to user.You can run the script in the following ways:

# ./hello_world.sh 
# or
# bash hello_world.sh

# ******** Sample Bash Script ********


#! /bin/bash

echo "Hello World"