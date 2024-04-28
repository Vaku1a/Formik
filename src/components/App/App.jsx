// import { useState } from "react";
// import UserForm from "../UserForm/UserForm";
// import TextInput from "../TextInput/TextInput";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
// import OrderForm from "../OrderForm/OrderForm";
import css from "./App.module.css";
import BasicFormikForm from "../BasicFormikForm/BasicFormikForm";

export default function App() {
  // const [selectedValue, setSelectedValue] = useState("uk");

  // const [inputValue, setInputValue] = useState("hello");

  // const handleAddUser = (newUser) => {
  //   console.log("New User>>:", newUser);
  // };

  // const makeOrder = (newOrder) => {
  //   console.log("makeOrder", newOrder);
  // };

  return (
    <div className={css.container}>
      {/* <h1>Forms in React</h1> */}

      {/* <UserForm onAdd={handleAddUser} />

      <TextInput value={inputValue} onChange={setInputValue} />
      <p>Text: {inputValue} </p>

      <LangSwitcher value={selectedValue} onChange={setSelectedValue} />
      <p>Selected lang: {selectedValue} </p>

      <OrderForm onOrder={makeOrder} /> */}
      {/* <hr /> */}
      <h1>Formik</h1>
      <BasicFormikForm></BasicFormikForm>
    </div>
  );
}
