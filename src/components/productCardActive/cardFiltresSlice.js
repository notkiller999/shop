import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const cardActiveAdaptor = createEntityAdapter();

const initialState = cardActiveAdaptor.getInitialState({
    cardActivity: {}
})

export const activeCardFetch = createAsyncThunk(

    'activeCard/dataFetching',
    (id) => {
        const { request } = useHttp();
        return request(`http://localhost:3001/hits/${id}`)
    }
)


const cardActiveSlice = createSlice({
    name: 'activeCard',
    initialState,
    reducers: {  
        changeActiveColor: (state, action) => {
            state.cardActivity[action.payload.id].color = action.payload.color
        },
        changeActiveSize: (state, action) => {
            state.cardActivity[action.payload.id].size = action.payload.size
        }
       
    },
    extraReducers: (builder) => {
        builder
            .addCase(activeCardFetch.pending, (state, action) => {                 
                state.cardActivity[action.meta.arg] = {status: 'loading'}
            })
            .addCase(activeCardFetch.fulfilled, (state, action) => {
                const color = Object.keys(action.payload.colors)[0]
                state.cardActivity[action.payload.id] = {
                    status: 'done',
                    color: color,
                    size: action.payload.colors[color].sizes[0]
                }
                cardActiveAdaptor.addOne(state, {id: action.payload.id, ...action.payload.colors})
                
            })
            .addCase(activeCardFetch.rejected, (state, action) => {state.cardActivity[action.payload.id] = {status: 'error'}})
    }
})

const { reducer, actions } = cardActiveSlice;

export const {selectIds, selectById} = cardActiveAdaptor.getSelectors(state => state.activeCard)

export default reducer;

export const {addData, addActiveColor, changeActiveColor, changeActiveSize} = actions;