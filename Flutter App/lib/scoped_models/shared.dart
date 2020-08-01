import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'package:parallax/models/user.dart';

SharedPreferences pref;

class Shared {
  static void setUserData(User user) {
    if (pref != null) {
      pref.setString('userDetails', jsonEncode(user.toJson()));
      print("User Details Set!");
    } else {
      print("Error saving user details!");
    }
  }

  static Future<User> getUserDetails() async {
    if (pref != null) {
      // return jsonDecode(pref.getString('userDetails'));
      return User.fromJson(jsonDecode(pref.getString('userDetails')));
    } else {
      print("Error getting user details");
      return null;
    }
  }

  static void initialize() async {
    //SharedPreferences.setMockInitialValues({});
    if (pref == null) {
      pref = await SharedPreferences.getInstance();
      print("Shared preferences initialized!");
    } else {
      return;
    }
  }
}
