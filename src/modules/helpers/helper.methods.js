exports.isExist = async (value, doc) => 
{ const user = await doc.findOne({ _id: value}).select("-password")
 if(user) {
     return {
         success: true, record: user, code: 200 
        };
 } else { return { success: false, code: 404, error: "User not found" }; } }