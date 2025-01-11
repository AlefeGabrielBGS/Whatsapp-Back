import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true } // Adiciona `createdAt` e `updatedAt`
);

UserSchema.methods.getPublicProfile = function () {
  const { name, email } = this.toObject();
  return { name, email };
};

export const User = mongoose.model('User', UserSchema);
