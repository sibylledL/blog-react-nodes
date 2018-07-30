import passport from 'passport'
import { Admin } from "../src/models/admin"
import LocalStrategy from 'passport-local';
import { devConfig } from './env/dev';
import PassportJWT from 'passport-jwt';

passport.serializeUser(function(admin, done){
  done(null, admin.id);
});

passport.deserializeUser(function(id, done){
  Admin.findById(id, function(err, admin){
    done(err, admin);
  })
});

passport.use('local-signup', new LocalStrategy({
  usernameField : "pseudo",
  passwordField : "password",
  passReqToCallback: true
}, function(req, pseudo, password, done){
  Admin.findOne({'name':name}, function(err, admin){
    if(err){
      return done(err);
    }
    if(admin){
      return done(null, false, {message:'name is already in use'});
    }
    var newAdmin = new Admin();
    newAdmin.pseudo = pseudo;
    newAdmin.password = password;
    newAdmin.save(function(err, result){
      if(err){
        return done(err)
      }
      return done(null, newAdmin);
    });
  });
}));


passport.use('local-signin', new LocalStrategy({
  usernameField:'pseudo',
  passwordField:'password',
  passReqToCallback: true
}, function(req, pseudo, password, done){
  Admin.findOne({'pseudo':pseudo}, function(err, admin){
    if(err){
      return done(err);
    }
    if(!admin){
      return done(null, false, {message:'no admin found'});
    }


    return done(null, admin);
    });
}));
