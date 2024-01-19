import React from "react";
import { Ask } from "./Ask";
import { Card } from "./Card";
import { EtChat } from "./EtChat";
import { IconParkOutlineVoice } from "./IconParkOutlineVoice";
import { Send } from "./Send";
import "./ChatBot.css";

export const Desktop = () => {
    return (
        <div className="desktop">
            <img className="img" alt="Frame" src="frame-14.svg" />
            <div className="frame-4">
                <div className="frame-5">
                    <div className="element-wrapper">
                        <img className="element" alt="Element" src="1700166831877-removebg-preview-1-1.png" />
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
                <div className="frame-9">
                    <div className="frame-10">
                        <EtChat className="et-chat" />
                        <div className="text-wrapper-4">New topic</div>
                    </div>
                    <Ask
                        className="ask-instance"
                        icon={<IconParkOutlineVoice className="icon-park-outline-voice" />}
                        override={<Send className="icon-instance-node" />}
                        property1="default"
                    />
                </div>
            </div>
        </div>
    );
};