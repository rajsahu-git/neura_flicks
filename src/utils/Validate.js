export const checkValidation =(email,password,name)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/

    if(!isNameValid) return "Name is not Validate"
    if(!isEmailValid) return "Email is not validate"
    if(!isPasswordValid) return "Password is not validate"
    return null
}