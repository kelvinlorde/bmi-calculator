    
    // --- 2. Declaration and Initialization of Varriables ---
    
    const personName = 'John Doe';  // Name of person
    let weightKg = 75;  //The person's weight in Kilograms
    const heightM = 1.75; //The person's height in meters


    // --- 3. BMI Formula ---
    const heightSquared = heightM ** 2
    const bmi = weightKg / heightSquared

    // --- 4. Comparison operations: BMI Categories ---

    const isUnderWeight = bmi < 18.5;
    const isNormalWeight = (bmi >=18.5) && (bmi < 25);
    const isOverWeight = bmi >= 25;

    // --- 5. Logical operations: High risk if overweight OR weight > 90 kg ---
    const isHighRisk = isOverWeight || (weightKg > 90);
    
    // --- 6. Display Result to Console ---
    console.log("Name:", personName);
    console.log("My BMI is", bmi.toFixed(2))
    isUnderWeight? console.log("Underweight:", isUnderWeight):
    isNormalWeight? console.log("Normal Weight:", isNormalWeight):
    console.log("Overweight", isOverWeight)
    
    if(isOverWeight) {
        console.log("High Risk Alert:", isHighRisk)
    }
    
    // console.log("Name:", personName);
    // console.log("BMI:", bmi.toFixed(2));
    // console.log("Underweight:", isUnderWeight);
    // console.log("Normal Weight:", isNormalWeight);
    // console.log("Overweight:", isOverWeight);
    // console.log("High Risk Alert:", isHighRisk);




