### Use of Chakra UI is compulsory in this Assignment

## Simple Chakra UI BMI Calculator

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]



- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 
 ✅ displays the BMI calculator  - 
 ✅ calculates BMI when 'Calculate' button is clicked for Healthy - 
 ✅ calculates BMI when 'Calculate' button is clicked for Underweight -
 ✅ calculates BMI when 'Calculate' button is clicked for Overweight-
 ✅ resets form and remove results Grid  when 'Reset' button is clicked - 

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`

1. Libraries needs to be installed by yourself

### Not following the above instructions will lead your testcases to fail

## Understanding Component Structure

- Components
  - BMICalculator.jsx
- App

### Problem

Create a chakra ui simple BMI Calculator which uses below mentioned chakra ui components.

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Features to build

1. Create a react application for BMI Calculator using chakra ui components like

```
Button,
Flex,
Container,
SimpleGrid,
Center,
Grid,
Box,
Stack,
Text,
Heading
```

2. Show application name `BMI Calculator` inside `Heading` Tag

3. Create two button `Calculate` and `Reset` (case sensitive text)

4. Inside `SimpleGrid` create two input with `type - number` for weight and height

5. SimpleGrid should have class `bmi-form`

6. weight input should have class `weight` and height input should have class `height`

7. Grid should have class name `bmi-result`.Show result inside `Grid` with class `bmi-value` and `bmi-status` in `Text` Tag and will be fixed 2 digits after point (Hint : use toFixed())

8. Show `bmi-status` shown as per result and `Text` color should be as below

   ```
   height should converted into meter height = Number(height) / 100
   bmiValue = weightValue / (heightValue * heightValue);

   bmi < 18.5 - Underweight - "blue"
   bmi >=18.5 and < 25 - Healthy" - "green"
   >=25 Overweight - "red"

   ```

9. When you click on reset form will be reset and result Grid should not exist

<img width="1728" alt="Screenshot 2023-01-12 at 11 20 42 AM" src="https://user-images.githubusercontent.com/103956933/220901609-7f7ebbc7-c390-405c-b3c0-17c0d1153b19.png">

<img width="1728" alt="Screenshot 2023-01-12 at 11 20 42 AM" src="https://user-images.githubusercontent.com/103956933/227432823-bc138aa1-0e06-48a3-9bac-18071a3dda35.png">

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
