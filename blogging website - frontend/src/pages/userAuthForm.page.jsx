import InputBox from "../components/input.component";

const UserAuthForm = ({type}) => {

    return(

        <section className="h-cover flex items-center justify-center"> 
         <form className="w-[80%] max-w-[400px]"> 
         <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type == "sign-in" ? "Welcome Back": "Join Us Today!"}
          </h1>
          {
            type !== "sign-in" ? <InputBox 
            name="fullname" type="text" placeholder="FullName" icon="fi-rr-user" />: ""
          }
          <InputBox 
            name="email" type="text" placeholder="Email" icon="fi-rr-envelope" />
               <InputBox 
            name="password" type="password" placeholder="Password" icon="fi-rr-key" />

            <button className="btn-dark center mt-14" type="submit">
                {type == "sign-in" ? "Sign-In" : "Sign-Up"}
                
            </button>
            <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold" >

                <hr className="w-1/2 border-black"/>
                <p>Or</p>
                <hr className="w-1/2 border-black"/>

            </div>
            <button className="btn-dark flex items-center justify-center relative w-full ">Continue with google</button>
         




          

         </form>

        </section>
       
    )

}

export default UserAuthForm;