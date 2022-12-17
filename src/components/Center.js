import React from "react";




class Center extends React.Component {

    doNoteClick(index){
        this.props.doNoteClick(index);
    }

    doAddNoteClick(){
        this.props.doAddNoteClick();
    }

    doNotebookTitleChange(e){
        this.props.doNotebookTitleChange(e);
    }

    render() {
        return (
            <div className=" flex-inline w-1/4 bg-white divide-y divide-gray-100 rounded-md bg-white shadow-lg ml-2 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="bg-gray-100 w-full">
                    
                    <input onChange={(e) => {this.doNotebookTitleChange(e)}} type="text" className="p-3 w-full text-gray-700 bg-gray-100 text-lg font-bold" name="title"  value= {this.props.currentNotebook==null ?"":this.props.currentNotebook.name}/>

                    <button onClick={()=>this.doAddNoteClick()} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">New note</button>
                </div>
                
                <div className="flex w-full">
                        <ul className="w-full">
                            {
                                this.props.notes.map((note, index) => {
                                    return (
                                        <li key={note.id} onClick={() =>{this.doNoteClick(index)}}>
                                            <div className="mb-3 w-auto">
                                                <div className="px-6 py-2 hover:bg-gray-200 max-h-24">
                                                    <p className="truncate">{note.title}</p>
                                                </div>
                                                
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>
        );
    
    }
}
export default Center;