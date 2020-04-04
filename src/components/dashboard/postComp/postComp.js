import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostList } from '../../../Actions/postActions/postAction'

class PostComp extends Component {
    constructor() {
        super()

    }

    componentDidMount = () => {
        this.props.fetchPostList();
    }

    render() {

        if (this.props.Loading) {
            return <h1>Loading.....</h1>
        }
        if (this.props.postList) {
            return (
                <div>
                    {
                        <ul>
                            {this.props.postList.map((item, index) => {
                                return <li>{item.id}, {item.title}</li>
                            })}
                        </ul>
                    }
                </div>
            )
        }
        else {
            { console.log("eroor", this.props.error) }
        }
    }
}
const mapStateToProps = (state) => {
    console.log("state", state)
    return {
        Loading: state.PostReducer.Loading,
        postList: state.PostReducer.PostList,
        error: state.PostReducer.error

    }
}
const mapDispatchToProps = {
    fetchPostList

}
export default connect(mapStateToProps, mapDispatchToProps)(PostComp);