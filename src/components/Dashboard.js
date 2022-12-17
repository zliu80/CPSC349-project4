import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import React from "react";
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090");

async function getNoteBooks() {
  
  let result = await pb.autoCancellation(false).collection('notebooks').getList(1, 50, /* batch size */ {
     filter:'userId="' + pb.authStore.model.id+'"'
});
  return result
}

async function getNotes(bookId) {
  // let filter ='bookId='+bookId
  let result = await pb.autoCancellation(false).collection('notes').getList(1, 50, {filter:'bookId="'+bookId+'"'});
  return result;
}

async function addNoteBook(){
  const data = {
    "name": "new notebook",
    "userId": pb.authStore.model.id
  };

  let record = await pb.collection('notebooks').create(data);
  return record;
}

async function addNote(bookId){
  const data = {
    "title": "the note title",
    "content": "",
    "bookId": bookId
  };

  let record = await pb.collection('notes').create(data);
  return record;
}

async function updateNotebook(name, id){
  const data = {
    "name": name,
  };

  const record = await pb.collection('notebooks').update(id, data);
  return record;
}


class Dashboard extends React.Component{

  constructor(props){
    super(props);
    this.state = {notebooks:[], currentIndex:0, currentNotebook:null, notes:[], noteIndex:0, currentNode:null, setOpen:false}
  }




  componentDidMount(){

    

    if(pb.authStore.model==null){
      alert("You have to log in first")
      window.location.replace("/")
      
      return
    } 

    getNoteBooks().then((r1)=>{
      console.log(r1)
      
      this.state.notebooks = r1.items
      this.setState({notebooks:r1.items})

      const nb = this.state.notebooks[this.state.currentIndex]
      this.state.currentNotebook = nb
      this.setState({currentNotebook:nb})
      console.log(nb)
      getNotes(nb.id).then((r2)=>{
        
        this.state.notes = r2.items
        this.setState({notes:r2.items})
        console.log(r2.items)
        this.state.currentNode = r2.items[0]
        
      }).catch((error)=>{
        console.log(error);
      })

    }).catch((error) =>{
      if(error.message!=null){
          alert(error.message);
      } else{
          alert("Something went wrong. Contact the author.");
      }
      console.log(error);
    });
  }

  handleOpen(){
    this.state.setOpen=false
  } 

  doNoteClick(index){
    const note = this.state.notes[index];
    this.state.currentNode = note;
    this.state.noteIndex=index;
    this.setState({currentNode:note});
    this.setState({noteIndex:index});
  
  }

  doNotebookClick(index){
    this.state.currentIndex = index
    this.setState({currentIndex:index})
    const notebook = this.state.notebooks[index]
    this.state.currentNotebook = notebook
    this.setState({currentNotebook:notebook})
    getNotes(notebook.id).then((r2)=>{
        
      this.state.notes = r2.items
      this.setState({notes:r2.items})
      this.state.currentNode = r2.items[this.state.noteIndex]
      console.log(r2.items)
      
    }).catch((error)=>{
      console.log(error);
    })
  }

  doAddNotebookClick(){
    addNoteBook().then((r)=>{
      let notebooks = this.state.notebooks;
      notebooks.push(r);
      this.state.notebooks = notebooks;
      this.setState({notebooks:notebooks});
    }).catch((error)=>{
      alert("Unable to add a notebook.")
    });

  }

  doAddNoteClick(){
    let notebook = this.state.notebooks[this.state.currentIndex]
    addNote(notebook.id).then((r)=>{
      let notes = this.state.notes;
      notes.push(r);
      this.state.notes = notes;
      this.setState({notes:notes});
    }).catch((error)=>{
      alert("Unable to add a note.")
    });

  }
  

  doNotebookTitleChange(e){
    let noteboook = this.state.currentNotebook
    noteboook.name = e.target.value
    
    this.state.currentNotebook = noteboook
    this.setState({currentNotebook: noteboook})

    updateNotebook(noteboook.name, noteboook.id).then((r) => {

    }).catch((error)=>{
      console.log("unable to update notebook.");
    });
    
  }

render() {



  return (
          <div className="min-h-full">
                <header className="bg-white shadow">
                    <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                    </div>
                </header>

                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"></div>


    <div className="flex h-full">
          <Left notebooks={this.state.notebooks} 
          currentIndex={this.state.currentIndex} 
          doNotebookClick={(index)=>{this.doNotebookClick(index)}}
          doAddNotebookClick={()=>{this.doAddNotebookClick()}}/>
          <Center currentNotebook={this.state.currentNotebook} notes={this.state.notes} notebooks={this.state.notebooks} 
          currentIndex={this.state.currentIndex} doNoteClick={(index) => {this.doNoteClick(index)}} 
          doAddNoteClick={() =>{this.doAddNoteClick()}} doNotebookTitleChange={(e) => {this.doNotebookTitleChange(e)}}/>
          {this.state.currentNode?
          <Right currentNode={this.state.currentNode} notes={this.state.notes}/>:null}
      </div>
      </div>
  )
}
}

export default Dashboard;