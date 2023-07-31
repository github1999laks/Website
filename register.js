const form = document.querySelector('#form')
const firstname = document.querySelector('#fname');
const lastname = document.querySelector('#lname');
const email = document.querySelector('#email');
const uname = document.querySelector('#uname');
const password = document.querySelector('#pass');
const cpassword = document.querySelector('#cpass');
const phone = document.querySelector('#phone');
const age = document.querySelector('#age');



form.addEventListener('submit', (e) => {

    if (validateInputs() == false) {
        e.preventDefault();
    }
})

function validateInputs() {

    const firstnameVal = firstname.value.trim()
    const lastnameVal = lastname.value.trim()
    const emailVal = email.value.trim();
    const unameVal = uname.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const phoneVal = phone.value.trim();
    const dobVal = dob.value.trim();
    const ageVal = age.value.trim();
    

    let success = true

    if (firstnameVal === '') {
        success = false;
        setError(firstname, 'Firstname is required')
    }
    else {
        setSuccess(firstname)
    }

  

    if (ageVal === '') {
        success = false;
        setError(age, 'Age is required')
    }
    else {
        setSuccess(age)
    }

    if (dobVal === '') {
        success = false;
        setError(dob, 'Date of birth is required')
    }
    else {
        setSuccess(dob)
    }

    if (phoneVal === '') {
        success = false;
        setError(phone, 'Phone Number is required')
    }
    else {
        setSuccess(phone)
    }

    if (lastnameVal === '') {
        success = false;
        setError(lastname, 'Lastname is required')
    }
    else {
        setSuccess(lastname)
    }

    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    if (unameVal === '') {
        success = false;
        setError(uname, 'Username is required')
    }
    else if (!validateEmail(unameVal)) {
        success = false;
        setError(uname, 'Please enter a valid username')
    }
    else {
        setSuccess(uname)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required')
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be atleast 8 characters long')
    }
    else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is required')
    }
    else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Password does not match')
    }
    else {
        setSuccess(cpassword)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};


