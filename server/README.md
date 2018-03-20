___


### [The Four Rules of Simple Design](https://martinfowler.com/bliki/BeckDesignRules.html):

* **_(purge lint violations)_**

* **_Passes the tests_**
* **_Reveals intention_**
* **_No duplication_**
* **_Fewest elements_**

___

### [The Transformation Priority Premise](https://8thlight.com/blog/uncle-bob/2013/05/27/TheTransformationPriorityPremise.html):

````
({} —-> null) no code at all->code that employs null

(null —-> constant)

(constant —-> constant+) a simple constant to a more complex constant

(constant —-> variable) replacing a constant with a variable or an argument

(statement —-> statements) adding more unconditional statements.

(unconditional —-> if) splitting the execution path

(variable —-> array)

(array —-> container)

(statement —-> recursion)

(if —-> while)

(expression —-> function) replacing an expression with a function or algorithm

(variable —-> assignment) replacing the value of a variable.
````

___
