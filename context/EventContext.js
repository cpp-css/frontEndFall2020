import React, {createContext, useReducer} from 'react';

import dummyEvents from '../data/events';

const EventContext = createContext();

const initialState = {
    allEvents: dummyEvents
}

const actions = {
    SET_EVENTS: 'SET_EVENTS',
    REMOVE_EVENT: 'REMOVE_EVENT',
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_EVENTS:
            return { ...state, 
                allEvents: action.value};
        default:
            return state;
    }
}

function EventProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        allEvents: state.allEvents,
        setEvents: value => {
            dispatch({ type: actions.SET_EVENTS, value});
        }
    }

    return (
        <EventContext.Provider value={data}>
            {children}
        </EventContext.Provider>
    )
}

export {
    EventContext,
    EventProvider
}