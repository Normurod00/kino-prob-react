import './app.css';
import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../searche-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import MovieList from '../movie-list/movie-list';
import MoviesAddForm from '../movies-add-form/movies-add-form';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'Empire of Osman', viewers: 965, favorite: false, like: false, id: 1 },
                { name: 'Temur', viewers: 1965, favorite: false, like: true, id: 2 },
                { name: 'Osman', viewers: 565, favorite: true, like: false, id: 3 }
            ],
        };
    }

    onDelete = id => {
        this.setState(({ data }) => ({
            data: data.filter(c => c.id !== id),
        }));
    }

    addForm = item => {
        const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favorite: false, like: false };
        this.setState(({ data }) => ({
            data: [...data, newItem]
        }));
    }

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] };
                }
                return item;
            })
        }));
    }

    render() {
        const { data } = this.state;
        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo />
                    <div className='search-panel'>
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList
                        onToggleProp={this.onToggleProp}
                        data={data}
                        onDelete={this.onDelete}
                    />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        );
    }
}

export default App;
