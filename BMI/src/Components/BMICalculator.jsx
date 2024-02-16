import { Box, Button, Grid, GridItem, Heading, Input, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

function BMICalculator() {
  let [weight, setWeight] = useState('')
  let [height, setHeight] = useState('')
  let [bmivalue, setBmivalue] = useState(null)
  let [bmistatus, setBmistatus] = useState('')
  let [colour, setColour] = useState('black');

  let handleClick=()=>{
    const Hmeter = Number(height) / 100;
    const Wbmi = Number(weight);
    const bmi = Wbmi / (Hmeter * Hmeter);
    setBmivalue(bmi.toFixed(2));

    if (bmi < 18.5) {
      setBmistatus("Underweight")
      setColour("blue")
    } else if (bmi >= 18.5 && bmi < 25) {
      setBmistatus("Healthy");
      setColour("green")
    } else if (bmi >= 25) {
      setBmistatus("Overweight")
      setColour("red")
    }
  }

let handleReset=()=>{
    setBmivalue(null)
    setHeight('')
    setWeight('')
    setBmistatus('')
  }
  console.log(bmivalue);

  return <Box>
    <Heading>BMI Calculator</Heading>



    <SimpleGrid columns={2} spacing={10} className="bmi-form">
      <Box bg='white' >
        <Heading as='h4' size='md'>Weight (kg)</Heading>
        <Input type="number" placeholder='Enter your weight in kilograms' value={weight} size='md' className="weight" onChange={(e) => setWeight(e.target.value)} />
      </Box>
      <Box bg='white' >
        <Heading as='h4' size='md'>Height (cm)</Heading>
        <Input type="number" placeholder='Enter your weight in centimeters' value={height} size='md' className="height" onChange={(e) => setHeight(e.target.value)} />
      </Box>
    </SimpleGrid>
    <Button colorScheme='green' onClick={handleClick} >Calculate</Button>
    <Button colorScheme='red' onClick={handleReset}>Reset</Button>

     {bmivalue && (<Grid templateColumns='repeat(5, 1fr)' gap={6} className="bmi-result" >
      <Box bg='white' className="bmi-value">
        <Heading as='h4' size='md'>Your BMI:</Heading>
        <Text>{bmivalue}</Text>
      </Box>

      <Box w='100%' h='10' bg='whitw.500' className="bmi-status" color={colour}>
        <Text >{bmistatus}</Text>
      </Box>
    </Grid>)}



  </Box>;
}

export default BMICalculator;
