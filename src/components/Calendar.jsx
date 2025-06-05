import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>

                {/*  Body of table  */}
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event
                            event="Starbucks ☕️"
                            color="green"
                            location="Miami"
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Yolk 🍳" color="green" />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event
                            event="Subway 🚊"
                            color="pink"
                            location="New York"
                        />
                        <td></td>
                        <td></td>
                        <Event event="The Bean 🫘" color="blue" />
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event
                            event="River Cruise 🌊"
                            color="blue"
                            location="Washington"
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event
                            event="Deep Dish 🍕"
                            color="green"
                            location="Chicago"
                        />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event
                            event="Subway 🚉"
                            color="pink"
                            location="Mineapolis"
                        />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event
                            event="Art Institute 🖼"
                            color="blue"
                            location="Berlin"
                        />
                        <td></td>
                        <Event event="Girl & the Goat" color="green" />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event="Cubs Game ⚾" color="blue" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event
                            event="Subway 🚉"
                            color="pink"
                            location="France"
                        />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Event event="Fancy Dinner 🎩" color="green" />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="Shopping 👜" color="blue" />
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
