
import React, { Fragment } from "react";


function classNames(...classes){
    return classes.filter(Boolean).join(' ')
  }

class Left extends React.Component {

    constructor(props){
        super(props);
      }



    doNotebookClick(index){
        this.props.doNotebookClick(index);
    }

    doAddNotebookClick(){
        this.props.doAddNotebookClick();
    }

    render() {
        return (
            

                    
          

                    <div className="h-100 min-h-screen left w-1/6 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ml-2 ring-1 ring-black ring-opacity-5 focus:outline-none">

                        <div className="app-left-header">
                            <i className="add iconfont icon-jiahao"></i>
                            <button onClick={this.props.doAddNotebookClick} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">New notebook</button>
                        </div>
                        <div className="">
                            <div className="ml-5 mt-2 ">
                                <i className="notebook-icon iconfont icon-bijiben"></i>
                                <span className="font-medium">Your notebooks</span>
                            </div>
                            
                            <div className="py-1 mt-5 justify-center ">
                            <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                <ul className="">
                                    
                                
                                {
                                this.props.notebooks.map((notebook, index) => {
                                    return (
                                        <div className="divide-y">
                                            <div className="flex hover:bg-gray-200 px-2 py-2">
                                                <li onClick={()=>this.doNotebookClick(index)}
                                                className="w-full">
                                                    
                                                    {notebook.name}</li>
                                                   
                                            </div>
                                        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                        </div>
                                    )
                                })
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                
        );
    }
}
export default Left;