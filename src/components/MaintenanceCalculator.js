import React, { useState } from 'react';

const MaintenanceCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [gender, setGender] = useState('');
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

    const calculateBmr = () => {
      let bmr;
      
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === 'female') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      } else {
        console.error('Gender must be specified.');
        return;
      }
    
      setBmr(bmr);
    };
    

  const calculateTdee = () => {
    // code to calculate TDEE by adding the BMR, NEAT, and TEA
  };

  return (
    <div>
      <form>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />
        <label>
          Weight (in lbs):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <label>
          Height (in inches):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <br />
        <label>
          Activity Level:
          <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="">Select</option>
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
            <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
            <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
            <option value="1.9">Extra active (very hard exercise & physical job or 2x training)</option>
          </select>
        </label>
        <br />
        <label>
          Gender:
          <input type="radio" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} /> Female
        </label>
        <br />
        <button type="button" onClick={calculateBmr}>
          Calculate BMR (Basal Metabolic Rate (BMR))
        </button>
        <br />
        <button type="button" onClick={calculateTdee}>
          Calculate TDEE 
        </button>
      </form>
      <p>BMR: {bmr}</p>
      <p>TDEE: {tdee}</p>
    </div>
  );
};

export default MaintenanceCalculator;