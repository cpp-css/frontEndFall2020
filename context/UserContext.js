import React, {createContext, useReducer} from 'react';

const UserContext = createContext();

const initialState = {
    authenticated: false,
    isAdmin: false,
    user: {},
    token: "",
    registeredEvents: [],
    groups: []
}

const actions = {
    SET_USER: 'SET_USER',
    SET_ADMIN: 'SET_ADMIN',
    SET_GROUPS: 'SET_GROUPS',
    SET_TOKEN: 'SET_TOKEN',
    SET_USER_ROLES: 'SET_USER_ROLES',
    REMOVE_USER_ROLES: 'REMOVE_USER_ROLES',
    REMOVE_GROUP: 'REMOVE_GROUP',
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
        case actions.SET_USER_ROLES:
            return { ...state, roles: action.value};
        case actions.REMOVE_USER_ROLES:
            let filteredRoles = state.registeredEvents.filter(role => role.organization_id != action.value);
            return { ...state, roles: filteredRoles}
        case actions.REMOVE_REGISTERED_EVENT:
            let filteredEvent = state.registeredEvents.filter(event => event.event_id != action.value);
            return {...state, registeredEvents: filteredEvent};
        case actions.SET_GROUPS:
            return { ...state, clubs: action.value};
        case actions.REMOVE_GROUP:
            let filteredGroup = state.registeredEvents.filter(group => group.organization_id != action.value);
            return {...state, clubs: filteredGroup};
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
        groups: state.groups,

        setToken: value => {
            dispatch({ type: actions.SET_TOKEN, value});
        },
        setUser: value => {
            dispatch({ type: actions.SET_USER, value});
        },
        setRegisteredEvents: value => {
            dispatch({ type: actions.SET_REGISTERED_EVENTS, value});
        },
        setGroups: value => {
            dispatch({ type: actions.SET_GROUPS, value});
        },
        setIsAdmin: value => {
            dispatch({ type: actions.SET_ADMIN, value});
        },
        removeRegisteredEvent: value => {
            dispatch({ type: actions.REMOVE_REGISTERED_EVENT, value });
        },
        removeGroup: value => {
            dispatch({ type: actions.REMOVE_GROUP, value });
        },
        setRoles: value => {
            console.log("ROLE: ", value);
            dispatch({ type: actions.SET_USER_ROLES, value});
        },
        removeRole: value => {
            dispatch({ type: actions.REMOVE_USER_ROLES, value});
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