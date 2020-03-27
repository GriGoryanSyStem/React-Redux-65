//https://redux-form.com/8.3.0/examples/fieldlevelvalidation/

export const required = (value) => {
    return(
        value || typeof value === 'number' ? undefined : 'Required'
    )
};

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const email = (value) => {
    return(
        value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
    )
};
