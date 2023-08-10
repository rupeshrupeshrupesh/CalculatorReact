import { Icon } from "@mui/material";
import { grid } from "@mui/system";
import {
  ErrorMessage,
  Field as TextField,
  FieldArray,
  Form,
  Formik,
} from "formik";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import * as Yup from "yup";
export type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
};
const initialValues: UserData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  phoneNumber: "",
};

const validationSchema = Yup.object({
  //   firstName: Yup.string().required("Required"),
  //   lastName: Yup.string().required("Required"),
  //   email: Yup.string().email("Invalid email").required("Required"),
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Required"),
  //   phoneNumber: Yup.string().required("Required"),
});

const FormInput: React.FC = () => {
  const [inputFields, setInputFields] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmit = (values: UserData) => {
    console.log(values);
  };
  const handleAddInputField = () => {
    setInputFields([...inputFields, ""]);
    setIsEdit(true);
  };
  const handleInputChange = (index: number, value: string) => {
    const updatedFields = [...inputFields];
    updatedFields[index] = value;
    setInputFields(updatedFields);
  };

  const handleRemoveInputField = (index: number) => {
    const updatedFields = [...inputFields];
    updatedFields.splice(index, 1);
    setInputFields(updatedFields);
  };
  return (
    <>
      <div>
        <h2>Registration Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{}}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr",

                  marginBottom: "16px",
                }}
              >
                <label style={{}}>First Name:</label>
                <TextField style={{}} type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr",
                  marginBottom: "16px",
                }}
              >
                <label>Last Name:</label>
                <TextField type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr",
                  marginBottom: "16px",
                }}
              >
                <label>Email:</label>
                <TextField type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr",
                  marginBottom: "16px",
                }}
              >
                <label>Password:</label>
                <TextField type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr",
                  marginBottom: "16px",
                }}
              >
                <label>Phone Number:</label>
                <TextField type="tel" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
                <button onClick={handleAddInputField}>Add Input Field</button>
              </div>

              {inputFields.map((inputValue, index) => (
                <div key={index}>
                    <input
                      type="text"
                      value={inputValue}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  <button onClick={() => handleRemoveInputField(index)}>
                    Remove
                  </button>
                </div>
              ))}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 2fr",
                  marginBottom: "16px",
                }}
              >
                <button type="submit">Register</button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default FormInput;
