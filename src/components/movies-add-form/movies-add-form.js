import React from "react";
import "./movies-add-form.css";
import { Component } from "react";
import {v4 as uuidv4} from 'uuid'
class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            views: "",
        };
    }
    changeHandlerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    addFormHandler = e => {
        e.preventDefault()
        this.props.addForm({ name: this.state.name, viewers: this.state.views, id: uuidv4() })
        this.setState({
            name: '',
            views: '',
        })
    }
    render() {
        const { name, views } = this.state;
        return (
            <div className="movies-add-form">
                <h3>Добавить новые фильмы</h3>
                <form className="add-form d-flex" onSubmit={this.addFormHandler}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Какое кино?"
                        onChange={this.changeHandlerInput}
                        name="name"
                        value={name}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Сколько раз просмотрено?"
                        onChange={this.changeHandlerInput}
                        name="views"
                        value={views}
                    />
                    <button type="submit" className="btn btn-outline-dark">
                        {" "}
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default MoviesAddForm;
