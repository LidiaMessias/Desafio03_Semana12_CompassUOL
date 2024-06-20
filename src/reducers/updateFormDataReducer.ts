import { UPDATE_FORM_DATA } from "../action/updateFormDataAction";

const initialState = {
    formData: {},
};

const updateFormDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_FORM_DATA:
            return {
                ...state,
                formData: action.payload,
            };
    
        default:
            return state;
    }
};

export default updateFormDataReducer;