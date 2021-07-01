import React, { useState } from 'react'
import { useStep } from "react-hooks-helper";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Review from './Review';
import Information from './Information';

const steps = [
    { id: "step1" },
    { id: "step2" },
    { id: "step3" },
    { id: "step4" },
    { id: "review" },
    { id: "information" },
];

const defaultData = {
    checkedState: [],
    bagsAmount: '',
    location: '',
    helpGroup: '',
    street: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    pickUpDate: '2021-08-18T21:11:54',
    pickUpNotes: ''
}

function LogicForm() {
    const [dataForm, setData] = useState(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;
    const props = { navigation, dataForm, setData };

    switch (id) {
        case "step1":
            return <Step1 {...props} />;
        case "step2":
            return <Step2 {...props} />;
        case "step3":
            return <Step3 {...props} />;
        case "step4":
            return <Step4 {...props} />;
        case "review":
            return <Review {...props} />;
        case "information":
            return <Information {...props} />;
        default:
            return null;
    }
}

export default LogicForm
