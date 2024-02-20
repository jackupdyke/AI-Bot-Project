import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./Card.css";
import lightbulb from './Icons/lightbulb.png';
import SuggestedQuestions from "./suggestedQuestions";

export const Card = ({ className, funFact = "fun-fact-2.png", topic, question, inputValueArray, setInputValueArray }) => {

    return (
        <div
            className={`card ${className}`}
            onClick={() => { setInputValueArray([...inputValueArray, SuggestedQuestions[0].question]) }}
        >
            <div className="frame">
                <img
                    className="fun-fact"
                    src={lightbulb}
                    alt="Fun fact"
                // src={
                //     state.property1 === "light"
                //         ? "fun-fact.png"
                //         : state.property1 === "hover"
                //             ? "fun-fact-3.png"
                //             : state.property1 === "variant-4"
                //                 ? "image.png"
                //                 : funFact
                // }
                />
                <div className="text-wrapper">{topic}</div>
            </div>
            <p className="div">{question}</p>
        </div>
    );
};

Card.propTypes = {
    property1: PropTypes.oneOf(["variant-4", "hover", "light", "default"]),
    funFact: PropTypes.string,
};
