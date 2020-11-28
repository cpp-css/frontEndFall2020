import React, {createContext, useReducer} from 'react';

const UserContext = createContext();

const initialState = {
    authenticated: false,
    isAdmin: false,
    user: {},
    token: "",
    registeredEvents: [],
    clubs: []
}

const actions = {
    SET_USER: 'SET_USER',
    SET_ADMIN: 'SET_ADMIN',
    SET_CLUBS: 'SET_CLUBS',
    SET_TOKEN: 'SET_TOKEN',
    REMOVE_CLUBS: 'REMOVE_CLUBS',
    SET_REGISTERED_EVENTS: 'SET_REGISTERED_EVENTS',
    REMOVE_REGISTERED_EVENT: 'REMOVE_REGISTERED_EVENT',
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_USER:
            return {...state, user: action.value};
        case actions.SET_EVENTS:
            return { ...state, userEvents: action.value };
        case actions.SET_REGISTERED_EVENTS:
            return { ...state, registeredEvents: action.value };
        case actions.SET_TOKEN:
            return { ...state, token: action.value};
        case actions.SET_ADMIN:
            return { ...state, isAdmin: action.value};
        case actions.REMOVE_REGISTERED_EVENT:
            let filteredEvent = state.registeredEvents.filter(event => event.event_id != action.value);
            return {...state, registeredEvents: filteredEvent};
        case actions.REMOVE_CLUBS:
            //let clubList = JSON.stringify(action.value).split('\"');
            //let clubName = clubList[clubList.length - 2];
            //return { userClubs: state.userClubs.filter(currClubs => currClubs != clubName) };
            return {...state}
        default:
            return state;
    }
}

function UserProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        authenticated: state.authenticated,
        name: state.user.name,
        roles: state.user.roles,
        token: state.token,
        isAdmin: state.isAdmin,
        registeredEvents: state.registeredEvents,
        clubs: state.registeredOrganization,

        setToken: value => {
            dispatch({ type: actions.SET_TOKEN, value});
        },
        setUser: value => {
            dispatch({ type: actions.SET_USER, value});
        },
        setRegisteredEvents: value => {
            console.log(value);
            dispatch({ type: actions.SET_REGISTERED_EVENTS, value});
        },
        setClubs: value => {
            dispatch({ type: actions.SET_CLUBS, value});
        },
        setIsAdmin: value => {
            dispatch({ type: actions.SET_ADMIN, value});
        },
        removeRegisteredEvent: value => {
            dispatch({ type: actions.REMOVE_REGISTERED_EVENT, value });
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