import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Sidebar extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const { user } = this.props
        const userDataJSX = user.display_name ?
            (
                <div>
                    <img src={user.img} />
                    <p>{user.display_name}</p>
                    {console.log(user.authId)}
                    <p>{user.birthday}</p>
                </div>
            ) :
            (<p>Please log in!</p>)

        return (
            <div className='sidebar'>
                <section className='info'>
                    <Link to='/profile'><div className='profile-pic'></div></Link>
                    <div className='name-birthday'>
                        <p className='sidebar-name'>Username</p>
                    </div>
                    <p>Actual auth info:</p>
                    { userDataJSX }
                </section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Sidebar);