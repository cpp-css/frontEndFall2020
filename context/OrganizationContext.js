import React, { createContext, useReducer } from 'react';

const OrganizationContext = createContext();

const initialState = {
    orgs: [],
}

const actions = {
    SET_ORGS: 'SET_ORGS',
    REMOVE_ORG: 'REMOVE_ORG'
}

function reducer(state, action) {
    switch(action.type) {
        case actions.SET_ORGS:
            return { ...state, 
                orgs: action.value};
        case actions.REMOVE_ORG:
            let filteredOrgs = state.publishedEvents.filter(org => org.organization_id != action.value);
            return { ...state,
                orgs: filteredOrgs};
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
        },
        removeOrg: value => {
            dispatch({ type: actions.REMOVE_ORG, value});
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