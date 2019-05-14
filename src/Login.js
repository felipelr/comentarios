import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        passwd: ''
    }
    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }
    login = () => {
        this.props.login(this.state.email, this.state.passwd)
    }
    render() {
        const errorMessages = {
            'auth/wrong-password': 'E-mail e/ou senha inválidos.',
            'auth/user-not-found': 'Usuário não encontrado.',
            'auth/invalid-email': 'E-mail inválido.'
        }

        return (
            <div>
                <h4>Entre para comentar: </h4>
                <form className='form-inline'>
                    <input className='form-control mr-1' type='text' onChange={this.handleChange('email')} placeholder='email' />
                    <input className='form-control mr-1' type='password' onChange={this.handleChange('passwd')} placeholder='senha' />
                    <button className='btn btn-primary mr-1' type='button' onClick={this.login}>Entrar</button>
                    <button className='btn btn-default' onClick={() => this.props.changeScreen('signup')}>Criar Conta</button>
                </form>
                {
                    this.props.isAuthError &&
                    <div class="alert alert-danger mt-2" role="alert">
                        <strong>Erro ao entrar!</strong> {errorMessages[this.props.authError]}
                    </div>
                }
            </div>
        )
    }
}

export default Login