import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type Group = {
    groupId: number,
    sub_group: string
}

type GroupState = {
    list: Group[]
}

const initialState: GroupState = {
    list: []
}

interface IGroup {
    groupId: number,
    sub_group: string
}

const sheduleCurrentSlice = createSlice({
    name: 'groups',
    initialState: {
        initialState
    },
    reducers: {
        getGroup(state, action: PayloadAction<IGroup>) {
            state.initialState.list.push({
                groupId: 2,
                sub_group: ''
            })
        }
    }
})

