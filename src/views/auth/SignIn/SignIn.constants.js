export const ALERTS={
    noEmail:{
        title:'Missing email',
        description: 'Email address is required in order to create account',

    },
    noPassword:{
        title:'Missing password',
        description: 'Password is required in order to create account',

    },
    formatEmail:{
        title:'Invalid email',
        description: 
        'Email value does not match standard email formatting. Correct any typos or mistakes.',
    },
    ShortPassword:{
        title:'Password too short',
        description:
          'For security purposes passwords can not be shorted than 8 characters',

    },
    noAccount:{
        title:'Invalid details',
        description:
          'Either the account does not exist or you entered an incorrect password. Please  try again.',

    },
    
    checking:{
        title:'Checking details',
        nature: 'resolving'

    },
    technical: {
        nature: 'error',
        title: 'Technical error',
        description: 'Something went wrong our side. Please try again later.'

    },
    notVerified: {
        nature: 'error',
        title: 'Email not verified',
        description: 'An Account for this email has been created, but the email has not been verified yet. Please check your inbox and spam folder.'

    }

};