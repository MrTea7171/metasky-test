'use server';  

const handleSuccess = async (data:{
    email:string
    password:string
}) => {
    
    localStorage.setItem("credentials", JSON.stringify(data));
   
  };