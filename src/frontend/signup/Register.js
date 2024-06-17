import React,{useState} from 'react'
import Axios from 'axios'

const Register = () => {

  const [email,setEmail] = useState('')
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')

  const createUser = () => {
    Axios.post('http://localhost:3002/register' , {
      Email:email,
      UserName:userName,
      Password: password
    }).then(() =>{
      console.log('user has been created')
    })

  }


  
  return (
    <div>
         <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 to-purple-500'>
      <div className='w-96 h-96 bg-white rounded-lg shadow-xl shadow-black flex formbox lg:w-[1000px] lg:h-[600px]'>

        {/* Left Side */}
        <div className="flex-1">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/64b5825a5b9b4d3225e9bd15/artificial-intelligence--ai/960x0.jpg"  
            alt="Your Image Alt Text"
            className="w-full h-full object-cover rounded-md "
          />
        </div>

        {/* Right Side*/}
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-thin mb-2 text-center">Hello, <span className='font-bold text-blue-600'>welcome!</span></h1>
          <form className='pt-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                Email Address
              </label>
              <input
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3'
                id='email'
                type='email'
                placeholder='Enter your email*'

                onChange={(event)=>{
                  setEmail(event.target.value)
                }}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                Username
              </label>
              <input
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3'
                id='username'
                type='text'
                placeholder='Enter your username*'

                onChange={(event)=>{
                  setUserName(event.target.value)
                }}
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Password
              </label>
              <input
                className='shadow appearance-none border rounded-2xl w-full py-2 px-3'
                id='password'
                type='password' 
                placeholder='Enter your password*'

                onChange={(event)=>{
                  setPassword(event.target.value)
                }}
              />
            </div>

         
            
           
            <div className='flex items-center justify-center lg:pt-5'>
              <a href='Bestjobs'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-2xl focus:outline-none focus:shadow-outline'
                onClick={createUser}
              >
                signup
              </button>
               </a>
            </div>

            <a href='Login'><p  className='text-gray-700 text-left mt-5 hover:underline'>have an account?</p></a>

           
            

          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register