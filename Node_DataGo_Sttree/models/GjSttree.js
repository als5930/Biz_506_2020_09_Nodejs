import mongoose from "mongoose";
const gjSchema = mongoose.Schema({
  STTREESTRET_NAME: String,
  STARTLAT_ITUDE: String,
  ENDLONG_ITUDE: String,
  STTREE_KND: String,
});
export default mongoose.model("tbl_gjsttree", gjSchema);
