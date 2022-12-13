

function Home(){
    return (
    <div>
<div className="py-20 bg-gradient-to-r from-red-300 via-purple-500 to-blue-500" >
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold mb-2 text-white">
      Tame Your Work Organize Your Life
    </h2>
    <h3 className="text-2xl mb-8 text-gray-200">
      <p>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</p>
    </h3>

    
  
    
    <a href="/user/signup"
      className="items-center justify-center rounded-full shadow-lg   bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-600 md:py-4 md:px-10 md:text-lg">
      Sign up for an account
    </a>
    

    
    <div className="ml-5 mt-5 sm:mt-8">
      <div className="mx-auto">
        <a href="/user/login" className="text-sm text-white underline hover:text-blue-800">
          Already have an account? Log in
        </a>
      </div>
    </div>
   
  
</div>
</div>


<section className="container mx-auto px-6 p-10">
  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Features
  </h2>
  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">WORK ANYWHERE</h4>
      <p className="text-gray-600 mb-8">Keep important information at hand - your notes will be saved automatically on the browser.</p>
    </div>
    <div className="w-full md:w-1/2 shadow-2xl">
      <img src="/assets/images/screentshot.png" alt="work anywhere" />
    </div>
  </div>


  <div className="w-full md:w-1/2">
    <h4 className="text-3xl text-gray-800 font-bold mb-3">REMEMBER EVERYTHING</h4>
    <p className="text-gray-600 mb-8">Make notes more useful by adding text...</p>
  </div>

  <div className="flex items-center flex-wrap mb-20">
    <div className="w-full md:w-1/2">
      <h4 className="text-3xl text-gray-800 font-bold mb-3">FIND THINGS FAST</h4>
      <p className="text-gray-600 mb-8">Get what you need, when you need it with powerful, flexible search capabilities.</p>
    </div>

  </div>
</section>

<footer className="bg-gray-100">
  <div className="container mx-auto px-6 pt-10 pb-10">
    <div className="flex flex-wrap justify-center">

      <div className="flex w-full flex-wrap justify-center">
      <p className="text-gray-600 ">Group 22, CPSC-349, Section 13693, CSUF.</p>
      </div>
      <div className="flex w-full flex-wrap justify-center">
      <p className="text-gray-600 ">@Copyright 2022. All Rights Reserved.</p>
      </div>
    </div>
  </div>
</footer>
</div>
    )
}

export default Home;