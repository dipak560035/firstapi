
import {Form, Input, Button, Checkbox, RadioGroup, Radio, Select, SelectItem, Textarea} from "@heroui/react";
import { Formik } from "formik";
 import * as Yup from 'yup';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "./userSlice";
import { nanoid } from "@reduxjs/toolkit";




const countries = [
  {key: "nepal", label: "Nepal"},
  {key: "india", label: "India"},
  {key: "china", label: "China"},

];

const habits = [
  "Reading",
  "Traveling",
  "Gaming",
  "Cooking",
  "Sports"
];


  const valSchema = Yup.object({
    username:Yup.string().min(5).max(15).required(),
    email:Yup.string().email().required(),
    habits: Yup.array().min(1).required(),

    gender:Yup.string().required(),
    country:Yup.string().required(),
    description:Yup.string().required()

  })


export default function UserAdd() {

  const dispatch = useDispatch();
  const nav = useNavigate();
 

  return (
    <div className="p-5"> 
    <Formik
   initialValues={{
    username:'',
    email:'',
    habits:[],
    gender:'',
    country:'',
    description:''
   }}
   onSubmit={(val) => {
  dispatch(setUser({
    ...val,
    id: nanoid()
  }));
  nav(-1);
}}

   validationSchema={valSchema}
    >




    {({handleChange, handleSubmit,values,errors,touched})=>(
      <Form
      onSubmit={handleSubmit}
      className="w-full max-w-xs flex flex-col gap-4"
     
     
    >
      <Input
      onChange={handleChange}
        label="Username"
        labelPlacement="outside"
        name="username"
        placeholder="Enter your username"
        type="text"
      
      />
      {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}

      <Input
        onChange={handleChange}
      
        label="Email"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your email"
        type="email"
        />
         {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}

        <div>
          <h2 className="text-lg space-y">Select your Habits</h2>
      <div 
      className="flex gap-4">
    
       

      {habits.map((habit,index) =>{
         return <Checkbox 
      key={index}
      onChange={handleChange}
      value={habit} name="habits">
        {habit}
      </Checkbox >
      })}
    

    </div>
        </div>
      {errors.habits && touched.habits && <p className="text-red-500">{errors.habits}</p>}
        <div>
    <RadioGroup 
    onChange={handleChange}
    name="gender"
    label="Select your Gender">
      <Radio
       value="male" >Male</Radio>
      <Radio 
      
      value="female">Female</Radio>
      <Radio 
      
      value="other" >others</Radio>
      
    </RadioGroup>

       {errors.gender && touched.gender && <p className="text-red-500">{errors.gender}</p>}
    
        </div>

    
     

           <Select
      className="max-w-xs"
      name="country"
      onChange={handleChange}
     
      label="country"
      placeholder="Select your country"
    >
      {countries.map((country) => (
        <SelectItem key={country.key}>{country.label}</SelectItem>
      ))}
    </Select>

     {errors.country && touched.country && <p className="text-red-500">{errors.country}</p>}
       
          <Textarea
          onChange={handleChange}
          name="description"

      className="max-w-xs"
     
      label="Description"
      labelPlacement="outside"
      placeholder="Enter your description"
    />
     {errors.description && touched.description && <p className="text-red-500">{errors.description}</p>}
     

     
        <Button color="primary" type="submit">
          Submit
        </Button>
      
    </Form>
    )}
    </Formik>
    
    </div>
  );
}

