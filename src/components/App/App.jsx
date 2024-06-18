import './App.css';
import Nav from '../Nav/Nav.jsx';
import About from '../About/About.jsx';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
        <div className="App">
            <header>
                <h1>GitHub Student List</h1>
                {/* Nice spot for a nav, eh? */}
                <Nav />
            </header>
        <Route>
            <About path='/about'/>
         </Route>

        <Route path='/home' >
            <StudentForm />
        </Route>
        <Route path='/students'>
            <StudentList />
        </Route>
        </div>
        </Router>
    );
}


export default App;
