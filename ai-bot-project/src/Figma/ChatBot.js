import React from "react";
import { Ask } from "./Ask";
import { Card } from "./Card";
import chat from './Icons/chat.png';
import "./ChatBot.css";
import bot from './Icons/bot.png';

export const Desktop = () => {

    const [aIResoponse, setAIResponse] = React.useState("");

    return (
        <div className="desktop">
            {/* <img className="img" alt="Frame" src="frame-14.svg" /> */}
            <div className="frame-4">
                <div className="frame-5">
                    <div className="element-wrapper">
                        <img className="element" src={bot} />
                    </div>
                    <div className="div-wrapper">
                        <p className="p">GPT Chat Bot is your AI-powered copilot for the web</p>
                    </div>
                </div>
                <div className="frame-6">
                    <div className="frame-7">
                        <Card className="card-instance" funFact="fun-fact-2.png" property1="default" />
                        <Card className="card-instance" funFact="fun-fact-3.png" property1="default" />
                        <Card className="card-instance" funFact="fun-fact-4.png" property1="default" />
                        <Card className="card-instance" funFact="fun-fact-5.png" property1="default" />
                    </div>
                    <div className="frame-8">
                        <Card className="card-instance" funFact="fun-fact-6.png" property1="default" />
                        <Card className="card-instance" funFact="fun-fact-7.png" property1="default" />
                        <Card className="card-instance" funFact="fun-fact-8.png" property1="default" />
                    </div>
                </div>
                <div>
                    <p>{aIResoponse}</p>
                </div>
                <div className="frame-9">
                    <div className="frame-10">
                        <img
                            className="chat-icon"
                            src={chat}

                        />
                        <div className="text-wrapper-4">New topic</div>
                    </div>
                    <Ask
                        className="ask-instance"
                        property1="default"
                        setAIResponse={aIResoponse}
                    />
                </div>
            </div>
        </div>
    );
};
