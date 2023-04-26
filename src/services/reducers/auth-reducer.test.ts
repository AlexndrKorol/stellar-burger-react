import { RequestStatus } from "../../utils/request-status";
import {
  authLogin,
  authLogout,
  authRefresh,
  authRegister,
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
    const accessToken = "saffsdsd";
    const refreshToken = "ddgsgdsg";
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
});
