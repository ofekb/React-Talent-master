import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

ReactDOM.render(<div>
    <table border="1">
        <tbody>
            {/*here we loop in nested map to craete a mul table*/}
            {arr.map(e1 => <tr>{arr.map(e2 => <td>{e1 * e2}</td>)}</tr>)}
        </tbody>
    </table>
</div>, document.getElementById('root'));
registerServiceWorker();
