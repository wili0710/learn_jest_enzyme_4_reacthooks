import React from 'react';
import PropTypes from 'prop-types'

import languageContext from './context/languageContext'
import stringsModule from './helpers/strings'

function Input({ secretWord }) {
    const language = React.useContext(languageContext)
    const [ currentGuess, setCurrentGuess ] = React.useState("")

    return (
        <div data-test="component-input">
            <form className='form-inline'>
                <input
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    placeholder={stringsModule.getStringByLanguage(language, 'guessInputPlaceholder')}
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value)}
                />
                <button
                    data-test='submit-button'
                    onClick={(e) => {
                        e.preventDefault()
                        // TODO: Update guessedWords
                        // TODO: check against secretWord and update success if needed
                        setCurrentGuess("")
                    }}
                    className='btn btn-primary mb-2'>
                    {stringsModule.getStringByLanguage(language, 'submit')}
                </button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;
