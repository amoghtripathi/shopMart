import React from "react";
import "./sign-in.scss";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: "",
            password: ""
        };
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""});
        } catch(error){
            console.log(error);
        }

    };

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email & password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='button'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign in with isGoogleSignIn
                        </CustomButton>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;