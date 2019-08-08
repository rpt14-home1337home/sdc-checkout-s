// import React from 'react';
// import FacebookLoginButton from 'react-facebook-login';

// class FacebookLogin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
//   }

//   handleFacebookLogin(res) {
//     console.log(res);
//   }

//   render() {
//     return (
//       <div id="facebook-modal-container">
//         <div id="facebook-modal-table">
//           <div id="facebook-modal-cell">
//             <div id="facebook-container">
//               <section id="facebook-spacing">
//                 <div id="facebook-spacing-bottom">
//                   <button id="facebook-close">
//                     <svg id="facebook-close-arrow"></svg>
//                   </button>
//                 </div>
//                 <section>
//                   <div id="login-spacing-bottom">
//                     <h2 id="facebook-login-noti">Log in to continue</h2>
//                   </div>
//                 </section>
//                 <FacebookLoginButton
//                   appId='296422504356686'
//                   autoLoad={true}
//                   fields='name,email,picture'
//                   callback={this.handleFacebookLogin}
//                   scope='email,user_friends'
//                   textButton='Log in with Facebook'
//                   icon={"fa-facebook" }
//                   cssClass="facebook-btn"
//                 />
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default FacebookLogin;