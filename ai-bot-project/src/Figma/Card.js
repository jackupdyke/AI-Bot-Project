import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./Card.css";

export const Card = ({ property1, className, funFact = "fun-fact-2.png" }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`card ${state.property1} ${className}`}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
        >
            <div className="frame">
                <img
                    className="fun-fact"
                    alt="Fun fact"
                    src={
                        state.property1 === "light"
                            ? "fun-fact.png"
                            : state.property1 === "hover"
                                ? "fun-fact-3.png"
                                : state.property1 === "variant-4"
                                    ? "image.png"
                                    : funFact
                    }
                />
                <div className="text-wrapper">Topic</div>
            </div>
            <p className="div">Lorem ipsum dolor sit amet consectetur. At et id diam leo in sit ullamcorper ornare.</p>
        </div>
    );
};

function reducer(state, action) {
    if (state.property1 === "default") {
        switch (action) {
            case "mouse_enter":
                return {
                    property1: "hover",
                };
        }
    }

    if (state.property1 === "hover") {
        switch (action) {
            case "mouse_leave":
                return {
                    property1: "default",
                };
        }
    }

    if (state.property1 === "light") {
        switch (action) {
            case "mouse_enter":
                return {
                    property1: "variant-4",
                };
        }
    }

    if (state.property1 === "variant-4") {
        switch (action) {
            case "mouse_leave":
                return {
                    property1: "light",
                };
        }
    }

    return state;
}

Card.propTypes = {
    property1: PropTypes.oneOf(["variant-4", "hover", "light", "default"]),
    funFact: PropTypes.string,
};
