import React from "react";

const Event = (props) => {
    return (
        <td className="Event " style={{ backgroundColor: props.color }}>
            <h5>{props.event}</h5>
        </td>
    );
};

export default Event;
