export function define(data) {
  return {
    type: '@climate/DEFINE',
    payload: data,
  };
}

export function request(data) {
  return {
    type: '@climate/REQUEST',
    payload: data,
  };
}

export function requestLocation() {
  return {
    type: '@climate/REQUEST_LOCATION',
  };
}

export function requestError() {
  return {
    type: '@climate/REQUEST_ERROR',
  };
}
