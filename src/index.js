import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
            <h2>Hola Bienvenido, soy Manuel.</h2>
    );
}
export default App;


if (document.getElementById('app')) {
ReactDOM.render(<App />, document.getElementById('app'));
}
