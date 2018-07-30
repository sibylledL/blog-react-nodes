// import Passport from 'passport';
// import PassportJWT from 'passport-jwt';
// import { devConfig } from './env/dev';
// import Admin from '../src/models/admin';
//
// export const configJWTStrategy =()=>{
//   const opts ={
//     jwtFromRequest:PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey:devConfig.secret,
//   };
//
//   Passport.use(
//     new PassportJWT.Strategy(opts, (payload,done)=>{
//       Admin.findOne({_id:payload.id}, (err, admin)=>{
//         if(err){
//           return done(err)
//         }
//         if(admin){
//           return done(null,admin)
//         }
//         return done(null, false);
//       })
//     })
//   );
// };
