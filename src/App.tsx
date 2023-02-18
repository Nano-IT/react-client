import React from "react";
import { BaseForm, DataTable, FormInput } from "nanoit-react-modules";
import { useForm } from "react-hook-form";
import API from "./api";

function App() {
  const form = useForm();
  const submit = async (data: any) => {
    console.log(data);
     const response = await API.auth().login({
         "password": "1s2ASD3d4@5678",
         "email": "test@domain.com"
     })

      console.log(response)
  };
  return (
    <div className="App">
      <div>Login form</div>
      <BaseForm form={form} onSubmit={submit}>
        <FormInput name={"test1"} label="Test"></FormInput>
        <FormInput label="Test" name={"test2"}></FormInput>
        <button type={"submit"}>Submit</button>
      </BaseForm>
      <DataTable
        headers={[
          { value: "id", text: "ID" },
          { value: "name", text: "Name" },
        ]}
        items={[{ id: 1, name: "Pascal" }]}
      />
    </div>
  );
}

export default App;
