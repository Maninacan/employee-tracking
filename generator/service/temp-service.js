export default function <%= name %>Service() {
  'ngInject'

  function getName() {
    return '<%= name %>';
  }

  return {
    getName
  };
}
