import React, {createContext, useReducer} from 'react';

const UserContext = createContext();

const initialState = {
    authenticated: false,
    name: "Jane Doe",
    major: "Computer Science",
    classLevel: "Freshmen",
    userEvents: [],
    userClubs: []
}

const actions = {
    SET_EVENTS: 'SET_EVENTS',
    SET_CLUBS: 'SET_CLUBS'
}

function reducer(state, action) {
    console.log("CHECKK")
    switch(action.type) {
        case actions.SET_EVENTS:
            console.log("PASSSSSS");
            return { ...state, userEvents: action.value };
        case actions.SET_CLUBS:
            return { ...state, userClubs: action.value };
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
        setUserEvents: value => {
            dispatch({ type: actions.SET_EVENTS, value});
        },
        setUserClubs: value => {
            dispatch({ type: actions.SET_CLUBS, value});
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