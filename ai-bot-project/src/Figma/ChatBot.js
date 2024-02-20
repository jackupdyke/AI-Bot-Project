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

    useEffect(() => {
        console.log(inputValueArray);
    }, [inputValueArray]);

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
                                    funFact="fun-fact-2.png"
                                    property1="default"
                                    topic={SuggestedQuestions[0].topic}
                                    question={SuggestedQuestions[0].question}
                                    inputValueArray={inputValueArray}
                                    setInputValueArray={setInputValueArray}
                                />
                                <Card
                                    className="card-instance"
                                    funFact="fun-fact-3.png"
                                    property1="default"
                                    topic={SuggestedQuestions[1].topic}
                                    question={SuggestedQuestions[1].question}
                                />
                                <Card
                                    className="card-instance"
                                    funFact="fun-fact-4.png"
                                    property1="default"
                                    topic={SuggestedQuestions[2].topic}
                                    question={SuggestedQuestions[2].question}
                                />
                                <Card
                                    className="card-instance"
                                    funFact="fun-fact-5.png"
                                    property1="default"
                                    topic={SuggestedQuestions[3].topic}
                                    question={SuggestedQuestions[3].question}
                                />
                            </div>
                            <div className="frame-8">
                                <Card
                                    className="card-instance"
                                    funFact="fun-fact-6.png"
                                    property1="default"
                                    topic={SuggestedQuestions[4].topic}
                                    question={SuggestedQuestions[4].question}
                                />
                                <Card
                                    className="card-instance"
                                    funFact="fun-fact-7.png"
                                    property1="default"
                                    topic={SuggestedQuestions[5].topic}
                                    question={SuggestedQuestions[5].question}
                                />
                                <Card
                                    className="card-instance"
                                    funFact="fun-fact-8.png"
                                    property1="default"
                                    topic={SuggestedQuestions[6].topic}
                                    question={SuggestedQuestions[6].question}
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
                    <Ask className="ask-instance" property1="default" aIResoponseArray={aIResoponseArray} setAIResponseArray={setAIResponseArray} inputValueArray={inputValueArray} setInputValueArray={setInputValueArray} />
                </div>
            </div>
        </div>
    );
};
