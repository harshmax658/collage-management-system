function* MakeRequest(url, type, data) {
  let response;
  if (type === "Post" || type === "Delete") {
    response = yield fetch(url, {
      method: type,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } else {
    response = yield fetch(url);
  }

  return response;
}

export default MakeRequest;
