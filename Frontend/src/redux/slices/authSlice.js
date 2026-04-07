import { registerUser } from "./authServices"

export const register = createAsyncThunk("auth/register", registerUser);
export const login = createAsyncThunk("auth/login", loginUser);
const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.role = null;
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fullfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("role", action.payload.role);
        })

    }
});

export const { logout } = action.payload;
export default authSlice.reducer;