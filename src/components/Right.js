import React from "react";

class Right extends React.Component {
    render() {
        return (
            <div className="flex-inline right w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ml-2 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="w-full h-full">
                <div className="bg-gray-100 w-full">
                    <i className="iconfont icon-bijiben1"></i>
                   
                    <input type="text" className="p-3 text-gray-700 bg-gray-100 text-lg font-bold" name="title" value= {this.props.currentNode.title}/>
                </div>
                
                <div className="w-full mt-5 ml-5 mr-5">
                    <p>Enter your content</p>
                    <textarea className="w-full bg-gray-100 h-80 " name="content" value={this.props.currentNode.content}/>
                    {/* <div className="app-right-show">
                        {this.props.currentNode.content}
                    </div> */}
                </div>
               
            </div>
            </div>
        );
    }
}
export default Right;