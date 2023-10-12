import mongoose from 'mongoose'

const connect = async () => {
  try {
    const mongoURI = process.env.MONGO || 'default-mongodb-uri'
    await mongoose.connect(mongoURI)
  } catch (error) {
    throw Error('Connection Failed!')
  }
}

export default connect
