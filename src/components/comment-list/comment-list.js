import React,{Component} from 'react';
import PropTypes from "prop-types";
import PubSub from "pubsub-js";

export default class list extends Component{
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this)
    }


    handleDelete(){
        const {comment,index}=this.props;
        if(window.confirm(`确定删除${comment.username}的评论吗`)){
        // 采用组件通信的第二种方式：发布与订阅
        PubSub.publish("delete",index)
        }

    }

    render(){
        const {comment}=this.props
        return(
            <div>
                <h2>{comment.username}说:{comment.content}</h2>
                <button onClick={this.handleDelete}>删除</button>
            </div>
        )
    }
}

// 给组件类指定属性--方式一
list.PropTypes={
    comment:PropTypes.object,
    index:PropTypes.number
}