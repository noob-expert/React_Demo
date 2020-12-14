import React,{Component} from 'react';
import PropTypes from "prop-types"
import CommentList from "../comment-list/comment-list"

export default class item extends Component{ 
    
    // 给组件类指定属性--方式二，好像返错？
    // static propTypes={
    //     comments:PropTypes.array.isRequired
    // }



    render(){
        const {comments}=this.props
        const display=comments.length===0?"block":"none"
        return(
            <div>
                <h2>评论回复:</h2>
                {}
                <p style={{display}}>无任何评论，请新增!</p>
                <ul>
                   {comments.map((item,index)=>{
                    //    这里要return，不然返回不了
                      return <CommentList comment={item} key={index} index={index}/>
                    //    console.log("---");
                   })}
                </ul>
            </div>
        )
    }
}

// 给组件类指定属性--方式一
item.PropTypes={
    comments:PropTypes.array.isRequired
}