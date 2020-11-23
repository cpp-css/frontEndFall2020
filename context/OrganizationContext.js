import React, {createContext, useReducer} from 'react';

const OrganizationContext = createContext();

const initialState = {
    orgs: [],
}

const actions = {
    SET_ORGS: 'SET_ORGS',
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_ORGS:
            return { ...state, 
                orgs: action.value};
        default:
            return state;
    }
}

function OrganizationProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        orgs: state.orgs,
        setOrgs: value => {
            dispatch({ type: actions.SET_ORGS, value});
        }
    }

    return (
        <OrganizationContext.Provider value={data}>
            {children}
        </OrganizationContext.Provider>
    )
}

export {
    OrganizationContext,
    OrganizationProvider
}