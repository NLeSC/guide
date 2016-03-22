In this section, describe good coding practices by contrasting a good and bad example side-by-side.

# Java
# MATLAB
## One assignment per line
### Good
    a=1;
    b=3;
### Bad
    a=1;b=3;

## Use sensible variable names to iterate over for loops
### Good
    nameStrings = {'John','Matthew','Veronica','Michael','Nico'};
    nNames = numel(nameStrings);
    for iName = 1:nNames
        disp(nameStrings{iName})
    end
### Bad
    nameStrings = {'John','Matthew','Veronica','Michael','Nico'};
    nNames = numel(nameStrings);
    for x = 1:nNames
        disp(nameStrings{x})
    end

# Python
[PEP 8 - Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/) is *de facto* standard for Python code style.
