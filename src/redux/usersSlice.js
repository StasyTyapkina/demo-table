import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: nanoid(),
      name: "Frozen Yoghurt",
      email: "email1@gmail.com",
      phone: "1111-1111",
      info: "Lorem ipsum dolor sit amet. Eos facilis omnis aut ipsum alias et autem repellat est deleniti aliquam hic omnis temporibus sit dolorem neque. Qui numquam incidunt eum temporibus eius id inventore cupiditate ut voluptatem perferendis qui blanditiis adipisci aut laboriosam exercitationem. Et delectus consequatur est quae fuga hic omnis illum ut laudantium vero et Quis possimus.",
    },
    {
      id: nanoid(),
      name: "Ice Cream",
      email: "email2@gmail.com",
      phone: "2222-2222",
      info: "Et quos autem eos veniam Quis non atque sint. Nam illo laboriosam non nihil assumenda At error labore id magnam dolorem. Aut quia voluptatem aut deserunt nemo sed optio nihil At doloremque error ut sequi facere.",
    },
    {
      id: nanoid(),
      name: "Eclair Moor",
      email: "email3@gmail.com",
      phone: "3333-3333",
      info: "Eos blanditiis corrupti quo cupiditate consequatur aut facere deleniti vel maxime praesentium cum molestias animi est deleniti voluptates et commodi saepe. Et neque ipsam non facere dicta ad impedit maxime id ratione accusantium ea placeat iusto et sint iste.",
    },
  ],
  searchLine: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        id: nanoid(),
        ...action.payload,
      });
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    editUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },

    setSearchLine: (state, action) => {
      state.searchLine = action.payload;
    },
  },
});

export const { addUser, deleteUser, editUser, setSearchLine } =
  usersSlice.actions;

export const usersReducer = usersSlice.reducer;
