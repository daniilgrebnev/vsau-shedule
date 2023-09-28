import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type Group = {
    groupId: string,
    subGroup: string
}

type GroupState = {
    list: Group[]
}

const initialState: GroupState = {
    list: []
}

interface IGroup {
    groupId: string,
    subGroup: string
}

const sheduleCurrentSlice = createSlice({
    name: 'groups',
    initialState: {
        initialState
    },
    reducers: {
        getGroup(state, action: PayloadAction<IGroup>) {
            state.initialState.list.push({
                groupId: action.payload.groupId,
                subGroup: action.payload.subGroup
            })
            localStorage.setItem('groupId', action.payload.groupId)
            localStorage.setItem('subGroup', action.payload.subGroup)
        }
    }
})

export const {getGroup} = sheduleCurrentSlice.actions
export default sheduleCurrentSlice.reducer