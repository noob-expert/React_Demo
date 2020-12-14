import React, { Component } from 'react';
// 引入其他组件,要求首字母大写？？
import CommentAdd from "../comment-add/comment-add"
import CommentItem from "../comment-item/comment-item"
// import CommentList from "../comment-list/comment-list"

// 发布与订阅
import PubSub from "pubsub-js";


// 引入CSS样式
import "./app.css"

export default class App extends Component {
    // 给组件对象指定state属性

    constructor(props) {
        super(props);
        this.state = {
            comments: [
                { username: 'Tom', content: "React不错" },
                { username: 'Jack', content: "React太难了" }
            ]
        }
        this.add=this.add.bind(this);
        this.delete=this.delete.bind(this);
    }

    /* 所有针对当前state属性的事件都在本作用域内定义，然后依次传入其他组件 */
    // 定义新增事件
    add(comment){
        const {comments}=this.state;
        comments.unshift(comment);
        this.setState({comments})
    }

    // 定义删除事件
    delete(index){
        const {comments}=this.state;
        comments.splice(index,1)
        this.setState({comments})
    }

    // 生命周期进行监听订阅事件
    componentDidMount(){
        PubSub.subscribe("delete",(msg,index)=>{
            this.delete(index)
        })
    }

    render() {
        const { comments } = this.state
        return (
            <div>
                <h2 className="title">请发表对React的评论</h2>
                <div>
                    <CommentAdd add={this.add}/>
                    <CommentItem comments={comments} />
                    {/* <CommentList /> */}
                </div>
            </div>
        )
    }
}