import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import {googleLogin} from 'redux/actions'
import LoadingOverlay from "../../components/LoadingOverlay";

const Login =()=>{
  const dispatch=useDispatch()
  
  const {loading,login,error}=useSelector((state)=>state.login)
  
  const responseSuccessGoogle=(response)=>{
    dispatch(googleLogin(response.tokenId))
    console.log(login)
  }
  const responseErrorGoogle=(response)=>{
   console.log(response)   
  }
    return(
      <>{loading ? (
        <LoadingOverlay></LoadingOverlay>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <GoogleLogin
        clientId="1075885141219-ekhfks7eopmak869a1qh963v67jcq1vl.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={'single_host_origin'}
      />
    )
          }    
        </>)

        }
export default Login;