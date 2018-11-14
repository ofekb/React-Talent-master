# LIFE CYCLE - class component in react

NOTE: all the function are returning void value, beside the  `constructor`,`render` and `shouldComponentUpdate` 

## See live demo:
https://fierce-inlet-87856.herokuapp.com/app17


### When component starts: (executed only once per lifecycle)

* `constructor`- if we implement the constructor we have to accept the props as parameter, and pass it to super

* `componentWillMount` - is executed after the constructor, before the first render

* `render` - will return the JSX to display in the html page

* `componentDidMount` - is executed after the first render


### While component is displayed: (executed every time when the DOM is updated)

* `shouldComponentUpdate` - can cancel the update by returning "false" value

* `componentWillUpdate`

* `render` - will return the JSX to display in the html page

* `componentDidUpdate`


### When component is destroyed: (executed only once per lifecycle)

* `componentWillUnmount`








