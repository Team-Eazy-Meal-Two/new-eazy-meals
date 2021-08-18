
/**
 * An action that can be passed to a button or a link. 
 * The first item in the array should be the label to use for the button/link.
 *  The second item is an action that should be performed when the link is clicked. If the second item is a string,
 * then users will be navigated to that URL, alternatively,
 *  if the second item is a function, then the function will be called as a callback when the button/link is pressed. 
 * Lastly, an optional third item can also be passed. This is simply an object that will be passed as the 
 * state to location object when navigating.
 * 
 * @typedef {[string, string | function, {}]} action
 */