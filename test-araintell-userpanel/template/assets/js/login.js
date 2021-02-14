//test login1

// function login(username,password)
// {
//   $.ajax({
//     type:"json",
//     method: "POST",
//     url: "https://194.60.210.45:8243/OCS/1/rest/Account/get_account_info",  
//     data: { username: "khp", password: "123" },
//     success: function (response) {
//       alert(response);
//       $("body").append(response);
  
//   },
//   error: function (response) {
//       alert("Error: " + response);
//   }
//   })
// }

// async function getCourses(){
//   let courses = await sendRequest("/user/courses","GET",{});
// }
//test login Ajax 


 /**************************************************************************/ 


//login function

  
   /**************************************************************************/ 
  
  //OTP function
//   async function OtpLogin(phoneNumber) 
//   {
//         let result = await sendRequest("/OCS/1/rest/Account/get_account_info", "POST",{

//             phoneNumber: phoneNumber,
//         });
//   }


// async function Register(Fname,Lname,phoneNumber,NationalID,email,password)
// {

//     let result = await sendRequest("/OCS/1/reset/Account/get_account_info", "POST",{
        
//         Fname:Fname,
//         Lname:Lname,
//         phoneNumber:phoneNumber,
//         NationalID:NationalID,
//         email:email,
//         password:password, 
//     });
// }





 /**************************************************************************/ 

  // resetpass function
//   async function resetpass(email,oldpass,newpass){

//     let result = await sendRequest("OCS/1/rest/Acccount/get_account_info", "POST", {
        
//         email: email,
//         oldpass: oldpass,
//         newpass: newpass,
//     });
//   }

   /**************************************************************************/ 

  //login with email,pass function
//   async function login2(email,password)
//   {
//         let result = await sendRequest("OCS/1/rest/Acccount/get_account_info", "POST",{

//             email: email,
//             password: password,

//         });
//   }

  /**************************************************************************/ 
  //register function
// async function register(Fname,Lname,email,NationalID,password) {
//     let result = await sendRequest("OCS/1/rest/Account/get_account_info", "POST", {

//         Fname:Fname,
//         Lname:Lname,
//         email:email,
//         NationalID:NationalID,
//         password:password,
//     });
// }

 /**************************************************************************/ 
//login function
async function login(username,password) {
  
  let result = await sendRequest("/bss/v1/rest/Customer/get_costumer_info","POST",{
    username: username,
    password: password
  });

 

  console.log(result);
}


async function otpLogin(phonenumber) {
  let result = await sendRequest("OCS/1/rest/Customer_get_customer_info")
}

//sendRequest function
async function sendRequest(url, type, data,callback) {
  return new Promise((resolve, reject) => {
      // API url
      const apiUrl = "https://194.60.210.45:8243";

      $.ajax({
          url: apiUrl + url,
          type: type,
          data: type == "GET" ? data : JSON.stringify(data),
          headers: {
              "Bearer 7ffed1a2-77ae-3f61-89f7-1e749d6e6758": localStorage.getItem("Bearer 7ffed1a2-77ae-3f61-89f7-1e749d6e6758"),
              "Content-Type": "application/x-www-form-urlencoded",
              "Content-Length": 333
              
          },
          dataType: "json",
          success: function (data, status) {
              resolve(data);
          },
          error: function (xhr, textStatus, errorMessage) {
              console.log(xhr);
              resolve(xhr.responseJSON);
          },
      });
  });
}


$("#button-id").on("click",()=>{
  login($("#userinput-id").val(),$("#passinput-id").val());
});
