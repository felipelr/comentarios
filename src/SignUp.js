import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        passwd: ''
    }
    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }
    createAccount = () => {
        this.props.createAccount(this.state.email, this.state.passwd)
    }
    render() {
        const errorMessages = {
            'auth/email-already-in-use': 'E-mail já foi utilizado.',
            'auth/weak-password': 'Senha muito fraca.',
            'auth/invalid-email': 'E-mail inválido.'
        }

        return (
            <div>
                <h4>Criar Conta:</h4>
                <form className='form-inline'>
                    <input className='form-control mr-1' type='text' onChange={this.handleChange('email')} placeholder='email' />
                    <input className='form-control mr-1' type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button className='btn btn-success mr-1' type='button' onClick={this.createAccount}>Criar conta</button>
                    <button className='btn btn-default' onClick={() => this.props.changeScreen('login')}>Já tenho uma conta, entrar!</button>
                </form>
                {
                    this.props.isSignUpError &&
                    <div class="alert alert-danger mt-2" role="alert">
                        <strong>Erro ao criar conta!</strong> {errorMessages[this.props.signUpError]}
                    </div>
                }
            </div>
        )
    }
}

export default SignUp