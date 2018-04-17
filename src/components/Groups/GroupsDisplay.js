import React, {Component} from 'react';
import './Groups.css';
import axios from 'axios';

class GroupsDisplay extends Component {
    constructor() {
        super()
        this.state = {
            groups: []
        };
    }

    componentDidMount() {
        console.log('groups: the component mounted');
        axios.get('/displayGroups').then(res => {
            this.setState({
                groups: res.data
            })
        })
        .catch(err => {console.log(err);})
    }

    render() {
        console.log('render of groupssdisplay');
        let group = this.state.groups.map( (e, i) => {
            return (
                <div key={i}>
                    {console.log('group', e)}
                    <p>{e.display_name}</p>
                    <img src={e.img}/>
                </div>
            )
        })

        return (
            <div>
                { group }
            </div>
        )
    }
}

export default GroupsDisplay;