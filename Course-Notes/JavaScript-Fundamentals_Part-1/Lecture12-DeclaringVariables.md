# Declaring Variables

***[10/07/2024] - bpastega***

<h3>Changing the value of a variable</h3>

When we change the value stored within a variable it's called **reassigning** it or **mutating** it. 

<h2>Types of Declarations</h2>
  
<dl>
  
  <dt>Let</dt>
  
   When a variable needs to be able to be reassigned, we use ```let```. This can allow us to declare all variables at the top of a file, only attributing their variables later in the program. </dd>
  <dt>Const</dt>
  
   A constant variable is an **immutable** variable. Therefore, a constant variable cannot be undefined. 

  <dt>Var</dt>

  This keyword should be ***completely avoided***. However, knowing how it works allows us to interpret legacy code or older learning material. Var is essentially the old way that a variable was declared (prior to the addition of let). 
  At first glance, it works in nearly identical manner to ```let```. However, internally the construction of the var declaration works differently than let, an in nonoptimal fashion.



<h3>Is it really necessary to declare variables?</h3>

It is considered good practice to always default to declaring a variable as ```const```, only declaring something as ```var``` when it is necessary for the value to be changed or adjusted. 
This ensures that the potential for bugs(such as acccidentaly changing the value of an important variable by mistake) is significantly reduced during the construction of the program. 

Declaring a variable is not mandatory, functionally speaking. When we attribute a value to a variable without initializing it, the program still appears to execute normally. However, it is not considered a good idea to do so.
This is because **when not declared correctly the variable isn't present in the current scope of the program**. Instead, JavaScript will mitigate this behind the scenes by creating a property in the global object. 
This can create problems, and should be avoided.
