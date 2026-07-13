export function queryElement(root, selector) {
  const element = root.querySelector(selector);

  if (!element) {
    throw new Error(`Required element was not found: ${selector}`);
  }

  return element;
}

export function queryElements(root, selector) {
  return [...root.querySelectorAll(selector)];
}
