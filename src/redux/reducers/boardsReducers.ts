import { BoardsAction, BoardsActionTypes, BoardsState } from '../../types/boards'

export const initialState = {
	boards: [
		{
			id: 1,
			boardname: 'Pol',
			threads: [
				{	id: 11,
					threadName: 'Thread 1',
					posts: [
						{
							id: 111,
							post: 'Hello 1',
							ratio: 0,
						},
						{	
							id: 112,
							post: 'Hello 2',
							ratio: 0,
						},
						{	
							id: 113,
							post: 'Hello 3',
							ratio: 0,
						},
						{	
							id: 114,
							post: 'Hello 4',
							ratio: 0,
						}
					]
				},
				{	
					id: 12,
					threadName: 'Thread 2',
					posts: [
						{	
							id: 121,
							post: 'WTF 1',
							ratio: 0,
						},
						{	id: 122,
							post: 'WTF 2',
							ratio: 0,
						},
						{	id: 123,
							post: 'WTF 3',
							ratio: 0,
						},
						{	id: 124,
							post: 'WTF 4',
							ratio: 0,
						}
					]
				},
				{	
					id: 13,
					threadName: 'Thread 3',
					posts: [
						{	
							id: 131,
							post: '1 hundred bucks',
							ratio: 0,
						},
						{	
							id: 132,
							post: '2 hundred bucks',
							ratio: 0,
						},
						{
							id: 133,
							post: '3 hundred bucks',
							ratio: 0,
						},
						{
							id: 134,
							post: '4 hundred bucks',
							ratio: 0,
						}
					]
				}

			]
		}
	],
}


export default function boardsReducer(state = initialState, action: BoardsAction): BoardsState {
	switch (action.type) {
		case BoardsActionTypes.CREATE_THREAD:
			return{boards: []}
		default: 
			return state
	} 

}
