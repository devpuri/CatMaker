export default function signupValidation(values){
  let error = {}
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


// validation for name field
  if(values.name === ""){
    error.names = "Name should not be empty"
  }else{
    error.names = ""
  }

// validation for email fields
  if(values.email === ""){
    error.email = "Email should not be empty"
  }
  else if (!email_pattern.test(values.email)){
    error.email = "Email didnt match"
  }else{
    error.email = ""
  }


// validation for password fields
  if(values.password === ""){
    error.password = "Password should not be empty"
  }
  else if (!password_pattern.test(values.password)){
    error.password = "Password didnt match"
  }else{
    error.password = ""
  }

  return error;
}