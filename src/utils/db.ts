import mongoose from 'mongoose'

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    throw Error('Connection Failed!')
  }
}

export default connect
