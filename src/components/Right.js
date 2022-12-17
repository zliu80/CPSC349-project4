import React from "react";
import { marked } from "marked";
import PocketBase from 'pocketbase';
import "github-markdown-css";

const pb = new PocketBase("http://127.0.0.1:8090");

async function noteUpdate(title, content, id){
    const data = {
        "title": title,
        "content": content,
        
    };
    
    const record = await pb.collection('notes').update(id, data);
    return record;
}

class Right extends React.Component {

    constructor(props){
        super(props);
      }

    doTitleChange(e){
        let currentNode = this.props.currentNode;
        currentNode.title = e.target.value
        this.doChange(currentNode)
    }

    doChange(currentNode){
        this.props.currentNode.content = currentNode.content
        this.setState({currentNode:currentNode})

        var notes = this.props.notes
        

        
        
        noteUpdate(currentNode.title, currentNode.content, currentNode.id).then((r1)=>{
            this.props.notes.forEach((note, index) => {
                if(note.id === currentNode.id){
                    
                    notes[index].title = currentNode.title;
                    notes[index].content = currentNode.content;
                    this.props.notes[index].title = currentNode.title
                    
                    this.setState({notes:notes});
                }
            });
        }).catch((error)=>{
            console.log(error);
        })
    }


    doContentChange(e){
        
        let currentNode = this.props.currentNode;
        currentNode.content = e.target.value
        this.doChange(currentNode)
    }


    render() {
        return (
            <div className="flex-inline right w-full divide-y divide-gray-100 rounded-md bg-white shadow-lg ml-2 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="w-full bg-gray-300 h-full">
                    <div className="bg-gray-100 w-full">
                        <i className="iconfont icon-bijiben1"></i>
                    
                        <input type="text" className="p-3 w-full text-gray-700 bg-gray-100 text-lg font-bold" name="title" onChange={(e)=>{this.doTitleChange(e)}} value= {this.props.currentNode.title}/>
                    </div>
                    
                    <div className="flex w-full mt-5 ml-5 mr-5">
                        
                        <div className="w-1/2 h-full divide-y">
                             <p className="p-3 text-gray-700 bg-gray-100 text-lg font-bold ">Markdown Edittor</p>
                             <textarea className="bg-gray-100 h-80 w-full pl-2 pr-2 pt-2 pb-2" type="text" name="content" onChange={(e)=>{this.doContentChange(e)}} value={this.props.currentNode.content}/>
                        </div>
                        <div className="w-1/2 h-full ml-5">
                            <p className="p-3 text-gray-700 bg-gray-100 text-lg font-bold ">Markdown Viewer</p>
                            <div className="markdown-body pl-2 pr-2 pt-2 pb-2 bg-blue-300" dangerouslySetInnerHTML={{__html:marked(this.props.currentNode.content)}}/>
                        </div>
            
                    </div>
               
            </div>
            </div>
        );
    }
}
export default Right;