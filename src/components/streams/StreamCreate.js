import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createStream } from '../../actions'

class StreamCreate extends Component {

    renderError({error, touched})   {
        if(touched && error)    {
            return  (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta})  => {
        console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>
                    {label}
                </label>
                <input {...input} autoComplete='off'/>
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit(formValues) {
        this.props.createStream(formValues)
    }



    render() {
        // console.log(formProps)
        return (
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='title' label='Enter Title' component={this.renderInput} />
                <Field name='description' label='Enter Description' component={this.renderInput}/>
                <button classname='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}
    if(!formValues.title)   {
        errors.title = 'You must provide a title'
    }
    if(!formValues.description)   {
        errors.description = 'You must provide a description'
    }
    return errors
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate)

export default connect(null, {createStream})(formWrapped)
