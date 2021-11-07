import firebase from 'firebase';
import "firebase/auth";
  
export const login = async({email, password})=>{
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    return res.user;
}
