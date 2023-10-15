module.exports = {
  apps: [{
    name: 'xharktank',
    script: 'bin/www',
    instances: 1,
    autorestart: true,
    watch: false,
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log',
    time: true,
    env: {
      PORT: 8081,
      NODE_ENV: 'production',
      DB_URL: "mongodb://localhost:27017/xharktank",
    },
  }],
};
