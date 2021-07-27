if (!email || email.length < 1) return "noEmail";
if (!password || password.length < 1) return "noPassword";
if (!confirmPassword || confirmPassword.length < 1)
  return "noConfirmPassword ";

if (!validator.isEmail(email)) return setAlert("formatEmail");
if (password.length < 8) return setAlert("ShortPassword");
if (confirmPassword.length < 8) return setAlert("shortConfirmPassword");

if (password !== confirmPassword)
  return setAlert("misMatchConfirmPassword");
  setAlert('creating')

const ALERTS={
    noEmail:{
        title:'Missing email'

    },
    noPassword:{
        title:'Missing password'

    },
    noConfirmPassword:{
        title:'Missing confirm password'

    },
    formatEmail:{
        title:'Invalid email'

    },
    ShortPassword:{
        title:'Password too short'

    },
    shortConfirmPassword:{
        title:'Confirm password too short'

    },
    misMatchConfirmPassword:{
        title:'Confirm password does not match'

    },
    creating:{
        title:'Creating Account'

    }

}