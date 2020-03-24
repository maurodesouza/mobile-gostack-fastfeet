export function signInRequest(id) {
  return {
    type: '@user/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(profile) {
  return {
    type: '@user/SIGN_IN_SUCCESS',
    payload: { profile },
  };
}

export function signFailure() {
  return {
    type: '@user/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@user/SIGN_OUT',
  };
}
