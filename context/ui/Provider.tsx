import { FC, ReactNode, useReducer } from "react";

import { UIContext, UIReducer } from "./";
import { UIState } from "../../interfaces";

const INITIAL_STATE: UIState = {
	menuOpen: false,
	showAdd: false,
	isDragging: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useReducer(UIReducer, INITIAL_STATE);

	const openMenu = () => {
		dispatch({ type: "OPEN_SIDEMENU", payload: false });
	};

	const closeMenu = () => {
		dispatch({ type: "CLOSE_SIDEMENU", payload: false });
	};

	const setShowAdd = (show: boolean) => {
		dispatch({ type: "ADD_TASK", payload: show });
	};

	const setDragging = (dragging: boolean) => {
		dispatch({ type: "IS_DRAGGING", payload: dragging });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				openMenu,
				closeMenu,
				setShowAdd,
				setDragging,
			}}
		>
			{children}
		</UIContext.Provider>
	);
};
