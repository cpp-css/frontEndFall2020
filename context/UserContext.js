import React, {createContext, useReducer} from 'react';

const UserContext = createContext();

const initialState = {
    authenticated: false,
    name: "Jane Doe",
    major: "Computer Science",
    classLevel: "Freshmen",
    role:"",
    events: [],
    userEvents: [],
    userClubs: [],
    token: "",
    currentEvent: "",

}

const actions = {
    SET_USER_INFO:'SET_USER_INFO',

    SET_EVENTS: 'SET_EVENTS',
    ADD_EVENT: 'ADD_EVENT',
    EDIT_EVENT: 'EDIT_EVENT',
    SET_CURRENT_EVENT: 'SET_CURRENT_EVENT',

    SET_USER_EVENTS: 'SET_USER_EVENTS',
    ADD_USER_EVENT: 'ADD_USER_EVENT',
    SET_CLUBS: 'SET_CLUBS',
    SET_TOKEN: 'SET_TOKEN',
    REMOVE_USER_EVENT: 'REMOVE_USER_EVENT',
    REMOVE_CLUBS: 'REMOVE_CLUBS'
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_USER_INFO:
            return { ...state, role: action.value.roles[0].role, name:action.value.name, };
        case actions.SET_EVENTS:
            return { ...state, events: action.value };
        case actions.ADD_EVENT:
            return { ...state, events: [...state.events,action.value] };

        case actions.EDIT_EVENT:
            return { ...state, events: state.events.map((event) => {
                if (event.event_id !== action.value.event_id) {
                    return event
                  }
              
                  return {
                    ...action.value
                  }

            })
        };

        case actions.SET_CURRENT_EVENT:
            return { ...state, currentEvent: action.value };


        case actions.SET_USER_EVENTS:
            return { ...state, userEvents: action.value };
        case actions.ADD_USER_EVENT:
            return { ...state, userEvents: [...state.userEvents,action.value] };
        case actions.REMOVE_USER_EVENT:
            return { ...state, userEvents: state.userEvents.filter(userEvent => userEvent.event_id !== action.value) };
    
        case actions.SET_TOKEN:
            return { ...state, token: action.value };

        case actions.SET_CLUBS:
            return { ...state, userClubs: action.value };
        case actions.REMOVE_CLUBS:
            let clubList = JSON.stringify(action.value).split('\"');
            let clubName = clubList[clubList.length - 2];
            return { ...state, userClubs: state.userClubs.filter(currClubs => currClubs != clubName) };
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

        role:state.role,

        events: state.events,
        userEvents: state.userEvents,
        userClubs: state.clubs,
        token: state.token,

        currentEvent: state.currentEvent,

        setUserInfo: value => {
            dispatch({ type: actions.SET_USER_INFO, value});
        },

        setEvents: value => {
            dispatch({ type: actions.SET_EVENTS, value});
        },
        addEvent: value => {
            dispatch({ type: actions.ADD_EVENT, value});
        },

        editEvent: value => {
            dispatch({ type: actions.EDIT_EVENT, value});
        },

        setCurrentEvent: value => {
            dispatch({ type: actions.SET_CURRENT_EVENT, value});
        },


        setUserEvents: value => {
            dispatch({ type: actions.SET_USER_EVENTS, value});
        },
        addUserEvent: value => {
            dispatch({ type: actions.ADD_USER_EVENT, value});
        },
        removeUserEvent: value => {
            dispatch({ type: actions.REMOVE_USER_EVENT, value });
        },

        setToken: value => {
            dispatch({ type: actions.SET_TOKEN, value});
        },
        
        setUserClubs: value => {
            dispatch({ type: actions.SET_CLUBS, value});
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