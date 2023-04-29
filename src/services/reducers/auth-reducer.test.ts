import { RequestStatus } from "../../utils/request-status";
import {
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
  authUser,
  patchUser,
  slice,
} from "./auth";

describe("auth reducer", () => {
  it("getInitialState", () => {
    const nextState = slice.reducer(undefined, { type: "" });

    expect(nextState).toEqual(slice.getInitialState());
  });

  it("setReturnUrl", () => {
    const nextState = slice.reducer(
      undefined,
      slice.actions.setReturnUrl("/profile")
    );

    expect(nextState).toEqual({
      ...slice.getInitialState(),
      returnUrl: "/profile",
    });
  });

  it("setRestoreOk", () => {
    const nextState = slice.reducer(undefined, slice.actions.setRestoreOk());

    expect(nextState).toEqual({
      ...slice.getInitialState(),
      restoreOk: true,
    });
  });
});

describe("auth extraReducers", () => {
  it("authRegister.fulfilled", () => {
    const accessToken = "saffsdsd";
    const refreshToken = "ddgsgdsg";
    const user = {
      email: "no@email.ru",
      name: "myname",
    };

    const action = authRegister.fulfilled(
      {
        accessToken,
        refreshToken,
        success: true,
        user,
      },
      "auth/register",
      {
        email: "",
        name: "",
        password: "",
      }
    );

    const nextState = slice.reducer(undefined, action);

    expect(nextState).toEqual({
      ...slice.getInitialState(),
      accessToken,
      refreshToken,
      user,
    });
  });
  it("authLogin.fulfilled", () => {
    const accessToken = "saffsdsd";
    const refreshToken = "ddgsgdsg";
    const user = {
      email: "no@email.ru",
      name: "myname",
    };

    const action = authLogin.fulfilled(
      {
        accessToken,
        refreshToken,
        success: true,
        user,
      },
      "auth/register",
      {
        email: "",
        password: "",
      }
    );

    const nextState = slice.reducer(undefined, action);

    expect(nextState).toEqual({
      ...slice.getInitialState(),
      accessToken,
      refreshToken,
      user,
    });
  });
  it("authRefresh.fulfilled", () => {
    const accessToken = "accToken";
    const refreshToken = "refToken";
    const action = authRefresh.fulfilled(
      {
        accessToken,
        refreshToken,
        success: true,
      },
      "auth/refresh"
    );

    const nextState = slice.reducer(undefined, action);

    expect(nextState).toEqual({
      ...slice.getInitialState(),
      accessToken,
      refreshToken,
    });
  });
  it("authLogout.fulfilled", () => {
    const action = authLogout.fulfilled(
      { success: true, message: "ok" },
      "auth/logout"
    );

    const nextState = slice.reducer(
      {
        ...slice.getInitialState(),
        accessToken: "prev-access-token",
        refreshToken: "prev-refresh-token",
        status: RequestStatus.SUCCESS,
        user: {
          name: "name",
          email: "email",
        },
      },
      action
    );

    expect(nextState).toMatchObject({
      accessToken: "",
      refreshToken: "",
      user: null,
      status: RequestStatus.INITIAL,
    });
  });
  it("authUser.pending", () => {
    const action = authUser.pending("auth/user");

    const nextState = slice.reducer(
      {
        ...slice.getInitialState(),
        status: RequestStatus.PENDING,
      },
      action
    );

    expect(nextState).toMatchObject({
      status: RequestStatus.PENDING,
    });
  });
  it("authUser.fullfiled", () => {
    const action = authUser.fulfilled(
      {
        user: {
          name: "name",
          email: "email",
        },
        success: true,
      },
      "auth/user"
    );

    const nextState = slice.reducer(
      {
        ...slice.getInitialState(),
        accessToken: "",
        refreshToken: "",
        status: RequestStatus.SUCCESS,
        user: {
          name: "name",
          email: "email",
        },
      },
      action
    );

    expect(nextState).toMatchObject({
      accessToken: "",
      refreshToken: "",
      user: {
        name: "name",
        email: "email",
      },
      status: RequestStatus.SUCCESS,
    });
  });
  it("authUser.rejected", () => {
    const action = authUser.rejected(
      {
        name: "Error",
        message: "error",
      },
      "auth/user"
    );

    const nextState = slice.reducer(
      {
        ...slice.getInitialState(),
        status: RequestStatus.ERROR,
      },
      action
    );

    expect(nextState).toEqual({
      accessToken: "",
      refreshToken: "",
      restoreOk: false,
      returnUrl: "",
      user: null,
      status: RequestStatus.ERROR,
    });
  });
  it("authRefresh.rejected", () => {
    const action = authRefresh.rejected(
      {
        name: "Error",
        message: "error",
      },
      "auth/refresh"
    );

    const nextState = slice.reducer(
      {
        ...slice.getInitialState(),
        status: RequestStatus.ERROR,
      },
      action
    );

    expect(nextState).toEqual({
      accessToken: "",
      refreshToken: "",
      restoreOk: false,
      returnUrl: "",
      user: null,
      status: RequestStatus.ERROR,
    });
  });

  it("patchUser.fulfilled", () => {
    const user = { name: "name", email: "email" };
    const action = patchUser.fulfilled(
      { user, success: true },
      "auth/patchUser",
      { name: "", email: "", password: "" }
    );

    const nextState = slice.reducer(
      {
        ...slice.getInitialState(),
        user: null,
      },
      action
    );

    expect(nextState).toMatchObject({
      user,
    });
  });
});
