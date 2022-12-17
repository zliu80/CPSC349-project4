import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, Fragment } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PocketBase from 'pocketbase';
import {Disclosure, Menu, Transition} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'

import Home from './components/Home'
import About from './components/About'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

const pb = new PocketBase("http://127.0.0.1:8090");

const navigation = [
  {name:'Home', href:'/', current:true},
  {name:'Dashboard', href:'/dashboard', current:false},
  {name:'About us', href:'/about', current:false}
  
]





class NavBarMenu extends React.Component {
  
 
  constructor(props) {
    super(props);
    // this.onClick = this.onClick.bind(this); }
    
      this.state = {
        nav0: false,
        nav1: false,
        nav2: false
      };
      
      this.handleClick = this.handleClick.bind(this);
    }
    
    updateButton(item) {
    
    console.log("logging function input");
    console.log(item);
    /*
      this.setState({
        if (item.name == 'Home') {
          nav0: true;
          nav1: false;
          nav2: false;
        } else if (item.name == 'Dashboard') {
          nav0: false;
          nav1: true;
          nav2: false;
        } else if (item.name == 'About Us') {
          nav0: false;
          nav1: false;
          nav2: true;
        }
      })
      */
    }
   
 /*   
  onClick(e, item) {
    console.log(this.name);
  
    this.setState({
    nav0
    });
 
  };
  
     */
  
  handleClick () {
  /*
    this.setState(prevState => ({      
      nav0: !prevState.nav0    
    }));  
    */
    
    this.setState({nav0: false, nav1: false, nav2: false});
  }


  render() {
  
    let button_class_0 = this.state.nav0 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    /*
    let button_class_1 = this.state.nav1 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    let button_class_2 = this.state.nav2 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white';
    
    
    let buttonStates = [button_class_0, button_class_1, button_class_2];
    
    for (let i = 0; i < 3; i++) {
      navigation[i].current = buttonStates[i];
    }
        
    */
    
        navigation[0].current = button_class_0
  
    return (
      <div className="flex space-x-4">
      
      
      
      
      

                    {navigation.map((item) => (
                      <p id="navButtonBar" 
                        key={item.name}
                        
                        
                      
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}

                        aria-current={item.current ? 'page' : undefined}
                        
                        
                        
                      >

                      
                        
                        <button onClick={this.handleClick}>                        
                      
                          <Link to={item.href}>{item.name}</Link>
                                               
                        </button>
                        
                      </p>
                    ))}
                  </div>
    );
  }
}










const changeStyle = (item) => {    
    for (let i = 0; i < 3; i++) {
      navigation[i].current = 'false';
    }
    
    item.current = 'true';

    console.log("nav button clicked");
  };



function classNames(...classes){
  return classes.filter(Boolean).join(' ')
}

async function refresh(){
 
  await pb.collection('users').authRefresh().then((value) =>{
  
  }).catch((error) =>{
    console.log("Fail to fetch the authentificated user from pocketbase.");
  });

}

refresh()


async function signout(){
  alert("you have signed out.");
  await pb.authStore.clear();
  window.location.replace("/")
}

class App extends React.Component{


  signout(){
    signout()
  }

render() {


 
  
  return (
      <BrowserRouter>
       <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">                 
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                
                
                  <NavBarMenu />
                  
                  
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                


                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="default-avatar.png"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                      
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            onClick={signout}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <span className='ml-5 text-white'>{pb.authStore.model ==null ? "":pb.authStore.model.username}</span>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
 




        {/* <nav className="flex items-center justify-between flex-wrap bg-white p-6">
          <div className="flex items-center flex-shrink-0 text-black mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-xl tracking-tight">E-Note</span>
          </div>

          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <p className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-indigo-500 mr-4">
                <Link to="/" >Home</Link>
              </p>
              <p className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-indigo-500 mr-4">
                <Link to="/about">About</Link>
              </p>

            </div>


            <div className="text-sm ">
            <p id='auth_username' className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-indigo-500">
            {
              !pb.authStore.isValid ?(
              <Link to ="/signin">SignIn</Link>
              ) : ("Welcome: "+pb.authStore.model.username)
            }
            
            </p>
            <p className="block ml-10 mt-4 lg:inline-block lg:mt-0 text-black hover:text-indigo-500">
            {
              pb.authStore.isValid ?(
                <p className='underline' onClick={signout}>Sign out</p>
                ) : ("")
            } 
            </p>

            </div>
          </div>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    
  );
}
}
export default App;
