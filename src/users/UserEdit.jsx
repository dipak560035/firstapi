
// import {Form, Input, Button, Checkbox, RadioGroup, Radio, Select, SelectItem, Textarea} from "@heroui/react";
// import { Formik } from "formik";
//  import * as Yup from 'yup';

// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { setUser } from "./userSlice";




// const countries = [
//   {key: "nepal", label: "Nepal"},
//   {key: "india", label: "India"},
//   {key: "china", label: "China"},

// ];


// const habits = [
//   "Reading",
//   "Traveling",
//   "Gaming",
//   "Cooking",
//   "Sports"
// ];


//   const valSchema = Yup.object({
//     username:Yup.string().min(5).max(15).required(),
//     email:Yup.string().email().required(),
//     habits: Yup.array().min(1).required(),

//     gender:Yup.string().required(),
//     country:Yup.string().required(),
//     description:Yup.string().required()

//   })


// export default function UserEdit() {
//     const { id } = useParams();

//     const { users } = useSelector((state) => state.userSlice);
    

//      const user = users.find((user) => user.id === id);

//     console.log(user)

//   const dispatch = useDispatch();
//   const nav = useNavigate();
 

//   return (
//     <div className="p-5"> 
//     <Formik
//     enableReinitialize

    
//    initialValues={{
//     username:user.username,
//     email:user.email,
//     habits:user.habits,
//     gender:user.gender,
//     country:user.country,
//     description:user.description
//    }}
//    onSubmit={(val) => {
//   dispatch(setUser({
//     ...val,
//     id: user.id
//   }));
//   nav(-1);
// }}

//    validationSchema={valSchema}
//     >




//     {({handleChange, handleSubmit,value,errors,touched})=>(
//       <Form
//       onSubmit={handleSubmit}
//       className="w-full max-w-xs flex flex-col gap-4"
     
     
//     >
//       <Input
//       onChange={handleChange}
//         label="Username"
//         labelPlacement="outside"
//         name="username"
//         placeholder="Enter your username"
//         type="text"
      
//       />
//       {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}

//       <Input
//         onChange={handleChange}
      
//         label="Email"
//         labelPlacement="outside"
//         name="email"
//         placeholder="Enter your email"
//         type="email"
//         />
//          {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}

//         <div>
//           <h2 className="text-lg space-y">Select your Habits</h2>
//       <div className="flex gap-4">
    
       

//  {habits.map((habit,index) =>{
//          return <Checkbox 
//       key={index}
//       onChange={handleChange}
//       value={habit} name="habits">
//         {habit}
//       </Checkbox >
//       })}
    

//     </div>
//         </div>
//       {errors.habits && touched.habits && <p className="text-red-500">{errors.habits}</p>}
//         <div>
//     <RadioGroup 
//     onChange={handleChange}
//     name="gender"
//     label="Select your Gender">
//       <Radio
//        value="male" >Male</Radio>
//       <Radio 
      
//       value="female">Female</Radio>
//       <Radio 
      
//       value="other" >others</Radio>
      
//     </RadioGroup>

//        {errors.gender && touched.gender && <p className="text-red-500">{errors.gender}</p>}
    
//         </div>

    
     

//            <Select
//       className="max-w-xs"
//       name="country"
//       onChange={handleChange}
     
//       label="country"
//       placeholder="Select your country"
//     >
//       {countries.map((country) => (
//         <SelectItem key={country.key}>{country.label}</SelectItem>
//       ))}
//     </Select>

//      {errors.country && touched.country && <p className="text-red-500">{errors.country}</p>}
       
//           <Textarea
//           onChange={handleChange}
//           name="description"

//       className="max-w-xs"
     
//       label="Description"
//       labelPlacement="outside"
//       placeholder="Enter your description"
//     />
//      {errors.description && touched.description && <p className="text-red-500">{errors.description}</p>}
     

     
//         <Button color="primary" type="submit">
//           Submit
//         </Button>
      
//     </Form>
//     )}
//     </Formik>
    
//     </div>
//   );
// }












import {Form, Input, Button, Checkbox, RadioGroup, Radio, Select, SelectItem, Textarea} from "@heroui/react";
import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setUser } from "./userSlice";

const countries = [
  { key: "nepal", label: "Nepal" },
  { key: "india", label: "India" },
  { key: "china", label: "China" },
];

const habits = ["Reading", "Traveling", "Gaming", "Cooking", "Sports"];

const valSchema = Yup.object({
  username: Yup.string().min(5).max(15).required(),
  email: Yup.string().email().required(),
  habits: Yup.array().min(1).required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  description: Yup.string().required(),
});

export default function UserEdit() {
  const { id } = useParams();
  const { users } = useSelector((state) => state.userSlice);
  const user = users.find((u) => u.id === id);

  const dispatch = useDispatch();
  const nav = useNavigate();

  if (!user) return <p>User not found</p>;

  return (
    <div className="p-5">
      <Formik
        enableReinitialize
        initialValues={{
          id: user.id, // keep same id!
          username: user.username || "",
          email: user.email || "",
          habits: user.habits || [],
          gender: user.gender || "",
          country: user.country || "",
          description: user.description || "",
        }}
        validationSchema={valSchema}
        onSubmit={(val) => {
          console.log(val)
          dispatch(setUser(val)); // no new id
          nav(-1);
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
          <Form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col gap-4">
            {/* Username */}
            <Input
              onChange={handleChange}
              label="Username"
              labelPlacement="outside"
              name="username"
              placeholder="Enter your username"
              type="text"
              value={values.username}
            />
            {errors.username && touched.username && <p className="text-red-500">{errors.username}</p>}

            {/* Email */}
            <Input
              onChange={handleChange}
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              value={values.email}
            />
            {errors.email && touched.email && <p className="text-red-500">{errors.email}</p>}

            {/* Habits */}
            <div>
              <h2 className="text-lg">Select your Habits</h2>
              <div className="flex gap-4">
                {habits.map((habit, index) => (
                  <Checkbox
                    key={index}
                    isSelected={values.habits.includes(habit)}
                    onChange={() => {
                      if (values.habits.includes(habit)) {
                        setFieldValue(
                          "habits",
                          values.habits.filter((h) => h !== habit)
                        );
                      } else {
                        setFieldValue("habits", [...values.habits, habit]);
                      }
                    }}
                  >
                    {habit}
                  </Checkbox>
                ))}
              </div>
            </div>
            {errors.habits && touched.habits && <p className="text-red-500">{errors.habits}</p>}

            {/* Gender */}
            <RadioGroup
              name="gender"
              label="Select your Gender"
              value={values.gender}
              onValueChange={(val) => setFieldValue("gender", val)}
            >
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Others</Radio>
            </RadioGroup>
            {errors.gender && touched.gender && <p className="text-red-500">{errors.gender}</p>}

            {/* Country */}
            <Select
              className="max-w-xs"
              name="country"
              label="Country"
              placeholder="Select your country"
              selectedKeys={values.country ? [values.country] : []}
              onSelectionChange={(keys) => setFieldValue("country", Array.from(keys)[0])}
            >
              {countries.map((country) => (
                <SelectItem key={country.key}>{country.label}</SelectItem>
              ))}
            </Select>
            {errors.country && touched.country && <p className="text-red-500">{errors.country}</p>}

            {/* Description */}
            <Textarea
              onChange={handleChange}
              name="description"
              className="max-w-xs"
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              value={values.description}
            />
            {errors.description && touched.description && <p className="text-red-500">{errors.description}</p>}

            <Button color="primary" type="submit">
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
