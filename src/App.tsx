import React from "react";
import "./App.css";
import { BaseForm, DataTable, FormInput } from "nanoit-react-components";
import { useForm } from "react-hook-form";

function App() {
  const form = useForm();
  const submit = (data: any) => {
    console.log(data);
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
