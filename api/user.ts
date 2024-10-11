import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
): Promise<FirebaseAuthTypes.UserCredential | {error: string}> => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address.'};
    }
    return {error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    const token = await response.user.getIdToken();
    return {
      status: true,
      data: {
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      },
    };
  } catch (error: any) {
    if (
      error.code === 'auth/wrong-password' ||
      error.code === 'auth/user-not-found' ||
      error.code === 'auth/invalid-credential'
    ) {
      return {status: false, error: 'Wrong email or password'};
    } else if (error.code === 'auth/too-many-requests') {
      return {
        status: false,
        error: 'Too many failed attempts. Please try again later.',
      };
    }
    return {status: false, error: 'Something went wrong'};
  }
};
