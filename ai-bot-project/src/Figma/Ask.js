import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useReducer } from "react";
import submitIcon from './Icons/send.png';
//import { IconComponentNode } from "./IconComponentNode";
//import { NamecandidateNameSendScore101 } from "./NamecandidateNameSendScore101";
import "./Ask.css";
import axios from "axios";

export const Ask = ({
    property1,
    className,
    setAiResponse,
}) => {
    // const [state, dispatch] = useReducer(reducer, {
    //     property1: property1 || "default",
    // });

    const [inputValue, setInputValue] = React.useState("");
    const [inputCharCount, setInputCharCount] = React.useState(0);


    const makeOpenAIPost = async () => {

        const options = {
            body: JSON.stringify(inputValue), // Convert data to JSON string
        };

        console.log("in ask", options.body)

        // var url = fetch("/open");
        var response = await axios.post("http://localhost:3002/open", options);
        console.log(response);
        // fetch("/open", options)
        //     .then((res) => res.json())
        //     .then((data) => setAiResponse(data.message.choices[0].text));
    };

    return (
        <>
            <div
                className={`ask  
            ${className}`}
            // onMouseEnter={() => {
            //     dispatch("mouse_enter");
            // }}
            // onMouseLeave={() => {
            //     dispatch("mouse_leave");
            // }}
            >
                <div className="frame">
                    <input
                        className="ask text-wrapper"
                        type="text"
                        name="name"
                        placeholder="Ask me anything..."
                        onChange={(event) => {
                            setInputValue(event.target.value);
                            setInputCharCount(event.target.value.length);
                        }}
                    />
                </div>

                <div className="div">
                    <div className="ask text-wrapper-2">{inputCharCount}/4000</div>
                </div>
            </div>
            <div className="submit">
                <img className="submit-icon" src={submitIcon} onClick={makeOpenAIPost} />
            </div>
        </>
    );
};

// function reducer(state, action) {
//     if (state.property1 === "default") {
//         switch (action) {
//             case "mouse_enter":
//                 return {
//                     property1: "hover",
//                 };
//         }
//     }

//     if (state.property1 === "hover") {
//         switch (action) {
//             case "mouse_leave":
//                 return {
//                     property1: "default",
//                 };
//         }
//     }

//     if (state.property1 === "light") {
//         switch (action) {
//             case "mouse_enter":
//                 return {
//                     property1: "light-hover",
//                 };
//         }
//     }

//     if (state.property1 === "light-hover") {
//         switch (action) {
//             case "mouse_leave":
//                 return {
//                     property1: "light",
//                 };
//         }
//     }

//     return state;
// }

Ask.propTypes = {
    property1: PropTypes.oneOf(["hover", "light-hover", "light", "default"]),
};
