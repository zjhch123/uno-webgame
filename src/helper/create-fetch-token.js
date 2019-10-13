export function createFetchToken(targetURL, options = {}, jsonParse = true) {
  const controller = new window.AbortController();
  const { signal } = controller;

  const fetchPromise = window.fetch(targetURL, { ...options, signal })
    .then((raw) => (jsonParse ? raw.json() : raw));

  const abort = () => () => controller.abort();

  return [fetchPromise, abort];
}
