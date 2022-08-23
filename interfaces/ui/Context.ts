export interface UIContextProps {
	menuOpen: boolean;
	showAdd: boolean;
	isDragging: boolean;

	openMenu: () => void;
	closeMenu: () => void;
	setShowAdd: (val: boolean) => void;
	setDragging: (val: boolean) => void;
}
