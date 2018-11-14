# Pizza-store project in react

## Project goals:
* Create a new app with `create-react-app`
* pass props to component
* compose component
* class component VS function component

## To run this project in local dev mode:
* run in the node cli (the must to be in the project folder ):
```bash
npm i
```

* run the project in your browser:
```bash
npm start
```
## Content of `Component` class (from react package)
```javascript
 class Component {

        constructor(props: Readonly);
    
        //-------------METHODS--------------
        setState(state,callback): void;
        render(): ReactNode;


        //-------------PROPERTIES--------------
        readonly props: Readonly<{ children? }>;
        state: Readonly;
        refs: { [key: string]: ReactInstance };
    }  
```
* open the browser in `http://localhost:3000/` and see the following result:
![picture](screenshot.png)


