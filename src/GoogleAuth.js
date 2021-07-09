// clientId : 134006578947-jvc9vmg5jb2vaaj3clr12od4946ieg7c.apps.googleusercontent.com



import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from './actions'

class GoogleAuth extends Component{

    componentDidMount ()    {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId : '134006578947-jvc9vmg5jb2vaaj3clr12od4946ieg7c.apps.googleusercontent.com',
                scope : 'email'
            }).then(() => {
                console.log('gapi init complete')
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })

        })
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn)  {
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else    {
            this.props.signOut()
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton() {

        if(this.props.isSignedIn === null)  {
            return null
        } else if (this.props.isSignedIn)   {
            return (
                <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className='google icon'/>
                    SignOut
                </button>
            )
        } else  {
           return (
            <button onClick={this.onSignInClick} className='ui red google button'>
                <i className='google icon'/>
                SignIn with Google
            </button>
        )
        }
    }

    render()    {
        return <div>
            {this.renderAuthButton()}
        </div>
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth)