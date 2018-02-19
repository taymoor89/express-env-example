module.exports = {
  get: (key) => {
    const NODE_ENV = process.env.NODE_ENV || 'development';
    return process.env[`${NODE_ENV}_${key}`];
  }
}