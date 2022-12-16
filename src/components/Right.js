import React from "react";
import { marked } from "marked";
import "github-markdown-css";

class Right extends React.Component {
    render() {
        return (
            <div className="flex-inline right w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ml-2 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="w-full bg-gray-300 h-full">
                    <div className="bg-gray-100 w-full">
                        <i className="iconfont icon-bijiben1"></i>
                    
                        <input type="text" className="p-3 text-gray-700 bg-gray-100 text-lg font-bold" name="title" value= {this.props.currentNode.title}/>
                    </div>
                    
                    <div className="flex w-full mt-5 ml-5 mr-5">
                        <div className="w-80">
                             <textarea className="bg-gray-100 h-80 " name="content" value={this.props.currentNode.content}/>
                        </div>
                        <div className="w-80">
                            <div  dangerouslySetInnerHTML={{__html:marked(this.props.currentNode.content)}}/>
                        </div>
            
                    </div>
               
            </div>
            </div>
        );
    }
}
export default Right;