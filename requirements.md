Health Metrics Program

GOAL: Create a simple JavaScript program that calculates an individual's Body Mass Index (BMI) and provides a basic assessment of their weight status.

INSTRUCTIONS

1. Set up your environment:
Create a new folder for your project (e.g., bmi-calculator).
Inside the folder, create an index.html file and a script.js file.
Link the script.js file to your index.html file using a <script> tag right before the closing </body> tag.
2. Declare and initialize variables:

In your script.js file, declare the following variables using const or let and assign them initial values:
personName (string): A name of your choice, e.g., "John Doe".
weightKg (number): The person's weight in kilograms, e.g., 75.
heightM (number): The person's height in meters, e.g., 1.75.
3. Perform arithmetic operations:

The formula for BMI is Weight (kg)/(Height (m)×Height (m)).
Calculate the square of the height and store the result in a new variable called heightSquared.
Calculate the BMI and store the result in a new variable called bmi.
Hint: The calculation is weightKg / heightSquared.
4. Perform comparison operations:

Use the standard BMI categories to determine the person's status.
Underweight: BMI is less than 18.5.
Create a boolean variable called isUnderweight that checks if bmi is less than 18.5.
Normal Weight: BMI is 18.5 or greater AND less than 25.
Create a boolean variable called isNormalWeight that checks if bmi is greater than or equal to 18.5 AND less than 25.
Overweight: BMI is 25 or greater.
Create a boolean variable called isOverweight that checks if bmi is greater than or equal to 25.
5. Perform logical operations:

Use logical operators to check for a specific health profile.
The person receives a "High Risk" alert if they are Overweight OR if their weight is over 90 kg.
Create a new boolean variable called isHighRisk that checks both of these conditions using a logical operator (||).
6. Display the results in the console:

Use console.log() or DOM manipulation method to print the following information to the browser's developer console. Combine strings and variables for clear output.
Print the person's name: console.log("Name:", personName);
Print the calculated bmi, rounded to two decimal places (use toFixed(2) on the bmi variable).
Print whether the person is Underweight: console.log("Underweight:", isUnderweight);
Print whether the person is Normal Weight: console.log("Normal Weight:", isNormalWeight);
Print whether the person is Overweight: console.log("Overweight:", isOverweight);
Print the High Risk alert status: console.log("High Risk Alert:", isHighRisk);
Note: push your solution to github and submit your link.