function populateCities() {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const selectedState = stateSelect.value;


    citySelect.innerHTML = "<option value=''>Select City</option>";

    if (selectedState === "Andhra Pradesh") {
        addCityOption(citySelect, "Visakhapatnam");
        addCityOption(citySelect, "Vijayawada");
        addCityOption(citySelect, "Guntur");
        addCityOption(citySelect, "Nellore");
        addCityOption(citySelect, "Tirupati");
    } else if (selectedState === "Arunachal Pradesh") {
        addCityOption(citySelect, "Itanagar");
        addCityOption(citySelect, "Tawang");
        addCityOption(citySelect, "Naharlagun");
        addCityOption(citySelect, "Bomdila");
        addCityOption(citySelect, "Roing");
    } else if (selectedState === "Kerala") {
        addCityOption(citySelect, "Thiruvananthapuram");
        addCityOption(citySelect, "Kannur");
        addCityOption(citySelect, "Kozhikode");
        addCityOption(citySelect, "Ernakulam");
        addCityOption(citySelect, "Thrissur");
        addCityOption(citySelect, "Kasargod");
        addCityOption(citySelect, "Malappuram");
        addCityOption(citySelect, "Vynad");
        addCityOption(citySelect, "Idukki");
        addCityOption(citySelect, "Alappuzha");
        addCityOption(citySelect, "Palakkad");
        addCityOption(citySelect, "Patanamthitta");
        addCityOption(citySelect, "Kollam");

    } else if (selectedState === "Assam") {
        addCityOption(citySelect, "Guwahati");
        addCityOption(citySelect, "Silchar");
        addCityOption(citySelect, "Dibrugarh");
        addCityOption(citySelect, "Jorhat");
        addCityOption(citySelect, "Tezpur");
    } else if (selectedState === "Bihar") {
        addCityOption(citySelect, "Patna");
        addCityOption(citySelect, "Gaya");
        addCityOption(citySelect, "Muzaffarpur");
        addCityOption(citySelect, "Bhagalpur");
        addCityOption(citySelect, "Darbhanga");
    } else if (selectedState === "Chhattisgarh") {
        addCityOption(citySelect, "Raipur");
        addCityOption(citySelect, "Bhilai");
        addCityOption(citySelect, "Bilaspur");
        addCityOption(citySelect, "Korba");
        addCityOption(citySelect, "Durg");
    } else if (selectedState === "Goa") {
        addCityOption(citySelect, "Panaji");
        addCityOption(citySelect, "Margao");
        addCityOption(citySelect, "Vasco da Gama");
        addCityOption(citySelect, "Mapusa");
        addCityOption(citySelect, "Ponda");
    } else if (selectedState === "Gujarat") {
        addCityOption(citySelect, "Ahmedabad");
        addCityOption(citySelect, "Surat");
        addCityOption(citySelect, "Vadodara");
        addCityOption(citySelect, "Rajkot");
        addCityOption(citySelect, "Gandhinagar");
    } else if (selectedState === "Haryana") {
        addCityOption(citySelect, "Faridabad");
        addCityOption(citySelect, "Gurgaon");
        addCityOption(citySelect, "Panipat");
        addCityOption(citySelect, "Ambala");
        addCityOption(citySelect, "Yamunanagar");
    } else if (selectedState === "Himachal Pradesh") {
        addCityOption(citySelect, "Shimla");
        addCityOption(citySelect, "Mandi");
        addCityOption(citySelect, "Solan");
        addCityOption(citySelect, "Dharamshala");
        addCityOption(citySelect, "Kullu");
    } else if (selectedState === "Jharkhand") {
        addCityOption(citySelect, "Ranchi");
        addCityOption(citySelect, "Jamshedpur");
        addCityOption(citySelect, "Dhanbad");
        addCityOption(citySelect, "Bokaro");
        addCityOption(citySelect, "Hazaribagh");
    } else if (selectedState === "Karnataka") {
        addCityOption(citySelect, "Bengaluru");
        addCityOption(citySelect, "Mysuru");
        addCityOption(citySelect, "Hubballi-Dharwad");
        addCityOption(citySelect, "Mangaluru");
        addCityOption(citySelect, "Belagavi");
    } else if (selectedState === "Madhya Pradesh") {
        addCityOption(citySelect, "Indore");
        addCityOption(citySelect, "Bhopal");
        addCityOption(citySelect, "Jabalpur");
        addCityOption(citySelect, "Gwalior");
        addCityOption(citySelect, "Ujjain");
    } else if (selectedState === "Maharashtra") {
        addCityOption(citySelect, "Mumbai");
        addCityOption(citySelect, "Pune");
        addCityOption(citySelect, "Nagpur");
        addCityOption(citySelect, "Nashik");
        addCityOption(citySelect, "Thane");
    } else if (selectedState === "Manipur") {
        addCityOption(citySelect, "Imphal");
        addCityOption(citySelect, "Thoubal");
        addCityOption(citySelect, "Bishnupur");
        addCityOption(citySelect, "Churachandpur");
        addCityOption(citySelect, "Ukhrul");
    } else if (selectedState === "Meghalaya") {
        addCityOption(citySelect, "Shillong");
        addCityOption(citySelect, "Tura");
        addCityOption(citySelect, "Jowai");
        addCityOption(citySelect, "Nongstoin");
        addCityOption(citySelect, "Williamnagar");
    } else if (selectedState === "Mizoram") {
        addCityOption(citySelect, "Aizawl");
        addCityOption(citySelect, "Lunglei");
        addCityOption(citySelect, "Saiha");
        addCityOption(citySelect, "Champhai");
        addCityOption(citySelect, "Kolasib");
    } else if (selectedState === "Nagaland") {
        addCityOption(citySelect, "Kohima");
        addCityOption(citySelect, "Dimapur");
        addCityOption(citySelect, "Mokokchung");
        addCityOption(citySelect, "Tuensang");
        addCityOption(citySelect, "Wokha");
    } else if (selectedState === "Odisha") {
        addCityOption(citySelect, "Bhubaneswar");
        addCityOption(citySelect, "Cuttack");
        addCityOption(citySelect, "Rourkela");
        addCityOption(citySelect, "Berhampur");
        addCityOption(citySelect, "Sambalpur");
    } else if (selectedState === "Punjab") {
        addCityOption(citySelect, "Ludhiana");
        addCityOption(citySelect, "Amritsar");
        addCityOption(citySelect, "Jalandhar");
        addCityOption(citySelect, "Patiala");
        addCityOption(citySelect, "Bathinda");
    } else if (selectedState === "Rajasthan") {
        addCityOption(citySelect, "Jaipur");
        addCityOption(citySelect, "Jodhpur");
        addCityOption(citySelect, "Udaipur");
        addCityOption(citySelect, "Kota");
        addCityOption(citySelect, "Ajmer");
    } else if (selectedState === "Sikkim") {
        addCityOption(citySelect, "Gangtok");
        addCityOption(citySelect, "Namchi");
        addCityOption(citySelect, "Gyalshing");
        addCityOption(citySelect, "Mangan");
        addCityOption(citySelect, "Rangpo");
    } else if (selectedState === "Tamil Nadu") {
        addCityOption(citySelect, "Chennai");
        addCityOption(citySelect, "Coimbatore");
        addCityOption(citySelect, "Madurai");
        addCityOption(citySelect, "Tiruchirappalli");
        addCityOption(citySelect, "Salem");
    }
}

function addCityOption(selectElement, cityName) {
    const option = document.createElement("option");
    option.text = cityName;
    option.value = cityName;
    selectElement.appendChild(option);
}
