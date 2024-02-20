import React, { useEffect } from "react";
import { Ask } from "./Ask";
import { Card } from "./Card";
import chat from "./Icons/chat.png";
import "./ChatBot.css";
import musicBot from "./Icons/music bot icon.jpg";
import SuggestedQuestions from "./suggestedQuestions";

export const Desktop = () => {
    const [aIResoponseArray, setAIResponseArray] = React.useState([]);
    const [inputValueArray, setInputValueArray] = React.useState([]);
    const [hasBeenAsked, setHasBeenAsked] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    useEffect(() => {
        console.log("useeffect", inputValue);
    }, [inputValue]);

    const makeOpenAIPost = async (input) => {
        let value;
        if (inputValue === "")
            value = input;
        else
            value = inputValue;
        console.log("inputValue", value);
        setInputValueArray([...inputValueArray, value]);
        try {
            const response = await fetch("http://localhost:3002/open", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: value }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data.message.choices[0].message.content);
            setAIResponseArray([...aIResoponseArray, data.message.choices[0].message.content]);
            // setAIResponse(data.message.choices[0].message.content);
            console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="desktop">
            <div className="frame-4">
                <div className="frame-5">
                    <div className="element-wrapper">
                        <img className="element" src={musicBot} alt="test" />
                    </div>
                    <div className="div-wrapper">
                        <p className="p">
                            Music Reccomendation Bot (Powered By OpenAI)
                        </p>
                    </div>
                </div>
                {!aIResoponseArray.length > 0 && (
                    <>
                        <div className="">
                            <div className="frame-7">
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[0].topic}
                                    question={SuggestedQuestions[0].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[1].topic}
                                    question={SuggestedQuestions[1].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[2].topic}
                                    question={SuggestedQuestions[2].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[3].topic}
                                    question={SuggestedQuestions[3].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                            </div>
                            <div className="frame-8">
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[4].topic}
                                    question={SuggestedQuestions[4].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[5].topic}
                                    question={SuggestedQuestions[5].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                                <Card
                                    className="card-instance"
                                    property1="default"
                                    topic={SuggestedQuestions[6].topic}
                                    question={SuggestedQuestions[6].question}
                                    makeOpenAIPost={makeOpenAIPost}
                                    setInputValue={setInputValue}
                                />
                            </div>
                        </div>
                    </>
                )}
                <div className="frame-6 questions-answers">
                    {inputValueArray.map((value, index) => (
                        <>
                            <div className="question" key={index}>
                                <p>{value}</p>
                            </div>
                            <div className="answer">
                                <p>{aIResoponseArray[index]}</p>
                            </div>
                        </>
                    ))}
                </div>
                <div className="frame-9">
                    <div className="frame-10">
                        <img className="chat-icon" src={chat} alt="test" />
                        <div className="text-wrapper-4">New topic</div>
                    </div>
                    <Ask className="ask-instance" property1="default" inputValue={inputValue} setInputValue={setInputValue} makeOpenAIPost={makeOpenAIPost} />
                </div>
            </div>
        </div>
    );
};
