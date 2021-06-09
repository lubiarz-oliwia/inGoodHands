import React from 'react';
import { useForm, useStep } from "react-hooks-helper";
import Submit from './Submit';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Summary from './Summary';


const steps = [
    { id: "step1" },
    { id: "step2" },
    { id: "step3" },
    { id: "step4" },
    { id: "summary" },
    { id: "submit" }
  ];

  const defaultData = {
    street: "", 
    city: "", 
    postCode: "", 
    phone: "", 
    date: "", 
    time: "", 
    note: "",
    bag: "",
    helpGroup: "",
    giveAway: "",
    localizationSpecific: ""
} 

function Form() {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
        case "step1":
          return <Step1 {...props} />;
        case "step2":
          return <Step2 {...props} />;
        case "step3":
          return <Step3 {...props} />;
        case "step4":
            return <Step4 {...props} />;
        case "summary":
            return <Summary {...props} />;
        case "submit":
          return <Submit {...props} />;
        default:
          return null;
      }
}

export default Form
