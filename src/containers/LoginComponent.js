import React from "react";
const LoginComponent = () => {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")',
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ED8C01",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='h-screen flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='flex justify-center items-center'>
            <picture className='w-96'>
              <img
                src='https://media.discordapp.net/attachments/1063652179052875808/1089548137905012810/a3308bf0-081e-47fd-9f04-54735d8c6526.jpg'
                alt='shopimage'
              />
            </picture>
          </div>
          <div
            style={{ background: "#06d6a0" }}
            className='flex justify-center items-center'
          >
            <form action='' method='post' className='w-128'>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Email
                </label>
                <input
                  type='text'
                  id='email'
                  className='border rounded-md p-2 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='Name'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='Name'
                  placeholder='Type what should be your profile name '
                  className='border rounded-md p-2 w-full'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  className='border rounded-md p-2 w-full'
                />
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                  Submit
                </button>
              </div>
              <div className='flex justify-end'>
                <a href='/signin' className='text-pink-500'>
                  Signin
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
