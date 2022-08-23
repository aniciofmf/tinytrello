import { UIState } from "../../interfaces/ui/State";

type ACTIONTYPE = { type: string; payload: boolean };

export const UIReducer = (state: UIState, action: ACTIONTYPE): UIState => {
	switch (action.type) {
		case "OPEN_SIDEMENU":
			return {
				...state,
				menuOpen: true,
			};

		case "CLOSE_SIDEMENU":
			return {
				...state,
				menuOpen: false,
			};

		case "ADD_TASK":
			return {
				...state,
				showAdd: action.payload,
			};
		case "IS_DRAGGING":
			return {
				...state,
				isDragging: action.payload,
			};

		default:
			return state;
	}
};
