import React from "react";
import "./App.css";
import { BaseForm, FormInput } from "nanoit-react-components";
import { useForm } from "react-hook-form";

function App() {
  const form = useForm();
  return (
    <div className="App">
      <div>Login form</div>
      <BaseForm form={form}>
        <FormInput name={"test1"} label="Test"></FormInput>
        <FormInput label="Test" name={"test2"}></FormInput>
        <button type={"submit"}>Submit</button>
      </BaseForm>
    </div>
  );
}

export default App;
