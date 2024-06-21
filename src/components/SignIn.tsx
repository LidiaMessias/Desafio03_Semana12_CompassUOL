import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebaseConfig'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/Meubel House_Logos-05.png'
import LoginBtns from './LoginBtns'


const SignIn = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    //const [redirectTo, setRedirectTo] = useState<string | null>(null);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const onSubmit =  async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (!email || !password) {
            console.error("Please enter both email and password.")
            return
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            navigate(from, { replace: true });
            console.log(user); 

        } catch (error) {
            console.error("Error creating acount",error)
        }
    }

    return (
    <>
    <div className='flex justify-center items-center py-20'>
        <div className='flex  flex-col justify-center gap-5 px-5 py-8 mx-auto w-1/3 border border-gray6 shadow-xl rounded-xl'>
            <div className="flex gap-2 justify-center items-center">
                <img src={Logo} alt="Logotipo da Empresa" className=' w-12 h-8' />
                <span className=" text-4xl font-montserrat-bold">Furniro</span>
            </div>
            <form>                                                                                            
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email-address" className=' font-poppins-regular'>Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                    
                        placeholder="abcd@efgh.com" 
                        className=' border border-gray4 rounded-lg h-8 py-2 pl-3 font-poppins-regular'                               
                    />
                </div>

                <div className='flex flex-col gap-2 my-5'>
                    <label htmlFor="password" className=' font-poppins-regular'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required                                 
                        placeholder="Enter your password"   
                        className=' border border-gray4 rounded-lg h-8 py-2 pl-3 font-poppins-regular'            
                    />
                </div>                                             

                <div className='flex justify-center mb-5 mt-8'>       
                        <button
                            className=' bg-mostarda font-poppins-semibold text-white w-28 py-2 rounded'
                            onClick={onSubmit}                        
                        >  
                            Log In                                
                        </button>
                </div>
                
                <LoginBtns/>                                             
            </form>
            
            <div className=' flex justify-center'>
                <p className=' font-poppins-regular'>
                    Already have an account?{'    '}
                    <span className='font-poppins-semibold text-mostarda cursor-pointer'>
                        <Link to="/signin" >
                            Sign in
                        </Link>
                    </span>
                    
                </p>

            </div>
            

        </div>
    </div>
    </>
  )
}

export default SignIn
