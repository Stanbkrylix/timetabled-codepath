import React from "react";

const Event = (props) => {
    return (
        <td className="Event " style={{ backgroundColor: props.color }}>
            <h5>{props.event}</h5>
            <p>{props.location && props.location}</p>
        </td>
    );
};

export default Event;
