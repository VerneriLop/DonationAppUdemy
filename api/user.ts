import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import store from '../redux/store';
import {updateToken} from '../redux/reducers/User';

type CreateUserSuccess = {
  status: true;
  userCredential: FirebaseAuthTypes.UserCredential;
};

type CreateUserFailure = {
  status: false;
  error: string;
};

type CreateUserResponse = CreateUserSuccess | CreateUserFailure;

type LoginSuccess = {
  status: true;
  data: {
    displayName: string | null;
    email: string | null;
    token: string;
  };
};

type LoginFailure = {
  status: false;
  error: string;
};

type LoginResponse = LoginSuccess | LoginFailure;

export const createUser = async (
  fullName: string,
  email: string,
  password: string,
): Promise<CreateUserResponse> => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return {
      status: true,
      userCredential: user,
    };
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      return {status: false, error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {status: false, error: 'Please enter a valid email address.'};
    }
    return {status: false, error: 'Something went wrong with your request.'};
  }
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
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

export const logOut = async () => {
  await auth().signOut();
};

export const checkToken = async () => {
  try {
    let currentUser = auth().currentUser;
    if (currentUser) {
      let response = await currentUser.getIdToken(true);
      //console.log('We are updating token for you');
      store.dispatch(updateToken(response));
      return response;
    }
  } catch (error) {
    return error;
  }
};
