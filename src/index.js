async function getComponent() {
  const { default: _ } = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack'], '');
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
