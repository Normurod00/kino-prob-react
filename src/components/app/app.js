import './app.css'
import { Component } from 'react'
import AppInfo from '../app-info/app-info'
import SearchPanel from '../searche-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { name: 'Empire of osman', viewers: 965, favourite: false, id: 1 },
                { name: 'Temur', viewers: 1965, favourite: false, id: 2 },
                { name: 'osman', viewers: 565, favourite: true, id: 3 }
            ],
        }
    }

    onDelete = id => {
        this.setState(({ data }) => ({
            data: data.filter(c => c.id !== id), //imutable
        }))
    }

    addForm = item => {
        this.setState(({ data }) =>
            ({ data: [...data, item] }))
    }
    render() {
        const { data } = this.state
        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo />
                    <div className='search-panel'>
                        <SearchPanel />
                        <AppFilter />
                    </div>
                    <MovieList data={data} onDelete={this.onDelete} />
                    <MoviesAddForm addForm={this.addForm} />
                </div>
            </div>
        )
    }
}

export default App