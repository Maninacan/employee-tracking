import deepEqual from 'deep-equal';
import lodash from 'lodash';

export const createState = (stateModifier, initialState) => {
  let state = initialState ? initialState : null,
    listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    const previousState = state;
    state = stateModifier(state, action);
    logAction(previousState, state, action);
    listeners.forEach(listener => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

export const combineStateModifiers = (stateModifiers) => {
  return (state = {}, action) => {
    return Object.keys(stateModifiers).reduce(
      (nextState, key) => {
        nextState[key] = stateModifiers[key](
          state[key],
          action
        );

        return nextState;
      },
      {}
    );
  };
};

/**
 * Pleasant logging of a state change to the console
 * @function logAction
 * @param prevState
 * @param currentState
 * @param action
 */
function logAction(prevState, currentState, action) {
  const uniqueSubtrees = getUniqueSubtrees(prevState, currentState);

  console.groupCollapsed(action.type);

  const prevStateKeys = Object.keys(uniqueSubtrees.tree1);
  console.info('Previous state');
  prevStateKeys.every(key => {
    console.group(key);
    console.log(uniqueSubtrees.tree1[key]);
    console.groupEnd();
  });

  console.info('Action');
  console.group('Action');
  console.log(action);
  console.groupEnd();

  const currentStateKeys = Object.keys(uniqueSubtrees.tree2);
  console.info('Current state');
  currentStateKeys.every(key => {
    console.group(key);
    console.log(uniqueSubtrees.tree2[key]);
    console.groupEnd();
  });

  console.groupEnd();
}

function getUniqueSubtrees(t1, t2) {
  if (t1.constructor !== Object || t2.constructor !== Object) {
    throw Error('Both arguments expected to by of type Object');
  }
  const uniqueSubtrees = {tree1: {}, tree2: {}},
    t1Keys = Object.keys(t1),
    t2Keys = Object.keys(t2),
    allKeys = lodash.union(t1Keys, t2Keys),
    keysOfUniqueSubtrees = allKeys.filter(key => {
      return !deepEqual(t1[key], t2[key]);
    });

  keysOfUniqueSubtrees.forEach(key => {
    if (t1[key] && t2[key] && t1[key].constructor === Object && t2[key].constructor === Object) {
      const newUniqueSubtrees = getUniqueSubtrees(t1[key], t2[key]);
      uniqueSubtrees.tree1[key] = newUniqueSubtrees.tree1;
      uniqueSubtrees.tree2[key] = newUniqueSubtrees.tree2;
    } else {
      uniqueSubtrees.tree1[key] = t1[key];
      uniqueSubtrees.tree2[key] = t2[key];
    }
  });
  return uniqueSubtrees;
}
