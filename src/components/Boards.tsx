import { useTypedSelector } from '../hooks/useTypedSelector';


export default function Boards () {
	const state = useTypedSelector(state => state.boards.boards);
	console.log(state);

	return (
		<div className="boards">

		</div>
	)
};