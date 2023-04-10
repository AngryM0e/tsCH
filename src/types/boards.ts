
export enum BoardsActionTypes {
	CREATE_THREAD = 'CREATE_THREAD',
}


export interface BoardsState {
	boards: any[];
}

interface CreateThread {
	type: BoardsActionTypes.CREATE_THREAD;
	payload: any[];
}

export type BoardsAction = CreateThread;
