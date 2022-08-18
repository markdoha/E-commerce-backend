// importing client model
const client = require("../modules/user/model");

exports.isExist = async (value) => {
  const user = await client.findOne({ _id: value }).select("-password");
  if (user) {
    return {
      success: true,
      record: user,
      code: 200,
    };
  } else {
    return { success: false, code: 404, error: "User already exists" };
  }
};
