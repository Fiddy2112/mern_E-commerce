const mongoose = require("mongoose"); // Erase if already required
const Schema = mongoose.Schema;
const argon2 = require("argon2");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    address: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Address",
      },
    ],
    cart: {
      type: Array,
      default: [],
    },
    wishlist: [{ type: mongoose.Types.ObjectId, ref: "Product" }],
    isBlocked: { type: Boolean, default: false },
    refreshToken: {
      type: String,
    },
    passwordChanged: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Pre middleware functions are executed one after another, when each middleware calls 'next'.
//In Schema can't using arrow func to call this, so we need using function()
userSchema.pre("save", async function (next) {
  try {
    // if password change -> true
    if (this.isModified("password")) {
      const hashPassword = await argon2.hash(this.password);
      this.password = hashPassword;
    }
    next();
  } catch (err) {
    console.log(err);
  }
});

//Export the model
module.exports = mongoose.model("Users", userSchema);
