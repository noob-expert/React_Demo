import React,{Component} from 'react';
import PropTypes from "prop-types";

export default class add extends Component{

// 获取受控组件的值
constructor(props){
    super(props);
    this.state={
        username:'',
        content:''
    }
    this.handleName=this.handleName.bind(this)
    this.handleContent=this.handleContent.bind(this)
    this.handleClick=this.handleClick.bind(this)
}

handleName(event){
    let {username}=this.state;
    username=event.target.value;
    this.setState({username})
}

handleContent(event){
    let {content}=this.state;
    content=event.target.value;
    this.setState({content})
}

handleClick(){
    let {add}=this.props
    // console.log(this.props);
    add(this.state);
    this.setState({
        username:'',
        content:''
    })
}

    render(){
        const {username,content}=this.state
        return(
            <div>
                用户名:<input type="text" value={username} onChange={this.handleName} />
                评论内容:<input type="text" value={content} onChange={this.handleContent} />
                <button onClick={this.handleClick}>提交</button>
            </div>
        )
    }
}

// 定义传入属性props
add.PropTypes={
    add:PropTypes.func.isRequired
}
