import React, {createContext, useReducer} from 'react';

const EventContext = createContext();

const initialState = {
    publishedEvents: []
}

const actions = {
    SET_PUBLISHED_EVENTS: 'SET_PUBLISHED_EVENTS',
    REMOVE_PUBLISHED_EVENT: 'REMOVE_PUBLISHED_EVENT',
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_PUBLISHED_EVENTS:
            return { ...state, 
                publishedEvents: action.value};
        case actions.REMOVE_PUBLISHED_EVENT:
            let filteredEvents = state.publishedEvents.filter(event => event.event_id != action.value);
            return { ...state,
                publishedEvents: filteredEvents};
        default:
            return state;
    }
}

function EventProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);
    const data = {
        publishedEvents: state.publishedEvents,
        setPublishedEvents: value => {
            dispatch({ type: actions.SET_PUBLISHED_EVENTS, value});
        },
        removePublishedEvent: value => {
            dispatch({ type: actions.REMOVE_PUBLISHED_EVENT, value});
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