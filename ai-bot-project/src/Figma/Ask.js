import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { IconComponentNode } from "./IconComponentNode";
import { NamecandidateNameSendScore101 } from "./NamecandidateNameSendScore101";
import "./Ask.css";

export const Ask = ({
    property1,
    className,
    icon = <IconComponentNode className="icon-park-outline" />,
    override = <NamecandidateNameSendScore101 className="send-instance" color="url(#paint0_linear_4_78)" />,
}) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`ask ${state.property1} ${className}`}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
        >
            <div className="frame">
                <div className="text-wrapper">Ask me anything...</div>
                {icon}
            </div>
            <div className="div">
                <div className="text-wrapper-2">0/4000</div>
                {override}
            </div>
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
                    property1: "light-hover",
                };
        }
    }

    if (state.property1 === "light-hover") {
        switch (action) {
            case "mouse_leave":
                return {
                    property1: "light",
                };
        }
    }

    return state;
}

Ask.propTypes = {
    property1: PropTypes.oneOf(["hover", "light-hover", "light", "default"]),
};
