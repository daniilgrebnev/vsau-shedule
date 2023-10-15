import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Group = {
	groupId: string
	groupName: string
}

type GroupState = {
	list: Group[]
}

const initialState: GroupState = {
	list: [],
}

interface IGroup {
	groupId: string
	groupName: string
}

const sheduleCurrentSlice = createSlice({
	name: 'groups',
	initialState: {
		initialState,
	},
	reducers: {
		getGroup(state, action: PayloadAction<IGroup>) {
			state.initialState.list.push({
				groupId: action.payload.groupId,
				groupName: action.payload.groupName,
			})
			localStorage.setItem('groupId', action.payload.groupId)
			localStorage.setItem('groupName', action.payload.groupName)
		},
	},
})

export const { getGroup } = sheduleCurrentSlice.actions
export default sheduleCurrentSlice.reducer
