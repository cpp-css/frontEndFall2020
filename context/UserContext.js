import React, {createContext, useReducer} from 'react';

const UserContext = createContext();

const initialState = {
    authenticated: false,
    name: "Jane Doe",
    major: "Computer Science",
    classLevel: "Freshmen",
    userEvents: [],
    userClubs: [],
    token: ""
}

const actions = {
    SET_EVENTS: 'SET_EVENTS',
    SET_CLUBS: 'SET_CLUBS',
    SET_TOKEN: 'SET_TOKEN',
    REMOVE_EVENTS: 'REMOVE_EVENTS',
    REMOVE_CLUBS: 'REMOVE_CLUBS'
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_EVENTS:
            return { ...state, userEvents: action.value };
        case actions.SET_CLUBS:
            return { ...state, userClubs: action.value };
        case actions.SET_TOKEN:
            return { ...state, token: action.value };
        case actions.REMOVE_EVENTS:
            let eventList = JSON.stringify(action.value).split('\"');
            let eventName = eventList[eventList.length - 2];
            return { userEvents: state.userEvents.filter(currEvent => currEvent != eventName) };
        case actions.REMOVE_CLUBS:
            let clubList = JSON.stringify(action.value).split('\"');
            let clubName = clubList[clubList.length - 2];
            return { userClubs: state.userClubs.filter(currClubs => currClubs != clubName) };
        default:
            return state;
    }
}

function UserProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        authenticated: state.authenticated,
        name: state.name,
        major: state.major,
        classLevel: state.classLevel,
        userEvents: state.userEvents,
        userClubs: state.clubs,
        token: state.token,
        setUserEvents: value => {
            dispatch({ type: actions.SET_EVENTS, value});
        },
        setUserClubs: value => {
            dispatch({ type: actions.SET_CLUBS, value});
        },
        setToken: value => {
            dispatch({ type: actions.SET_TOKEN, value});
        },
        removeUserEvents: value => {
            dispatch({ type: actions.REMOVE_EVENTS, value });
        },
        removeUserClubs: value => {
            dispatch({ type: actions.REMOVE_CLUBS, value });
        }
    }

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider
}