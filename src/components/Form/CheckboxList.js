import React from "react";

const CheckboxList = ({ data, value, name, onCheckBoxChange }) => {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleOnChange = (e) => {
    //     e.preventDefault();
    //     onCheckBoxChange(prevState => {
    //         console.log(prevState);
    //         return { ...prevState, [name]: e.target.value}
    //     });
    // };

    return (
        <>
    <div>
      {data.map((el, index) => (
        <>
        <input
            type="checkbox"
            value={el}
            name={el}
            //checked={el === value}
            //onChange={handleOnChange}
        />
        <label
            key={index}
        >
            {el}
        </label>
        </>
      ))}
    </div>
  </>
    )
}
  

export default CheckboxList;
